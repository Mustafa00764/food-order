import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Star } from 'lucide-react'
import { AddToCart } from "./add-to-cart"
import { ReviewForm } from "./review-form"
import { Reviews } from "./reviews"

export default function ProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = products.find((p) => p.id === id)
  if (!product) notFound()

  return (
    <div className="pb-20">
      <div className="relative h-[300px]">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{product.description}</p>
        <div className="aspect-video rounded-lg overflow-hidden">
          <video
            src={product.videoUrl}
            controls
            className="w-full h-full object-cover"
          />
        </div>
        <AddToCart product={product} />
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <ReviewForm productId={product.id} />
          <Reviews productId={product.id} />
        </div>
      </div>
    </div>
  )
}

