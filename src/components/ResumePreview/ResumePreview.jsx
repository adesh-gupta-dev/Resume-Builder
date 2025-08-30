import React, { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaBriefcase, FaGraduationCap, FaStar, FaDownload, FaPrint, FaArrowLeft } from 'react-icons/fa';
import { generatePDF, printResume } from '../../utils/pdfGenerator';

import './ResumePreview.css';

const ResumePreview = ({ formData, template, onBack }) => {
  const resumeRef = useRef(null);

  const handleDownload = async () => {
    if (resumeRef.current) {
      resumeRef.current.id = 'resume-content';
      const result = await generatePDF('resume-content', `${formData.personalInfo.firstName}_${formData.personalInfo.lastName}__Resume.pdf`);
      if (result.success) {
        console.log('PDF downloaded successfully');
      } else {
        console.error('PDF download failed:', result.message);
      }
    }
  };

  const handlePrint = () => {
    const result = printResume();
    if (result.success) {
      console.log('Print dialog opened');
      alert('Print dialog opened');
    } else {
      console.error('Print failed:', result.message);
      alert('Print failed: ' + result.message);
    }
  };

  const renderTemplate1 = () => (
    <div className="resume-template-1">
      <div className="resume-header">
        <div className="header-content">
          <h1 className="name">{formData.personalInfo.firstName} {formData.personalInfo.lastName}</h1>
          {/* <p className="title">Professional Resume</p> */}
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>{formData.personalInfo.email}</span>
            </div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <span>{formData.personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>{formData.personalInfo.location}</span>
            </div>
            {formData.personalInfo.linkedin && (
              <div className="contact-item">
                <FaLinkedin className="icon" />
                <span>{formData.personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="resume-body">
        {formData.summary && (
          <section className="section">
            <h2 className="section-title">Professional Summary</h2>
            <p className="summary-text">{formData.summary}</p>
          </section>
        )}

        {formData.experience.length > 0 && (
          <section className="section">
            <h2 className="section-title">
              <FaBriefcase className="section-icon" />
              Work Experience
            </h2>
            {formData.experience.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <h3 className="job-title">{exp.jobTitle}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="dates">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="job-description">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {formData.education.length > 0 && (
          <section className="section">
            <h2 className="section-title">
              <FaGraduationCap className="section-icon" />
              Education
            </h2>
            {formData.education.map((edu, index) => (
              <div key={edu.id} className="education-item">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="school">{edu.school}</span>
                  <span className="graduation-date">{edu.graduationDate}</span>
                  {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </section>
        )}

        {formData.skills.length > 0 && (
          <section className="section">
            <h2 className="section-title">
              <FaStar className="section-icon" />
              Skills
            </h2>
            <div className="skills-container">
              {formData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );

  const renderTemplate2 = () => (
    <div className="resume-template-2">
      <div className="resume-header">
        <div className="header-left">
          <h1 className="name">{formData.personalInfo.firstName} {formData.personalInfo.lastName}</h1>
          {/* <p className="title">Professional Resume</p> */}
        </div>
        <div className="header-right">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>{formData.personalInfo.email}</span>
            </div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <span>{formData.personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>{formData.personalInfo.location}</span>
            </div>
            {formData.personalInfo.linkedin && (
              <div className="contact-item">
                <FaLinkedin className="icon" />
                <span>{formData.personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="resume-body">
        {formData.summary && (
          <section className="section">
            <h2 className="section-title">Professional Summary</h2>
            <p className="summary-text">{formData.summary}</p>
          </section>
        )}

        {formData.experience.length > 0 && (
          <section className="section">
            <h2 className="section-title">Work Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <h3 className="job-title">{exp.jobTitle}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="dates">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                </div>
                <p className="job-description">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        <div className="two-column">
          {formData.education.length > 0 && (
            <section className="section">
              <h2 className="section-title">Education</h2>
              {formData.education.map((edu, index) => (
                <div key={edu.id} className="education-item">
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                  <p className="graduation-date">{edu.graduationDate}</p>
                  {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </section>
          )}

          {formData.skills.length > 0 && (
            <section className="section">
              <h2 className="section-title">Skills</h2>
              <div className="skills-list">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <FaStar className="skill-icon" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );

  const renderTemplate3 = () => (
    <div className="resume-template-3">
      <div className="resume-header">
        <div className="header-content">
          <h1 className="name">{formData.personalInfo.firstName} {formData.personalInfo.lastName}</h1>
          {/* <p className="title">Professional Resume</p> */}
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>{formData.personalInfo.email}</span>
            </div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <span>{formData.personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>{formData.personalInfo.location}</span>
            </div>
            {formData.personalInfo.linkedin && (
              <div className="contact-item">
                <FaLinkedin className="icon" />
                <span>{formData.personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="resume-body">
        {formData.summary && (
          <section className="section">
            <h2 className="section-title">Professional Summary</h2>
            <p className="summary-text">{formData.summary}</p>
          </section>
        )}

        {formData.experience.length > 0 && (
          <section className="section">
            <h2 className="section-title">Work Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <h3 className="job-title">{exp.jobTitle}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="dates">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="job-description">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {formData.education.length > 0 && (
          <section className="section">
            <h2 className="section-title">Education</h2>
            {formData.education.map((edu, index) => (
              <div key={edu.id} className="education-item">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="school">{edu.school}</span>
                  <span className="graduation-date">{edu.graduationDate}</span>
                  {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </section>
        )}

        {formData.skills.length > 0 && (
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {formData.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <FaStar className="skill-icon" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );

  const renderTemplate = () => {
    switch (template) {
      case 1:
        return renderTemplate1();
      case 2:
        return renderTemplate2();
      case 3:
        return renderTemplate3();
      default:
        return renderTemplate1();
    }
  };

  return (
    <div className="resume-preview-container">
      <div className="preview-header">
        <button className="back-btn" onClick={onBack}>
          <FaArrowLeft /> Back to Form
        </button>
        <div className="preview-actions">
          <button className="action-btn print-btn" onClick={handlePrint}>
            <FaPrint /> Print
          </button>
          <button className="action-btn download-btn" onClick={handleDownload}>
            <FaDownload /> Download PDF
          </button>
        </div>
      </div>
      
      <div className="preview-content">
        <div className="resume-paper" ref={resumeRef}>
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview; 