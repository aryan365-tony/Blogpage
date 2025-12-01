import Image from "next/image";
import Link from "next/link";
import { Clock, MessageCircle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "@/lib/types";
import { users, tags as allTags } from "@/lib/data";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const author = users.find((u) => u.id === post.authorId);
  const postTags = allTags.filter((t) => post.tags.includes(t.id));

  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <Link href="#" className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint="blog post image"
          />
        </div>
      </Link>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant={post.language === 'en' ? 'default' : 'destructive'} className="pointer-events-none">
                {post.language === 'en' ? 'English' : '日本語'}
            </Badge>
            {postTags.map((tag) => (
                <Badge key={tag.id} variant="secondary">
                {tag.name}
                </Badge>
            ))}
        </div>
        <CardTitle className="font-headline text-xl leading-tight">
          <Link href="#">{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
        <div className="flex items-center gap-2">
          {author && (
            <>
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatarUrl} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{author.name}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min</span>
            </div>
            <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>{post.commentsCount}</span>
            </div>
        </div>
      </CardFooter>
    </Card>
  );
}
