'use client'

import { Input } from "@/components/ui/input"
import { SearchIcon } from 'lucide-react'
import { useState } from "react"
import { useRouter } from 'next/navigation'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        className="pl-9 bg-background"
        placeholder="Search for restaurants or dishes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

