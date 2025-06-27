import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Target, Users, Shield, TrendingUp, CheckCircle, Award, Clock, Lightbulb, ChevronRight, Calendar } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const WhyLaneConsultingPage: NextPage = () => {
  const differentiators = [
    {
      title: "Specialised Tranche 2 Expertise",
      description: "Deep, focused knowledge of AML requirements for designated non-financial businesses and professions, ensuring relevant and practical guidance.",
      icon: <Target className="w-8 h-8" />,
      details: [
        "Sector-specific compliance frameworks",
        "Industry-tailored risk assessments", 
        "Practical implementation strategies",
        "Ongoing regulatory monitoring"
      ]
    },
    {
      title: "Pragmatic Implementation",
      description: "Solutions designed to work within your existing operations, minimising disruption while ensuring comprehensive compliance coverage.",
      icon: <Users className="w-8 h-8" />,
      details: [
        "Business-integrated compliance systems",
        "Streamlined reporting processes",
        "Cost-effective solutions",
        "Scalable frameworks"
      ]
    },
    {
      title: "Risk-Focused Approach",
      description: "Comprehensive risk mitigation strategies that protect your business from regulatory penalties and reputational damage.",
      icon: <Shield className="w-8 h-8" />,
      details: [
        "Proactive risk identification",
        "Tailored mitigation strategies",
        "Regulatory change management",
        "Incident response planning"
      ]
    },
    {
      title: "Sustainable Growth",
      description: "Compliance frameworks that support business growth while maintaining regulatory adherence and operational efficiency.",
      icon: <TrendingUp className="w-8 h-8" />,
      details: [
        "Growth-ready compliance systems",
        "Future-focused frameworks",
        "Strategic compliance planning",
        "Performance monitoring"
      ]
    }
  ]

  const approach = [
    {
      phase: "Discovery & Assessment",
      description: "Comprehensive analysis of your current compliance posture, business operations, and risk environment.",
      activities: [
        "Current state assessment",
        "Risk environment analysis", 
        "Regulatory gap identification",
        "Business impact evaluation"
      ]
    },
    {
      phase: "Framework Design",
      description: "Development of tailored compliance frameworks specifically designed for your business and sector requirements.",
      activities: [
        "Customised policy development",
        "Process design and documentation",
        "Control implementation planning", 
        "Risk management protocols"
      ]
    },
    {
      phase: "Implementation Support",
      description: "Hands-on guidance through the implementation process, ensuring smooth integration with existing operations.",
      activities: [
        "Change management support",
        "System integration assistance",
        "Staff training and education",
        "Process testing and validation"
      ]
    },
    {
      phase: "Ongoing Excellence",
      description: "Continuous support to maintain compliance effectiveness and adapt to regulatory changes and business evolution.",
      activities: [
        "Regular compliance reviews",
        "Regulatory change monitoring",
        "Performance optimisation",
        "Strategic compliance planning"
      ]
    }
  ]

  const commitments = [
    {
      title: "Independence & Objectivity",
      description: "Unbiased advice focused solely on your compliance needs and business objectives, free from product sales or conflicted interests.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Responsive Partnership",
      description: "Accessible, timely support when you need it most, treating compliance challenges as shared priorities requiring immediate attention.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Innovative Solutions",
      description: "Forward-thinking approaches that leverage technology and best practices to create efficient, effective compliance frameworks.",
      icon: <Lightbulb className="w-6 h-6" />
    }
  ]

  return (
    <>
      <Head>
        <title>Why Lane Consulting | Australia&apos;s Trusted Tranche 2 AML Advisory</title>
        <meta name="description" content="Discover why businesses choose Lane Consulting for Tranche 2 AML compliance. Specialised expertise, pragmatic solutions, and proven results for real estate, legal, accounting, and jewellery sectors." />
        <meta name="keywords" content="Lane Consulting, Tranche 2 AML, compliance advisory, AUSTRAC, real estate compliance, legal practice AML" />
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
                About Lane Consulting
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Why Choose <span className="text-[#66899b] italic">Lane Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Australia&apos;s most trusted partner for Tranche 2 AML compliance. We combine deep regulatory expertise 
              with practical business understanding to deliver solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#66899b] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#5a7a8a] transition-colors duration-200 shadow-lg">
                Schedule a Consultation
              </Link>
              <Link href="#approach" className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialised focus and practical approach ensure you receive compliance solutions that 
              are both comprehensive and implementable within your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {differentiators.map((differentiator, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center text-[#66899b] mr-4">
                    {differentiator.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">{differentiator.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{differentiator.description}</p>
                
                <ul className="space-y-2">
                  {differentiator.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#66899b] mt-0.5 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Proven Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology that ensures comprehensive compliance implementation while 
              minimising business disruption and maximising operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-[#66899b] bg-opacity-30 z-0"></div>
                )}
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 relative z-10">
                  <div className="w-16 h-16 bg-[#66899b] text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 text-center mb-4">{phase.phase}</h3>
                  <p className="text-gray-600 text-center text-sm mb-4 leading-relaxed">{phase.description}</p>
                  
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-start">
                        <span className="w-1 h-1 bg-[#9b7866] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commitments to You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every client engagement and ensure you receive the highest 
              standard of advisory service and compliance expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center text-[#66899b] mx-auto mb-6">
                  {commitment.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{commitment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-[#66899b] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Proven Results Across Australia
              </h2>
              <p className="text-xl opacity-90 mb-6 leading-relaxed">
                Our clients achieve comprehensive compliance while maintaining operational efficiency and business growth.
              </p>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                From individual practices to large professional service firms, we have successfully guided 
                organisations through complex Tranche 2 implementation challenges, ensuring sustainable 
                compliance and risk mitigation.
              </p>
              <Link href="/our-thinking/case-studies" className="text-white border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#66899b] transition-colors duration-200 inline-flex items-center">
                View Case Studies
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold font-serif mb-2">100%</div>
                <div className="text-sm opacity-80">Compliance Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-serif mb-2">50+</div>
                <div className="text-sm opacity-80">Organisations Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-serif mb-2">4</div>
                <div className="text-sm opacity-80">Key Sectors Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-serif mb-2">24/7</div>
                <div className="text-sm opacity-80">Support Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Lane Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our specialised expertise and proven approach can strengthen your 
            AML compliance while supporting your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#66899b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#5a7a8a] transition-colors duration-200 inline-flex items-center justify-center"
            >
              Schedule a Consultation
              <Calendar className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/who-we-are/our-team"
              className="border-2 border-[#66899b] text-[#66899b] px-8 py-3 rounded-md font-medium hover:bg-[#66899b] hover:text-white transition-colors duration-200 inline-flex items-center justify-center"
            >
              Meet Our Team
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default WhyLaneConsultingPage