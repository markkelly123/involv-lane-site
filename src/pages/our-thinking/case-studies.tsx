import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { CheckCircle, TrendingUp } from 'lucide-react'

interface CaseStudiesPageProps {
  caseStudies: Post[]
}

export default function CaseStudies({ caseStudies }: CaseStudiesPageProps) {
  return (
    <>
      <Head>
        <title>Case Studies | Lane Consulting</title>
        <meta name="description" content="Real-world case studies showcasing successful AML compliance implementations and regulatory solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              <span className="text-[#66899b] italic">Case Studies</span> & Success Stories
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Discover how we&apos;ve helped Australian businesses successfully navigate AML compliance and achieve regulatory excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Content */}
      <div className="bg-white text-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          {caseStudies.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-[#66899b]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Case Studies Coming Soon
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                We&apos;re preparing detailed case studies showcasing successful compliance implementations.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#66899b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200"
              >
                Discuss Your Project
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Real-World Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Learn from detailed case studies showcasing successful compliance implementations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((caseStudy) => {
                  const readingTime = caseStudy.estimatedReadingTime || calculateReadingTime(caseStudy.body)
                  
                  return (
                    <article key={caseStudy._id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                      {/* Main Image */}
                      {caseStudy.mainImage?.asset?.url ? (
                        <div className="aspect-video w-full bg-gray-100">
                          <img 
                            src={buildImageUrl(caseStudy.mainImage.asset.url, 600, 340, 75)} 
                            alt={caseStudy.mainImage.alt || caseStudy.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video w-full bg-gradient-to-br from-[#66899b] bg-opacity-10 to-gray-100 flex items-center justify-center">
                          <div className="text-center text-gray-400">
                            <CheckCircle className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm">Case Study</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="p-6">
                        {/* Categories */}
                        {caseStudy.categories && caseStudy.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {caseStudy.categories.slice(0, 2).map((category) => (
                              <span key={category._id} className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                                {category.title}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-3 text-gray-900">
                          <Link href={`/our-thinking/${caseStudy.slug.current}`} className="hover:text-[#66899b] transition-colors">
                            {caseStudy.title}
                          </Link>
                        </h2>
                        
                        {/* Excerpt */}
                        {caseStudy.excerpt && (
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            {caseStudy.excerpt}
                          </p>
                        )}
                        
                        {/* Author and Meta */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center">
                            {caseStudy.author?.image?.asset?.url ? (
                              <img 
                                src={buildImageUrl(caseStudy.author.image.asset.url, 40, 40, 80)} 
                                alt={caseStudy.author.image.alt || caseStudy.author.name}
                                className="w-8 h-8 rounded-full object-cover mr-3"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-[#66899b] flex items-center justify-center mr-3">
                                <span className="text-xs font-medium text-white">
                                  {caseStudy.author?.name?.charAt(0).toUpperCase() || '?'}
                                </span>
                              </div>
                            )}
                            
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {caseStudy.author?.name || 'Lane Consulting'}
                              </p>
                              <p className="text-xs text-gray-500">
                                {new Date(caseStudy.publishedAt).toLocaleDateString('en-AU')}
                              </p>
                            </div>
                          </div>
                          
                          <div className="text-xs text-gray-500">
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
    const allPosts = await getPosts('lane', 50)
    
    const caseStudies = allPosts.filter(post => 
      post.categories?.some(category => 
        category.title.toLowerCase() === 'casestudy' || 
        category.title === 'caseStudy'
      )
    )
    
    return {
      props: {
        caseStudies,
      },
      revalidate: 300,
    }
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return {
      props: {
        caseStudies: [],
      },
      revalidate: 300,
    }
  }
}