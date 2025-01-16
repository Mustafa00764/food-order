'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function EditProfile() {
  const router = useRouter()
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")
  const [phone, setPhone] = useState("+1234567890")
  const [image, setImage] = useState("/placeholder.svg?height=200&width=200")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated profile data to your backend
    console.log("Profile updated:", { name, email, phone, image })
    router.push('/profile')
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <main className="pb-20">
      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <Link href="/profile" className="text-muted-foreground">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={image || "/placeholder.svg"}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Label htmlFor="profile-image" className="cursor-pointer text-primary">
              Change Profile Picture
            </Label>
            <Input
              id="profile-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </div>
    </main>
  )
}

