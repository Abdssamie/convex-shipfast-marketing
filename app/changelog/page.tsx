import Footer from "../../components/sections/footer/default";
import Navbar from "../../components/sections/navbar/default";
import { Section } from "../../components/ui/section";
import { LayoutLines } from "../../components/ui/layout-lines";
import { Badge } from "../../components/ui/badge";

interface ChangelogEntry {
  version: string;
  date: string;
  added?: string[];
  fixed?: string[];
  changed?: string[];
  removed?: string[];
}

const changelogEntries: ChangelogEntry[] = [
  {
    version: "1.0.0",
    date: "February 2026",
    added: [
      "Complete authentication system with email, OAuth, and magic links",
      "Stripe billing integration with subscription management",
      "Multi-tenancy support with team workspaces",
      "Real-time collaboration features with live cursors and presence",
      "Comprehensive admin dashboard with analytics",
      "File storage system with upload and management",
      "Transactional email system with customizable templates",
      "AI integrations for enhanced functionality",
      "Pre-built blog templates with markdown support",
      "Responsive landing page components",
      "Role-based access control and permissions",
      "User profile management and settings",
      "Webhook support for external integrations",
      "SEO optimization and meta tag management",
      "Dark mode support with theme switching",
    ],
    fixed: [
      "Initial bug fixes and stability improvements",
      "Performance optimizations for database queries",
      "Mobile responsiveness issues across components",
    ],
    changed: [
      "Production-ready optimizations for deployment",
      "Enhanced security measures and best practices",
      "Improved documentation and code comments",
      "Updated dependencies to latest stable versions",
    ],
  },
  {
    version: "0.9.0",
    date: "January 2026",
    added: [
      "Beta release with core features",
      "Authentication and user management",
      "Basic billing integration",
      "Team workspace foundations",
      "Real-time data synchronization",
      "Initial component library",
    ],
    fixed: [
      "Authentication flow edge cases",
      "Billing webhook handling",
      "Real-time connection stability",
    ],
    changed: [
      "Refactored codebase for better maintainability",
      "Improved error handling and logging",
      "Enhanced TypeScript type coverage",
    ],
  },
  {
    version: "0.8.0",
    date: "December 2025",
    added: [
      "Alpha release for early testing",
      "Basic authentication setup",
      "Initial project structure",
      "Core UI components",
      "Database schema design",
    ],
    fixed: [
      "Initial setup and configuration issues",
      "Development environment setup",
    ],
    changed: [
      "Project architecture and folder structure",
      "Build and deployment configuration",
    ],
  },
];

function ChangelogEntryComponent({ entry }: { entry: ChangelogEntry }) {
  return (
    <div className="border-border relative border-b pb-12 last:border-b-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold">v{entry.version}</h3>
            <Badge variant="outline" className="text-muted-foreground">
              {entry.date}
            </Badge>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {entry.added && entry.added.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wider text-green-600 uppercase dark:text-green-400"></h4>
            <ul className="text-muted-foreground space-y-2">
              {entry.added.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {entry.fixed && entry.fixed.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Fixed
            </h4>
            <ul className="text-muted-foreground space-y-2">
              {entry.fixed.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {entry.changed && entry.changed.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wider text-orange-600 uppercase dark:text-orange-400">
              Changed
            </h4>
            <ul className="text-muted-foreground space-y-2">
              {entry.changed.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-orange-600 dark:text-orange-400">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {entry.removed && entry.removed.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wider text-red-600 uppercase dark:text-red-400">
              Removed
            </h4>
            <ul className="text-muted-foreground space-y-2">
              {entry.removed.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="from-foreground to-foreground dark:to-muted-foreground bg-linear-to-r bg-clip-text text-4xl font-semibold text-balance text-transparent sm:text-6xl">
              Changelog
            </h1>
            <p className="text-muted-foreground max-w-[640px] text-lg">
              Track FluxKit&apos;s evolution and new features
            </p>
          </div>

          <div className="w-full max-w-[800px] space-y-12">
            {changelogEntries.map((entry, index) => (
              <ChangelogEntryComponent key={index} entry={entry} />
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
