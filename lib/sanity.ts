import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true,
})

// Helper function to calculate reading time from body content
export function calculateReadingTime(body: any[]): number {
  if (!body || !Array.isArray(body)) return 1
  
  const text = body
    .filter(block => block._type === 'block')
    .map(block => 
      block.children
        ?.filter((child: any) => child._type === 'span')
        ?.map((span: any) => span.text)
        ?.join('') || ''
    )
    .join(' ')
  
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  
  return readingTime || 1
}

// Helper function to build Sanity image URLs with transformations
export function buildImageUrl(imageUrl: string, width?: number, height?: number, quality?: number): string {
  if (!imageUrl) return ''
  
  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  if (quality) params.append('q', quality.toString())
  params.append('fit', 'crop')
  params.append('auto', 'format')
  
  const queryString = params.toString()
  return queryString ? `${imageUrl}?${queryString}` : imageUrl
}

// Types for our CMS content
export interface Author {
  _id: string
  name: string
  role: string
  bio?: string
  image?: {
    asset: {
      url: string
    }
    alt?: string
  }
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any // Portable Text
  publishedAt: string
  author: Author
  sites: string[] // ['involv', 'assure', 'primeedge', 'lane']
  categories: { _id: string; title: string }[] // Resolved category objects
  tags: string[] // Your comprehensive tag list
  jurisdictions: string[] // ['VIC', 'NSW', 'QLD', 'SA', 'TAS']
  featured: boolean
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  postType: 'article' | 'whitepaper' | 'report'
  estimatedReadingTime?: number
  
  // NEW: Enhanced whitepaper/report fields
  downloadUrl?: string
  fileSize?: string
  fileFormat?: 'PDF' | 'DOCX' | 'PPTX' | 'XLSX'
  pageCount?: number
  requiresRegistration?: boolean
  downloadCount?: number
}

export interface CaseStudy {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any // Portable Text
  client: string
  industry: string
  challenge: string  // Note: keeping as string for backward compatibility
  solution: string   // Note: keeping as string for backward compatibility  
  results: string    // Note: keeping as string for backward compatibility
  publishedAt: string
  sites: string[]
  categories: { _id: string; title: string }[] // Resolved category objects
  tags: string[]
  jurisdictions: string[]
  featured?: boolean
  confidential?: boolean
  mainImage?: {
    asset: {
      url: string
    }
    alt: string
  }
  
  // NEW: Enhanced fields
  clientSize?: 'small' | 'medium' | 'large' | 'government'
  timeline?: {
    duration: string
    startDate?: string
    completionDate?: string
    phases?: Array<{
      phase: string
      duration: string
      description: string
    }>
  }
  outcome?: {
    status: 'success' | 'ongoing' | 'phase-complete'
    metrics?: Array<{
      metric: string
      value: string
      improvement?: string
    }>
    clientSatisfaction?: number
    testimonial?: string
  }
  servicesProvided?: string[]
}

// Fetch functions
export async function getPosts(site?: string, limit?: number, postType?: string): Promise<Post[]> {
  let query = `*[_type == "post"`
  
  const conditions = []
  if (site) conditions.push(`"${site}" in sites`)
  if (postType) conditions.push(`postType == "${postType}"`)
  
  if (conditions.length > 0) {
    query += ` && (${conditions.join(' && ')})`
  }
  
  query += `] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    author->{_id, name, role, bio, image{asset->{_id, url}, alt}},
    sites,
    categories[]->{title, _id},
    tags,
    jurisdictions,
    featured,
    mainImage{asset->{_id, url}, alt},
    postType,
    estimatedReadingTime,
    
    // NEW: Enhanced whitepaper/report fields
    downloadUrl,
    fileSize,
    fileFormat,
    pageCount,
    requiresRegistration,
    downloadCount
  }`
  
  return await sanity.fetch(query)
}

