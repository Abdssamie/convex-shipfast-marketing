"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number((currentScrollY / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial check

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

interface TocItem {
  id: string;
  title: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -40% 0px" } // trigger when heading crosses middle
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav className="space-y-4">
      <p className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className={cn(
                "block transition-all hover:text-foreground",
                activeId === item.id
                  ? "text-primary font-medium translate-x-1"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
