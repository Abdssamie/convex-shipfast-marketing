import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Badge } from "@/components/ui/badge";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { ReadingProgress, TableOfContents } from "./client-components";
import { Card } from "@/components/ui/card";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get suggested posts
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const suggestedPosts = sortedPosts.filter(p => p.slug !== slug).slice(0, 2);

  // Extract headings for the Table of Contents via Velite
  const tocItems = (post.toc || []).map((item: any) => ({
    id: item.url.replace('#', ''),
    title: item.title,
  }));

  return (
    <main className="bg-background text-foreground min-h-screen w-full relative selection:bg-primary/30">
      <ReadingProgress />
      <Navbar />

      <article className="container mx-auto px-4 py-24 md:py-32">
        
        {/* Simple, clean Header (Tango style) */}
        <header className="mx-auto max-w-4xl text-center mb-16 md:mb-24">
          {/* Breadcrumbs - Modernized with subtle hover effects */}
          <nav className="flex items-center justify-center gap-3 text-sm font-medium text-muted-foreground mb-10">
            <Link href="/blog" className="hover:text-primary transition-all flex items-center gap-1 group">
              FluxKit Blog
              <span className="block w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <ChevronRightIcon className="size-3.5 opacity-40 shrink-0" />
            <span className="bg-muted/50 px-2.5 py-0.5 rounded-full text-xs uppercase tracking-widest font-bold text-muted-foreground/80">Updates</span>
            <ChevronRightIcon className="size-3.5 opacity-40 shrink-0" />
            <span className="text-foreground/60 truncate max-w-[140px] md:max-w-none">{post.title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tight text-foreground mb-10 leading-[1.1] balance">
            {post.title}
          </h1>
          
          <div className="flex flex-col items-center justify-center gap-3 text-sm">
             <div className="flex items-center gap-3 mb-1">
                <div className="size-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                   <div className="size-full bg-primary/20 blur-sm" />
                </div>
                <span className="font-semibold text-foreground tracking-tight underline decoration-primary/40 underline-offset-[6px]">FluxKit Team</span>
             </div>
             <div className="flex items-center gap-2 text-muted-foreground/70 font-medium">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="size-1 rounded-full bg-border" />
                <span>{post.readTime}</span>
             </div>
          </div>
        </header>

        {/* Hero Image - More premium with subtle shadow and border */}
        <div className="mx-auto max-w-5xl w-full h-[320px] md:h-[500px] mb-20 rounded-3xl overflow-hidden relative border border-white/5 bg-neutral-900 group shadow-2xl shadow-primary/5">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-96 bg-primary/5 blur-[120px] rounded-full animate-pulse" />
           </div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_100%)] opacity-40" />
        </div>

        {/* Main Layout: Left Sidebar, Right Content - Balanced spacing */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Sidebar */}
          <aside className="hidden lg:block sticky top-32">
            
            {/* Featured Content Promo Box (Tango style) - Polished Aesthetics */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-primary/20 via-border/50 to-transparent mb-10 overflow-hidden shadow-xl shadow-primary/5">
              <Card className="p-6 border-none bg-card/60 backdrop-blur-xl transition-all hover:bg-card/80">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-primary/80 mb-6 flex items-center gap-2">
                  <span className="size-1 rounded-full bg-primary animate-pulse" />
                  Featured
                </h4>
                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase tracking-wider">Newsletter</span>
                    </div>
                    <p className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">Real-Time Enablement: An Underrated Edge</p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground uppercase tracking-wider">Guides</span>
                    </div>
                    <p className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">A Buyer's Guide to Frameworks</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="p-8 border border-border/10 rounded-2xl bg-card/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <TableOfContents items={tocItems} />
              
              {/* Fake Socials at bottom of ToC */}
              <div className="mt-10 pt-8 border-t border-border/10 flex justify-center gap-5">
                 {[ "𝕏", "in", "fb" ].map(icon => (
                    <div key={icon} className="size-9 rounded-xl bg-muted/40 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer text-sm font-bold border border-border/5">
                      {icon}
                    </div>
                 ))}
              </div>
            </div>
          </aside>

          {/* Right Main Content - Premium Typography */}
          <div className="min-w-0 w-full">
            <div className="prose prose-invert prose-neutral max-w-none 
                            prose-headings:scroll-m-32 prose-headings:font-serif prose-headings:tracking-tight 
                            prose-h2:text-4xl prose-h2:font-medium prose-h2:mt-20 prose-h2:mb-8 prose-h2:text-foreground
                            prose-p:leading-[1.8] prose-p:text-muted-foreground/90 hover:prose-p:text-foreground/90 prose-p:transition-colors
                            prose-strong:text-foreground prose-strong:font-semibold
                            prose-li:text-muted-foreground/90
                            prose-blockquote:border-primary/50 prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-lg
                            first:prose-p:text-2xl first:prose-p:text-foreground/90 first:prose-p:font-serif first:prose-p:leading-relaxed first:prose-p:mb-12">
              <MDXContent code={post.content} />
            </div>
          </div>
          
        </div>

        {/* "You may also like" Section */}
        {suggestedPosts.length > 0 && (
          <div className="mx-auto max-w-5xl mt-32 pt-16 border-t border-border/40">
            <h3 className="text-3xl md:text-4xl font-serif text-center mb-12 tracking-tight">You may also like:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {suggestedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden border-border/40 bg-card/40 transition-shadow hover:shadow-lg hover:shadow-primary/5 flex flex-col p-6">
                    <div className="w-full h-48 rounded-xl bg-muted relative overflow-hidden mb-6">
                       <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-primary/10" />
                    </div>
                    
                    <div className="flex-grow flex flex-col">
                      <div className="mb-4">
                        <Badge variant="secondary" className="rounded-full bg-muted text-muted-foreground font-medium px-4 py-1 hover:bg-muted">
                          Updates
                        </Badge>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground mb-3">
                         {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </div>
                      <h4 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

      <Footer />
    </main>
  );
}
