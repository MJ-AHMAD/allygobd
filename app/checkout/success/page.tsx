"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const { items } = useCart()

  // Redirect if no items were in cart (user might have navigated directly to this page)
  useEffect(() => {
    if (items.length > 0) {
      router.push("/cart")
    }
  }, [items.length, router])

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Order Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>Thank you for your order. We've received your order and will begin processing it right away.</p>
          <p>
            You will receive an email confirmation with your order details and tracking information once your order
            ships.
          </p>
          <div className="bg-muted p-4 rounded-md mt-4">
            <p className="font-medium">Order Number</p>
            <p className="text-lg font-bold">#BD{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/store">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
