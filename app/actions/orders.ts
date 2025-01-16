'use server'

import { cookies } from 'next/headers'
import { Order } from '@/types'

const orders: Order[] = []

export async function createOrder(formData: FormData) {
  const items = JSON.parse(formData.get('items') as string)
  const total = parseFloat(formData.get('total') as string)
  
  const userCookie = cookies().get('user')
  if (!userCookie) return { success: false, error: 'Not authenticated' }
  
  const user = JSON.parse(userCookie.value)
  
  const order: Order = {
    id: Math.random().toString(),
    userId: user.id,
    items,
    total,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  
  orders.push(order)
  return { success: true, orderId: order.id }
}

export async function getUserOrders() {
  const userCookie = cookies().get('user')
  if (!userCookie) return []
  
  const user = JSON.parse(userCookie.value)
  return orders.filter(order => order.userId === user.id)
}

