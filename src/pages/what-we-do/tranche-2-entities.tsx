import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { CheckCircle, Users, FileText, Shield, Building2, Scale, Calculator, Gem, ChevronRight, Calendar } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const Tranche2EntitiesPage: NextPage = () => {
  const sectors = [
    {
      title: "Real Estate Professionals",
      description: "Comprehensive AML compliance for real estate agents, property developers, and property management companies navigating complex transaction reporting requirements.",
      icon: <Building2 className="w-8 h-8" />,
      challenges: ["High-value transactions", "Complex ownership structures", "International buyers", "Cash settlements"],
      services: ["Transaction monitoring systems", "Customer due diligence protocols", "Beneficial ownership identification", "Suspicious activity reporting"]
    },
    {
      title: "Legal Practices",
      description: "Specialised guidance for law firms and legal practitioners managing client trust accounts and complex legal transactions under AML obligations.",
      icon: <Scale className="w-8 h-8" />,
      challenges: ["Client confidentiality vs compliance", "Trust account management", "Complex corporate structures", "Cross-border transactions"],
      services: ["Client identification procedures", "Legal privilege frameworks", "Trust account monitoring", "Risk assessment protocols"]
    },
    {
      title: "Accounting Firms",
      description: "Expert advisory for accounting practices implementing robust AML frameworks while maintaining client service excellence and professional standards.",
      icon: <Calculator className="w-8 h-8" />,
      challenges: ["Client data sensitivity", "Multiple service types", "Regulatory complexity", "Professional obligations"],
      services: ["Enhanced due diligence", "Risk categorisation systems", "Ongoing monitoring protocols", "Compliance training programs"]
    },
    {
      title: "Jewellers & Precious Metals",
      description: "Tailored compliance solutions for precious metals dealers and jewellery retailers managing high-value, cash-intensive transactions.",
      icon: <Gem className="w-8 h-8" />,
      challenges: ["Cash-intensive business", "High-value items", "Anonymous buyers", "International trade"],
      services: ["Cash transaction protocols", "Customer verification systems", "Inventory tracking compliance", "Suspicious transaction identification"]
    }
  ]

  const complianceRequirements = [
    {
      title: "Customer Due Diligence (CDD)",
      description: "Comprehensive identity verification and risk assessment procedures for all clients and transactions."
    },
    {
      title: "Enhanced Due Diligence (EDD)",
      description: "Additional scrutiny measures for high-risk customers, politically exposed persons, and complex transactions."
    },
    {
      title: "Ongoing Monitoring",
      description: "Continuous surveillance of client relationships and transaction patterns to identify suspicious activities."
    },
    {
      title: "Record Keeping",
      description: "Systematic documentation and retention of all compliance-related records and transaction data."
    },
    {
      title: "Reporting Obligations",
      description: "Timely submission of suspicious matter reports (SMRs) and threshold transaction reports (TTRs) to AUSTRAC."
    },
    {
      title: "Risk Assessment",
      description: "Regular evaluation and documentation of money laundering and terrorism financing risks specific to your business."
    }
  ]

  const whyChooseLane = [
    {
      title: "Sector Expertise",
      description: "Deep understanding of the unique challenges and requirements facing each Tranche 2 sector.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Practical Solutions",
      description: "Compliance frameworks designed to work within your existing business operations and workflows.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Regulatory Knowledge",
      description: "Up-to-date expertise on AUSTRAC requirements and evolving AML legislation affecting your industry.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Risk Mitigation",
      description: "Comprehensive strategies to protect your business from regulatory penalties and reputational damage.",
      icon: <Shield className="w-6 h-6" />
    }
  ]

  return (
    <>
      <Head>
        <title>Tranche 2 Entities AML Compliance | Lane Consulting</title>
        <meta name="description" content="Expert AML compliance advisory for Tranche 2 entities including real estate professionals, lawyers, accountants, and jewellers. Navigate complex regulatory requirements with confidence." />
        <meta name="keywords" content="Tranche 2, AML compliance, real estate AML, legal practice compliance, accounting firm AML, jeweller compliance, AUSTRAC" />
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
                Tranche 2 Entities
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              AML Compliance for <span className="text-[#66899b] italic">Tranche 2 Entities</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Navigate complex AML obligations with confidence. Specialised advisory services for real estate professionals, 
              lawyers, accountants, and jewellers facing new regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#5a7a8a] transition-colors duration-200 shadow-lg">
                Schedule a Consultation
              </Link>
              <Link href="#sectors" className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Explore Sectors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Understanding Tranche 2 Requirements
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tranche 2 of Australia&apos;s Anti-Money Laundering and Counter-Terrorism Financing (AML/CTF) regime extends 
                compliance obligations to designated non-financial businesses and professions (DNFBPs). These entities now 
                face complex regulatory requirements that demand specialised expertise and tailored solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Lane Consulting provides the guidance you need to implement robust compliance frameworks, mitigate risks, 
                and ensure ongoing adherence to AUSTRAC requirements while maintaining operational efficiency.
              </p>
              <Link href="/our-thinking" className="text-[#66899b] hover:text-[#5a7a8a] transition-colors font-medium inline-flex items-center">
                Read our Tranche 2 insights
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Key Compliance Areas</h3>
              <div className="space-y-4">
                {complianceRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#66899b] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{requirement.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{requirement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Specialised Expertise Across Key Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored compliance solutions designed for the unique challenges and requirements of each Tranche 2 sector.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center text-[#66899b] mr-4">
                    {sector.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">{sector.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{sector.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {sector.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#9b7866] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Our Services</h4>
                    <ul className="space-y-2">
                      {sector.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#66899b] mt-0.5 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lane Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Lane Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep sector expertise and practical approach ensure compliance solutions that work for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseLane.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center text-[#66899b] mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#66899b] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Ensure Tranche 2 Compliance?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to guide you through complex AML requirements and help you implement 
            robust compliance frameworks tailored to your sector.
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
              View Our Insights
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Tranche2EntitiesPage