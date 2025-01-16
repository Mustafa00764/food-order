'use client'

import { logout } from "@/app/actions/auth"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { User } from 'lucide-react'

export default function Profile() {
  const router = useRouter()

  async function handleLogout() {
    await logout()
    router.push('/login')
  }

  return (
    <main className="pb-20">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <Card className="p-4 flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-gray-500" />
          </div>
          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </Card>
        <div className="space-y-2">
          <Link href="/profile/edit">
            <Button variant="outline" className="w-full justify-start">
              Edit Profile
            </Button>
          </Link>
          <Link href="/profile/orders">
            <Button variant="outline" className="w-full justify-start">
              Order History
            </Button>
          </Link>
        </div>
      </div>
      <Navigation />
    </main>
  )
}

