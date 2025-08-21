import React, { useState, useRef, useEffect } from "react";
import Layout from "../UI/Layout.jsx";
import { Container, Row, Col, Form, Button, ProgressBar } from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaBuilding,
  FaCalendarAlt,
  FaFileAlt,
  FaAward,
  FaPalette
} from "react-icons/fa";
import "./ResumeForm3D.css";
import TemplateSelector from "../TemplateSelector/TemplateSelector.jsx";
import ResumePreview from "../ResumePreview/ResumePreview.jsx";

// Utility: safe uid (fallback when crypto.randomUUID not present)
function uid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "id_" + Math.random().toString(36).slice(2, 9);
}

// Utility function for class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Simple motion component for animations (keeps things simple)
const MotionDiv = ({ children, className, style, ...props }) => (
  <div className={className} style={style} {...props}>
    {children}
  </div>
);

// 3D Wrapper Component — tilting removed (static container)
const Wrapper3D = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};

// Enhanced Input Component (add glow-on-hover)
const Input3D = React.forwardRef(({ className, icon: Icon, ...props }, ref) => (
  <div className="input-3d-wrapper">
    <div className="input-3d-container glow-on-hover">
      <div className="input-3d-gradient" />
      <div className="input-3d-content">
        {Icon && <Icon className="input-icon" />}
        <input ref={ref} className={cn("input-3d", className)} {...props} />
      </div>
    </div>
  </div>
));

// Enhanced Textarea Component (add glow-on-hover)
const Textarea3D = React.forwardRef(({ className, icon: Icon, ...props }, ref) => (
  <div className="textarea-3d-wrapper">
    <div className="textarea-3d-container glow-on-hover">
      <div className="textarea-3d-gradient" />
      <div className="textarea-3d-content">
        {Icon && <Icon className="input-icon" />}
        <textarea ref={ref} className={cn("textarea-3d", className)} {...props} />
      </div>
    </div>
  </div>
));

// Form Step Component
const FormStep = ({ title, description, icon: Icon, children, isActive }) => (
  <MotionDiv
    className="form-step"
    style={{
      opacity: isActive ? 1 : 0,
      transform: `translateX(${isActive ? 0 : 20}px)`,
      transition: "all 0.3s ease"
    }}
  >
    <div className="step-header">
      <Icon className="step-icon" />
      <div>
        <h3 className="step-title">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
    </div>
    <div className="step-content">{children}</div>
  </MotionDiv>
);

// Default item creators
const emptyExperience = () => ({
  id: uid(),
  jobTitle: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  current: false,
  description: ""
});

const emptyEducation = () => ({
  id: uid(),
  degree: "",
  school: "",
  graduationDate: "",
  gpa: ""
});

