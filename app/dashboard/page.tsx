"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Globe,
  Settings,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  BarChart3,
  Users,
  Star,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Views",
    value: "2,847",
    change: "+12%",
    icon: Eye,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Downloads",
    value: "156",
    change: "+8%",
    icon: Download,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Profile Views",
    value: "1,234",
    change: "+23%",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Rating",
    value: "4.9",
    change: "+0.2",
    icon: Star,
    color: "from-yellow-400 to-yellow-600",
  },
]

const recentResumes = [
  {
    id: 1,
    title: "Software Engineer Resume",
    template: "Modern",
    lastModified: "2 hours ago",
    views: 45,
    status: "Published",
  },
  {
    id: 2,
    title: "Product Manager CV",
    template: "Professional",
    lastModified: "1 day ago",
    views: 23,
    status: "Draft",
  },
  {
    id: 3,
    title: "Designer Portfolio Resume",
    template: "Creative",
    lastModified: "3 days ago",
    views: 67,
    status: "Published",
  },
]

const portfolios = [
  {
    id: 1,
    title: "John Doe Portfolio",
    url: "johndoe.resumeforge.com",
    lastModified: "1 day ago",
    views: 234,
    status: "Live",
  },
  {
    id: 2,
    title: "Creative Designer",
    url: "designer.resumeforge.com",
    lastModified: "5 days ago",
    views: 156,
    status: "Draft",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 min-h-screen bg-white/60 backdrop-blur-md border-r border-white/50 p-6"
        >
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-teal-400 rounded-xl shadow-lg"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              ResumeForge
            </span>
          </div>

          <nav className="space-y-2">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 p-3 rounded-2xl bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 shadow-sm"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </motion.div>

            <Link href="/resume-builder">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 p-3 rounded-2xl text-gray-600 hover:bg-white/50 hover:text-purple-600 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Resume Builder</span>
              </motion.div>
            </Link>

            <Link href="/portfolio-creator">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 p-3 rounded-2xl text-gray-600 hover:bg-white/50 hover:text-purple-600 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">Portfolio Creator</span>
              </motion.div>
            </Link>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 p-3 rounded-2xl text-gray-600 hover:bg-white/50 hover:text-purple-600 transition-all duration-300"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </motion.div>
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl text-white">
            <h3 className="font-semibold mb-2">Upgrade to Pro</h3>
            <p className="text-sm opacity-90 mb-3">Unlock premium templates and features</p>
            <Button size="sm" className="bg-white text-purple-600 hover:bg-gray-50 w-full">
              Upgrade Now
            </Button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John! 👋</h1>
              <p className="text-gray-600">Here's what's happening with your career documents</p>
            </div>
            <div className="flex space-x-3">
              <Link href="/resume-builder">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white shadow-lg">
                    <Plus className="w-4 h-4 mr-2" />
                    New Resume
                  </Button>
                </motion.div>
              </Link>
              <Link href="/portfolio-creator">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    New Portfolio
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600 flex items-center mt-1">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {stat.change}
                        </p>
                      </div>
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Resumes */}
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
              <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">Recent Resumes</span>
                    <Link href="/resume-builder">
                      <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                        View All
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentResumes.map((resume, index) => (
                      <motion.div
                        key={resume.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-white/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-teal-400 rounded-xl flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{resume.title}</h3>
                            <p className="text-sm text-gray-600">
                              {resume.template} • {resume.lastModified}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              resume.status === "Published"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {resume.status}
                          </span>
                          <div className="flex space-x-1">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Portfolios */}
            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
              <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">My Portfolios</span>
                    <Link href="/portfolio-creator">
                      <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                        View All
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {portfolios.map((portfolio, index) => (
                      <motion.div
                        key={portfolio.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ x: -5 }}
                        className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-white/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl flex items-center justify-center">
                            <Globe className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{portfolio.title}</h3>
                            <p className="text-sm text-gray-600">{portfolio.url}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              portfolio.status === "Live" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {portfolio.status}
                          </span>
                          <div className="flex space-x-1">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
