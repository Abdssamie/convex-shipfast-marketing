import { ArrowRightIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { posts } from "#site/content";
import { cn } from "@/lib/utils";
import { LayoutLines } from "@/components/ui/layout-lines";
import { Card } from "@/components/ui/card";

export default function BlogPage() {
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredPost = sortedPosts[0];
  const stackedPosts = sortedPosts.slice(1, 3);
  const remainingPosts = sortedPosts.slice(3);

  return (
    <main className="bg-background text-foreground min-h-screen w-full relative selection:bg-primary/30">
      <LayoutLines />
      <Navbar />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="mx-auto max-w-6xl">
          
          {/* Header & Search */}
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-yxl font-serif tracking-tight mb-8">
              Most Popular Resources
            </h1>
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input 
                type="text" 
                placeholder="Search all Resources" 
                className="pl-12 py-6 rounded-full bg-card border-border/50 shadow-sm text-base focus-visible:ring-primary/50"
              />
            </div>
          </div>

          {/* Top Tango Grid (Featured + Stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
            
            {/* Left: Featured Post */}
            {featuredPost && (
              <div className="lg:col-span-7">
                <Link href={`/blog/${featuredPost.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden border-border/40 bg-card/40 transition-shadow hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                    <div className="w-full aspect-[16/10] bg-muted relative overflow-hidden">
                       {/* Geometric Placeholder Art */}
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                       <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center">
                           <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl" />
                         </div>
                       </div>
                    </div>
                    
                    <div className="p-8 md:p-10 flex-grow flex flex-col">
                      <div className="mb-4">
                        <Badge variant="secondary" className="rounded-full bg-muted text-muted-foreground font-medium px-4 py-1 hover:bg-muted">
                          Blog Post
                        </Badge>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      {/* Fake generic stats/author footer inside card to match Tango vibe */}
                      <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground font-medium pt-4 border-t border-border/50">
                        <span>Read full article</span>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                          <ArrowRightIcon className="size-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            )}

            {/* Right: Stacked Posts */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-6 lg:gap-8">
              {stackedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden border-border/40 bg-card/40 transition-shadow hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                    <div className="w-full h-40 bg-muted relative overflow-hidden">
                       {/* Abstract placeholder art */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-primary/5" />
                       <div className="absolute right-0 top-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent" />
                    </div>
                    
                    <div className="p-6 md:p-8 flex-grow flex flex-col">
                      <div className="mb-3">
                        <Badge variant="secondary" className="rounded-full bg-muted text-muted-foreground font-medium px-3 py-0.5 text-xs hover:bg-muted">
                          Guides
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <div className="mt-auto flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-sm font-medium text-primary">Read guide</span>
                         <ArrowRightIcon className="size-4 text-primary" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            
          </div>

          {/* Bottom section (if any more posts) */}
          {remainingPosts.length > 0 && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 pt-16 border-t border-border/40">
                {remainingPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                    <Card className="h-full overflow-hidden border-border/40 bg-card/40 transition-shadow hover:shadow-md">
                      <div className="p-6">
                        <div className="mb-4 text-xs font-mono text-muted-foreground">
                           {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </div>
                        <h4 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
             </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}
