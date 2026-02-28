export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-fluxkit",
    title: "Introducing FluxKit: Build SaaS Faster with Convex",
    excerpt:
      "Discover how FluxKit combines the power of Convex with modern web technologies to help you ship your SaaS product in days, not months.",
    date: "2024-02-15",
    readTime: "5 min read",
    content: `
FluxKit is a modern SaaS starter kit that leverages Convex's real-time backend to help you build and ship faster. 

We've spent months building SaaS products and identified the common patterns that every project needs: authentication, payments, user management, and real-time features. FluxKit packages all of this into a production-ready foundation.

With FluxKit, you get:
- Real-time database with Convex
- Authentication out of the box
- Stripe integration for payments
- Beautiful UI components with shadcn/ui
- Type-safe API with full TypeScript support

Stop rebuilding the same features for every project. Start with FluxKit and focus on what makes your product unique.
    `,
  },
  {
    slug: "why-we-chose-convex",
    title: "Why We Chose Convex for Real-Time Features",
    excerpt:
      "Learn why Convex became our backend of choice and how it enables real-time collaboration features without the complexity.",
    date: "2024-02-20",
    readTime: "7 min read",
    content: `
When building FluxKit, we evaluated dozens of backend solutions. We needed something that could handle real-time updates, scale effortlessly, and provide an excellent developer experience.

Convex stood out for several reasons:

**Real-time by Default**
Every query in Convex is reactive. When data changes, your UI updates automatically. No websockets to manage, no polling logic to write.

**Type Safety**
Convex generates TypeScript types from your schema, giving you end-to-end type safety from database to UI.

**Serverless Functions**
Write your backend logic in TypeScript functions that scale automatically. No servers to manage, no infrastructure to configure.

**Built-in Authentication**
Convex handles authentication with multiple providers out of the box, making it easy to secure your application.

The result? We can build features that would take weeks with traditional stacks in just days with Convex.
    `,
  },
  {
    slug: "idea-to-production-in-7-days",
    title: "From Idea to Production in 7 Days with FluxKit",
    excerpt:
      "A case study of how one developer used FluxKit to launch a profitable SaaS product in just one week.",
    date: "2024-02-25",
    readTime: "6 min read",
    content: `
Last week, we watched a developer go from idea to paying customers in just 7 days using FluxKit. Here's how they did it.

**Day 1-2: Setup and Customization**
Started with FluxKit's foundation and customized the branding, colors, and landing page to match their vision.

**Day 3-4: Core Features**
Built the unique features that differentiate their product. Because authentication, payments, and database were already handled, they could focus entirely on their core value proposition.

**Day 5-6: Testing and Polish**
Tested the application, fixed bugs, and polished the user experience. The type-safe architecture caught most issues before they reached production.

**Day 7: Launch**
Deployed to production and started marketing. By the end of the day, they had their first paying customer.

This is the power of starting with a solid foundation. FluxKit handles the boring stuff so you can focus on building something people want.

Ready to ship your idea? Get started with FluxKit today.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
