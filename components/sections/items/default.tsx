import {
  ActivityIcon,
  BarChart3Icon,
  Building2Icon,
  CodeIcon,
  CreditCardIcon,
  DatabaseIcon,
  FileTextIcon,
  KeyIcon,
  LayoutDashboardIcon,
  LayoutTemplateIcon,
  MailCheckIcon,
  MailIcon,
  MonitorSmartphoneIcon,
  ReceiptIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  ShieldIcon,
  UserPlusIcon,
  ZapIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Everything Included to Launch and Scale",
  items = [
    {
      title: "Better Auth foundation",
      description:
        "Production-ready auth with multiple sign-in layouts, sessions, magic links, and verification flows.",
      icon: <KeyIcon className="size-5 stroke-1" />,
    },
    {
      title: "Password reset & session management",
      description: "Secure account recovery and reliable session handling are wired in from day one.",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Email verification flows",
      description: "User onboarding includes verification and transactional auth emails out of the box.",
      icon: <MailCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Gumroad checkout",
      description: "One-time purchases with Gumroad checkout, receipts, and delivery.",
      icon: <CreditCardIcon className="size-5 stroke-1" />,
    },
    {
      title: "License delivery & updates",
      description: "Gumroad customer library keeps downloads and updates in one place.",
      icon: <RefreshCwIcon className="size-5 stroke-1" />,
    },
    {
      title: "Sales reporting",
      description: "Gumroad sales insights for early pricing and demand validation.",
      icon: <ReceiptIcon className="size-5 stroke-1" />,
    },
    {
      title: "Organization workspaces",
      description: "Multi-tenant architecture with organization-level data boundaries and membership support.",
      icon: <Building2Icon className="size-5 stroke-1" />,
    },
    {
      title: "Team invitations",
      description: "Invite and manage collaborators with clean account-to-organization flows.",
      icon: <UserPlusIcon className="size-5 stroke-1" />,
    },
    {
      title: "Role-based permissions",
      description: "Model permissions by role for safer team and organization operations.",
      icon: <ShieldIcon className="size-5 stroke-1" />,
    },
    {
      title: "Dashboard architecture",
      description: "Modern responsive dashboard with task views, settings, and scalable navigation.",
      icon: <LayoutDashboardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Task & calendar modules",
      description: "Ship useful product primitives quickly with built-in task and scheduling surfaces.",
      icon: <LayoutDashboardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Convex real-time backend",
      description: "Reactive queries and mutations with instant sync across clients.",
      icon: <DatabaseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Real-time notifications",
      description: "Deliver live in-app updates and notification patterns from the same stack.",
      icon: <ActivityIcon className="size-5 stroke-1" />,
    },
    {
      title: "Brevo email integration",
      description: "Transactional email pipelines for onboarding, auth, and product communication.",
      icon: <MailIcon className="size-5 stroke-1" />,
    },
    {
      title: "Sentry monitoring",
      description: "Capture production errors and improve reliability before issues compound.",
      icon: <ZapIcon className="size-5 stroke-1" />,
    },
    {
      title: "Upstash rate limiting",
      description: "Protect APIs and auth endpoints with Redis-backed rate limiting patterns.",
      icon: <ShieldIcon className="size-5 stroke-1" />,
    },
    {
      title: "Analytics integrations",
      description: "Track product behavior with Umami and Rybbit-ready wiring.",
      icon: <BarChart3Icon className="size-5 stroke-1" />,
    },
    {
      title: "Testing & lint setup",
      description: "Ship confidently with baseline testing quality workflows and linting tools.",
      icon: <FileTextIcon className="size-5 stroke-1" />,
    },
    {
      title: "Landing page + blog",
      description: "Promote your product with conversion-focused landing and content scaffolding.",
      icon: <LayoutTemplateIcon className="size-5 stroke-1" />,
    },
    {
      title: "Type-safe full stack DX",
      description: "End-to-end TypeScript setup for faster development and safer refactors.",
      icon: <CodeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Light and dark themes",
      description: "Modern responsive UI with theme support across the experience.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section id="features" className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
