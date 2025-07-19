"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Upload, Eye, Save, Globe, ImageIcon, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const templates = [
  {
    id: 1,
    name: "Minimal",
    description: "Clean and professional design",
    preview: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Creative",
    description: "Bold and artistic layout",
    preview: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Developer",
    description: "Perfect for tech professionals",
    preview: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Designer",
    description: "Showcase your visual work",
    preview: "/placeholder.svg?height=200&width=300",
  },
]

export default function PortfolioCreatorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(1)
  const [portfolioData, setPortfolioData] = useState({
    personalInfo: {
      name: "",
      title: "",
      bio: "",
      profileImage: "",
      location: "",
      email: "",
      website: "",
      github: "",
      linkedin: "",
      twitter: "",
    },
    projects: [],
    about: "",
    contact: {
      email: "",
      message: "",
    },
  })

  const updatePersonalInfo = (field: string, value: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/60 backdrop-blur-md border-b border-white/50 p-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </motion.button>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-900">Portfolio Creator</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-2 border-gray-200 bg-transparent">
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button variant="outline" className="border-2 border-gray-200 bg-transparent">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white">
              <Globe className="w-4 h-4 mr-2" />
              Publish to Web
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto p-8">
        {/* Template Selection */}
        <motion.section initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Template</h2>
            <p className="text-gray-600 text-lg">Select a design that matches your style and profession</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedTemplate(template.id)}
                className={`cursor-pointer rounded-3xl overflow-hidden shadow-xl border-2 transition-all duration-300 ${
                  selectedTemplate === template.id
                    ? "border-purple-500 shadow-2xl"
                    : "border-white/50 hover:border-purple-300"
                }`}
              >
                <div className="relative">
                  <img
                    src={template.preview || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-48 object-cover"
                  />
                  {selectedTemplate === template.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center"
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>
                <div className="p-4 bg-white/60 backdrop-blur-sm">
                  <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Portfolio Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-700 font-medium">Full Name</Label>
                        <Input
                          value={portfolioData.personalInfo.name}
                          onChange={(e) => updatePersonalInfo("name", e.target.value)}
                          className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700 font-medium">Professional Title</Label>
                        <Input
                          value={portfolioData.personalInfo.title}
                          onChange={(e) => updatePersonalInfo("title", e.target.value)}
                          className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                          placeholder="Software Engineer"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium">Profile Image</Label>
                      <div className="mt-2 flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-200 to-teal-200 rounded-2xl flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-purple-600" />
                        </div>
                        <Button variant="outline" className="border-2 border-purple-200 text-purple-600 bg-transparent">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Image
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium">Bio</Label>
                      <Textarea
                        value={portfolioData.personalInfo.bio}
                        onChange={(e) => updatePersonalInfo("bio", e.target.value)}
                        className="mt-2 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                        placeholder="Brief description about yourself..."
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-700 font-medium">Location</Label>
                        <Input
                          value={portfolioData.personalInfo.location}
                          onChange={(e) => updatePersonalInfo("location", e.target.value)}
                          className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                          placeholder="New York, NY"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700 font-medium">Email</Label>
                        <Input
                          type="email"
                          value={portfolioData.personalInfo.email}
                          onChange={(e) => updatePersonalInfo("email", e.target.value)}
                          className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                        <Github className="w-5 h-5 text-white" />
                      </div>
                      <Input
                        value={portfolioData.personalInfo.github}
                        onChange={(e) => updatePersonalInfo("github", e.target.value)}
                        className="h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                        placeholder="https://github.com/username"
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <Input
                        value={portfolioData.personalInfo.linkedin}
                        onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                        className="h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl flex items-center justify-center">
                        <Twitter className="w-5 h-5 text-white" />
                      </div>
                      <Input
                        value={portfolioData.personalInfo.twitter}
                        onChange={(e) => updatePersonalInfo("twitter", e.target.value)}
                        className="h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                        placeholder="https://twitter.com/username"
                      />
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Projects</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 rounded-2xl border border-white/30">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label className="text-gray-700 font-medium">Project Name</Label>
                          <Input
                            className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                            placeholder="My Awesome Project"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-700 font-medium">Project URL</Label>
                          <Input
                            className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                            placeholder="https://project.com"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-gray-700 font-medium">Description</Label>
                        <Textarea
                          className="mt-2 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
                          placeholder="Describe your project..."
                        />
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                    >
                      Add Another Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="sticky top-8"
          >
            <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[600px]">
                  <PortfolioPreview data={portfolioData} template={selectedTemplate} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function PortfolioPreview({ data, template }: any) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-200 to-teal-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <ImageIcon className="w-10 h-10 text-purple-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{data.personalInfo.name || "Your Name"}</h1>
        <p className="text-lg text-gray-600 mb-2">{data.personalInfo.title || "Your Professional Title"}</p>
        <p className="text-gray-500">{data.personalInfo.location || "Your Location"}</p>
      </div>

      {/* Bio */}
      {data.personalInfo.bio && (
        <div className="text-center">
          <p className="text-gray-700">{data.personalInfo.bio}</p>
        </div>
      )}

      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        {data.personalInfo.github && (
          <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
            <Github className="w-4 h-4 text-white" />
          </div>
        )}
        {data.personalInfo.linkedin && (
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Linkedin className="w-4 h-4 text-white" />
          </div>
        )}
        {data.personalInfo.twitter && (
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Twitter className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">Projects</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Sample Project</h3>
            <p className="text-sm text-gray-600">Add your projects in the form to see them here</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600">{data.personalInfo.email || "your.email@example.com"}</p>
      </div>
    </div>
  )
}
