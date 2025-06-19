import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  industry: string
  urgency: 'low' | 'medium' | 'high'
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
      company,
      phone,
      subject,
      message,
      industry,
      urgency,
      site,
      to
    }: ContactFormData = req.body

    // Basic validation
    if (!name || !email || !subject || !message || !to) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Format urgency for display
    const urgencyLabels = {
      low: 'Low - General inquiry',
      medium: 'Medium - Need guidance soon', 
      high: 'High - Urgent matter'
    }

    // Email content for the company
    const companyEmailContent = `
New Contact Form Submission - ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting

Contact Details:
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}

Inquiry Details:
Subject: ${subject}
Industry: ${industry || 'Not specified'}
Urgency: ${urgencyLabels[urgency]}

Message:
${message}

Submitted from: ${site} contact form
Submission Time: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}
    `

    // Email content for the client
    const clientEmailContent = `
Dear ${name},

Thank you for contacting ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting.

We've received your inquiry about "${subject}" and appreciate you taking the time to reach out.

Your inquiry details:
• Subject: ${subject}
• Industry: ${industry || 'Not specified'}
• Urgency: ${urgencyLabels[urgency]}

What happens next:
${urgency === 'high' 
  ? '• Given the urgent nature of your inquiry, we will prioritise your request and aim to respond within 4-8 hours during business hours'
  : urgency === 'medium'
  ? '• We will review your inquiry and respond within 1 business day'
  : '• We will review your inquiry and respond within 2 business days'
}
• A member of our team will contact you via your preferred method
• We may schedule a complimentary initial consultation to better understand your needs

Our business hours are Monday to Friday, 8:30 AM - 6:00 PM AEST. For urgent matters outside these hours, we monitor our communications regularly.

In the meantime, feel free to explore our insights and resources on our website to learn more about our approach to governance, risk, and compliance.

Thank you for considering ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting as your compliance partner.

Best regards,
The ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting Team

---
This is an automated response. Please do not reply to this email.
For urgent enquiries, contact us directly at ${to}
    `

    // Send email to company
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@involv.com.au',
      to: to,
      subject: `${urgency === 'high' ? '[URGENT] ' : ''}Contact Form: ${subject} - ${name}`,
      text: companyEmailContent,
      replyTo: email,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@involv.com.au',
      to: email,
      subject: `Thank you for contacting ${site.charAt(0).toUpperCase() + site.slice(1)} Consulting`,
      text: clientEmailContent,
    })

    // Log the inquiry
    console.log(`Contact form submission received from ${name} (${email}) for ${site} site - Subject: ${subject} - Urgency: ${urgency}`)

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      urgency: urgency,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    res.status(500).json({ 
      message: 'Error processing your inquiry. Please try again or contact us directly.',
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