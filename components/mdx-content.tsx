"use client";

import * as runtime from "react/jsx-runtime";
import { useMemo } from "react";

const useMDXComponent = (code: string) => {
  return useMemo(() => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
  }, [code]);
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function MDXContent({ code, components }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
