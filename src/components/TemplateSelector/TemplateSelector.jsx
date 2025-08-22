import React from 'react';
import { FaEye, FaCheck } from 'react-icons/fa';
import './TemplateSelector.css';

const TemplateSelector = ({ selectedTemplate, onTemplateSelect, onPreview }) => {
  const templates = [
    {
      id: 1,
      name: "Classic Professional",
      description: "Traditional and elegant design perfect for corporate environments",
      image: "classic-template",
      features: ["Clean typography", "Professional layout", "Easy to read", "ATS friendly"],
      color: "#2c3e50"
    },
    {
      id: 2,
      name: "Modern Minimalist",
      description: "Contemporary design with clean lines and modern aesthetics",
      image: "modern-template",
      features: ["Two-column layout", "Modern typography", "Visual hierarchy", "Creative design"],
      color: "#3498db"
    },
    {
      id: 3,
      name: "Creative Portfolio",
      description: "Eye-catching design with gradients and visual elements",
      image: "creative-template",
      features: ["Gradient backgrounds", "Card-based layout", "Visual appeal", "Stand out design"],
      color: "#9b59b6"
    }
  ];

  return (
    <div className="template-selector">
      <div className="selector-header">
        <h2>Choose Your Resume Template</h2>
        <p>Select a template that best represents your professional style</p>
      </div>

      <div className="templates-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => onTemplateSelect(template.id)}
          >
            <div className="template-preview">
              <div className={`template-mockup template-${template.id}`} style={{ borderColor: template.color }}>
                <div className="mockup-header" style={{ backgroundColor: template.color }}>
                  <div className="mockup-name">John Doe</div>
                  <div className="mockup-title">Software Engineer</div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-section">
                    <div className="mockup-line"></div>
                    <div className="mockup-line short"></div>
                  </div>
                  <div className="mockup-section">
                    <div className="mockup-line"></div>
                    <div className="mockup-line short"></div>
                  </div>
                </div>
              </div>
              
              {selectedTemplate === template.id && (
                <div className="selected-overlay">
                  <FaCheck className="check-icon" />
                </div>
              )}
            </div>

            <div className="template-info">
              <h3 className="template-name">{template.name}</h3>
              <p className="template-description">{template.description}</p>
              
              <div className="template-features">
                {template.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>

              <div className="template-actions">
                <button
                  className="preview-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPreview(template.id);
                  }}
                >
                  <FaEye /> Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="selector-footer">
        <p className="template-note">
          💡 <strong>Pro Tip:</strong> Choose a template that matches your industry and experience level. 
          Classic templates work well for traditional industries, while modern templates are great for creative fields.
        </p>
      </div>
    </div>
  );
};

export default TemplateSelector; 