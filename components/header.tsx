import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Food Delivery Logo"
          width={40}
          height={40}
        />
      </Link>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link href="/profile">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>
    </header>
  )
}

