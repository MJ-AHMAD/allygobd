import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Farhan Rahman",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Former tech executive with a passion for connecting Bangladesh's youth with opportunities.",
    },
    {
      name: "Nusrat Jahan",
      role: "Head of Community",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Community builder with experience in youth engagement and social impact initiatives.",
    },
    {
      name: "Tanvir Ahmed",
      role: "Tech Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Software engineer with a background in building scalable platforms for social connection.",
    },
    {
      name: "Sabrina Khan",
      role: "Creative Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Designer and artist focused on creating engaging experiences for young Bangladeshis.",
    },
  ]

  const values = [
    {
      title: "Community First",
      description: "We believe in the power of community to create positive change and support individual growth.",
    },
    {
      title: "Inclusivity",
      description: "AllyGo is for all young people in Bangladesh, regardless of background, education, or location.",
    },
    {
      title: "Innovation",
      description: "We constantly seek new ways to serve our community and adapt to their evolving needs.",
    },
    {
      title: "Authenticity",
      description: "We celebrate the unique culture and heritage of Bangladesh while embracing global perspectives.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About AllyGo</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          AllyGo is a platform designed for the youth of Bangladesh, offering products, services, and community features
          to enhance their lives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            AllyGo aims to empower the youth of Bangladesh by providing a platform that connects them with resources,
            opportunities, and each other.
          </p>
          <p className="text-lg mb-6">
            We believe that by fostering community, supporting education, and promoting local businesses, we can help
            young Bangladeshis thrive in an increasingly connected world.
          </p>
          <p className="text-lg">
            Our goal is to be the go-to platform for Bangladesh's youth, offering everything from e-commerce to travel
            resources, educational tools to social connections.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full" />
          <img
            src="/placeholder.svg?height=500&width=600"
            alt="Young people in Bangladesh"
            className="relative z-10 rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We're always looking for passionate individuals to join our mission of empowering Bangladesh's youth.
        </p>
        <Button asChild size="lg">
          <Link href="/careers">View Open Positions</Link>
        </Button>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="mailto:allygo@outlook.com">allygo@outlook.com</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
