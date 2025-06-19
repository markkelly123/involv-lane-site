import { GetStaticProps } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Clock, Users, TrendingUp, Send } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getJobPostings, JobPosting } from '../../lib/sanity'

interface CareersPageProps {
  jobPostings: JobPosting[]
}

interface FormData {
  name: string
  email: string
  phone: string
  preferredContact: 'email' | 'phone'
  experience: string
  interest: string
  message: string
  newsletter: boolean
}

export default function CareersPage({ jobPostings }: CareersPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    experience: '',
    interest: '',
    message: '',
    newsletter: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      
      const response = await fetch('https://formspree.io/f/YOUR_LANE_CAREERS_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredContact: 'email',
          experience: '',
          interest: '',
          message: '',
          newsletter: false
        })
      } else {
        const data = await response.json()
        console.error('Form submission failed:', data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatSalaryRange = (salaryRange?: { min?: number; max?: number; displayPublicly?: boolean }) => {
    if (!salaryRange || !salaryRange.displayPublicly) return null
    if (salaryRange.min && salaryRange.max) {
      return `$${salaryRange.min.toLocaleString()} - $${salaryRange.max.toLocaleString()}`
    }
    if (salaryRange.min) {
      return `From $${salaryRange.min.toLocaleString()}`
    }
    return null
  }

  const formatEmploymentType = (type: string) => {
    return type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('-')
  }

  return (
    <>
      <Head>
        <title>Careers - Lane Consulting & Advisory</title>
        <meta name="description" content="Join our team of governance, risk, and compliance experts. Explore career opportunities at Lane Consulting & Advisory." />
        <meta name="keywords" content="careers, jobs, governance, risk, compliance, AML, consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#66899b] bg-opacity-20 text-[#66899b] border border-[#66899b] border-opacity-30 rounded-full text-sm font-medium">
                  Join Our Team
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Join Our Team of
                <span className="block text-[#66899b] italic">Compliance Experts</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Build your career with Australia's leading AML advisory firm. Help shape the future 
                of regulatory excellence across diverse industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#66899b]" />
                  Remote & Flexible Work
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-[#66899b]" />
                  Professional Development
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#66899b]" />
                  Industry Leading Projects
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                <Image
                  src="/lane-careers.png"
                  alt="Lane Consulting careers"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#66899b]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our open positions and find your next career opportunity with Australia's 
              premier AML compliance consultancy.
            </p>
          </div>

          {jobPostings && jobPostings.length > 0 ? (
            <div className="grid gap-8 lg:gap-12">
              {jobPostings.map((job) => (
                <div key={job._id} className="border border-gray-200 rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        {job.urgent && (
                          <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                            Urgent
                          </span>
                        )}
                        {job.featured && (
                          <span className="px-3 py-1 bg-[#66899b] bg-opacity-10 text-[#66899b] text-sm font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span>{formatEmploymentType(job.employmentType)}</span>
                        {job.experienceLevel && (
                          <span className="capitalize">{job.experienceLevel} Level</span>
                        )}
                      </div>
                    </div>
                    {formatSalaryRange(job.salaryRange) && (
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          {formatSalaryRange(job.salaryRange)}
                        </div>
                        <div className="text-sm text-gray-500">per annum</div>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{job.summary}</p>

                  {job.skills && job.skills.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 6).map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border">
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 6 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                            +{job.skills.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}&body=Dear Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0APlease find my application details below:%0D%0A%0D%0A`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#66899b] text-white font-medium rounded-md hover:bg-[#5a7a8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66899b] transition-colors"
                    >
                      Apply Now
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66899b] transition-colors">
                      Learn More
                    </button>
                  </div>

                  {job.applicationDeadline && (
                    <div className="mt-4 text-sm text-gray-500">
                      Application deadline: {new Date(job.applicationDeadline).toLocaleDateString('en-AU')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Current Openings</h3>
                <p className="text-gray-600 mb-6">
                  We don't have any specific openings right now, but we're always interested in 
                  connecting with talented professionals who share our commitment to excellence.
                </p>
                <p className="text-gray-600">
                  Submit your details below and we'll keep you in mind for future opportunities.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Lane Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Join Lane Consulting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building Australia's premier AML compliance practice. Join us in shaping 
              the future of regulatory excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#66899b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Professional Growth</h3>
              <p className="text-gray-600 text-sm">
                Continuous learning opportunities with industry leaders and access to cutting-edge 
                compliance methodologies and best practices.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#66899b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Collaborative Culture</h3>
              <p className="text-gray-600 text-sm">
                Work alongside experienced professionals in a supportive environment that values 
                expertise, innovation, and mutual respect.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#66899b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Flexible Working</h3>
              <p className="text-gray-600 text-sm">
                Remote-first approach with flexible arrangements that support work-life balance 
                while delivering exceptional client outcomes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#66899b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Meaningful Impact</h3>
              <p className="text-gray-600 text-sm">
                Help businesses navigate complex regulatory requirements and contribute to 
                Australia's financial integrity and compliance standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#66899b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Industry Leadership</h3>
              <p className="text-gray-600 text-sm">
                Work on high-profile projects with recognised industry experts and contribute 
                to thought leadership in the compliance sector.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#66899b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Competitive Package</h3>
              <p className="text-gray-600 text-sm">
                Attractive remuneration, professional development support, and comprehensive 
                benefits package commensurate with your expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interested in Joining Us?
              </h2>
              <p className="text-xl text-gray-600">
                We'd love to hear from you. Send us your details and let us know how you'd 
                like to contribute to our mission of regulatory excellence.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Thank you for your interest!</h3>
                    <p className="mt-1 text-sm text-green-700">We've received your enquiry and will be in touch soon.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Something went wrong</h3>
                    <p className="mt-1 text-sm text-red-700">Please try again or contact us directly at careers@involv.com.au</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gray-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden fields for Formspree */}
                <input type="hidden" name="_subject" value="Career Enquiry - Lane Consulting" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                <input type="hidden" name="_cc" value="mark.kelly@involv.com.au" />
                <input type="hidden" name="site" value="Lane Consulting" />
                <input type="hidden" name="form_type" value="Career Enquiry" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                    >
                      <option value="">Select experience level</option>
                      <option value="graduate">Graduate/Entry Level</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                    >
                      <option value="">Select area of interest</option>
                      <option value="aml">AML/CTF Advisory</option>
                      <option value="risk">Risk Management</option>
                      <option value="compliance">Regulatory Compliance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors resize-none"
                    placeholder="Tell us about your background, interests, and why you'd like to join Lane Consulting & Advisory..."
                  />
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      value={formData.newsletter ? 'yes' : 'no'}
                      className="mt-1 h-4 w-4 text-[#66899b] focus:ring-[#66899b] border-gray-300 rounded"
                    />
                    <span className="ml-3 text-sm text-gray-600">
                      I'd like to receive updates about career opportunities and industry insights 
                      from Lane Consulting & Advisory.
                    </span>
                  </label>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#66899b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#5a7a8a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Your Interest
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-4 text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and consent to us 
                contacting you about career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch open job postings for the Lane site
    const jobPostings = await getJobPostings('lane', undefined, 'open')
    
    return {
      props: {
        jobPostings: jobPostings || [],
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching job postings:', error)
    
    return {
      props: {
        jobPostings: [],
      },
      revalidate: 300,
    }
  }
}