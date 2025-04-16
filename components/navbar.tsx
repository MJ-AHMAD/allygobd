"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              AllyGo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/store" className="text-sm font-medium hover:text-primary">
              Store
            </Link>
            <Link href="/students" className="text-sm font-medium hover:text-primary">
              Students
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary">
              Community
            </Link>
            <Link href="/travel" className="text-sm font-medium hover:text-primary">
              Travel
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {itemCount}
                  </Badge>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <ModeToggle />
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="hidden md:flex">Join Now</Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/store"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </Link>
            <Link
              href="/students"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Students
            </Link>
            <Link
              href="/community"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/travel"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Travel
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline">Sign In</Button>
              <Button>Join Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
