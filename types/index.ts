export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  videoUrl: string
  category: string
  rating: number
  reviews: Review[]
  restaurant: Restaurant
}

export interface Review {
  id: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: string
}

export interface Restaurant {
  id: string
  name: string
  image: string
  cuisine: string
  deliveryTime: string
  minOrder: number
  rating: number
}

export interface User {
  id: string
  name: string
  email: string
  image?: string
  orders: Order[]
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'processing' | 'delivered'
  createdAt: string
}

export interface OrderItem {
  productId: string
  quantity: number
  price: number
}

