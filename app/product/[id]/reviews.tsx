import { products } from "@/lib/data"
import { Star } from 'lucide-react'

export function Reviews({ productId }: { productId: string }) {
  const product = products.find(p => p.id === productId)
  if (!product) return null

  return (
    <div className="space-y-4">
      {product.reviews.map((review) => (
        <div key={review.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">{review.userName}</span>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1">{review.rating}</span>
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}

