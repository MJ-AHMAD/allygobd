import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, Map, Compass, Shield, Info } from "lucide-react"
import Link from "next/link"

export default function TravelPage() {
  const destinations = [
    {
      name: "Cox's Bazar",
      location: "Chittagong Division",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.8,
      tags: ["Beach", "Popular"],
      description: "The longest natural sea beach in the world, stretching 120 kilometers along the Bay of Bengal.",
    },
    {
      name: "Sundarbans",
      location: "Khulna Division",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.9,
      tags: ["Nature", "Wildlife"],
      description: "The largest mangrove forest in the world and home to the famous Bengal tiger.",
    },
    {
      name: "Sajek Valley",
      location: "Rangamati",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
      tags: ["Mountains", "Scenic"],
      description: "A beautiful hill station known for its panoramic views and indigenous culture.",
    },
    {
      name: "Saint Martin's Island",
      location: "Bay of Bengal",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.6,
      tags: ["Island", "Beach"],
      description: "Bangladesh's only coral island with crystal clear waters and beautiful marine life.",
    },
    {
      name: "Sylhet Tea Gardens",
      location: "Sylhet Division",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.5,
      tags: ["Nature", "Scenic"],
      description: "Lush green tea gardens stretching across rolling hills and valleys.",
    },
    {
      name: "Ratargul Swamp Forest",
      location: "Sylhet Division",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.4,
      tags: ["Nature", "Unique"],
      description: "A freshwater swamp forest that offers boat rides through its mystical waterways.",
    },
  ]

  const upcomingTrips = [
    {
      title: "Weekend at Saint Martin",
      date: "May 15-17, 2024",
      participants: 8,
      spotsLeft: 4,
      price: 12000,
    },
    {
      title: "Exploring Sylhet Tea Gardens",
      date: "June 5-8, 2024",
      participants: 12,
      spotsLeft: 2,
      price: 15000,
    },
    {
      title: "Sundarbans Adventure",
      date: "July 10-13, 2024",
      participants: 10,
      spotsLeft: 5,
      price: 18000,
    },
  ]

  const soloTravelTips = [
    {
      title: "Safety First",
      description:
        "Research your destination, share your itinerary with someone you trust, and stay aware of your surroundings.",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
    {
      title: "Pack Light",
      description: "Travel with just the essentials to stay mobile and avoid drawing attention with large bags.",
      icon: <Compass className="h-8 w-8 text-primary" />,
    },
    {
      title: "Stay Connected",
      description: "Keep a local SIM card or portable WiFi device to stay connected with family and friends.",
      icon: <Info className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Solo Traveler's Hub</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Resources, guides, and communities for solo travelers exploring the beauty of Bangladesh.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <CardContent>
                <p className="text-sm text-muted-foreground">{destination.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Travel Guide
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Group Trips</h2>
          <Button asChild variant="outline">
            <Link href="/travel/trips">View All Trips</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingTrips.map((trip, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{trip.title}</CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {trip.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  {trip.participants} participants • {trip.spotsLeft} spots left
                </div>
                <div className="text-lg font-bold">৳{trip.price}</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Trip</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Solo Travel Tips</CardTitle>
            <CardDescription>Essential advice for traveling alone in Bangladesh</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {soloTravelTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div>{tip.icon}</div>
                  <div>
                    <h3 className="font-medium mb-1">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Find Travel Buddies</CardTitle>
            <CardDescription>Connect with other solo travelers for shared experiences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Traveling alone doesn't mean you have to be lonely. Connect with other travelers who share your interests
              and destinations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Cox's Bazar Group</h4>
                    <p className="text-xs text-muted-foreground">15 travelers</p>
                  </div>
                </div>
                <Button size="sm">Join</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sylhet Explorers</h4>
                    <p className="text-xs text-muted-foreground">8 travelers</p>
                  </div>
                </div>
                <Button size="sm">Join</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Weekend Travelers</h4>
                    <p className="text-xs text-muted-foreground">23 travelers</p>
                  </div>
                </div>
                <Button size="sm">Join</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Groups
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Travel Resources</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Access guides, maps, and tools to help you plan your solo adventures in Bangladesh.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild variant="outline" className="h-auto py-6 flex flex-col">
            <Link href="/travel/guides">
              <Map className="h-8 w-8 mb-2" />
              <span className="text-lg font-medium">Travel Guides</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-6 flex flex-col">
            <Link href="/travel/safety">
              <Shield className="h-8 w-8 mb-2" />
              <span className="text-lg font-medium">Safety Tips</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-6 flex flex-col">
            <Link href="/travel/planner">
              <Compass className="h-8 w-8 mb-2" />
              <span className="text-lg font-medium">Trip Planner</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
