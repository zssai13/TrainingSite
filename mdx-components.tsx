import type { MDXComponents } from 'mdx/types'

/**
 * MDX Component Overrides
 *
 * This file provides custom components for MDX content rendering.
 * All components are designed for accessibility and LLM readability.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Preserve default components and add custom ones
    ...components,

    // Custom heading components with proper semantic structure
    h1: ({ children, ...props }) => (
      <h1 className="font-heading text-4xl lg:text-5xl" {...props}>
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2 className="mt-10 text-2xl font-semibold" {...props}>
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3 className="mt-8 text-xl font-medium" {...props}>
        {children}
      </h3>
    ),

    // Links with proper styling
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-[hsl(var(--link))] underline underline-offset-2 transition-colors hover:text-[hsl(var(--link-hover))]"
        {...props}
      >
        {children}
      </a>
    ),

    // Paragraphs with proper spacing
    p: ({ children, ...props }) => (
      <p className="mb-5 leading-relaxed" {...props}>
        {children}
      </p>
    ),

    // Lists
    ul: ({ children, ...props }) => (
      <ul className="mb-5 list-disc pl-6 space-y-2" {...props}>
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol className="mb-5 list-decimal pl-6 space-y-2" {...props}>
        {children}
      </ol>
    ),

    // Code blocks
    pre: ({ children, ...props }) => (
      <pre
        className="mb-5 overflow-x-auto rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),

    code: ({ children, ...props }) => (
      <code
        className="rounded bg-[hsl(var(--muted))] px-1.5 py-0.5 font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    ),

    // Blockquotes
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="mb-5 border-l-4 border-[hsl(var(--border))] pl-4 italic text-[hsl(var(--muted-foreground))]"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Horizontal rule
    hr: (props) => <hr className="my-8 border-[hsl(var(--border))]" {...props} />,

    // Tables
    table: ({ children, ...props }) => (
      <div className="mb-5 overflow-x-auto">
        <table className="w-full border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),

    th: ({ children, ...props }) => (
      <th
        className="border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-2 text-left font-semibold"
        {...props}
      >
        {children}
      </th>
    ),

    td: ({ children, ...props }) => (
      <td className="border border-[hsl(var(--border))] px-4 py-2" {...props}>
        {children}
      </td>
    ),

    // Images with rounded corners
    img: (props) => (
      <img className="my-5 rounded-lg" alt={props.alt || ''} {...props} />
    ),
  }
}
