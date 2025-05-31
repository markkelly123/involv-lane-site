import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'

interface InsightsPageProps {
  posts: Post[]
}

export default function Insights({ posts }: InsightsPageProps) {
  return (
    <>
      <Head>
        <title>Insights - Lane Consulting</title>
        <meta name="description" content="Latest insights and articles from Lane Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Lane Consulting Insights</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Expert analysis and insights across real estate, law firms, accounting, government, and sports integrity.
            </p>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              <p className="text-xl mb-4">No posts found for Lane Consulting.</p>
              <p className="mb-4">Create content in Sanity Studio and tag it with 'lane' site.</p>
              <p>
                <Link href="http://localhost:3333" className="text-blue-400 hover:underline">
                  Open Sanity Studio
                </Link>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const readingTime = post.estimatedReadingTime || calculateReadingTime(post.body)
                
                return (
                  <article key={post._id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
                    {/* Main Image */}
                    {post.mainImage?.asset?.url ? (
                      <div className="aspect-video w-full bg-gray-800">
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
                      <div className="aspect-video w-full bg-gradient-to-br from-blue-900 to-gray-800 flex items-center justify-center">
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
                            <span key={category._id} className="bg-blue-600 px-2 py-1 rounded text-xs font-medium">
                              {category.title}
                            </span>
                          ))}
                          {post.categories.length > 2 && (
                            <span className="text-gray-400 text-xs">+{post.categories.length - 2} more</span>
                          )}
                        </div>
                      )}
                      
                      {/* Title */}
                      <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                        <Link href={`/insights/${post.slug.current}`} className="hover:text-blue-400 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                      
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-gray-500 text-xs">+{post.tags.length - 3}</span>
                          )}
                        </div>
                      )}
                      
                      {/* Author and Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="flex items-center">
                          {/* Author Avatar */}
                          {post.author?.image?.asset?.url ? (
                            <img 
                              src={buildImageUrl(post.author.image.asset.url, 40, 40, 80)} 
                              alt={post.author.image.alt || post.author.name}
                              className="w-8 h-8 rounded-full object-cover mr-3"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                              <span className="text-xs font-medium text-gray-300">
                                {post.author?.name?.charAt(0).toUpperCase() || '?'}
                              </span>
                            </div>
                          )}
                          
                          <div>
                            <p className="text-sm font-medium text-gray-200">
                              {post.author?.name || 'Unknown Author'}
                            </p>
                            <p className="text-xs text-gray-400">
                              {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        
                        {/* Reading Time */}
                        <div className="text-xs text-gray-400 flex items-center">
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
          )}
          
          <div className="text-center mt-12">
            <Link href="/" className="text-blue-400 hover:underline flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
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