"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Container, Row, Col, Button } from "react-bootstrap"
import { FaRocket, FaUser, FaBriefcase, FaDownload, FaEye, FaEdit } from "react-icons/fa"

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const features = [
    {
      icon: <FaEdit className="text-4xl mb-3" />,
      title: "Easy Builder",
      description: "Drag-and-drop interface with real-time preview",
    },
    {
      icon: <FaUser className="text-4xl mb-3" />,
      title: "Professional Templates",
      description: "Choose from modern, ATS-friendly resume templates",
    },
    {
      icon: <FaBriefcase className="text-4xl mb-3" />,
      title: "Portfolio Creator",
      description: "Showcase your work with stunning portfolio websites",
    },
    {
      icon: <FaDownload className="text-4xl mb-3" />,
      title: "Export Options",
      description: "Download as PDF or share with a custom link",
    },
    {
      icon: <FaEye className="text-4xl mb-3" />,
      title: "Live Preview",
      description: "See changes instantly as you build your resume",
    },
    {
      icon: <FaRocket className="text-4xl mb-3" />,
      title: "Fast & Secure",
      description: "Lightning-fast performance with secure data storage",
    },
  ]

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
            <motion.div className="d-flex align-items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FaRocket className="text-white text-3xl me-3 wiggle" />
              <h3 className="text-white mb-0 font-bold">ResumeGen</h3>
            </motion.div>
            <div className="d-flex gap-3">
              <Link to="/login">
                <Button className="clay-button border-0 text-white px-4 py-2">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="clay-button border-0 text-white px-4 py-2 pulse-glow">Get Started</Button>
              </Link>
            </div>
          </div>
        </Container>
      </motion.nav>

      {/* Hero Section */}
      <Container className="py-5">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center py-5">
          <Row className="justify-content-center">
            <Col lg={8}>
              <motion.div variants={itemVariants}>
                <h1 className="display-3 text-white font-bold mb-4 slide-in-up">
                  Create Your Perfect
                  <span className="d-block text-gradient bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
                    Resume & Portfolio
                  </span>
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="lead text-white mb-5 opacity-90 slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Build stunning resumes and portfolios with our modern, claymorphic design system. Stand out from the
                crowd with professional templates and real-time editing.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="d-flex gap-3 justify-content-center flex-wrap slide-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Link to="/register">
                  <Button size="lg" className="clay-button border-0 text-white px-5 py-3 me-3 mb-3">
                    <FaRocket className="me-2" />
                    Start Building Free
                  </Button>
                </Link>
                <Button variant="outline-light" size="lg" className="clay-button border-2 px-5 py-3 mb-3">
                  <FaEye className="me-2" />
                  View Examples
                </Button>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-5 mt-5"
        >
          <Row>
            <Col lg={12} className="text-center mb-5">
              <motion.h2 variants={itemVariants} className="display-5 text-white font-bold mb-3" data-aos="fade-up">
                Why Choose ResumeGen?
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="lead text-white opacity-90"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Everything you need to create professional resumes and portfolios
              </motion.p>
            </Col>
          </Row>

          <Row className="g-4">
            {features.map((feature, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="clay-card p-4 h-100 text-center float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-white mb-3">{feature.icon}</div>
                  <h5 className="text-white font-semibold mb-3">{feature.title}</h5>
                  <p className="text-white opacity-90 mb-0">{feature.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-5 mt-5"
        >
          <div className="clay-card p-5">
            <h3 className="text-white font-bold mb-3" data-aos="fade-up">
              Ready to Get Started?
            </h3>
            <p className="text-white opacity-90 mb-4" data-aos="fade-up" data-aos-delay="200">
              Join thousands of professionals who have already created their perfect resume
            </p>
            <Link to="/register">
              <Button
                size="lg"
                className="clay-button border-0 text-white px-5 py-3 pulse-glow"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FaRocket className="me-2" />
                Create Your Resume Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>

      {/* Footer */}
      <motion.footer
        className="clay-card mx-4 mb-4 p-4 mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <div className="text-center">
            <p className="text-white opacity-75 mb-0">© 2024 ResumeGen. Built with ❤️ for professionals everywhere.</p>
          </div>
        </Container>
      </motion.footer>
    </div>
  )
}

export default LandingPage
