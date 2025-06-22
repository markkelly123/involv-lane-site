import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, X, Menu } from 'lucide-react'

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setMobileMenuOpen(false)
      setMobileDropdown(null)
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

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

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMobileMenuOpen(!mobileMenuOpen)
    setMobileDropdown(null)
  }

  const toggleMobileDropdown = (dropdownName: string) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileDropdown(null)
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image
                src="/logo-lane.png"
                alt="Lane Consulting"
                width={150}
                height={50}
                className="h-8 md:h-12 w-auto"
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
            <button 
              className="text-gray-700 hover:text-[#66899b] transition-colors p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Image
              src="/logo-lane.png"
              alt="Lane Consulting"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <button 
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-[#66899b] transition-colors p-2"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              
              {/* Who we are section */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('whoWeAre')}
                  className="flex items-center justify-between w-full text-left text-gray-900 font-medium text-lg"
                >
                  Who we are
                  <ChevronDown className={`h-5 w-5 transition-transform ${
                    mobileDropdown === 'whoWeAre' ? 'rotate-180' : ''
                  }`} />
                </button>
                {mobileDropdown === 'whoWeAre' && (
                  <div className="mt-3 ml-4 space-y-3">
                    <Link 
                      href="/who-we-are" 
                      className="block text-gray-600 hover:text-[#66899b] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Why Lane Consulting
                    </Link>
                    <Link 
                      href="/who-we-are/our-team" 
                      className="block text-gray-600 hover:text-[#66899b] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Our Team
                    </Link>
                    <Link 
                      href="/careers" 
                      className="block text-gray-600 hover:text-[#66899b] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Careers
                    </Link>
                    <Link 
                      href="/who-we-are/news-press-releases" 
                      className="block text-gray-600 hover:text-[#66899b] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      News & Press
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block text-gray-600 hover:text-[#66899b] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>

              {/* What we do section */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('whatWeDo')}
                  className="flex items-center justify-between w-full text-left text-gray-900 font-medium text-lg"
                >
                  What we do
                  <ChevronDown className={`h-5 w-5 transition-transform ${
                    mobileDropdown === 'whatWeDo' ? 'rotate-180' : ''
                  }`} />
                </button>
                {mobileDropdown === 'whatWeDo' && (
                  <div className="mt-3 ml-4 space-y-4">
                    <Link 
                      href="/what-we-do/tranche-2-entities" 
                      className="block text-gray-600 hover:text-[#66899b] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      <div className="font-medium text-gray-900">Tranche 2 Entities</div>
                      <div className="text-sm text-gray-500 mt-1">Real estate, lawyers, accountants, jewellers</div>
                    </Link>
                    <Link 
                      href="/what-we-do/financial-payment-services" 
                      className="block text-gray-600 hover:text-[#66899b] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      <div className="font-medium text-gray-900">Financial & Payment Services</div>
                      <div className="text-sm text-gray-500 mt-1">Banking and fintech compliance</div>
                    </Link>
                    <Link 
                      href="/what-we-do/sports-integrity" 
                      className="block text-gray-600 hover:text-[#66899b] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      <div className="font-medium text-gray-900">Sports Integrity</div>
                      <div className="text-sm text-gray-500 mt-1">Anti-corruption and match-fixing prevention</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Our thinking */}
              <div>
                <Link 
                  href="/our-thinking" 
                  className="block text-gray-900 font-medium text-lg hover:text-[#66899b] transition-colors"
                  onClick={closeMobileMenu}
                >
                  Our thinking
                </Link>
              </div>

            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/contact"
              className="block w-full bg-[#66899b] text-white px-6 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200 text-center"
              onClick={closeMobileMenu}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation