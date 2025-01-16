'use client'

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { products } from "@/lib/data"
import Image from "next/image"
import { useEffect, useState } from "react"
import { createOrder } from "../actions/orders"
import { useRouter } from "next/navigation"

interface CartItem {
  productId: string
  quantity: number
  price: number
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const router = useRouter()

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(savedCart)
  }, [])

  function updateQuantity(productId: string, newQuantity: number) {
    const newCart = cart.map(item =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, newQuantity) }
        : item
    )
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const cartItems = cart.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId)!
  }))

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  )

  async function handleCheckout(formData: FormData) {
    formData.append('items', JSON.stringify(cart))
    formData.append('total', total.toString())
    
    const result = await createOrder(formData)
    if (result.success) {
      localStorage.removeItem('cart')
      router.push('/profile')
    }
  }

  return (
    <main className="pb-20">
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        {cartItems.length > 0 ? (
          <Card>
            <CardContent className="divide-y">
              {cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 py-4 first:pt-0 last:pb-0"
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {product.restaurant.name}
                    </p>
                    <p className="text-sm font-medium">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                    >
                      -
                    </Button>
                    <span>{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between p-4 border-t">
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-lg font-semibold">
                  ${total.toFixed(2)}
                </p>
              </div>
              <form action={handleCheckout}>
                <Button type="submit">Checkout</Button>
              </form>
            </CardFooter>
          </Card>
        ) : (
          <p className="text-center text-muted-foreground py-8">
            Your cart is empty
          </p>
        )}
      </div>
      <Navigation />
    </main>
  )
}

