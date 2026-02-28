import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question: "What is FluxKit?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            FluxKit is a production-ready SaaS starter kit that helps you ship
            your product faster. It comes with everything you need to build a
            modern SaaS application: authentication, billing, team management,
            real-time features, and a beautiful UI.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Built with Next.js, Convex, and TypeScript, FluxKit eliminates
            months of boilerplate work so you can focus on building features
            that make your product unique.
          </p>
        </>
      ),
    },
    {
      question: "Who is FluxKit for?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            FluxKit is perfect for indie hackers, startup founders, and
            development teams who want to launch their SaaS product quickly
            without sacrificing code quality or scalability.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Whether you&apos;re building your first SaaS or your tenth, FluxKit
            provides a solid foundation that grows with your business. It&apos;s
            ideal for developers who prefer owning their code over being locked
            into no-code platforms.
          </p>
        </>
      ),
    },
    {
      question: "What's included in the boilerplate?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            FluxKit includes 50+ features out of the box: authentication (email,
            OAuth, magic links), Stripe billing with subscriptions, team
            workspaces, user management, role-based permissions, real-time
            updates, email notifications, admin dashboard, analytics
            integration, and more.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            You also get 30+ pre-built components, a beautiful landing page
            template, comprehensive documentation, and production-ready
            deployment configurations. Everything is fully typed with TypeScript
            and follows modern best practices.
          </p>
        </>
      ),
    },
    {
      question: "How is FluxKit different from other SaaS starters?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            FluxKit stands out by using Convex as the backend, giving you
            real-time reactivity, automatic caching, and serverless scalability
            without the complexity of managing databases, APIs, and WebSocket
            connections.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Unlike other starters that use outdated patterns or lock you into
            specific services, FluxKit is built with modern technologies and
            gives you full control. The code is clean, well-documented, and
            designed to be customized for your specific needs.
          </p>
        </>
      ),
    },
    {
      question: "What technologies are used?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            FluxKit is built with Next.js 15 (App Router), Convex for the
            backend and database, TypeScript for type safety, Tailwind CSS for
            styling, shadcn/ui for components, Stripe for payments, and Resend
            for transactional emails.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            All technologies are production-tested, actively maintained, and
            chosen for their developer experience and scalability. You get the
            best tools without the complexity of integrating them yourself.
          </p>
        </>
      ),
    },
    {
      question: "Why Convex instead of traditional databases?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Convex eliminates the need to build and maintain REST or GraphQL
            APIs. Your frontend queries the database directly with full type
            safety, automatic caching, and real-time reactivity. Changes sync
            instantly across all connected clients without WebSockets or
            polling.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            It&apos;s serverless and scales automatically, so you don&apos;t
            worry about connection pooling, migrations, or infrastructure. You
            write backend functions in TypeScript that run securely on
            Convex&apos;s edge network. It&apos;s faster to develop with and
            more reliable in production.
          </p>
        </>
      ),
    },
    {
      question: "Can I use a different auth provider?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Yes! FluxKit uses Convex Auth, which supports multiple providers out
            of the box including GitHub, Google, email/password, and magic
            links. You can easily add or remove providers by updating the
            configuration.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            If you prefer a different auth solution like Clerk or Auth.js, the
            codebase is structured to make swapping auth providers
            straightforward. Check the{" "}
            <Link
              href={siteConfig.docsUrl}
              className="text-foreground underline"
            >
              documentation
            </Link>{" "}
            for guides on customizing authentication.
          </p>
        </>
      ),
    },
    {
      question: "Can I customize the code?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Absolutely! FluxKit is designed to be customized. You own the code
            completely and can modify anything to fit your needs. The codebase
            is well-organized, fully typed, and documented to make customization
            easy.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Whether you want to change the UI, add new features, integrate
            different services, or restructure the architecture, you have
            complete freedom. There are no artificial limitations or vendor
            lock-in.
          </p>
        </>
      ),
    },
    {
      question: "Is it production-ready?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Yes! FluxKit is built with production in mind. It includes error
            handling, loading states, optimistic updates, security best
            practices, SEO optimization, analytics integration, and monitoring
            setup.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            The code follows industry standards and has been tested in
            real-world applications. You can deploy to Vercel with one click and
            start accepting payments immediately. That said, you should always
            review and test the code for your specific use case.
          </p>
        </>
      ),
    },
    {
      question: "What's included in the real-time features?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            FluxKit includes real-time collaboration features powered by Convex:
            live cursors, presence indicators, instant data synchronization,
            collaborative editing foundations, and real-time notifications.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            All data updates are reactive by default, so when one user makes a
            change, all other users see it instantly without refreshing. This
            makes building collaborative features like team dashboards, chat, or
            shared workspaces straightforward.
          </p>
        </>
      ),
    },
    {
      question: "What's the difference between Free and Pro?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            The Free version includes core features like authentication, basic
            billing, and essential components. It&apos;s open-source and perfect
            for getting started or building simple SaaS products.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            The Pro version adds advanced features like team workspaces,
            role-based permissions, advanced billing (usage-based, metered),
            admin dashboard, email templates, analytics integration, priority
            support, and access to all premium components. Check the{" "}
            <Link href="/pricing" className="text-foreground underline">
              pricing page
            </Link>{" "}
            for a detailed comparison.
          </p>
        </>
      ),
    },
    {
      question: "Is it a one-time payment?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Yes! FluxKit Pro is a one-time payment with lifetime access. You pay
            once and get access to all current features plus all future updates
            and improvements.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            There are no recurring fees, no subscription lock-in, and no limits
            on how many projects you can build. The code is yours to use
            forever.
          </p>
        </>
      ),
    },
    {
      question: "Can I use it for multiple projects?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Yes! Your FluxKit license allows unlimited personal and commercial
          projects. Build as many SaaS products as you want with no additional
          fees. The only restriction is that you can&apos;t resell or
          redistribute FluxKit itself as a competing product.
        </p>
      ),
    },
    {
      question: "What's the refund policy?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            We offer a 14-day money-back guarantee. If FluxKit doesn&apos;t meet
            your expectations, contact us at{" "}
            <a
              href={siteConfig.links.email}
              className="text-foreground underline"
            >
              hello@fluxkit.dev
            </a>{" "}
            within 14 days of purchase for a full refund.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            We want you to be confident in your purchase, so try it risk-free.
            No questions asked.
          </p>
        </>
      ),
    },
    {
      question: "Do I get lifetime updates?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Yes! Your one-time purchase includes lifetime access to all future
            updates, new features, bug fixes, and improvements. As FluxKit
            evolves, you&apos;ll always have access to the latest version.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            We&apos;re committed to continuously improving FluxKit based on user
            feedback and keeping it up-to-date with the latest technologies and
            best practices.
          </p>
        </>
      ),
    },
    {
      question: "How do I get support?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Pro users get priority support via email and our private Discord
            community. Free users can get help through GitHub issues and our
            public Discord channel.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Join our{" "}
            <Link
              href={siteConfig.links.discord}
              className="text-foreground underline"
            >
              Discord community
            </Link>{" "}
            to connect with other FluxKit users, share tips, and get help from
            the community. For direct support, email us at{" "}
            <a
              href={siteConfig.links.email}
              className="text-foreground underline"
            >
              hello@fluxkit.dev
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "Is there documentation?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Yes! FluxKit comes with comprehensive documentation covering setup,
            configuration, customization, deployment, and best practices. Every
            feature is documented with code examples and explanations.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Visit{" "}
            <Link
              href={siteConfig.docsUrl}
              className="text-foreground underline"
            >
              docs.fluxkit.dev
            </Link>{" "}
            to explore the full documentation. The codebase itself is also
            well-commented to help you understand how everything works.
          </p>
        </>
      ),
    },
    {
      question: "Can I request features?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Absolutely! We actively listen to user feedback and prioritize
            features that benefit the community. Pro users get priority
            consideration for feature requests.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Submit feature requests on{" "}
            <Link
              href={siteConfig.links.github}
              className="text-foreground underline"
            >
              GitHub
            </Link>
            , discuss ideas in our{" "}
            <Link
              href={siteConfig.links.discord}
              className="text-foreground underline"
            >
              Discord
            </Link>
            , or email us directly. We&apos;re building FluxKit with the
            community and your input shapes the roadmap.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
