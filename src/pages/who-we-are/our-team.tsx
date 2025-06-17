import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Award, BookOpen, Users, Shield, CheckCircle, Mail, Calendar, ChevronRight } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const OurTeamPage: NextPage = () => {
  const louiseExpertise = [
    {
      area: "AML/CTF Compliance",
      description: "Comprehensive expertise in Anti-Money Laundering and Counter-Terrorism Financing frameworks across multiple regulated industries.",
      details: ["Program development and implementation", "Risk assessment methodologies", "Regulatory engagement and liaison", "Independent compliance reviews"]
    },
    {
      area: "Gaming & Liquor Regulation",
      description: "Deep understanding of gaming and liquor compliance requirements across Australian jurisdictions.",
      details: ["Licensing compliance", "Operational frameworks", "Regulatory reporting", "Risk management systems"]
    },
    {
      area: "Governance & Risk Management",
      description: "Strategic governance frameworks and comprehensive risk management solutions for regulated entities.",
      details: ["Board governance structures", "Risk appetite frameworks", "Compliance monitoring", "Regulatory change management"]
    },
    {
      area: "Tranche 2 Implementation",
      description: "Specialised guidance for designated non-financial businesses navigating new AML obligations.",
      details: ["Sector-specific frameworks", "Implementation strategies", "Training and education", "Ongoing compliance support"]
    }
  ]

  const credentials = [
    "Governance, Risk and Compliance Professional",
    "Anti-Money Laundering Specialist",
    "Gaming and Liquor Industry Expert", 
    "Regulatory Change Management Advisor"
  ]

  const industries = [
    { name: "Gaming & Entertainment", years: "15+" },
    { name: "Liquor & Hospitality", years: "12+" },
    { name: "Media & Communications", years: "8+" },
    { name: "Wagering & Sports", years: "10+" },
    { name: "Real Estate", years: "6+" },
    { name: "Legal Services", years: "5+" },
    { name: "Financial Services", years: "8+" },
    { name: "Government & Public Sector", years: "7+" }
  ]

  const achievements = [
    {
      title: "Regulatory Expertise",
      description: "Successfully guided organisations through complex regulatory changes and compliance implementations",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Industry Recognition",
      description: "Recognised expert in AML compliance with extensive experience across highly regulated sectors",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Strategic Leadership",
      description: "Led major compliance transformation projects for large-scale operations and complex organisations",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Thought Leadership",
      description: "Regular contributor to industry publications and regulatory consultation processes",
      icon: <BookOpen className="w-6 h-6" />
    }
  ]

  return (
    <>
      <Head>
        <title>Our Team | Louise Lane | Lane Consulting</title>
        <meta name="description" content="Meet Louise Lane, founder of Lane Consulting. Expert in AML compliance, governance, risk management, and Tranche 2 implementation across multiple regulated industries." />
        <meta name="keywords" content="Louise Lane, AML expert, compliance consultant, Tranche 2, governance, risk management" />
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
                Leadership Team
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Meet Our <span className="text-[#66899b] italic">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Led by recognised industry experts with decades of experience in governance, risk, 
              compliance, and regulatory advisory across Australia's most complex sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#5a7a8a] transition-colors duration-200 shadow-lg">
                Schedule a Meeting
              </Link>
              <Link href="#louise-profile" className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Meet Louise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Louise Profile Section */}
      <section id="louise-profile" className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image and Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-shadow duration-200">
                <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-6 overflow-hidden">
                  {/* Placeholder for Louise's photo */}
                  <Image
                    src="/team/louise-lane.jpg"
                    alt="Louise Lane, Founder & Principal Consultant"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Louise Lane</h3>
                <p className="text-[#66899b] font-medium mb-4">Founder & Principal Consultant</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Recognised expert in governance, risk, and compliance with extensive experience 
                  across gaming, liquor, media, wagering, and sporting administration.
                </p>
                
                {/* Contact Information */}
                <div className="space-y-3">
                  <Link 
                    href="mailto:louise@laneconsulting.com.au"
                    className="flex items-center justify-center text-gray-600 hover:text-[#66899b] transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    louise@laneconsulting.com.au
                  </Link>
                  <Link 
                    href="https://linkedin.com/in/louise-lane"
                    className="flex items-center justify-center text-gray-600 hover:text-[#66899b] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src="/linkedIn_icon.png" 
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    LinkedIn Profile
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="bg-[#66899b] text-white px-6 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200 w-full inline-flex items-center justify-center"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Leading AML & Compliance Expertise
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Louise Lane brings decades of specialised governance, risk, and compliance expertise across 
                  multiple regulated industries including gaming, liquor, media, wagering, and sporting administration. 
                  Her extensive in-house experience informs her pragmatic approach to navigating evolving regulatory 
                  landscapes and meeting growing stakeholder expectations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Louise excels at developing tailored frameworks and sustainable compliance solutions that protect 
                  business interests while satisfying stringent obligations. With particular insight into Australia's 
                  changing AML laws and fluid gaming environment, she delivers strategic guidance that transforms 
                  regulatory challenges into operational advantages.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Her approach ensures clients understand that licenses remain privileges requiring diligent management, 
                  and that effective compliance frameworks create competitive advantages rather than operational burdens.
                </p>
              </div>

              {/* Credentials */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Professional Credentials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#66899b] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Experience */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Industry Experience</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="font-bold text-[#66899b] text-lg">{industry.years}</div>
                      <div className="text-xs text-gray-600 mt-1">{industry.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive advisory capabilities across the full spectrum of compliance, governance, 
              and risk management requirements for regulated entities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {louiseExpertise.map((expertise, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{expertise.area}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{expertise.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {expertise.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#66899b] mt-0.5 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A track record of excellence in compliance advisory, regulatory guidance, 
              and strategic leadership across Australia's most complex industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center text-[#66899b] mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#66899b] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Australia's Leading AML Expert?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Benefit from Louise's extensive experience and proven expertise in guiding organisations 
            through complex compliance challenges and regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#66899b] px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Schedule a Consultation
              <Calendar className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/our-thinking"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[#66899b] transition-colors duration-200 inline-flex items-center justify-center"
            >
              Read Louise's Insights
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default OurTeamPage