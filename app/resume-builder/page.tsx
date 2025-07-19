"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Eye,
  Save,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Experience", icon: Briefcase },
  { id: 3, title: "Education", icon: GraduationCap },
  { id: 4, title: "Skills", icon: Award },
]

const templates = [
  { id: 1, name: "Modern", preview: "modern-template" },
  { id: 2, name: "Professional", preview: "professional-template" },
  { id: 3, name: "Creative", preview: "creative-template" },
]

export default function ResumeBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTemplate, setSelectedTemplate] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: [],
  })

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep formData={formData} setFormData={setFormData} />
      case 2:
        return <ExperienceStep formData={formData} setFormData={setFormData} />
      case 3:
        return <EducationStep formData={formData} setFormData={setFormData} />
      case 4:
        return <SkillsStep formData={formData} setFormData={setFormData} />
      default:
        return <PersonalInfoStep formData={formData} setFormData={setFormData} />
    }
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
            <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
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
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="flex max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="w-1/2 p-8">
          {/* Progress Steps */}
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg"
                        : "bg-white/60 text-gray-400 border-2 border-gray-200"
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${
                        currentStep > step.id ? "bg-gradient-to-r from-purple-500 to-teal-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step) => (
                <span
                  key={step.id}
                  className={`text-sm font-medium ${currentStep >= step.id ? "text-purple-600" : "text-gray-400"}`}
                >
                  {step.title}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div
            key={currentStep}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
          >
            <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="border-2 border-gray-200 disabled:opacity-50 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={currentStep === steps.length}
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
              >
                {currentStep === steps.length ? "Finish" : "Next"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Preview Section */}
        <div className="w-1/2 p-8">
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="sticky top-8">
            {/* Template Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Template</h3>
              <div className="flex space-x-3">
                {templates.map((template) => (
                  <motion.button
                    key={template.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`px-4 py-2 rounded-2xl font-medium transition-all duration-300 ${
                      selectedTemplate === template.id
                        ? "bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg"
                        : "bg-white/60 text-gray-600 hover:bg-white/80"
                    }`}
                  >
                    {template.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Live Preview */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-white/50">
              <div className="aspect-[8.5/11] bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
                <ResumePreview formData={formData} template={selectedTemplate} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Step Components
function PersonalInfoStep({ formData, setFormData }: any) {
  const updatePersonalInfo = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }))
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600">Let's start with your basic information</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName" className="text-gray-700 font-medium">
            Full Name
          </Label>
          <Input
            id="fullName"
            value={formData.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
            className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.personalInfo.email}
            onChange={(e) => updatePersonalInfo("email", e.target.value)}
            className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Phone
          </Label>
          <Input
            id="phone"
            value={formData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <Label htmlFor="location" className="text-gray-700 font-medium">
            Location
          </Label>
          <Input
            id="location"
            value={formData.personalInfo.location}
            onChange={(e) => updatePersonalInfo("location", e.target.value)}
            className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            placeholder="New York, NY"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="summary" className="text-gray-700 font-medium">
          Professional Summary
        </Label>
        <Textarea
          id="summary"
          value={formData.personalInfo.summary}
          onChange={(e) => updatePersonalInfo("summary", e.target.value)}
          className="mt-2 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500 min-h-[120px]"
          placeholder="Write a brief summary of your professional background and career objectives..."
        />
      </div>
    </motion.div>
  )
}

function ExperienceStep({ formData, setFormData }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Work Experience</h2>
        <p className="text-gray-600">Add your professional experience</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700 font-medium">Job Title</Label>
            <Input
              className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
              placeholder="Software Engineer"
            />
          </div>
          <div>
            <Label className="text-gray-700 font-medium">Company</Label>
            <Input
              className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
              placeholder="Tech Corp"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700 font-medium">Start Date</Label>
            <Input
              type="month"
              className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <Label className="text-gray-700 font-medium">End Date</Label>
            <Input
              type="month"
              className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">Description</Label>
          <Textarea
            className="mt-2 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500 min-h-[120px]"
            placeholder="Describe your responsibilities and achievements..."
          />
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
      >
        Add Another Experience
      </Button>
    </motion.div>
  )
}

function EducationStep({ formData, setFormData }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Education</h2>
        <p className="text-gray-600">Add your educational background</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700 font-medium">Degree</Label>
            <Input
              className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
              placeholder="Bachelor of Science"
            />
          </div>
          <div>
            <Label className="text-gray-700 font-medium">Field of Study</Label>
            <Input
              className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
              placeholder="Computer Science"
            />
          </div>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">School</Label>
          <Input
            className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            placeholder="University of Technology"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700 font-medium">Start Date</Label>
            <Input
              type="month"
              className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <Label className="text-gray-700 font-medium">End Date</Label>
            <Input
              type="month"
              className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">GPA (Optional)</Label>
          <Input
            className="mt-2 h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            placeholder="3.8"
          />
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
      >
        Add Another Education
      </Button>
    </motion.div>
  )
}

function SkillsStep({ formData, setFormData }: any) {
  const [skillInput, setSkillInput] = useState("")
  const [skills, setSkills] = useState<string[]>([])

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()])
      setSkillInput("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Skills</h2>
        <p className="text-gray-600">Add your technical and soft skills</p>
      </div>

      <div>
        <Label className="text-gray-700 font-medium">Add Skills</Label>
        <div className="flex mt-2 space-x-2">
          <Input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addSkill()}
            className="h-12 bg-white/80 border-white/50 rounded-2xl focus:ring-2 focus:ring-purple-500"
            placeholder="e.g., JavaScript, React, Node.js"
          />
          <Button
            onClick={addSkill}
            className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
          >
            Add
          </Button>
        </div>
      </div>

      <div>
        <Label className="text-gray-700 font-medium">Your Skills</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 text-sm font-medium"
            >
              {skill}
              <button onClick={() => removeSkill(skill)} className="ml-2 text-purple-500 hover:text-purple-700">
                ×
              </button>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ResumePreview({ formData, template }: any) {
  return (
    <div className="h-full overflow-hidden">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">{formData.personalInfo.fullName || "Your Name"}</h1>
        <p className="text-gray-600">
          {formData.personalInfo.email || "your.email@example.com"} •{" "}
          {formData.personalInfo.phone || "+1 (555) 123-4567"}
        </p>
        <p className="text-gray-600">{formData.personalInfo.location || "Your Location"}</p>
      </div>

      {formData.personalInfo.summary && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">Summary</h2>
          <p className="text-sm text-gray-700">{formData.personalInfo.summary}</p>
        </div>
      )}

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">Experience</h2>
        <div className="text-sm text-gray-600">
          <p>Add your work experience in the form</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">Education</h2>
        <div className="text-sm text-gray-600">
          <p>Add your education in the form</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">Skills</h2>
        <div className="text-sm text-gray-600">
          <p>Add your skills in the form</p>
        </div>
      </div>
    </div>
  )
}
