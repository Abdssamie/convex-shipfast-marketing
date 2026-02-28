import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      <article className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center transition-colors"
          >
            ← Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              {post.title}
            </h1>

            <div className="text-muted-foreground flex items-center gap-4">
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
          </header>

          {/* Post Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                const heading = paragraph.replace(/\*\*/g, "");
                return (
                  <h2 key={index} className="mt-8 mb-4 text-2xl font-semibold">
                    {heading}
                  </h2>
                );
              }

              // Handle regular paragraphs
              return (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-border mt-12 border-t pt-8">
            <Link
              href="/blog"
              className="text-primary inline-flex items-center hover:underline"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
