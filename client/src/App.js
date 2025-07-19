import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { Toaster } from "react-hot-toast"

// Components
import LandingPage from "./components/LandingPage"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Dashboard from "./components/Dashboard"
import ResumeBuilder from "./components/ResumeBuilder"
import PortfolioCreator from "./components/PortfolioCreator"
import PortfolioView from "./components/PortfolioView"
import PrivateRoute from "./components/PrivateRoute"
import ParticlesBackground from "./components/ParticlesBackground"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App animated-bg min-h-screen">
          <ParticlesBackground />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "15px",
                color: "white",
              },
            }}
          />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/resume-builder"
              element={
                <PrivateRoute>
                  <ResumeBuilder />
                </PrivateRoute>
              }
            />
            <Route
              path="/portfolio-creator"
              element={
                <PrivateRoute>
                  <PortfolioCreator />
                </PrivateRoute>
              }
            />
            <Route path="/portfolio/:username" element={<PortfolioView />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
