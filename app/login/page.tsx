'use client'

import { login } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')

  async function handleSubmit(formData: FormData) {
    const result = await login(formData)
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
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground">Login to your account</p>
        </div>
        <form action={handleSubmit} className="space-y-4">
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
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

