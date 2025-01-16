"use client"

import { Home, Search, ShoppingBag, User } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex justify-around p-2">
        <Link
          href="/"
          className={`p-2 rounded-lg ${
            pathname === "/" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Home className="w-6 h-6" />
        </Link>
        <Link
          href="/search"
          className={`p-2 rounded-lg ${
            pathname === "/search" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Search className="w-6 h-6" />
        </Link>
        <Link
          href="/cart"
          className={`p-2 rounded-lg ${
            pathname === "/cart" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <ShoppingBag className="w-6 h-6" />
        </Link>
        <Link
          href="/profile"
          className={`p-2 rounded-lg ${
            pathname === "/profile" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <User className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  )
}

