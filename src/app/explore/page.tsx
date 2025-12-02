import { Header } from "@/components/header";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
          Explore
        </h1>
        <p className="text-muted-foreground">
          This is where the forum will be. Content coming soon.
        </p>
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
