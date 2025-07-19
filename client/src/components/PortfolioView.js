"use client"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Container, Row, Col, Button } from "react-bootstrap"
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa"

const PortfolioView = () => {
  const { username } = useParams()

  // Mock portfolio data
  const portfolioData = {
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Passionate developer with 5+ years of experience building web applications. I love creating beautiful, functional, and user-friendly interfaces.",
    avatar: "/placeholder.svg?height=200&width=200",
    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform built with React and Node.js",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "A beautiful weather dashboard with location-based forecasts",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
    contact: {
      email: "john@example.com",
      github: "johndoe",
      linkedin: "johndoe",
    },
  }

  return (
    <div className="min-h-screen relative z-10">
      <Container className="py-5">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <div className="clay-card p-5">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              src={portfolioData.avatar}
              alt={portfolioData.name}
              className="rounded-circle mb-4 float"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h1 className="text-white font-bold mb-2">{portfolioData.name}</h1>
            <h4 className="text-white opacity-75 mb-4">{portfolioData.title}</h4>
            <p className="text-white opacity-90 mb-4 lead">{portfolioData.bio}</p>

            <div className="d-flex justify-content-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${portfolioData.contact.email}`}
                className="clay-button text-white text-decoration-none px-4 py-2 d-inline-flex align-items-center"
              >
                <FaEnvelope className="me-2" />
                Contact
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://github.com/${portfolioData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-button text-white text-decoration-none px-4 py-2 d-inline-flex align-items-center"
              >
                <FaGithub className="me-2" />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://linkedin.com/in/${portfolioData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-button text-white text-decoration-none px-4 py-2 d-inline-flex align-items-center"
              >
                <FaLinkedin className="me-2" />
                LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <h2 className="text-white font-bold text-center mb-5">Featured Projects</h2>
          <Row className="g-4">
            {portfolioData.projects.map((project, index) => (
              <Col lg={4} md={6} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className="clay-card p-0 overflow-hidden h-100"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h5 className="text-white font-semibold mb-2">{project.title}</h5>
                    <p className="text-white opacity-75 mb-3">{project.description}</p>

                    <div className="mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-white bg-opacity-20 text-white me-2 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2">
                      <Button
                        size="sm"
                        className="clay-button border-0 text-white px-3 py-1"
                        href={project.liveUrl}
                        target="_blank"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live
                      </Button>
                      <Button
                        size="sm"
                        className="clay-button border-0 text-white px-3 py-1"
                        href={project.githubUrl}
                        target="_blank"
                      >
                        <FaGithub className="me-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="clay-card p-5">
            <h3 className="text-white font-bold mb-3">Let's Work Together</h3>
            <p className="text-white opacity-75 mb-4">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <Button
              size="lg"
              className="clay-button border-0 text-white px-5 py-3 pulse-glow"
              href={`mailto:${portfolioData.contact.email}`}
            >
              <FaEnvelope className="me-2" />
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default PortfolioView
