'use client'

import { register } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Register() {
  const router = useRouter()
  const [error, setError] = useState('')

  async function handleSubmit(formData: FormData) {
    const result = await register(formData)
    if (result.success) {
      router.push('/')
    } else {
      setError(result.error || 'An error occurred')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">Sign up to get started</p>
        </div>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              name="name"
              placeholder="Full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

