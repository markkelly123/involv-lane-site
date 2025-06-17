import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { PortableText } from '@portabletext/react'
import { getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { ChevronLeft, Calendar, Clock, User, Tag } from 'lucide-react'

interface PostPageProps {
  post: Post
}

const components = {
  block: {
    h1: ({ children }: any) => <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-3 mt-6">{children}</h3>,
    h4: ({ children }: any) => <h4 className="font-serif text-lg md:text-xl font-semibold text-gray-900 mb-2 mt-4">{children}</h4>,
    normal: ({ children }: any) => <p className="text-gray-600 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#66899b] pl-6 my-6 text-gray-700 italic text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-600">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
    number: ({ children }: any) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        className="text-[#66899b] hover:text-[#5a7a8a] transition-colors underline"
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
}

export default function PostPage({ post }: PostPageProps) {
  const readingTime = post.estimatedReadingTime || calculateReadingTime(post.body)

  return (
    <>
      <Head>
        <title>{post.title} | Our Thinking | Lane Consulting</title>
        <meta name="description" content={post.excerpt || `Read ${post.title} - expert insights from Lane Consulting on AML compliance and regulatory guidance.`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        {post.author && <meta property="article:author" content={post.author.name} />}
        {post.tags && <meta name="keywords" content={post.tags.join(', ')} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/our-thinking"
            className="inline-flex items-center text-[#66899b] hover:text-[#5a7a8a] transition-colors font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Our Thinking
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="inline-block bg-[#66899b] bg-opacity-10 text-[#66899b] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-200">
            {/* Author */}
            {post.author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author.name}</span>
                {post.author.image?.asset?.url && (
                  <img
                    src={buildImageUrl(post.author.image.asset.url, 24, 24, 80)}
                    alt={post.author.image.alt || post.author.name}
                    className="w-6 h-6 rounded-full ml-2 object-cover"
                  />
                )}
              </div>
            )}

            {/* Published Date */}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time>
                {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* Reading Time */}
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={buildImageUrl(post.mainImage.asset.url, 1200, 675, 75)}
                alt={post.mainImage.alt || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={components} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="w-4 h-4 text-gray-500 mr-2" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {post.author?.bio && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
              <div className="flex items-start">
                {post.author.image?.asset?.url && (
                  <img
                    src={buildImageUrl(post.author.image.asset.url, 48, 48, 80)}
                    alt={post.author.image.alt || post.author.name}
                    className="w-12 h-12 rounded-full mr-4 flex-shrink-0 object-cover"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900 mb-1">{post.author.name}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-[#66899b] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Need Expert AML Guidance?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Our team is ready to help you navigate complex compliance requirements 
            and implement robust AML frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#66899b] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/our-thinking"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#66899b] transition-colors duration-200"
            >
              Read More Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Get all posts for lane site to generate paths
    const posts = await getPosts('lane', 1000) // Get more posts to ensure we get all slugs
    
    const paths = posts.map((post) => ({
      params: { slug: post.slug.current },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    console.error('Error fetching posts for paths:', error)
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (!params?.slug || typeof params.slug !== 'string') {
      return {
        notFound: true,
      }
    }

    // Get all posts and find the one with matching slug
    const posts = await getPosts('lane', 1000)
    const post = posts.find(p => p.slug.current === params.slug)

    if (!post) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        post,
      },
      revalidate: 300,
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return {
      notFound: true,
    }
  }
}