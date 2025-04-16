"use client"

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

export default function ProductShowcase() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const products = [
    {
      id: 1,
      name: "Handcrafted Leather Bag",
      price: 2500,
      image: "/placeholder.svg?height=300&width=300",
      category: "Fashion",
      badge: "Trending",
    },
    {
      id: 2,
      name: "Bengali Typography Poster",
      price: 850,
      image: "/placeholder.svg?height=300&width=300",
      category: "Art",
    },
    {
      id: 3,
      name: "Dhaka City Phone Case",
      price: 650,
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      badge: "New",
    },
    {
      id: 4,
      name: "Handwoven Jamdani Scarf",
      price: 1800,
      image: "/placeholder.svg?height=300&width=300",
      category: "Fashion",
    },
  ]

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Trending Products</h2>
          <p className="text-muted-foreground">Discover unique products from Bangladeshi designers and artisans</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/store">View All Products</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <div className="relative overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.badge && <Badge className="absolute top-3 right-3">{product.badge}</Badge>}
            </div>
            <CardHeader className="p-4 pb-0">
              <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 pt-2 flex justify-between items-center">
              <div className="font-bold">৳{product.price}</div>
              <Button size="sm" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
