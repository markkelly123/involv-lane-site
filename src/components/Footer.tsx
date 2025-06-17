import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo-lane.png"
                alt="Lane Consulting"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Australia's most trusted AML advisory for Tranche 2 entities. 
              Providing expert guidance through complex regulatory landscapes.
            </p>
            <div className="text-sm text-gray-500">
              <p>Melbourne, Victoria</p>
              <p>Australia</p>
            </div>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Who We Are</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/who-we-are" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Why Lane Consulting
                </Link>
              </li>
              <li>
                <Link href="/who-we-are/our-team" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/who-we-are/careers" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/who-we-are/news-press-releases" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  News & Press
                </Link>
              </li>
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">What We Do</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/what-we-do/tranche-2-entities" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Tranche 2 Entities
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/government" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Government
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/financial-payment-services" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/sports-integrity" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Sports Integrity
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Thinking & Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Thinking</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link href="/our-thinking" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Articles & Insights
                </Link>
              </li>
              <li>
                <Link href="/our-thinking/whitepapers" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/our-thinking/case-studies" className="text-gray-600 hover:text-[#66899b] transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#66899b] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5a7a8a] transition-colors duration-200"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-[#66899b] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-[#66899b] transition-colors">
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="hover:text-[#66899b] transition-colors">
                Disclaimer
              </Link>
              <Link href="/faqs" className="hover:text-[#66899b] transition-colors">
                FAQs
              </Link>
            </div>

            {/* Copyright and Involv Reference */}
            <div className="text-sm text-gray-500 space-y-1">
              <p>© 2025 Lane Consulting. All rights reserved.</p>
              <p className="text-xs flex items-center">
                Part of the{' '}
                <Link 
                  href="https://involv.com.au" 
                  className="hover:opacity-80 transition-opacity mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo-involv.svg"
                    alt="Involv"
                    width={60}
                    height={20}
                    className="h-4 w-auto"
                  />
                </Link>
                {' '}group of companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer