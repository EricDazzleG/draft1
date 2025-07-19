"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaArrowLeft, FaUser, FaBriefcase, FaGraduationCap, FaCog, FaDownload, FaEye, FaSave } from "react-icons/fa"

const ResumeBuilder = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [resumeData, setResumeData] = useState({
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

  const steps = [
    { title: "Personal Info", icon: FaUser },
    { title: "Experience", icon: FaBriefcase },
    { title: "Education", icon: FaGraduationCap },
    { title: "Skills", icon: FaCog },
  ]

  const handleInputChange = (section, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const renderPersonalInfoForm = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="clay-card p-4">
      <h4 className="text-white font-bold mb-4">Personal Information</h4>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label className="text-white">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={resumeData.personalInfo.fullName}
              onChange={(e) => handleInputChange("personalInfo", "fullName", e.target.value)}
              className="glass-input"
            />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label className="text-white">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={resumeData.personalInfo.email}
              onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
              className="glass-input"
            />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label className="text-white">Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={resumeData.personalInfo.phone}
              onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
              className="glass-input"
            />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group>
            <Form.Label className="text-white">Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your location"
              value={resumeData.personalInfo.location}
              onChange={(e) => handleInputChange("personalInfo", "location", e.target.value)}
              className="glass-input"
            />
          </Form.Group>
        </Col>
        <Col md={12} className="mb-3">
          <Form.Group>
            <Form.Label className="text-white">Professional Summary</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write a brief professional summary"
              value={resumeData.personalInfo.summary}
              onChange={(e) => handleInputChange("personalInfo", "summary", e.target.value)}
              className="glass-input"
            />
          </Form.Group>
        </Col>
      </Row>
    </motion.div>
  )

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return renderPersonalInfoForm()
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="clay-card p-4">
            <h4 className="text-white font-bold mb-4">Work Experience</h4>
            <p className="text-white opacity-75">Add your work experience here...</p>
          </motion.div>
        )
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="clay-card p-4">
            <h4 className="text-white font-bold mb-4">Education</h4>
            <p className="text-white opacity-75">Add your education details here...</p>
          </motion.div>
        )
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="clay-card p-4">
            <h4 className="text-white font-bold mb-4">Skills</h4>
            <p className="text-white opacity-75">Add your skills here...</p>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative z-10">
      {/* Navigation */}
      <motion.nav
        className="clay-card mx-4 mt-4 p-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Link to="/dashboard" className="text-white text-decoration-none me-3">
                <FaArrowLeft className="text-xl" />
              </Link>
              <h4 className="text-white mb-0">Resume Builder</h4>
            </div>
            <div className="d-flex gap-2">
              <Button className="clay-button border-0 text-white px-3 py-2">
                <FaSave className="me-2" />
                Save
              </Button>
              <Button className="clay-button border-0 text-white px-3 py-2">
                <FaEye className="me-2" />
                Preview
              </Button>
              <Button className="clay-button border-0 text-white px-3 py-2">
                <FaDownload className="me-2" />
                Download
              </Button>
            </div>
          </div>
        </Container>
      </motion.nav>

      <Container className="py-5">
        <Row>
          {/* Steps Sidebar */}
          <Col lg={3} className="mb-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="clay-card p-4">
              <h5 className="text-white font-bold mb-4">Steps</h5>
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`d-flex align-items-center p-3 rounded-3 mb-2 cursor-pointer transition-all ${
                    activeStep === index ? "bg-white bg-opacity-20" : "bg-white bg-opacity-5 hover:bg-opacity-10"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <step.icon className={`me-3 ${activeStep === index ? "text-white" : "text-white opacity-75"}`} />
                  <span className={`${activeStep === index ? "text-white font-semibold" : "text-white opacity-75"}`}>
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          {/* Form Content */}
          <Col lg={6}>
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <Button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => prev - 1)}
                className="clay-button border-0 text-white px-4 py-2"
              >
                Previous
              </Button>
              <Button
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => prev + 1)}
                className="clay-button border-0 text-white px-4 py-2"
              >
                Next
              </Button>
            </div>
          </Col>

          {/* Live Preview */}
          <Col lg={3}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="clay-card p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="text-white font-bold mb-4">Live Preview</h5>
              <div className="bg-white rounded-3 p-4 min-h-96">
                <div className="text-center">
                  <h6 className="mb-2">{resumeData.personalInfo.fullName || "Your Name"}</h6>
                  <p className="text-muted small mb-3">{resumeData.personalInfo.email || "your.email@example.com"}</p>
                  <p className="small text-muted">
                    {resumeData.personalInfo.summary || "Your professional summary will appear here..."}
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ResumeBuilder
