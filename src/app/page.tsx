"use client"
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
import { useLanguage } from "@/contexts/language-provider";
import { useMemo } from "react";


export default function Home() {
  const { language } = useLanguage();
  const filteredPosts = useMemo(
    () => posts.filter((p) => p.language === language),
    [language]
  );
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-card border-b">
          <Image
            src="/images/hero-background.jpg"
            alt="Kakehashi Hub background"
            fill
            className="object-cover"
            priority
            data-ai-hint="abstract background"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Kakehashi Hub
              </h1>
              <p className="text-lg text-gray-200 md:text-xl">
                The Japan ↔ India Student & Research Collaboration Hub
              </p>
              <p className="max-w-xl mx-auto text-gray-300">
                Connecting minds, fostering innovation, and building bridges
                between the academic communities of Japan and India.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/explore">
                    Start Exploring <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/community">Join the Community</Link>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
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
