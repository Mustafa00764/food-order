import { getUserOrders } from "@/app/actions/orders"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft } from 'lucide-react'

export default async function OrderHistory() {
  const orders = await getUserOrders()

  return (
    <main className="pb-20">
      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <Link href="/profile" className="text-muted-foreground">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold">Order History</h1>
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Order #{order.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {order.status}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Navigation />
    </main>
  )
}

