import type { MDXComponents } from "nextra/mdx-components";
import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";

const mdxComponents: MDXComponents = {};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getThemeComponents({
    ...mdxComponents,
    ...components,
  });
}
