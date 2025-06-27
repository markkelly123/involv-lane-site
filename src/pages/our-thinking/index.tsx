import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

interface OurThinkingPageProps {
  posts: Post[]
}

export default function OurThinking({ posts }: OurThinkingPageProps) {
  return (
    <>
      <Head>
        <title>Our Thinking | Lane Consulting</title>
        <meta name="description" content="Expert insights on AML compliance, Tranche 2 requirements, and regulatory guidance for Australian businesses." />
        <meta name="keywords" content="AML insights, Tranche 2, compliance articles, regulatory guidance, Lane Consulting" />
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
                Insights & Analysis
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Our <span className="text-[#66899b] italic">Thinking</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Expert insights, regulatory analysis, and practical guidance on AML compliance, 
              Tranche 2 requirements, and the evolving regulatory landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Content */}
      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Insights Coming Soon
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                We&apos;re preparing comprehensive insights and analysis on AML compliance 
                and Tranche 2 requirements. Check back soon for expert guidance.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#66899b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200"
                >
                  Contact Us for Immediate Guidance
                </Link>
                <p className="text-sm text-gray-500">
                  Create content in Sanity Studio and tag it with 'lane' site.{' '}
                  <Link href="http://localhost:3333" className="text-[#66899b] hover:underline">
                    Open Sanity Studio
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Latest Insights
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay informed with our expert analysis on compliance requirements, 
                  regulatory changes, and best practices for Tranche 2 entities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const readingTime = post.estimatedReadingTime || calculateReadingTime(post.body)
                  
                  return (
                    <article key={post._id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
                      {/* Main Image */}
                      {post.mainImage?.asset?.url ? (
                        <div className="aspect-video w-full bg-gray-100">
                          <img 
                            src={buildImageUrl(post.mainImage.asset.url, 600, 340, 75)} 
                            alt={post.mainImage.alt || post.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.log('Image failed to load:', post.mainImage?.asset?.url)
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        </div>
                      ) : (
                        <div className="aspect-video w-full bg-gradient-to-br from-[#66899b] bg-opacity-10 to-gray-100 flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm">No image</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="p-6">
                        {/* Categories */}
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.slice(0, 2).map((category) => (
                              <span key={category._id} className="bg-[#66899b] text-white px-2 py-1 rounded text-xs font-medium">
                                {category.title}
                              </span>
                            ))}
                            {post.categories.length > 2 && (
                              <span className="text-gray-500 text-xs">+{post.categories.length - 2} more</span>
                            )}
                          </div>
                        )}
                        
                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-900">
                          <Link href={`/our-thinking/${post.slug.current}`} className="hover:text-[#66899b] transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        
                        {/* Excerpt */}
                        {post.excerpt && (
                          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-gray-400 text-xs">+{post.tags.length - 3}</span>
                            )}
                          </div>
                        )}
                        
                        {/* Author and Meta */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center">
                            {/* Author Avatar */}
                            {post.author?.image?.asset?.url ? (
                              <img 
                                src={buildImageUrl(post.author.image.asset.url, 40, 40, 80)} 
                                alt={post.author.image.alt || post.author.name}
                                className="w-8 h-8 rounded-full object-cover mr-3"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-[#66899b] flex items-center justify-center mr-3">
                                <span className="text-xs font-medium text-white">
                                  {post.author?.name?.charAt(0).toUpperCase() || '?'}
                                </span>
                              </div>
                            )}
                            
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {post.author?.name || 'Lane Consulting'}
                              </p>
                              <p className="text-xs text-gray-500">
                                {new Date(post.publishedAt).toLocaleDateString('en-AU', {
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
    // Fetch posts for the 'lane' site
    const posts = await getPosts('lane', 20)
    
    return {
      props: {
        posts,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return {
      props: {
        posts: [],
      },
      revalidate: 300,
    }
  }
}