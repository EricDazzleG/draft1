"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Container, Row, Col, Button } from "react-bootstrap"
import { FaPlus, FaFileAlt, FaBriefcase, FaDownload, FaEye, FaEdit, FaUser, FaSignOutAlt } from "react-icons/fa"
import { useAuth } from "../context/AuthContext"

const Dashboard = () => {
  const { user, logout } = useAuth()
  const [stats, setStats] = useState({
    resumes: 0,
    portfolios: 0,
    views: 0,
    downloads: 0,
  })

  useEffect(() => {
    // Simulate loading stats
    setTimeout(() => {
      setStats({
        resumes: 3,
        portfolios: 2,
        views: 127,
        downloads: 45,
      })
    }, 1000)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const statCards = [
    { title: "Resumes", value: stats.resumes, icon: FaFileAlt, color: "from-blue-400 to-blue-600" },
    { title: "Portfolios", value: stats.portfolios, icon: FaBriefcase, color: "from-green-400 to-green-600" },
    { title: "Profile Views", value: stats.views, icon: FaEye, color: "from-purple-400 to-purple-600" },
    { title: "Downloads", value: stats.downloads, icon: FaDownload, color: "from-pink-400 to-pink-600" },
  ]

  const quickActions = [
    {
      title: "Create Resume",
      description: "Build a new professional resume",
      icon: FaFileAlt,
      link: "/resume-builder",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Create Portfolio",
      description: "Showcase your work and projects",
      icon: FaBriefcase,
      link: "/portfolio-creator",
      color: "from-green-400 to-green-600",
    },
  ]

  const recentItems = [
    { name: "Software Engineer Resume", type: "resume", lastModified: "2 hours ago" },
    { name: "Creative Portfolio", type: "portfolio", lastModified: "1 day ago" },
    { name: "Marketing Manager Resume", type: "resume", lastModified: "3 days ago" },
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
            <div className="d-flex align-items-center">
              <FaUser className="text-white text-2xl me-3" />
              <div>
                <h5 className="text-white mb-0">Welcome back, {user?.name}!</h5>
                <small className="text-white opacity-75">Dashboard</small>
              </div>
            </div>
            <Button onClick={logout} className="clay-button border-0 text-white px-4 py-2">
              <FaSignOutAlt className="me-2" />
              Logout
            </Button>
          </div>
        </Container>
      </motion.nav>

      <Container className="py-5">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Stats Cards */}
          <Row className="mb-5">
            {statCards.map((stat, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  className="clay-card p-4 h-100 text-center"
                >
                  <div
                    className={`bg-gradient-to-r ${stat.color} rounded-full w-16 h-16 d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <stat.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-white font-bold mb-1">{stat.value}</h3>
                  <p className="text-white opacity-75 mb-0">{stat.title}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Quick Actions */}
          <Row className="mb-5">
            <Col lg={12}>
              <motion.h3 variants={itemVariants} className="text-white font-bold mb-4">
                Quick Actions
              </motion.h3>
            </Col>
            {quickActions.map((action, index) => (
              <Col lg={6} key={index} className="mb-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={action.link} className="text-decoration-none">
                    <div className="clay-card p-4 h-100">
                      <div className="d-flex align-items-center">
                        <div
                          className={`bg-gradient-to-r ${action.color} rounded-full w-12 h-12 d-flex align-items-center justify-content-center me-3`}
                        >
                          <action.icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h5 className="text-white font-semibold mb-1">{action.title}</h5>
                          <p className="text-white opacity-75 mb-0">{action.description}</p>
                        </div>
                        <FaPlus className="text-white ms-auto" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Recent Items */}
          <Row>
            <Col lg={12}>
              <motion.div variants={itemVariants} className="clay-card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="text-white font-bold mb-0">Recent Items</h4>
                  <Button className="clay-button border-0 text-white px-3 py-2">View All</Button>
                </div>

                <div className="space-y-3">
                  {recentItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-white bg-opacity-10 mb-3"
                    >
                      <div className="d-flex align-items-center">
                        {item.type === "resume" ? (
                          <FaFileAlt className="text-blue-400 me-3" />
                        ) : (
                          <FaBriefcase className="text-green-400 me-3" />
                        )}
                        <div>
                          <h6 className="text-white mb-0">{item.name}</h6>
                          <small className="text-white opacity-75">{item.lastModified}</small>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <Button size="sm" className="clay-button border-0 text-white px-2 py-1">
                          <FaEdit />
                        </Button>
                        <Button size="sm" className="clay-button border-0 text-white px-2 py-1">
                          <FaEye />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  )
}

export default Dashboard
