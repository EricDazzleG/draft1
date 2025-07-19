"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Eye, Sparkles, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create professional resumes in minutes with our intuitive builder",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "See your changes in real-time as you build your perfect resume",
  },
  {
    icon: Download,
    title: "Export Ready",
    description: "Download as PDF or publish your portfolio to the web instantly",
  },
  {
    icon: Users,
    title: "Recruiter Approved",
    description: "Templates designed by HR professionals and industry experts",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    content: "This tool helped me land my dream job! The templates are modern and the process is so smooth.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Marcus Johnson",
    role: "Product Designer",
    company: "Figma",
    content: "The portfolio generator is incredible. My clients are always impressed with the professional look.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "Stripe",
    content: "I've tried many resume builders, but this one stands out. The claymorphic design is beautiful!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-teal-400 rounded-xl shadow-lg"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                ResumeForge
              </span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-teal-100 border border-purple-200/50 mb-6"
              >
                <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                <span className="text-sm font-medium text-purple-700">AI-Powered Resume Builder</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Design.{" "}
                <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Download.
                </span>{" "}
                Dominate.
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create stunning resumes and portfolios that get you noticed. Our modern claymorphic design and
                AI-powered suggestions help you stand out from the crowd.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/resume-builder">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                      Build Resume
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/portfolio-creator">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                    >
                      Launch Portfolio
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Floating Resume Cards */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-96">
                {/* Resume Card 1 */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-4 w-48 h-64 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-4"
                >
                  <div className="w-full h-3 bg-gradient-to-r from-purple-300 to-teal-300 rounded-full mb-3"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-200 to-teal-200 rounded-2xl mb-3"></div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Resume Card 2 */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-8 right-4 w-48 h-64 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-4"
                >
                  <div className="w-full h-3 bg-gradient-to-r from-teal-300 to-blue-300 rounded-full mb-3"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-200 to-blue-200 rounded-2xl mb-3"></div>
                  <div className="space-y-2">
                    <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Portfolio Card */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-52 h-32 bg-gradient-to-r from-purple-100/80 to-teal-100/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-teal-400 rounded-xl"></div>
                    <div className="w-16 h-2 bg-gradient-to-r from-purple-300 to-teal-300 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="w-full h-8 bg-white/60 rounded-xl"></div>
                    <div className="w-full h-8 bg-white/60 rounded-xl"></div>
                    <div className="w-full h-8 bg-white/60 rounded-xl"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ResumeForge?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge design with powerful functionality to help you create professional
              documents that make an impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 to-teal-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Professionals</h2>
            <p className="text-xl text-gray-600">Join thousands who've transformed their careers with ResumeForge</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-2xl mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-500 to-teal-500 rounded-3xl p-12 shadow-2xl text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals who've already elevated their careers with ResumeForge
            </p>
            <Link href="/auth/signup">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Start Building Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/30 backdrop-blur-sm border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-teal-400 rounded-xl shadow-lg"></div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  ResumeForge
                </span>
              </div>
              <p className="text-gray-600">Create professional resumes and portfolios that get you hired.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/resume-builder" className="hover:text-purple-600 transition-colors">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio-creator" className="hover:text-purple-600 transition-colors">
                    Portfolio Creator
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="hover:text-purple-600 transition-colors">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-purple-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-purple-600 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/help" className="hover:text-purple-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-purple-600 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-purple-600 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 ResumeForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