export async function getPost(slug: string): Promise<Post | null> {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      author->{_id, name, role, bio, image{asset->{_id, url}, alt}},
      sites,
      categories[]->{title, _id},
      tags,
      jurisdictions,
      featured,
      mainImage{asset->{_id, url}, alt},
      postType,
      estimatedReadingTime
    }
  `
  
  return await sanity.fetch(query)
}

export async function getCaseStudies(site?: string, limit?: number): Promise<CaseStudy[]> {
  let query = `*[_type == "caseStudy"`
  
  if (site) {
    query += ` && "${site}" in sites`
  }
  
  query += `] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    body,
    client,
    industry,
    clientSize,
    challenge,
    solution,
    results,
    publishedAt,
    sites,
    categories[]->{title, _id},
    tags,
    jurisdictions,
    featured,
    confidential,
    mainImage{asset->{_id, url}, alt},
    
    // NEW: Enhanced fields
    timeline,
    outcome,
    servicesProvided
  }`
  
  return await sanity.fetch(query)
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const query = `
    *[_type == "caseStudy" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      client,
      industry,
      challenge,
      solution,
      results,
      publishedAt,
      sites,
      categories[]->{title, _id},
      tags,
      jurisdictions,
      mainImage{asset->{_id, url}, alt}
    }
  `
  
  return await sanity.fetch(query)
}

// Helper function to get featured content for any site
export async function getFeaturedContent(site: string) {
  const [featuredPosts, recentArticles, whitepapers, caseStudies] = await Promise.all([
    getPosts(site, 3).then(posts => posts.filter(p => p.featured)),
    getPosts(site, 6, 'article'),
    getPosts(site, 3, 'whitepaper'),
    getCaseStudies(site, 3)
  ])

  return {
    featuredPosts,
    recentArticles,
    whitepapers,
    caseStudies
  }
}

// Helper to get posts by category
export async function getPostsByCategory(site: string, category: string, limit?: number): Promise<Post[]> {
  let query = `*[_type == "post" && "${site}" in sites && "${category}" in categories[]->title] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{name, role},
    categories[]->{title, _id},
    tags,
    mainImage{asset->{_id, url}, alt},
    postType
  }`
  
  return await sanity.fetch(query)
}

// Helper to get posts by jurisdiction
export async function getPostsByJurisdiction(site: string, jurisdiction: string, limit?: number): Promise<Post[]> {
  let query = `*[_type == "post" && "${site}" in sites && "${jurisdiction}" in jurisdictions] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{name, role},
    jurisdictions,
    categories[]->{title, _id},
    tags,
    mainImage{asset->{_id, url}, alt},
    postType
  }`
  
  return await sanity.fetch(query)
}

// Helper: Get whitepapers with download info
export async function getWhitepapers(site?: string, limit?: number): Promise<Post[]> {
  return getPosts(site, limit, 'whitepaper')
}

// Helper: Get case studies by industry
export async function getCaseStudiesByIndustry(site: string, industry: string, limit?: number): Promise<CaseStudy[]> {
  let query = `*[_type == "caseStudy" && "${site}" in sites && industry == "${industry}"] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    client,
    industry,
    timeline,
    outcome,
    publishedAt,
    mainImage{asset->{_id, url}, alt},
    featured
  }`
  
  return await sanity.fetch(query)
}

// Helper: Get successful case studies with testimonials
export async function getSuccessfulCaseStudies(site: string, limit?: number): Promise<CaseStudy[]> {
  let query = `*[_type == "caseStudy" && "${site}" in sites && outcome.status == "success"] | order(publishedAt desc)`
  
  if (limit) {
    query += ` [0...${limit}]`
  }
  
  query += ` {
    _id,
    title,
    slug,
    excerpt,
    client,
    industry,
    timeline,
    outcome,
    publishedAt,
    mainImage{asset->{_id, url}, alt}
  }`
  
  return await sanity.fetch(query)
}