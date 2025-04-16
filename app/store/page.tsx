"use client"

import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

export default function StorePage() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const categories = ["All", "Fashion", "Art", "Accessories", "Home Decor", "Books", "Crafts"]

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
    {
      id: 5,
      name: "Terracotta Wall Art",
      price: 1200,
      image: "/placeholder.svg?height=300&width=300",
      category: "Home Decor",
    },
    {
      id: 6,
      name: "Handmade Jute Bag",
      price: 950,
      image: "/placeholder.svg?height=300&width=300",
      category: "Fashion",
    },
    {
      id: 7,
      name: "Wooden Rickshaw Model",
      price: 1500,
      image: "/placeholder.svg?height=300&width=300",
      category: "Crafts",
      badge: "Limited",
    },
    {
      id: 8,
      name: "Bengali Literature Collection",
      price: 1800,
      image: "/placeholder.svg?height=300&width=300",
      category: "Books",
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">AllyGo Store</h1>
          <p className="text-muted-foreground">
            Discover unique products from talented Bangladeshi designers and artisans
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Link href="/cart">
            <Button variant="outline" size="sm" className="flex items-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="flex flex-wrap h-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((product) => category === "All" || product.category === category)
                .map((product) => (
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
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
