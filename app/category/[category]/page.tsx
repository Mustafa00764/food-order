import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronRight, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/data"
import { Header } from "@/components/header"

const categories = [
  "All",
  "Pizza",
  "Burgers",
  "Sushi",
  "Asian",
  "Desserts",
]

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category)
  const filteredProducts = category === "All" 
    ? products 
    : products.filter(product => product.category === category)

  return (
    <main className="pb-20">
      <Header />
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold">{category}</h1>

        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {categories.map((cat) => (
              <Link key={cat} href={`/category/${encodeURIComponent(cat)}`}>
                <Button 
                  variant={cat === category ? "default" : "outline"}
                  className="whitespace-nowrap"
                >
                  {cat}
                </Button>
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card>
                <CardContent className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{product.name}</h3>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {product.rating.toFixed(1)}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{product.restaurant.name}</span>
                      <span className="mx-2">•</span>
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Navigation />
    </main>
  )
}

