import { Product, Restaurant } from "@/types"

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Palace",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Italian",
    deliveryTime: "25-35",
    minOrder: 15,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Burger House",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "American",
    deliveryTime: "20-30",
    minOrder: 12,
    rating: 4.3,
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/pizza-video.mp4",
    category: "Pizza",
    rating: 4.5,
    restaurant: restaurants[0],
    reviews: [
      {
        id: "1",
        userId: "1",
        userName: "John Doe",
        rating: 5,
        comment: "Best pizza ever!",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "2",
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: 9.99,
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/burger-video.mp4",
    category: "Burgers",
    rating: 4.3,
    restaurant: restaurants[1],
    reviews: [],
  },
]

