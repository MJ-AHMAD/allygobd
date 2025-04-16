import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, MessageSquare, Calendar, Heart } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const communities = [
    {
      name: "Tech Enthusiasts Bangladesh",
      members: 1250,
      description: "A community for tech lovers to discuss the latest in technology and innovation.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Technology", "Innovation", "Programming"],
      posts: 320,
    },
    {
      name: "Creative Arts Collective",
      members: 875,
      description: "Connect with artists, designers, and creative minds across Bangladesh.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Art", "Design", "Creativity"],
      posts: 215,
    },
    {
      name: "Entrepreneurs Hub",
      members: 950,
      description: "For young entrepreneurs to share ideas, get mentorship, and collaborate.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Business", "Startups", "Networking"],
      posts: 280,
    },
    {
      name: "Book Lovers Club",
      members: 720,
      description: "Discuss books, share recommendations, and connect with fellow readers.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Books", "Reading", "Literature"],
      posts: 190,
    },
    {
      name: "Photography Enthusiasts",
      members: 1050,
      description: "Share your photography, get feedback, and learn new techniques.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Photography", "Art", "Creative"],
      posts: 310,
    },
    {
      name: "Foodies of Bangladesh",
      members: 1500,
      description: "Discover and share the best food spots and recipes across Bangladesh.",
      image: "/placeholder.svg?height=100&width=100",
      tags: ["Food", "Restaurants", "Recipes"],
      posts: 420,
    },
  ]

  const discussions = [
    {
      title: "Best coding bootcamps in Dhaka?",
      author: "Rahim Ahmed",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      community: "Tech Enthusiasts Bangladesh",
      replies: 24,
      likes: 18,
      time: "2 hours ago",
    },
    {
      title: "Looking for co-founder for my fintech startup",
      author: "Tasnim Khan",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      community: "Entrepreneurs Hub",
      replies: 15,
      likes: 32,
      time: "5 hours ago",
    },
    {
      title: "Exhibition opportunities for young artists",
      author: "Nusrat Jahan",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      community: "Creative Arts Collective",
      replies: 19,
      likes: 27,
      time: "1 day ago",
    },
  ]

  const events = [
    {
      title: "Tech Meetup Dhaka",
      date: "May 25, 2024",
      location: "Gulshan, Dhaka",
      attendees: 45,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Startup Pitch Night",
      date: "June 10, 2024",
      location: "Banani, Dhaka",
      attendees: 60,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Art & Design Workshop",
      date: "June 18, 2024",
      location: "Dhanmondi, Dhaka",
      attendees: 30,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Community</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with like-minded youth, collaborate on projects, and build meaningful relationships.
        </p>
      </div>

      <Tabs defaultValue="communities" className="mb-16">
        <TabsList className="w-full max-w-md mx-auto">
          <TabsTrigger value="communities" className="flex-1">
            Communities
          </TabsTrigger>
          <TabsTrigger value="discussions" className="flex-1">
            Discussions
          </TabsTrigger>
          <TabsTrigger value="events" className="flex-1">
            Events
          </TabsTrigger>
        </TabsList>
        <TabsContent value="communities">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {community.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" /> {community.posts} posts
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Community</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="discussions">
          <div className="space-y-6 mt-8">
            {discussions.map((discussion, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={discussion.authorAvatar || "/placeholder.svg"} alt={discussion.author} />
                        <AvatarFallback>{discussion.author.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{discussion.title}</CardTitle>
                        <CardDescription>
                          Posted by {discussion.author} in {discussion.community} • {discussion.time}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" /> {discussion.replies} replies
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" /> {discussion.likes} likes
                    </span>
                  </div>
                  <Button>View Discussion</Button>
                </CardFooter>
              </Card>
            ))}
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/community/discussions">View All Discussions</Link>
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-40 object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{event.location}</p>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} attending
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">RSVP</Button>
                </CardFooter>
              </Card>
            ))}
            <div className="md:col-span-3 text-center mt-4">
              <Button asChild variant="outline">
                <Link href="/community/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted/30 rounded-lg p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Start Your Own Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a passion or interest not represented? Create your own community and connect with others who share your
            interests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Create a Community</CardTitle>
              <CardDescription>Start a group around your interests</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Build a space for people who share your passion, whether it's technology, arts, sports, or anything
                else.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create Community</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Start a Discussion</CardTitle>
              <CardDescription>Ask questions or share your thoughts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Initiate conversations, seek advice, or share your knowledge with the AllyGo community.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">New Discussion</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Organize an Event</CardTitle>
              <CardDescription>Plan meetups or workshops</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create in-person or virtual events to connect with community members who share your interests.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create Event</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
