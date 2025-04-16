import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star } from "lucide-react"
import Link from "next/link"

export default function TravelSection() {
  const destinations = [
    {
      name: "Cox's Bazar",
      location: "Chittagong Division",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.8,
      tags: ["Beach", "Popular"],
    },
    {
      name: "Sundarbans",
      location: "Khulna Division",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.9,
      tags: ["Nature", "Wildlife"],
    },
    {
      name: "Sajek Valley",
      location: "Rangamati",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
      tags: ["Mountains", "Scenic"],
    },
  ]

  const upcomingTrips = [
    {
      title: "Weekend at Saint Martin",
      date: "May 15-17, 2024",
      participants: 8,
      spotsLeft: 4,
    },
    {
      title: "Exploring Sylhet Tea Gardens",
      date: "June 5-8, 2024",
      participants: 12,
      spotsLeft: 2,
    },
  ]

  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Solo Traveler's Hub</h2>
          <p className="text-muted-foreground max-w-2xl">
            Resources, guides, and communities for solo travelers exploring Bangladesh.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/travel">Explore Travel Resources</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {destinations.map((destination, index) => (
          <Card key={index} className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/60 text-white px-2 py-1 rounded-full text-sm">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{destination.rating}</span>
              </div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{destination.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {destination.location}
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-1">
                  {destination.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Travel Guide
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted/30 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Upcoming Group Trips</h3>
        <p className="text-muted-foreground mb-6">Join other solo travelers on these upcoming group adventures.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingTrips.map((trip, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{trip.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {trip.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {trip.participants} participants • {trip.spotsLeft} spots left
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Trip</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button asChild variant="outline">
            <Link href="/travel/trips">View All Trips</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
