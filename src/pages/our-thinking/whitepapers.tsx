import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Download, FileText, Calendar } from 'lucide-react'

interface WhitepapersPageProps {
  whitepapers: Post[]
}

export default function Whitepapers({ whitepapers }: WhitepapersPageProps) {
  return (
    <>
      <Head>
        <title>Whitepapers | Lane Consulting</title>
        <meta name="description" content="Download comprehensive whitepapers on AML compliance, Tranche 2 requirements, and regulatory best practices for Australian businesses." />
        <meta name="keywords" content="AML whitepapers, Tranche 2 guides, compliance resources, regulatory whitepapers, Lane Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#66899b] bg-opacity-20 text-[#66899b] border border-[#66899b] border-opacity-30 rounded-full text-sm font-medium">
                Resources & Guides
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              <span className="text-[#66899b] italic">Whitepapers</span> & Guides
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Download comprehensive guides and whitepapers on AML compliance, Tranche 2 implementation, 
              and regulatory best practices. Expert insights you can reference and share.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/our-thinking" className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
                View All Insights
              </Link>
              <Link href="/our-thinking/case-studies" className="text-white px-8 py-4 rounded-md text-lg font-medium hover:text-[#66899b] transition-colors duration-200 underline">
                Browse Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Content */}
      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          {whitepapers.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-[#66899b]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Whitepapers Coming Soon
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                We&apos;re preparing comprehensive whitepapers and guides on AML compliance, 
                Tranche 2 requirements, and regulatory best practices. Check back soon.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#66899b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200"
                >
                  Request Custom Guidance
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Expert Resources & Guides
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive whitepapers covering essential compliance topics, regulatory requirements, 
                  and implementation strategies for Australian businesses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whitepapers.map((whitepaper) => {
                  const readingTime = whitepaper.estimatedReadingTime || calculateReadingTime(whitepaper.body)
                  
                  return (
                    <article key={whitepaper._id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
                      {/* Main Image */}
                      {whitepaper.mainImage?.asset?.url ? (
                        <div className="aspect-video w-full bg-gray-100 relative">
                          <img 
                            src={buildImageUrl(whitepaper.mainImage.asset.url, 600, 340, 75)} 
                            alt={whitepaper.mainImage.alt || whitepaper.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.log('Image failed to load:', whitepaper.mainImage?.asset?.url)
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                          {/* Whitepaper overlay indicator */}
                          <div className="absolute top-4 right-4 bg-[#66899b] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <FileText className="w-3 h-3 mr-1" />
                            Whitepaper
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-video w-full bg-gradient-to-br from-[#66899b] bg-opacity-10 to-gray-100 flex items-center justify-center relative">
                          <div className="text-center text-gray-400">
                            <FileText className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm">Whitepaper</p>
                          </div>
                          <div className="absolute top-4 right-4 bg-[#66899b] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <FileText className="w-3 h-3 mr-1" />
                            Whitepaper
                          </div>
                        </div>
                      )}
                      
                      <div className="p-6">
                        {/* Categories */}
                        {whitepaper.categories && whitepaper.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {whitepaper.categories.slice(0, 2).map((category) => (
                              <span key={category._id} className="bg-[#66899b] text-white px-2 py-1 rounded text-xs font-medium">
                                {category.title}
                              </span>
                            ))}
                            {whitepaper.categories.length > 2 && (
                              <span className="text-gray-500 text-xs">+{whitepaper.categories.length - 2} more</span>
                            )}
                          </div>
                        )}
                        
                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-900">
                          <Link href={`/our-thinking/${whitepaper.slug.current}`} className="hover:text-[#66899b] transition-colors">
                            {whitepaper.title}
                          </Link>
                        </h2>
                        
                        {/* Excerpt */}
                        {whitepaper.excerpt && (
                          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                            {whitepaper.excerpt}
                          </p>
                        )}
                        
                        {/* Tags */}
                        {whitepaper.tags && whitepaper.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {whitepaper.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                            {whitepaper.tags.length > 3 && (
                              <span className="text-gray-400 text-xs">+{whitepaper.tags.length - 3}</span>
                            )}
                          </div>
                        )}
                        
                        {/* Author and Meta */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center">
                            {/* Author Avatar */}
                            {whitepaper.author?.image?.asset?.url ? (
                              <img 
                                src={buildImageUrl(whitepaper.author.image.asset.url, 40, 40, 80)} 
                                alt={whitepaper.author.image.alt || whitepaper.author.name}
                                className="w-8 h-8 rounded-full object-cover mr-3"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-[#66899b] flex items-center justify-center mr-3">
                                <span className="text-xs font-medium text-white">
                                  {whitepaper.author?.name?.charAt(0).toUpperCase() || '?'}
                                </span>
                              </div>
                            )}
                            
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {whitepaper.author?.name || 'Lane Consulting'}
                              </p>
                              <p className="text-xs text-gray-500">
                                {new Date(whitepaper.publishedAt).toLocaleDateString('en-AU', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                          
                          {/* Reading Time */}
                          <div className="text-xs text-gray-500 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {readingTime} min read
                          </div>
                        </div>

                        {/* Download CTA for whitepapers */}
                        <div className="mt-4">
                          <Link
                            href={`/our-thinking/${whitepaper.slug.current}`}
                            className="w-full bg-[#66899b] text-white px-4 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200 flex items-center justify-center"
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Read Whitepaper
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch whitepapers for the 'lane' site
    // This assumes you have a category called 'whitepaper' or similar
    // You may need to modify the query based on your Sanity schema
    const allPosts = await getPosts('lane', 50)
    
    // Filter for whitepapers - adjust this logic based on your categorization method
    const whitepapers = allPosts.filter(post => 
      post.categories?.some(category => 
        category.title.toLowerCase().includes('whitepaper') || 
        category.title.toLowerCase().includes('guide') ||
        category.title.toLowerCase().includes('resource')
      )
    )
    
    return {
      props: {
        whitepapers,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching whitepapers:', error)
    return {
      props: {
        whitepapers: [],
      },
      revalidate: 300,
    }
  }
}