import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Users, Award, Calendar } from "lucide-react"
import Link from "next/link"

export default function StudentsPage() {
  const resources = [
    {
      title: "Study Materials",
      description: "Access lecture notes, books, and study materials for various subjects and universities.",
      icon: <FileText className="h-10 w-10 text-primary" />,
      link: "/students/materials",
    },
    {
      title: "Study Groups",
      description: "Join or create study groups with students from your university or field.",
      icon: <Users className="h-10 w-10 text-primary" />,
      link: "/students/study-groups",
    },
    {
      title: "Scholarships",
      description: "Find information about available scholarships and financial aid opportunities.",
      icon: <Award className="h-10 w-10 text-primary" />,
      link: "/students/scholarships",
    },
    {
      title: "Events & Workshops",
      description: "Discover academic events, workshops, and seminars happening near you.",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      link: "/students/events",
    },
  ]

  const universities = [
    "University of Dhaka",
    "Bangladesh University of Engineering and Technology",
    "Jahangirnagar University",
    "North South University",
    "BRAC University",
    "Rajshahi University",
    "Chittagong University",
  ]

  const upcomingEvents = [
    {
      title: "Tech Career Fair 2024",
      date: "May 20, 2024",
      location: "Bangabandhu International Conference Center, Dhaka",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Research Methodology Workshop",
      date: "June 5, 2024",
      location: "University of Dhaka",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Entrepreneurship Bootcamp",
      date: "June 15-17, 2024",
      location: "North South University",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Student Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          AllyGo provides tools and resources designed specifically for students in Bangladesh. Connect with peers,
          access study materials, and discover opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {resources.map((resource, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-4">{resource.icon}</div>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={resource.link}>Explore</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">University Resources</h2>
        <Tabs defaultValue={universities[0]}>
          <TabsList className="flex flex-wrap h-auto mb-4">
            {universities.map((university) => (
              <TabsTrigger key={university} value={university}>
                {university}
              </TabsTrigger>
            ))}
          </TabsList>
          {universities.map((university) => (
            <TabsContent key={university} value={university}>
              <Card>
                <CardHeader>
                  <CardTitle>{university}</CardTitle>
                  <CardDescription>Resources specific to {university} students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-medium mb-2">Study Materials</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Access lecture notes, past papers, and study guides for {university}.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Materials
                      </Button>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-medium mb-2">Student Groups</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Connect with other students from {university}.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Join Groups
                      </Button>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-medium mb-2">Campus Events</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Stay updated with events happening at {university}.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Events
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Button asChild variant="outline">
            <Link href="/students/events">View All Events</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-40 object-cover" />
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help with Your Studies?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Our community of students and educators is here to help you succeed in your academic journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/students/tutors">Find a Tutor</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/students/forum">Ask in Forum</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
