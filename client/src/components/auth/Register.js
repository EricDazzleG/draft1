"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaArrowLeft } from "react-icons/fa"
import { useAuth } from "../../context/AuthContext"
import toast from "react-hot-toast"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    const result = await register(formData.name, formData.email, formData.password)

    if (result.success) {
      toast.success("Account created successfully! 🎉")
      navigate("/dashboard")
    } else {
      setError(result.message)
      toast.error(result.message)
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen d-flex align-items-center relative z-10">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="clay-card p-5"
            >
              {/* Header */}
              <div className="text-center mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="mb-3"
                >
                  <FaUserPlus className="text-white text-5xl pulse-glow" />
                </motion.div>
                <h2 className="text-white font-bold mb-2">Create Account</h2>
                <p className="text-white opacity-75">Join thousands of professionals</p>
              </div>

              {/* Error Alert */}
              {error && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
                  <Alert variant="danger" className="clay-card border-0 text-white">
                    {error}
                  </Alert>
                </motion.div>
              )}

              {/* Register Form */}
              <Form onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-3"
                >
                  <Form.Group>
                    <div className="position-relative">
                      <FaUser
                        className="position-absolute text-white opacity-75"
                        style={{ left: "15px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
                      />
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass-input ps-5 py-3 border-0"
                        style={{ paddingLeft: "45px" }}
                      />
                    </div>
                  </Form.Group>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-3"
                >
                  <Form.Group>
                    <div className="position-relative">
                      <FaEnvelope
                        className="position-absolute text-white opacity-75"
                        style={{ left: "15px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
                      />
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass-input ps-5 py-3 border-0"
                        style={{ paddingLeft: "45px" }}
                      />
                    </div>
                  </Form.Group>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-3"
                >
                  <Form.Group>
                    <div className="position-relative">
                      <FaLock
                        className="position-absolute text-white opacity-75"
                        style={{ left: "15px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
                      />
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="glass-input ps-5 py-3 border-0"
                        style={{ paddingLeft: "45px" }}
                      />
                    </div>
                  </Form.Group>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mb-4"
                >
                  <Form.Group>
                    <div className="position-relative">
                      <FaLock
                        className="position-absolute text-white opacity-75"
                        style={{ left: "15px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
                      />
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="glass-input ps-5 py-3 border-0"
                        style={{ paddingLeft: "45px" }}
                      />
                    </div>
                  </Form.Group>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="d-grid mb-4"
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="clay-button border-0 text-white py-3 position-relative overflow-hidden"
                  >
                    {isLoading ? (
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="loading-spinner me-2"></div>
                        Creating Account...
                      </div>
                    ) : (
                      <>
                        <FaUserPlus className="me-2" />
                        Create Account
                      </>
                    )}
                  </Button>
                </motion.div>
              </Form>

              {/* Footer Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <p className="text-white opacity-75 mb-3">
                  Already have an account?{" "}
                  <Link to="/login" className="text-white font-semibold text-decoration-none">
                    Sign in here
                  </Link>
                </p>
                <Link to="/" className="text-white opacity-75 text-decoration-none d-inline-flex align-items-center">
                  <FaArrowLeft className="me-2" />
                  Back to Home
                </Link>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
