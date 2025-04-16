import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, BookOpen, Users, Map, Ticket, Coffee } from "lucide-react"
import Link from "next/link"

export default function FeaturedServices() {
  const services = [
    {
      title: "Shop Local",
      description: "Discover unique products from Bangladeshi designers and artisans.",
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      link: "/store",
    },
    {
      title: "Student Resources",
      description: "Access tools and resources designed for students in Bangladesh.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "/students",
    },
    {
      title: "Community",
      description: "Connect with like-minded youth and collaborate on projects.",
      icon: <Users className="h-10 w-10 text-primary" />,
      link: "/community",
    },
    {
      title: "Solo Travel",
      description: "Resources and guides for solo travelers exploring Bangladesh.",
      icon: <Map className="h-10 w-10 text-primary" />,
      link: "/travel",
    },
    {
      title: "Events",
      description: "Discover and attend youth-focused events across Bangladesh.",
      icon: <Ticket className="h-10 w-10 text-primary" />,
      link: "/events",
    },
    {
      title: "Hangout Spots",
      description: "Find popular cafes and hangout spots for young people.",
      icon: <Coffee className="h-10 w-10 text-primary" />,
      link: "/hangouts",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover all the ways AllyGo can enhance your experience as a young person in Bangladesh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={service.link}>Explore</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
