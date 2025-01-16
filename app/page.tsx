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
  { id: 2, image: "/placeholder.svg?height=200&width=400", alt: "Special Offer 2" },
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

        <RecommendedProducts />

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

