import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Landmark, CreditCard, Shield, ChevronRight, Calendar, CheckCircle, Users, Award } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getPosts, Post } from '../../lib/sanity'

interface HomePageProps {
  posts: Post[]
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  const services = [
    {
      title: "Tranche 2 Entities",
      description: "Comprehensive AML compliance for real estate professionals, lawyers, accountants, and jewellers navigating complex regulatory requirements.",
      sectors: ["Real Estate", "Legal Practices", "Accounting Firms", "Jewellers"],
      href: "/what-we-do/tranche-2-entities",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: "Financial & Payment Services",
      description: "Expert guidance for financial institutions and fintech companies ensuring robust AML controls and regulatory adherence.",
      sectors: ["Banking", "Fintech", "Payment Processors", "Money Service Businesses"],
      href: "/what-we-do/financial-payment-services",
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      title: "Sports Integrity",
      description: "Protecting sporting organisations through comprehensive anti-corruption frameworks and match-fixing prevention strategies.",
      sectors: ["Professional Sports", "Sporting Bodies", "Betting Operators", "Event Organisers"],
      href: "/what-we-do/sports-integrity",
      icon: <Shield className="w-8 h-8" />
    }
  ]

  const differentiators = [
    {
      title: "Specialised Expertise",
      description: "Deep, focused knowledge of AML requirements for designated non-financial businesses and professions.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Practical Implementation",
      description: "Solutions designed to work within your existing operations, minimising disruption while ensuring compliance.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Proven Results",
      description: "Trusted by professionals across Australia with a track record of successful compliance implementations.",
      icon: <Users className="w-6 h-6" />
    }
  ]

  return (
    <>
      <Head>
        <title>Lane Consulting | Australia&apos;s Most Trusted AML Advisory for Tranche 2 Entities</title>
        <meta name="description" content="Expert AML compliance advisory for Tranche 2 entities including real estate professionals, lawyers, accountants, and jewellers. Navigate complex regulatory requirements with confidence." />
        <meta name="keywords" content="Tranche 2, AML compliance, real estate AML, legal practice compliance, accounting firm AML, AUSTRAC, Lane Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/lighthouse-hero.jpg"
            alt="Lighthouse on rocky coastline providing guidance"
            fill
            className="object-cover"
            priority
          />
          {/* Stronger overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Additional gradient overlay for extra contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Australia&apos;s most trusted AML advisory for{' '}
            <span className="text-[#89b3c5] font-serif italic drop-shadow-lg">Tranche 2 entities</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            Providing expert guidance through complex regulatory landscapes. 
            Navigate AML compliance with confidence.
          </p>

          {/* Value Proposition */}
          <div className="mb-10 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
              Specialising in real estate professionals, lawyers, accountants, jewellers, 
              and other designated non-financial businesses and professions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-[#66899b] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#5a7a8a] transition-colors duration-200 shadow-lg"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/what-we-do/tranche-2-entities"
              className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-sm font-light opacity-80 mb-4">
              Trusted by professionals across Australia
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-70">
              <div className="text-sm font-medium">
                AUSTRAC Compliant
              </div>
              <div className="text-sm font-medium">
                Legal Practice Certified
              </div>
              <div className="text-sm font-medium">
                Real Estate Licensed
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronRight className="w-6 h-6 text-white opacity-70 rotate-90" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialised AML advisory services across key sectors, delivering 
              tailored compliance solutions that protect your organisation and ensure 
              regulatory adherence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon and Title */}
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center text-[#66899b]">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sectors */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Sectors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.sectors.map((sector, sectorIndex) => (
                      <span 
                        key={sectorIndex}
                        className="inline-block bg-[#66899b] bg-opacity-10 text-[#66899b] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-[#66899b] font-medium hover:text-[#5a7a8a] transition-colors duration-200"
                >
                  Learn more
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Ready to Strengthen Your AML Compliance?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert team is ready to guide you through complex regulatory requirements 
              and help you build robust compliance frameworks.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#66899b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200 shadow-sm"
            >
              Schedule a Consultation
              <Calendar className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Lane Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Why Choose Lane Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialised focus and practical approach ensure you receive compliance solutions that 
              are both comprehensive and implementable within your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {differentiators.map((differentiator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center text-[#66899b] mx-auto mb-6">
                  {differentiator.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{differentiator.title}</h3>
                <p className="text-gray-600 leading-relaxed">{differentiator.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/who-we-are"
              className="inline-flex items-center text-[#66899b] font-medium hover:text-[#5a7a8a] transition-colors duration-200"
            >
              Learn more about our approach
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      {posts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Thinking
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Latest insights and expert analysis on AML compliance and regulatory guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {posts.slice(0, 3).map((post) => (
                <article key={post._id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link 
                        href={`/our-thinking/${post.slug.current}`}
                        className="hover:text-[#66899b] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/our-thinking"
                className="inline-flex items-center bg-[#66899b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200"
              >
                View All Insights
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPosts('lane', 3)
    
    return {
      props: {
        posts,
      },
      revalidate: 300,
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

export default HomePage