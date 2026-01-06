/**
 * Core type definitions for HYROS Training Site
 * These types ensure consistency across the application and API
 */

/**
 * Training category (e.g., Agency, E-commerce, Calls)
 */
export interface Category {
  slug: string
  title: string
  description: string
  icon?: string
  lessonCount: number
  order: number
}

/**
 * Training module within a category
 */
export interface Module {
  slug: string
  title: string
  description: string
  categorySlug: string
  order: number
  lessons: LessonMeta[]
}

/**
 * Lesson metadata (for listings)
 */
export interface LessonMeta {
  slug: string
  title: string
  description: string
  categorySlug: string
  moduleSlug?: string
  duration: number // seconds
  order: number
  videoUrl?: string
  thumbnailUrl?: string
}

/**
 * Full lesson content (for lesson pages)
 */
export interface Lesson extends LessonMeta {
  content: string // MDX content
  problem?: string // Problem statement
  solution?: string // HYROS solution
  documentationLinks?: DocumentationLink[]
  relatedLessons?: string[] // Slugs of related lessons
  lastUpdated?: string // ISO date
}

/**
 * Link to HYROS documentation
 */
export interface DocumentationLink {
  title: string
  url: string
  description?: string
}

/**
 * Navigation item for sidebar/header
 */
export interface NavItem {
  title: string
  href: string
  icon?: string
  children?: NavItem[]
  isExternal?: boolean
}

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  title: string
  href: string
}

/**
 * Search result
 */
export interface SearchResult {
  type: 'lesson' | 'category' | 'module'
  slug: string
  title: string
  description: string
  categorySlug?: string
  excerpt?: string // Text snippet with match highlighted
  score: number // Relevance score
}

/**
 * API response wrapper
 */
export interface APIResponse<T> {
  data: T
  meta: {
    total: number
    timestamp: string
    version: string
  }
}

/**
 * API error response
 */
export interface APIError {
  error: {
    code: string
    message: string
    details?: Record<string, unknown>
  }
}

/**
 * Content index for LLM consumption
 */
export interface ContentIndex {
  categories: Category[]
  totalLessons: number
  lastUpdated: string
  structure: {
    category: string
    modules: {
      module: string
      lessons: string[]
    }[]
  }[]
}

/**
 * MDX frontmatter for lessons
 */
export interface LessonFrontmatter {
  title: string
  description: string
  category: string
  module?: string
  duration: number
  videoUrl?: string
  thumbnailUrl?: string
  problem?: string
  solution?: string
  order?: number
  documentationLinks?: DocumentationLink[]
  relatedLessons?: string[]
}

/**
 * Theme options
 */
export type Theme = 'light' | 'dark' | 'system'

/**
 * Page props with common fields
 */
export interface PageProps {
  params: Promise<{ slug?: string; category?: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
