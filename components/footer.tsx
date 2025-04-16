import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary mb-4 inline-block">
              AllyGo
            </Link>
            <p className="text-muted-foreground mb-4">
              Your ultimate companion for exploring, shopping, learning, and connecting in Bangladesh.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-muted-foreground hover:text-foreground transition-colors">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/students" className="text-muted-foreground hover:text-foreground transition-colors">
                  Student Resources
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/travel" className="text-muted-foreground hover:text-foreground transition-colors">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                <a
                  href="mailto:allygo@outlook.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  allygo@outlook.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Gulshan, Dhaka,
                  <br />
                  Bangladesh
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Download Our App</h3>
            <p className="text-muted-foreground mb-4">Get the AllyGo mobile app for a better experience on the go.</p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="#">
                  <img src="/placeholder.svg?height=20&width=20" alt="Google Play" className="h-5 w-5 mr-2" />
                  Google Play
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="#">
                  <img src="/placeholder.svg?height=20&width=20" alt="App Store" className="h-5 w-5 mr-2" />
                  App Store
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} AllyGo. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
