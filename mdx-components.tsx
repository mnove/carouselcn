import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import ComponentPreview from "./components/component-preview";
import { CodeBlock } from "./components/code-block";
import { CodeBlockCommand } from "./components/code-block-command";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    CodeBlock,
    CodeBlockCommand,
    ComponentPreview,
    ...components,
  };
}
