import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface CareerEnquiryData {
  name: string
  email: string
  phone: string
  preferredContact: 'email' | 'phone'
  experience: string
  interest: string
  message: string
  newsletter: boolean
  site: string
  to: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const {
      name,
      email,
      phone,
      preferredContact,
      experience,
      interest,
      message,
      newsletter,
      site,
      to
    }: CareerEnquiryData = req.body

    // Basic validation
    if (!name || !email || !to) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Create transporter (you'll need to configure with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content for the company
    const companyEmailContent = `
New Career Enquiry - ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting

Contact Details:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Preferred Contact: ${preferredContact}

Professional Information:
Experience Level: ${experience || 'Not specified'}
Area of Interest: ${interest || 'Not specified'}

Message:
${message || 'No additional message provided'}

Newsletter Subscription: ${newsletter ? 'Yes' : 'No'}

Submitted from: ${site} careers page
Submission Time: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}
    `

    // Email content for the applicant
    const applicantEmailContent = `
Dear ${name},

Thank you for your interest in joining ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting.

We've received your career enquiry and will review it carefully. Our team will be in touch within the next 5-7 business days to discuss potential opportunities that align with your background and interests.

In the meantime, feel free to explore our insights and thought leadership on our website to learn more about our work in governance, risk, and compliance.

What's next:
• We'll review your enquiry and match it with current or upcoming opportunities
• If there's a potential fit, we'll reach out via your preferred contact method (${preferredContact})
• We may invite you for an initial conversation to learn more about your career goals

Thank you again for considering ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting as your next career step.

Cheers,
The ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting Team

---
This is an automated response. Please do not reply to this email.
For urgent enquiries, contact us directly at ${to}
    `

    // Send email to company
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@involv.com.au',
      to: to,
      subject: `Career Enquiry from ${name} - ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting`,
      text: companyEmailContent,
      replyTo: email,
    })

    // Send confirmation email to applicant
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@involv.com.au',
      to: email,
      subject: `Thank you for your interest - ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting & Advisory`,
      text: applicantEmailContent,
    })

    // Log the enquiry
    console.log(`Career enquiry received from ${name} (${email}) for ${site} site`)

    res.status(200).json({ 
      message: 'Career enquiry submitted successfully',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error processing career enquiry:', error)
    res.status(500).json({ 
      message: 'Error processing your enquiry. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
    })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}