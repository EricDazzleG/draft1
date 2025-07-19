const mongoose = require("mongoose")

const ResumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    template: {
      type: String,
      default: "modern",
    },
    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      location: String,
      website: String,
      linkedin: String,
      github: String,
      summary: String,
    },
    experience: [
      {
        company: String,
        position: String,
        startDate: String,
        endDate: String,
        description: String,
        current: Boolean,
      },
    ],
    education: [
      {
        institution: String,
        degree: String,
        field: String,
        startDate: String,
        endDate: String,
        gpa: String,
      },
    ],
    skills: [String],
    projects: [
      {
        name: String,
        description: String,
        technologies: [String],
        link: String,
        github: String,
      },
    ],
    certifications: [
      {
        name: String,
        issuer: String,
        date: String,
        link: String,
      },
    ],
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model("Resume", ResumeSchema)
