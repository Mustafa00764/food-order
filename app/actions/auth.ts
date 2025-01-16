'use server'

import { cookies } from 'next/headers'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // In a real app, you would validate credentials against a database
  if (email === 'user@example.com' && password === 'password') {
    cookies().set('user', JSON.stringify({
      id: '1',
      name: 'John Doe',
      email: 'user@example.com'
    }))
    return { success: true }
  }

  return { success: false, error: 'Invalid credentials' }
}

export async function register(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string

  // In a real app, you would create a new user in the database
  cookies().set('user', JSON.stringify({
    id: '1',
    name,
    email
  }))

  return { success: true }
}

export async function logout() {
  cookies().delete('user')
  return { success: true }
}

