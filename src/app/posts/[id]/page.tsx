import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts, users, tags as allTags } from '@/lib/data';
import { Header } from '@/components/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import Link from 'next/link';

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const author = users.find((u) => u.id === post.authorId);
  const postTags = allTags.filter((t) => post.tags.includes(t.id));

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <article className="container relative mx-auto max-w-4xl py-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <Badge variant={post.language === 'en' ? 'default' : 'destructive'} className="pointer-events-none">
                {post.language === 'en' ? 'English' : '日本語'}
              </Badge>
              {postTags.map((tag) => (
                <Badge key={tag.id} variant="secondary">
                  {tag.name}
                </Badge>
              ))}
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              {author && (
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={author.avatarUrl} alt={author.name} />
                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-foreground">{author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 w-full my-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-none whitespace-pre-line">
            {post.content}
          </div>
        </article>
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
