'use client'

import { Navigation } from "@/components/navigation"
import { Input } from "@/components/ui/input"
import { SearchIcon } from 'lucide-react'
import { useState, useEffect } from "react"
import { searchProducts } from "../actions/products"
import { Product } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { useSearchParams } from 'next/navigation'

export default function Search() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<Product[]>([])

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2) {
        const products = await searchProducts(query)
        setResults(products)
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  return (
    <main className="pb-20">
      <Header />
      <div className="p-4 space-y-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search for restaurants or dishes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="space-y-4">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="flex items-center space-x-4 p-4 border rounded-lg"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.restaurant.name}
                </p>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Navigation />
    </main>
  )
}

