'use client'

import { Button } from "@/components/ui/button"
import { Product } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function AddToCart({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find((item: any) => item.productId === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({
        productId: product.id,
        quantity,
        price: product.price
      })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    router.push('/cart')
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </Button>
      </div>
      <Button onClick={addToCart}>
        Add to Cart - ${(product.price * quantity).toFixed(2)}
      </Button>
    </div>
  )
}

