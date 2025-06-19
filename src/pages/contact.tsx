import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ContactPage: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    industry: '',
    urgency: 'medium'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      
      const response = await fetch('https://formspree.io/f/xblykoby', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            subject: '',
            message: '',
            industry: '',
            urgency: 'medium'
          })
        }, 5000)
      } else {
        const data = await response.json()
        console.error('Form submission failed:', data)
        alert('There was an error sending your message. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us | Lane Consulting</title>
        <meta name="description" content="Get in touch with Lane Consulting for expert AML compliance, Tranche 2 guidance, and regulatory advisory services. Schedule a consultation today." />
        <meta name="keywords" content="contact Lane Consulting, AML consultation, Tranche 2 advice, compliance contact, regulatory consultation" />
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
                Get In Touch
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Let&apos;s <span className="text-[#66899b] italic">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Ready to strengthen your AML/CTF compliance framework? Whether you need immediate 
              guidance or want to discuss a comprehensive strategy, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact-form" 
                className="bg-[#66899b] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#5a7a8a] transition-colors duration-200 shadow-lg"
              >
                Send a Message
              </a>
              <a 
                href="tel:1300 000 000" 
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Call Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#66899b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:louise@laneconsultingandadvisory.com" className="text-[#66899b] hover:underline">
                      louise@laneconsultingandadvisory.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We typically respond within one business day.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#66899b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:1300 XXX XXX" className="text-[#66899b] hover:underline">
                      1300 XXX XXX
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Monday to Friday, 8:30 AM - 6:00 PM AEST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#66899b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Melbourne, Victoria<br />
                      Australia
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Serving clients Australia-wide</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#66899b] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#66899b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:30 AM - 6:00 PM<br />
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Emergency compliance support available</p>
                  </div>
                </div>
              </div>

              {/* Professional Credentials */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Why Choose Lane Consulting?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#66899b] mr-2 mt-0.5 flex-shrink-0" />
                    Recognised AML and compliance expertise
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#66899b] mr-2 mt-0.5 flex-shrink-0" />
                    Practical, cost-effective solutions
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#66899b] mr-2 mt-0.5 flex-shrink-0" />
                    Australia-wide service delivery
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#66899b] mr-2 mt-0.5 flex-shrink-0" />
                    Free initial consultation available
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Tell us about your AML compliance needs and we&apos;ll get back to you with tailored guidance.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting Lane Consulting. We&apos;ll respond within the next business day.
                    </p>
                  </div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden fields for Formspree */}
                    <input type="hidden" name="_subject" value={`Contact Form Submission - ${formData.subject || 'General Inquiry'}`} />
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                    <input type="hidden" name="_cc" value="mark.kelly@involv.com.au" />
                    <input type="hidden" name="site" value="Lane Consulting" />
                    <input type="hidden" name="form_type" value="Contact Form" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
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
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
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
                          placeholder="+61 XXX XXX XXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                        >
                          <option value="">Select your industry</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="legal">Legal Services</option>
                          <option value="accounting">Accounting</option>
                          <option value="jewellery">Precious Metals & Stones</option>
                          <option value="financial">Financial & Payment Services</option>
                          <option value="financial">Sports</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                          Urgency Level
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                        >
                          <option value="low">Low - General inquiry</option>
                          <option value="medium">Medium - Need guidance soon</option>
                          <option value="high">High - A more urgent matter</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#66899b] focus:border-[#66899b] transition-colors resize-none"
                        placeholder="Please provide details about your compliance needs, current challenges, or specific questions you have..."
                      />
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
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to frequently asked questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">How quickly can you respond to urgent matters?</h3>
              <p className="text-gray-600 text-sm">
                We prioritise urgent matters and typically respond within 4 - 8 hours during business hours. 
                Emergency support is available for critical situations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer free initial consultations?</h3>
              <p className="text-gray-600 text-sm">
                Yes, we provide complimentary initial consultations to understand your needs and determine 
                how we can best assist with your requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">What industries do you specialise in?</h3>
              <p className="text-gray-600 text-sm">
                We specialise in the AML compliance needs of Tranche 2 entities including real estate, legal services, accounting,
                and precious metals & stones sectors, plus financial & payment services compliance, and sports integrity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Can you work with businesses outside Melbourne?</h3>
              <p className="text-gray-600 text-sm">
                Absolutely. We provide services Australia-wide through virtual consultations, 
                on-site visits when needed, and comprehensive remote support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactPage