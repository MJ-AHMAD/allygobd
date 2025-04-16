import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CommunitySection() {
  const communities = [
    {
      name: "Tech Enthusiasts Bangladesh",
      members: 1250,
      description: "A community for tech lovers to discuss the latest in technology and innovation.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Technology", "Innovation", "Programming"],
    },
    {
      name: "Creative Arts Collective",
      members: 875,
      description: "Connect with artists, designers, and creative minds across Bangladesh.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Art", "Design", "Creativity"],
    },
    {
      name: "Entrepreneurs Hub",
      members: 950,
      description: "For young entrepreneurs to share ideas, get mentorship, and collaborate.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Business", "Startups", "Networking"],
    },
  ]

  return (
    <section className="py-16 bg-muted/50 rounded-lg p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Communities</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with like-minded youth, collaborate on projects, and build meaningful relationships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {communities.map((community, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={community.image || "/placeholder.svg"} alt={community.name} />
                  <AvatarFallback>{community.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{community.name}</CardTitle>
                  <CardDescription>{community.members} members</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{community.description}</p>
              <div className="flex flex-wrap gap-2">
                {community.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Join Community</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/community">Explore All Communities</Link>
        </Button>
      </div>
    </section>
  )
}
