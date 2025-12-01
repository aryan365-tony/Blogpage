import Link from "next/link";
import { PlusCircle, Search } from "lucide-react";

import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserNav } from "@/components/user-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block font-headline text-lg">
              Kakehashi Hub
            </span>
          </Link>
        </div>

        <div className="relative flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search posts, authors, tags..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" className="hidden md:inline-flex">
            <PlusCircle className="mr-2" />
            Create Post
          </Button>
          <LanguageSwitcher />
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
