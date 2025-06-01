import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl } from '../../lib/sanity'

interface HomePageProps {
  insights: Post[]
}

function InsightsSection({ insights }: { insights: Post[] }) {
  if (!insights || insights.length === 0) {
    return null // Section disappears if no posts
  }

  return (
    <section className="bg-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert analysis and insights across real estate, law firms, accounting, government, and sports integrity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {insights.slice(0, 3).map((post) => (
            <article key={post._id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              {/* Article Image */}
              {post.mainImage?.asset?.url ? (
                <div className="aspect-video w-full bg-gray-100">
                  <img 
                    src={buildImageUrl(post.mainImage.asset.url, 400, 225, 75)} 
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-purple-100 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category) => (
                      <span key={category._id} className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Title & Excerpt */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/insights/${post.slug.current}`} className="hover:text-purple-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                {post.excerpt && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                
                {/* Author & Date */}
                <div className="flex items-center text-xs text-gray-500">
                  <span>{post.author?.name || 'Lane Consulting'}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-AU', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center">
          <Link 
            href="/insights" 
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            View All Insights
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home({ insights }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Lane Consulting - Integrity and Risk Advisory</title>
        <meta name="description" content="Advisory for integrity and risk in real estate, law, government, and sport — using gaming-grade compliance thinking." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-lane.svg" 
                alt="Lane Consulting" 
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/sectors" className="text-gray-700 hover:text-gray-900">Sectors</Link>
              <Link href="/insights" className="text-gray-700 hover:text-gray-900">Insights</Link>
              <Link href="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Lane Consulting
            </h1>
            <p className="text-xl mb-4 font-medium">
              Integrity and risk advisory across multiple sectors.
            </p>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Advisory for integrity and risk in real estate, law, government, and sport — using gaming-grade compliance thinking developed through decades of experience.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact" className="bg-white text-purple-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </Link>
              <Link href="/about" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Sectors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectors.map((sector) => (
                <div key={sector.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{sector.title}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Lane Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Lane Consulting</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyLane.map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-8">
              We bring gaming-grade compliance thinking to sectors where integrity and risk management are paramount. Our methodology is built on rigorous frameworks developed through decades of experience in highly regulated environments.
            </p>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Gaming-Grade Compliance</h3>
              <p className="text-gray-700">
                The gaming industry operates under some of the strictest regulatory frameworks in the world. We apply this same level of rigor and attention to detail across all sectors we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        <InsightsSection insights={insights} />

        {/* CTA Section */}
        <section className="bg-purple-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to strengthen your integrity framework?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us discuss how our gaming-grade compliance approach can benefit your organization.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
                Contact Us
              </Link>
              <Link href="/about" className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <img 
                    src="/logo-lane.svg" 
                    alt="Lane Consulting" 
                    className="h-6 w-auto"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Advisory for integrity and risk across multiple sectors.
                </p>
                <p className="text-gray-500 text-xs mt-4">
                  Part of the Involv family
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Services</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
                  <li><Link href="/sectors" className="hover:text-gray-900">Sectors</Link></li>
                  <li><Link href="/faqs" className="hover:text-gray-900">FAQs</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/insights" className="hover:text-gray-900">Insights</Link></li>
                  <li><Link href="/case-studies" className="hover:text-gray-900">Case Studies</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Involv</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://involv.com.au" className="hover:text-gray-900">Main Site</a></li>
                  <li><a href="https://assure.involv.com.au" className="hover:text-gray-900">Assure</a></li>
                  <li><a href="https://primeedge.involv.com.au" className="hover:text-gray-900">PrimeEdge</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; 2025 Involv. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</Link>
                <Link href="/terms-of-use" className="hover:text-gray-700">Terms of Use</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch recent insights for the homepage
    const insights = await getPosts('lane', 3)
    
    return {
      props: {
        insights,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching insights for homepage:', error)
    return {
      props: {
        insights: [],
      },
      revalidate: 300,
    }
  }
}

const sectors = [
  {
    title: 'Real Estate',
    description: 'Integrity frameworks for property development, sales, and management operations.',
  },
  {
    title: 'Law Firms',
    description: 'Risk management and compliance systems for legal practices and client confidentiality.',
  },
  {
    title: 'Accountants',
    description: 'Professional standards and ethical frameworks for accounting and financial services.',
  },
  {
    title: 'Government',
    description: 'Governance frameworks and integrity systems for public sector organisations.',
  },
  {
    title: 'Sports Integrity',
    description: 'Anti-corruption and match-fixing prevention programs for sporting organisations.',
  },
]

const whyLane = [
  {
    title: 'Gaming-Grade Standards',
    description: 'We apply the rigorous compliance standards of the gaming industry to every sector we serve.',
  },
  {
    title: 'Proven Experience',
    description: 'Decades of experience in highly regulated environments translates to robust solutions.',
  },
  {
    title: 'Practical Implementation',
    description: 'We focus on frameworks that work in practice, not just on paper.',
  },
]