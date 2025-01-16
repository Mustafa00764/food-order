'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/data"

export function RecommendedProducts() {
  const recommendedProducts = products.filter(product => product.rating >= 4.5).slice(0, 10)

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Recommended for You</h2>
      <ScrollArea>
        <div className="flex space-x-4 pb-4">
          {recommendedProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="w-64 flex-shrink-0">
                <CardContent className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={256}
                    height={144}
                    className="w-full h-36 object-cover rounded-t-lg"
                  />
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold truncate">{product.name}</h3>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {product.rating.toFixed(1)}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="truncate">{product.restaurant.name}</span>
                      <span className="mx-2">•</span>
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

