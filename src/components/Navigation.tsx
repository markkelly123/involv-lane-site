import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdownName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(dropdownName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150) // Small delay to allow mouse movement to dropdown
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-lane.png"
                alt="Lane Consulting"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Who we are */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('whoWeAre')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-[#66899b] font-medium transition-colors duration-200 py-2">
                Who we are
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown - positioned with no gap */}
              {openDropdown === 'whoWeAre' && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-md border border-gray-100 z-50">
                  <div className="py-2">
                    <Link href="/who-we-are" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#66899b] transition-colors">
                      Why Lane Consulting
                    </Link>
                    <Link href="/who-we-are/our-team" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#66899b] transition-colors">
                      Our Team
                    </Link>
                    <Link href="/careers" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#66899b] transition-colors">
                      Careers
                    </Link>
                    <Link href="/who-we-are/news-press-releases" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#66899b] transition-colors">
                      News & Press
                    </Link>
                    <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#66899b] transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* What we do */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('whatWeDo')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-[#66899b] font-medium transition-colors duration-200 py-2">
                What we do
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown - positioned with no gap */}
              {openDropdown === 'whatWeDo' && (
                <div className="absolute left-0 top-full w-72 bg-white shadow-lg rounded-md border border-gray-100 z-50">
                  <div className="py-2">
                    <Link href="/what-we-do/tranche-2-entities" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#66899b] transition-colors">
                      <div className="font-medium">Tranche 2 Entities</div>
                      <div className="text-sm text-gray-500 mt-1">Real estate, lawyers, accountants, jewellers</div>
                    </Link>
                    <Link href="/what-we-do/financial-payment-services" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#66899b] transition-colors">
                      <div className="font-medium">Financial & Payment Services</div>
                      <div className="text-sm text-gray-500 mt-1">Banking and fintech compliance</div>
                    </Link>
                    <Link href="/what-we-do/sports-integrity" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#66899b] transition-colors">
                      <div className="font-medium">Sports Integrity</div>
                      <div className="text-sm text-gray-500 mt-1">Anti-corruption and match-fixing prevention</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our thinking */}
            <Link href="/our-thinking" className="text-gray-700 hover:text-[#66899b] font-medium transition-colors duration-200">
              Our thinking
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#66899b] text-white px-6 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200 shadow-sm"
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-gray-700 hover:text-[#66899b] transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation