import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Calendar, Newspaper, ExternalLink, ChevronRight } from 'lucide-react'

interface NewsPageProps {
  newsArticles: Post[]
}

export default function NewsPressReleases({ newsArticles }: NewsPageProps) {
  return (
    <>
      <Head>
        <title>News & Press Releases | Lane Consulting</title>
        <meta name="description" content="Latest news, announcements, and press releases from Lane Consulting. Stay updated on regulatory changes and company developments." />
        <meta name="keywords" content="Lane Consulting news, press releases, AML updates, regulatory announcements, company news" />
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
                Latest Updates
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              <span className="text-[#66899b] italic">News</span> & Press Releases
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Stay informed with the latest news, announcements, and regulatory updates from Lane Consulting. 
              Follow our journey and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/our-thinking" className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
                View All Insights
              </Link>
              <Link href="/contact" className="text-white px-8 py-4 rounded-md text-lg font-medium hover:text-[#66899b] transition-colors duration-200 underline">
                Contact Media Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <div className="bg-white text-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          {newsArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-10 h-10 text-[#66899b]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                News Coming Soon
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                We&apos;re preparing to share exciting news, announcements, and regulatory updates. 
                Check back soon for the latest developments.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#66899b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200"
                >
                  Contact for Media Enquiries
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Latest News & Announcements
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay up to date with Lane Consulting news, regulatory updates, and industry developments 
                  that matter to your business.
                </p>
              </div>

              <div className="space-y-8">
                {newsArticles.map((article, index) => {
                  const readingTime = article.estimatedReadingTime || calculateReadingTime(article.body)
                  const isRecent = index < 3
                  
                  return (
                    <article key={article._id} className={`bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all ${isRecent ? 'border-[#66899b] border-opacity-30' : ''}`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Image */}
                        <div className="md:col-span-1">
                          {article.mainImage?.asset?.url ? (
                            <div className="aspect-video md:aspect-square w-full bg-gray-100 relative">
                              <img 
                                src={buildImageUrl(article.mainImage.asset.url, 400, 300, 75)} 
                                alt={article.mainImage.alt || article.title}
                                className="w-full h-full object-cover"
                              />
                              {isRecent && (
                                <div className="absolute top-4 left-4 bg-[#66899b] text-white px-3 py-1 rounded-full text-xs font-medium">
                                  Latest
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="aspect-video md:aspect-square w-full bg-gradient-to-br from-[#66899b] bg-opacity-10 to-gray-100 flex items-center justify-center relative">
                              <div className="text-center text-gray-400">
                                <Newspaper className="w-12 h-12 mx-auto mb-2" />
                                <p className="text-sm">News Article</p>
                              </div>
                              {isRecent && (
                                <div className="absolute top-4 left-4 bg-[#66899b] text-white px-3 py-1 rounded-full text-xs font-medium">
                                  Latest
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="md:col-span-2 p-6">
                          {/* Date and Categories */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-2" />
                              {new Date(article.publishedAt).toLocaleDateString('en-AU', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </div>
                            {article.categories && article.categories.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {article.categories.slice(0, 2).map((category) => (
                                  <span key={category._id} className="bg-[#66899b] text-white px-2 py-1 rounded text-xs font-medium">
                                    {category.title}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          {/* Title */}
                          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                            <Link href={`/our-thinking/${article.slug.current}`} className="hover:text-[#66899b] transition-colors">
                              {article.title}
                            </Link>
                          </h2>
                          
                          {/* Excerpt */}
                          {article.excerpt && (
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {article.excerpt}
                            </p>
                          )}
                          
                          {/* Tags */}
                          {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {article.tags.slice(0, 4).map((tag) => (
                                <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Meta and CTA */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            {/* Author */}
                            <div className="flex items-center">
                              {article.author?.image?.asset?.url ? (
                                <img 
                                  src={buildImageUrl(article.author.image.asset.url, 40, 40, 80)} 
                                  alt={article.author.image.alt || article.author.name}
                                  className="w-8 h-8 rounded-full object-cover mr-3"
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-[#66899b] flex items-center justify-center mr-3">
                                  <span className="text-xs font-medium text-white">
                                    {article.author?.name?.charAt(0).toUpperCase() || '?'}
                                  </span>
                                </div>
                              )}
                              
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {article.author?.name || 'Lane Consulting'}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {readingTime} min read
                                </p>
                              </div>
                            </div>
                            
                            {/* Read More */}
                            <Link
                              href={`/our-thinking/${article.slug.current}`}
                              className="bg-[#66899b] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5a7a8a] transition-colors duration-200 flex items-center"
                            >
                              Read Full Article
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              {/* Load More Section */}
              {newsArticles.length >= 10 && (
                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-4">
                    Showing the {newsArticles.length} most recent articles
                  </p>
                  <Link
                    href="/contact"
                    className="text-[#66899b] font-medium hover:underline"
                  >
                    Contact us for archived news and press releases
                  </Link>
                </div>
              )}
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
    const allPosts = await getPosts('lane', 50)
    
    const newsArticles = allPosts.filter(post => 
      post.categories?.some(category => 
        category.title === 'newsPress' ||
        category.title === 'News & Press Releases' ||
        category.title.toLowerCase().includes('newspress')
      )
    )
    
    // Sort by published date (most recent first)
    newsArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    
    return {
      props: {
        newsArticles,
      },
      revalidate: 300,
    }
  } catch (error) {
    console.error('Error fetching news articles:', error)
    return {
      props: {
        newsArticles: [],
      },
      revalidate: 300,
    }
  }
}