import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Users, Award, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function StudentSection() {
  const resources = [
    {
      title: "Study Groups",
      description: "Join or create study groups with students from your university or field.",
      icon: <Users className="h-6 w-6 text-primary" />,
      link: "/students/study-groups",
    },
    {
      title: "Notes & Materials",
      description: "Access and share lecture notes, books, and study materials.",
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: "/students/materials",
    },
    {
      title: "Events & Workshops",
      description: "Discover academic events, workshops, and seminars.",
      icon: <Calendar className="h-6 w-6 text-primary" />,
      link: "/students/events",
    },
    {
      title: "Scholarships",
      description: "Find information about available scholarships and financial aid.",
      icon: <Award className="h-6 w-6 text-primary" />,
      link: "/students/scholarships",
    },
  ]

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Resources for Students</h2>
          <p className="text-lg mb-6">
            AllyGo provides tools and resources designed specifically for students in Bangladesh. Connect with peers,
            access study materials, and discover opportunities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {resources.map((resource, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-1">{resource.icon}</div>
                <div>
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild size="lg">
            <Link href="/students">Explore Student Resources</Link>
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full" />
          <Card className="relative z-10">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Featured Resource</CardTitle>
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=250&width=450"
                alt="Student resources"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Exam Preparation Guide</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive guide to help you prepare for your university exams effectively. Includes study
                techniques, time management tips, and more.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Download Guide
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
