"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { motion, type MotionProps, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  startOnView?: boolean;
}

export function AnimatedSpan({
  children,
  delay = 0,
  className,
  startOnView = false,
  ...props
}: AnimatedSpanProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(elementRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });
  const shouldAnimate = startOnView ? isInView : true;

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 60,
  delay = 0,
  as: _Component = "span",
  startOnView = true,
  ...props
}: TypingAnimationProps) {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(elementRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });

  useEffect(() => {
    if (started) return;

    if (!startOnView) {
      const startTimeout = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(startTimeout);
    }

    if (!isInView) return;

    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay, isInView, startOnView, started]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const typingEffect = setInterval(() => {
      if (currentIndex < children.length) {
        setDisplayedText(children.substring(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <motion.span
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </motion.span>
  );
}

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  sequence?: boolean;
  startOnView?: boolean;
  copyCommand?: string;
}

export function Terminal({
  children,
  className,
  sequence: _sequence = true,
  startOnView: _startOnView = true,
  copyCommand,
}: TerminalProps) {
  return (
    <div
      className={cn(
        "border-border bg-slate-950/90 z-0 flex w-full max-w-md items-center justify-between rounded-full border border-slate-800 px-2 py-1 shadow-md backdrop-blur-sm transition-all hover:shadow-lg",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between px-3">
        <div className="scrollbar-hide flex items-center overflow-x-auto py-1 font-mono text-sm tracking-tight">
          <span className="mr-2 inline-flex select-none items-center self-center text-lg leading-none font-semibold text-orange-300">
            $
          </span>
          {children}
        </div>
        {copyCommand ? (
          <div className="ml-4 shrink-0">
            <CopyButton command={copyCommand} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CopyButton({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      void navigator.clipboard.writeText(command);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = command;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
      } catch (error) {
        console.error("Fallback copy failed", error);
      }

      document.body.removeChild(textArea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="text-muted-foreground hover:text-foreground cursor-pointer rounded-md p-1.5 transition-colors hover:bg-muted/80"
      aria-label="Copy command"
    >
      {copied ? (
        <CheckIcon className="size-4 text-green-500" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </button>
  );
}
