import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-posts";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Insights, updates, and guides for building better SaaS products
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="border-border hover:border-primary h-full rounded-lg border p-6 transition-colors">
                  <div className="flex h-full flex-col">
                    <div className="text-muted-foreground mb-4 flex items-center gap-3 text-sm">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="text-primary mt-4 font-medium">
                      Read more →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
