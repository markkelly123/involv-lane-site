import Head from 'next/head'

export default function Home() {
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
              <span className="text-2xl font-bold text-purple-600">Lane Consulting</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/sectors" className="text-gray-700 hover:text-gray-900">Sectors</a>
              <a href="/insights" className="text-gray-700 hover:text-gray-900">Insights</a>
              <a href="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="/contact" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                Contact
              </a>
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
              <a href="/contact" className="bg-white text-purple-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </a>
              <a href="/about" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </a>
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

        {/* CTA Section */}
        <section className="bg-purple-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to strengthen your integrity framework?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our gaming-grade compliance approach can benefit your organization.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
                Contact Us
              </a>
              <a href="/about" className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <span className="text-xl font-bold text-purple-600 mb-4 block">Lane Consulting</span>
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
                  <li><a href="/about" className="hover:text-gray-900">About</a></li>
                  <li><a href="/sectors" className="hover:text-gray-900">Sectors</a></li>
                  <li><a href="/faqs" className="hover:text-gray-900">FAQs</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/insights" className="hover:text-gray-900">Insights</a></li>
                  <li><a href="/case-studies" className="hover:text-gray-900">Case Studies</a></li>
                  <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
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
                <a href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</a>
                <a href="/terms-of-use" className="hover:text-gray-700">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
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
    description: 'Governance frameworks and integrity systems for public sector organizations.',
  },
  {
    title: 'Sports Integrity',
    description: 'Anti-corruption and match-fixing prevention programs for sporting organizations.',
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