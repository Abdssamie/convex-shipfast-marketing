import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import type { MDXComponents } from "nextra/mdx-components";

const mdxComponents: MDXComponents = {};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getThemeComponents({
    ...mdxComponents,
    ...components,
  });
}
