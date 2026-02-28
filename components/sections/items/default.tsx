import {
  ActivityIcon,
  BarChart3Icon,
  Building2Icon,
  CodeIcon,
  CreditCardIcon,
  DatabaseIcon,
  FileTextIcon,
  ImageIcon,
  KeyIcon,
  LayoutDashboardIcon,
  LayoutTemplateIcon,
  MailCheckIcon,
  MailIcon,
  MonitorSmartphoneIcon,
  NewspaperIcon,
  ReceiptIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  ShieldIcon,
  SparklesIcon,
  UploadIcon,
  UserPlusIcon,
  UsersIcon,
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
  title = "Everything You Need to Ship Your SaaS",
  items = [
    {
      title: "Email & OAuth authentication",
      description:
        "Secure login with email/password and social providers like Google, GitHub",
      icon: <KeyIcon className="size-5 stroke-1" />,
    },
    {
      title: "Multi-factor authentication",
      description: "Add an extra layer of security with MFA support",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Email verification",
      description: "Automated email verification flows for new users",
      icon: <MailCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Stripe integration",
      description:
        "Complete payment processing with webhooks and subscriptions",
      icon: <CreditCardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Subscription management",
      description: "Handle plans, upgrades, downgrades, and cancellations",
      icon: <RefreshCwIcon className="size-5 stroke-1" />,
    },
    {
      title: "Customer billing portal",
      description: "Let customers manage their billing and invoices",
      icon: <ReceiptIcon className="size-5 stroke-1" />,
    },
    {
      title: "Organization workspaces",
      description: "Multi-tenant architecture with workspace isolation",
      icon: <Building2Icon className="size-5 stroke-1" />,
    },
    {
      title: "Team invitations",
      description: "Invite members with customizable roles and permissions",
      icon: <UserPlusIcon className="size-5 stroke-1" />,
    },
    {
      title: "Role-based access control",
      description: "Granular permissions system for team members",
      icon: <ShieldIcon className="size-5 stroke-1" />,
    },
    {
      title: "Member management",
      description: "Add, remove, and manage team members easily",
      icon: <UsersIcon className="size-5 stroke-1" />,
    },
    {
      title: "Real-time database",
      description: "Powered by Convex for instant data queries and updates",
      icon: <DatabaseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Live data synchronization",
      description: "Changes sync automatically across all connected clients",
      icon: <ActivityIcon className="size-5 stroke-1" />,
    },
    {
      title: "Optimistic updates",
      description: "Instant UI feedback with automatic rollback on errors",
      icon: <ZapIcon className="size-5 stroke-1" />,
    },
    {
      title: "Admin dashboard",
      description:
        "Comprehensive interface for user and organization management",
      icon: <LayoutDashboardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Analytics & insights",
      description: "Track key metrics and user behavior",
      icon: <BarChart3Icon className="size-5 stroke-1" />,
    },
    {
      title: "File upload & storage",
      description: "Secure file handling with cloud storage integration",
      icon: <UploadIcon className="size-5 stroke-1" />,
    },
    {
      title: "Image optimization",
      description: "Automatic image processing and optimization",
      icon: <ImageIcon className="size-5 stroke-1" />,
    },
    {
      title: "Transactional emails",
      description: "Send automated emails for key user actions",
      icon: <MailIcon className="size-5 stroke-1" />,
    },
    {
      title: "Email templates",
      description: "Beautiful, responsive templates built with React Email",
      icon: <FileTextIcon className="size-5 stroke-1" />,
    },
    {
      title: "AI integrations",
      description: "Ready-to-use examples for OpenAI and Anthropic",
      icon: <SparklesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Landing page templates",
      description: "Conversion-optimized pages to showcase your product",
      icon: <LayoutTemplateIcon className="size-5 stroke-1" />,
    },
    {
      title: "Blog system with MDX",
      description: "SEO-friendly blog with rich content support",
      icon: <NewspaperIcon className="size-5 stroke-1" />,
    },
    {
      title: "Full TypeScript support",
      description: "End-to-end type safety for better developer experience",
      icon: <CodeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Responsive & dark mode",
      description: "Works beautifully on all devices with theme switching",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
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