// Main Resume Form Component
const ResumeForm3D = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: ""
    },
    summary: "",
    experience: [emptyExperience()],
    education: [emptyEducation()],
    skills: []
  });

  // Background ref + rAF throttling for the large soft glow that follows cursor
  const bgRef = useRef(null);
  const rafRef = useRef(null);
  const lastMouseRef = useRef({ x: "50%", y: "40%" });

  const handleBgMouseMove = (e) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      return;
    }
    const el = bgRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    lastMouseRef.current = { x, y };

    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      if (!bgRef.current) {
        rafRef.current = null;
        return;
      }
      bgRef.current.style.setProperty("--mouse-x", `${lastMouseRef.current.x}px`);
      bgRef.current.style.setProperty("--mouse-y", `${lastMouseRef.current.y}px`);
      rafRef.current = null;
    });
  };

  const handleBgMouseLeave = () => {
    const el = bgRef.current;
    if (!el) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!bgRef.current) {
        rafRef.current = null;
        return;
      }
      bgRef.current.style.setProperty("--mouse-x", `50%`);
      bgRef.current.style.setProperty("--mouse-y", `40%`);
      rafRef.current = null;
    });
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Per-element glow-on-hover: attach lightweight listeners and rAF-throttle updates
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".glow-on-hover"));
    const cleanups = [];

    nodes.forEach((el) => {
      let raf = null;

      const onMove = (e) => {
        if (
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(max-width: 768px)").matches
        )
          return;

        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        if (raf) return;
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--gx", `${Math.max(0, Math.min(100, x))}%`);
          el.style.setProperty("--gy", `${Math.max(0, Math.min(100, y))}%`);
          raf = null;
        });
      };

      const onLeave = () => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--gx", `50%`);
          el.style.setProperty("--gy", `50%`);
          raf = null;
        });
      };

      el.addEventListener("mousemove", onMove, { passive: true });
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("blur", onLeave);

      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
        el.removeEventListener("blur", onLeave);
        if (raf) cancelAnimationFrame(raf);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []); // run once on mount

  const totalSteps = 5; // Added template selection step
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    {
      title: "Personal Information",
      description: "Let's start with your basic details",
      icon: FaUser
    },
    {
      title: "Professional Summary",
      description: "Tell us about your professional background",
      icon: FaFileAlt
    },
    {
      title: "Work Experience",
      description: "Add your work experience",
      icon: FaBriefcase
    },
    {
      title: "Education & Skills",
      description: "Complete your profile",
      icon: FaGraduationCap
    },
    {
      title: "Choose Template",
      description: "Select your preferred resume design",
      icon: FaPalette
    }
  ];

  // Generic input handler that supports both object sections (e.g. personalInfo.firstName)
  // and top-level fields (e.g. summary)
  const handleInputChange = (section, field, value) => {
    if (field === null || field === undefined || field === "") {
      setFormData((prev) => ({ ...prev, [section]: value }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(typeof prev[section] === "object" && prev[section] !== null ? prev[section] : {}),
        [field]: value
      }
    }));
  };

  // For array sections like experience/education
  const handleArrayChange = (section, index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) => (i === index ? { ...item, [field]: value } : item))
    }));
  };

  const addItem = (section) => {
    const newItem = section === "experience" ? emptyExperience() : emptyEducation();

    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeItem = (section, id) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handlePreview = (templateId) => {
    setSelectedTemplate(templateId);
    setShowPreview(true);
  };

  const handleBackFromPreview = () => {
    setShowPreview(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call or generation
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    setShowPreview(true);
  };

  // If showing preview, render the preview component
  if (showPreview) {
    return <ResumePreview formData={formData} template={selectedTemplate} onBack={handleBackFromPreview} />;
  }

  // Template selection step (step 5)
  if (currentStep === 5) {
    return (
      <Layout>
        <div className="resume-form-3d" ref={bgRef} onMouseMove={handleBgMouseMove} onMouseLeave={handleBgMouseLeave}>
          <Container fluid className="py-5">
            <Row className="justify-content-center">
              <Col lg={12}>
                {/* Header */}
                <div className="form-header text-center mb-5">
                  <h1 className="form-title">Choose Your Template</h1>
                  <p className="form-subtitle">Select a design that matches your professional style</p>

                  {/* Progress Bar */}
                  <div className="progress-container mt-4">
                    <ProgressBar now={progress} className="custom-progress" variant="primary" />
                    <div className="progress-steps">
                      {steps.map((step, index) => (
                        <span key={index} className={cn("step", currentStep >= index + 1 && "active")}>
                          {step.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <TemplateSelector selectedTemplate={selectedTemplate} onTemplateSelect={handleTemplateSelect} onPreview={handlePreview} />

                {/* Navigation Buttons */}
                <div className="text-center mt-4">
                  <Button variant="outline-secondary" onClick={prevStep} className="me-3">
                    Previous
                  </Button>
                  <Button variant="success" onClick={handleSubmit} disabled={isLoading} className="generate-btn">
                    {isLoading ? "Generating..." : "Generate Resume"}
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }

  // Main form render for steps 1-4
  return (
    <Layout>
      <div className="resume-form-3d" ref={bgRef} onMouseMove={handleBgMouseMove} onMouseLeave={handleBgMouseLeave}>
        <Container fluid className="py-5">
          <Row className="justify-content-center">
            <Col lg={10}>
              {/* Header */}
              <div className="form-header text-center mb-5">
                <h1 className="form-title">Create Your Professional Resume</h1>
                <p className="form-subtitle">Build a stunning resume with our 3D form builder</p>

                {/* Progress Bar */}
                <div className="progress-container mt-4">
                  <ProgressBar now={progress} className="custom-progress" variant="primary" />
                  <div className="progress-steps">
                    {steps.map((step, index) => (
                      <span key={index} className={cn("step", currentStep >= index + 1 && "active")}>
                        {step.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Container */}
              <Wrapper3D className="form-container">
                <div className="form-card glow-on-hover">
                  <div className="form-side">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <FormStep title="Personal Information" description="Let's start with your basic details" icon={FaUser} isActive={true}>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="form-group-3d mb-3">
                              <Form.Label>First Name</Form.Label>
                              <Input3D type="text" value={formData.personalInfo.firstName} onChange={(e) => handleInputChange("personalInfo", "firstName", e.target.value)} placeholder="John" icon={FaUser} />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="form-group-3d mb-3">
                              <Form.Label>Last Name</Form.Label>
                              <Input3D type="text" value={formData.personalInfo.lastName} onChange={(e) => handleInputChange("personalInfo", "lastName", e.target.value)} placeholder="Doe" />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <Form.Group className="form-group-3d mb-3">
                              <Form.Label>Email</Form.Label>
                              <Input3D type="email" value={formData.personalInfo.email} onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)} placeholder="john.doe@example.com" icon={FaEnvelope} />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="form-group-3d mb-3">
                              <Form.Label>Phone</Form.Label>
                              <Input3D type="tel" value={formData.personalInfo.phone} onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)} placeholder="+1 (555) 123-4567" icon={FaPhone} />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group className="form-group-3d mb-3">
                          <Form.Label>Location</Form.Label>
                          <Input3D type="text" value={formData.personalInfo.location} onChange={(e) => handleInputChange("personalInfo", "location", e.target.value)} placeholder="New York, NY" icon={FaMapMarkerAlt} />
                        </Form.Group>

                        <Form.Group className="form-group-3d mb-3">
                          <Form.Label>LinkedIn Profile</Form.Label>
                          <Input3D type="url" value={formData.personalInfo.linkedin} onChange={(e) => handleInputChange("personalInfo", "linkedin", e.target.value)} placeholder="linkedin.com/in/johndoe" />
                        </Form.Group>
                      </FormStep>
                    )}

                    {/* Step 2: Professional Summary */}
                    {currentStep === 2 && (
                      <FormStep title="Professional Summary" description="Tell us about your professional background" icon={FaFileAlt} isActive={true}>
                        <Form.Group className="form-group-3d mb-3">
                          <Form.Label>Professional Summary</Form.Label>
                          <Textarea3D
                            value={formData.summary}
                            onChange={(e) => {
                              const v = e.target.value.slice(0, 500); // optional limit
                              handleInputChange("summary", "", v);
                            }}
                            placeholder="Write a compelling summary of your professional experience, skills, and career objectives..."
                            rows={6}
                          />
                          <div className="d-flex justify-content-between mt-2" style={{ fontSize: 12, color: "#6c757d" }}>
                            <div>Tip: Keep it concise — 2–4 lines works best.</div>
                            <div>{formData.summary ? formData.summary.length : 0} / 500</div>
                          </div>
                        </Form.Group>
                      </FormStep>
                    )}

                    {/* Step 3: Work Experience */}
                    {currentStep === 3 && (
                      <FormStep title="Work Experience" description="Add your work experience" icon={FaBriefcase} isActive={true}>
                        {formData.experience.map((exp, index) => (
                          <div key={exp.id} className="experience-item glow-on-hover">
                            <Row>
                              <Col md={6}>
                                <Form.Group className="form-group-3d mb-3">
                                  <Form.Label>Job Title</Form.Label>
                                  <Input3D type="text" value={exp.jobTitle} onChange={(e) => handleArrayChange("experience", index, "jobTitle", e.target.value)} placeholder="Software Engineer" icon={FaBriefcase} />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="form-group-3d mb-3">
                                  <Form.Label>Company</Form.Label>
                                  <Input3D type="text" value={exp.company} onChange={(e) => handleArrayChange("experience", index, "company", e.target.value)} placeholder="Tech Corp Inc." icon={FaBuilding} />
                                </Form.Group>
                              </Col>
                            </Row>

                            <Row>
                              <Col md={6}>
                                <Form.Group className="form-group-3d mb-3">
                                  <Form.Label>Start Date</Form.Label>
                                  <Input3D type="month" value={exp.startDate} onChange={(e) => handleArrayChange("experience", index, "startDate", e.target.value)} icon={FaCalendarAlt} />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="form-group-3d mb-3">
                                  <Form.Label>End Date</Form.Label>
                                  <Input3D type="month" value={exp.endDate} onChange={(e) => handleArrayChange("experience", index, "endDate", e.target.value)} disabled={exp.current} icon={FaCalendarAlt} />
                                </Form.Group>
                              </Col>
                            </Row>

                            <Form.Group className="form-group-3d mb-3">
                              <Form.Label>Job Description</Form.Label>
                              <Textarea3D value={exp.description} onChange={(e) => handleArrayChange("experience", index, "description", e.target.value)} placeholder="Describe your key responsibilities, achievements, and impact in this role..." rows={3} />
                            </Form.Group>

                            <Button variant="outline-danger" size="sm" onClick={() => removeItem("experience", exp.id)} className="remove-btn">
                              Remove
                            </Button>
                          </div>
                        ))}

                        <Button variant="outline-primary" onClick={() => addItem("experience")} className="add-btn">
                          + Add Experience
                        </Button>
                      </FormStep>
                    )}

                    {/* Step 4: Education & Skills */}
                    {currentStep === 4 && (
                      <FormStep title="Education & Skills" description="Complete your profile" icon={FaGraduationCap} isActive={true}>
                        {formData.education.map((edu, index) => (
                          <div key={edu.id} className="education-item glow-on-hover">
                            <Row>
                              <Col md={6}>
                                <Form.Group className="form-group-3d mb-3">
                                  <Form.Label>Degree</Form.Label>
                                  <Input3D type="text" value={edu.degree} onChange={(e) => handleArrayChange("education", index, "degree", e.target.value)} placeholder="Bachelor of Science in Computer Science" icon={FaGraduationCap} />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="form-group-3d mb-3">
                                  <Form.Label>School/University</Form.Label>
                                  <Input3D type="text" value={edu.school} onChange={(e) => handleArrayChange("education", index, "school", e.target.value)} placeholder="Stanford University" />
                                </Form.Group>
                              </Col>
                            </Row>

                            <Row>
                              <Col md={6}>
                                <Form.Group className="form-group-3d mb-3">
                                  <Form.Label>Graduation Date</Form.Label>
                                  <Input3D type="month" value={edu.graduationDate} onChange={(e) => handleArrayChange("education", index, "graduationDate", e.target.value)} icon={FaCalendarAlt} />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group className="form-group-3d mb-3">
                                  <Form.Label>GPA (Optional)</Form.Label>
                                  <Input3D type="text" value={edu.gpa} onChange={(e) => handleArrayChange("education", index, "gpa", e.target.value)} placeholder="3.8" />
                                </Form.Group>
                              </Col>
                            </Row>

                            <Button variant="outline-danger" size="sm" onClick={() => removeItem("education", edu.id)} className="remove-btn">
                              Remove
                            </Button>
                          </div>
                        ))}

                        <Button variant="outline-primary" onClick={() => addItem("education")} className="add-btn">
                          + Add Education
                        </Button>

                        <Form.Group className="form-group-3d mb-3 mt-3">
                          <Form.Label>Skills</Form.Label>
                          <Textarea3D
                            value={Array.isArray(formData.skills) ? formData.skills.join(", ") : ""}
                            onChange={(e) => {
                              const text = e.target.value;
                              const arr = text.split(",").map((s) => s.trim()).filter(Boolean);
                              setFormData((prev) => ({ ...prev, skills: arr }));
                            }}
                            placeholder="JavaScript, React, Node.js, Python, Project Management, Team Leadership..."
                            rows={3}
                            icon={FaAward}
                          />
                          <div className="d-flex justify-content-between mt-2" style={{ fontSize: 12, color: "#6c757d" }}>
                            <div>Enter skills separated by commas.</div>
                            <div>{Array.isArray(formData.skills) ? formData.skills.length : 0} skills</div>
                          </div>
                        </Form.Group>
                      </FormStep>
                    )}

                    {/* Navigation Buttons */}
                    <div className="form-navigation mt-4 d-flex justify-content-between">
                      <div>{currentStep > 1 && <Button variant="outline-secondary" onClick={prevStep}>Previous</Button>}</div>

                      <div>
                        {currentStep < totalSteps ? (
                          <Button variant="primary" onClick={nextStep}>Next</Button>
                        ) : (
                          <Button variant="success" onClick={handleSubmit} disabled={isLoading} className="generate-btn">
                            {isLoading ? "Generating..." : "Generate Resume"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Wrapper3D>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default ResumeForm3D;
