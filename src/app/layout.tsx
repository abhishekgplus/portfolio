import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Abhishek Kumar Singh - Platform Engineer & Director',
  description: 'Director – Wealth Management Technology | Platform Engineer | Apigee & Cloud Specialist. Building reliable cloud platforms and scalable API infrastructure.',
  keywords: 'Platform Engineer, Apigee, Kubernetes, GCP, Cloud Architecture, DevOps',
  authors: [{ name: 'Abhishek Kumar Singh' }],
  openGraph: {
    title: 'Abhishek Kumar Singh - Platform Engineer & Director',
    description: 'Director – Wealth Management Technology | Platform Engineer | Apigee & Cloud Specialist',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}