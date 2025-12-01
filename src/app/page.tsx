import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Book,
  Calendar,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";
import { PostCard } from "@/components/post-card";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { posts, tags, users, events } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card border-b">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                Kakehashi Hub
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                The Japan ↔ India Student & Research Collaboration Hub
              </p>
              <p className="max-w-xl mx-auto text-muted-foreground">
                Connecting minds, fostering innovation, and building bridges
                between the academic communities of Japan and India.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="#">
                    Start Exploring <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#">Join the Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-12">
          <Tabs defaultValue="explore" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="explore">
                <Book className="mr-2" /> Explore
              </TabsTrigger>
              <TabsTrigger value="collaborations">
                <Users className="mr-2" /> Collaborations
              </TabsTrigger>
              <TabsTrigger value="events">
                <Calendar className="mr-2" /> Events
              </TabsTrigger>
              <TabsTrigger value="research">
                <Book className="mr-2" /> Verified Research
              </TabsTrigger>
            </TabsList>
            <TabsContent value="explore">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
                <aside className="lg:col-span-1 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Trending Tags</CardTitle>
                      <CardDescription>
                        Explore popular topics in the community.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag.id} variant="secondary">
                          <Link href="#">{tag.name}</Link>
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                      <CardDescription>
                        Join our upcoming webinars and workshops.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {events.slice(0, 2).map((event) => (
                        <div key={event.id} className="flex items-start gap-4">
                          <div className="bg-muted text-muted-foreground rounded-md px-3 py-2 flex flex-col items-center">
                            <span className="text-sm font-medium">
                              {new Date(event.date).toLocaleString("en-US", {
                                month: "short",
                              })}
                            </span>
                            <span className="text-lg font-bold">
                              {new Date(event.date).getDate()}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {event.type}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Featured Profiles</CardTitle>
                      <CardDescription>
                        Connect with researchers and students.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {users.slice(0, 3).map((user) => (
                        <div key={user.id} className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={user.avatarUrl} alt={user.name} />
                            <AvatarFallback>
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="w-full">
                            <div className="flex justify-between items-center">
                              <h3 className="font-semibold">{user.name}</h3>
                              <span className="text-2xl">{user.country === 'Japan' ? '🇯🇵' : '🇮🇳'}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {user.affiliation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </TabsContent>
            <TabsContent value="collaborations">
               <p className="text-center text-muted-foreground py-16">Collaborations coming soon.</p>
            </TabsContent>
             <TabsContent value="events">
               <p className="text-center text-muted-foreground py-16">Events coming soon.</p>
            </TabsContent>
             <TabsContent value="research">
               <p className="text-center text-muted-foreground py-16">Verified Research coming soon.</p>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <footer className="border-t bg-card text-card-foreground">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Kakehashi Hub. All rights reserved.</p>
          <div className="flex gap-4 items-center mt-4 md:mt-0">
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">About</Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
