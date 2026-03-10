import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutLines } from "@/components/ui/layout-lines";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <Badge variant="brand" className="mb-6">
              Our Blog
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Insights & Updates
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
              Everything you need to know about building better SaaS products,
              shipped directly from our team.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group mb-12 block"
            >
              <Card
                className={cn(
                  "from-card via-card to-card/70 relative overflow-hidden rounded-[2rem] border-border/60 bg-gradient-to-br shadow-xl transition-all hover:border-primary/50 hover:shadow-2xl",
                  "dark:shadow-[0_20px_80px_-40px_rgba(255,255,255,0.18)]",
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_40%)]" />
                <div className="relative grid items-center gap-8 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
                  <div className="flex flex-col items-start gap-4">
                    <Badge
                      variant="outline"
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      Featured
                    </Badge>
                    <div className="text-muted-foreground flex items-center gap-3 text-sm font-medium">
                      <time dateTime={featuredPost.date}>
                        {new Date(featuredPost.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </time>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="group-hover:text-primary text-3xl font-bold tracking-tight transition-colors md:text-4xl lg:text-5xl">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="text-primary mt-4 flex items-center gap-2 font-medium">
                      Read article{" "}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Decorative element instead of image for the featured post */}
                  <div className="bg-background/50 relative hidden h-full min-h-[300px] w-full overflow-hidden rounded-[1.5rem] border border-border/50 backdrop-blur-sm lg:block">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-brand/30 h-32 w-32 animate-pulse rounded-full blur-3xl" />
                      <div className="absolute h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )}

          {/* Remaining Posts Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <Card className="from-card to-card/50 flex h-full flex-col overflow-hidden rounded-[1.5rem] border-border/60 bg-gradient-to-b shadow-md transition-all hover:border-primary/50 hover:shadow-xl">
                  <CardHeader className="p-6 md:p-8">
                    <div className="text-muted-foreground mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-wider">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary text-2xl leading-snug transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between p-6 pt-0 md:p-8 md:pt-0">
                    <CardDescription className="mb-6 text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="text-primary mt-auto flex items-center gap-2 text-sm font-medium">
                      Read more{" "}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
