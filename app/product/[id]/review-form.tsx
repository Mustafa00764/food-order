'use client'

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from 'lucide-react'
import { useState } from "react"
import { addReview } from "@/app/actions/products"
import { useRouter } from "next/navigation"

export function ReviewForm({ productId }: { productId: string }) {
  const [rating, setRating] = useState(0)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    await addReview(productId, formData)
    router.refresh()
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setRating(value)}
            className="focus:outline-none"
          >
            <Star
              className={`w-6 h-6 ${
                value <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
      <input type="hidden" name="rating" value={rating} />
      <Textarea
        name="comment"
        placeholder="Write your review..."
        required
      />
      <Button type="submit">Submit Review</Button>
    </form>
  )
}

