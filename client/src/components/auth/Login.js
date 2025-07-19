"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { FaEnvelope, FaLock, FaSignInAlt, FaArrowLeft } from "react-icons/fa"
import { useAuth } from "../../context/AuthContext"
import toast from "react-hot-toast"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useAuth()
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

    const result = await login(formData.email, formData.password)

    if (result.success) {
      toast.success("Welcome back! 🎉")
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
                  <FaSignInAlt className="text-white text-5xl pulse-glow" />
                </motion.div>
                <h2 className="text-white font-bold mb-2">Welcome Back</h2>
                <p className="text-white opacity-75">Sign in to your account</p>
              </div>

              {/* Error Alert */}
              {error && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
                  <Alert variant="danger" className="clay-card border-0 text-white">
                    {error}
                  </Alert>
                </motion.div>
              )}

              {/* Login Form */}
              <Form onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
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
                  transition={{ delay: 0.5 }}
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
                        name="password"
                        placeholder="Enter your password"
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
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
                        Signing In...
                      </div>
                    ) : (
                      <>
                        <FaSignInAlt className="me-2" />
                        Sign In
                      </>
                    )}
                  </Button>
                </motion.div>
              </Form>

              {/* Footer Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <p className="text-white opacity-75 mb-3">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-white font-semibold text-decoration-none">
                    Sign up here
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

export default Login
