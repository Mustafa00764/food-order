import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronRight, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/data"
import { SwipeableBanner } from "@/components/swipeable-banner"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { RecommendedProducts } from "@/components/recommended-products"

const categories = [
  { name: "All", image: "/placeholder.svg?height=80&width=80" },
  { name: "Pizza", image: "/placeholder.svg?height=80&width=80" },
  { name: "Burgers", image: "/placeholder.svg?height=80&width=80" },
  { name: "Sushi", image: "/placeholder.svg?height=80&width=80" },
  { name: "Asian", image: "/placeholder.svg?height=80&width=80" },
  { name: "Desserts", image: "/placeholder.svg?height=80&width=80" },
]

const banners = [
  { id: 1, image: "/placeholder.svg?height=200&width=400", alt: "Special Offer 1" },
  { id: 2, image: "data:image/jpeg;base64,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", alt: "Special Offer 2" },
  { id: 3, image: "/placeholder.svg?height=200&width=400", alt: "Special Offer 3" },
]

export default function Home() {
  return (
    <main className="pb-20">
      <Header />
      <div className="p-4 space-y-6">
        <SearchBar />
        <SwipeableBanner banners={banners} />

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Hungry?</h1>
          <p className="text-muted-foreground">Order food from our best restaurants</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Categories</h2>
            <Link href="/category/All">
              <Button variant="ghost" className="text-sm">
                See all
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {categories.map((category) => (
                <Link key={category.name} href={`/category/${encodeURIComponent(category.name)}`}>
                  <Card className="min-w-[100px]">
                    <CardContent className="p-3 flex flex-col items-center space-y-2">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <span className="text-sm font-medium">{category.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <RecommendedProducts />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Popular Dishes</h2>
            <Link href="/category/All">
              <Button variant="ghost" className="text-sm">
                See all
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
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
      </div>
      <Navigation />
    </main>
  )
}

