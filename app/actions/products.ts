'use server'

import { products } from '@/lib/data'
import { revalidatePath } from 'next/cache'
import { Product } from '@/types'

export async function addReview(productId: string, formData: FormData) {
  const rating = parseInt(formData.get('rating') as string)
  const comment = formData.get('comment') as string

  const product = products.find(p => p.id === productId)
  if (!product) return { success: false, error: 'Product not found' }

  product.reviews.push({
    id: Math.random().toString(),
    userId: '1', // In a real app, this would be the actual user ID
    userName: 'John Doe', // In a real app, this would be the actual user name
    rating,
    comment,
    createdAt: new Date().toISOString()
  })

  // Update the product's overall rating
  const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0)
  product.rating = totalRating / product.reviews.length

  revalidatePath(`/product/${productId}`)
  return { success: true }
}

export async function searchProducts(query: string): Promise<Product[]> {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.restaurant.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  )
}

