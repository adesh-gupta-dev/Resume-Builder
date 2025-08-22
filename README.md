# Resume Builder - Professional Resume Creator

A modern, interactive resume builder built with React that allows users to create professional resumes with multiple template options.

## Features

- 🎨 **3 Professional Templates**: Choose from Classic Professional, Modern Minimalist, and Creative Portfolio designs
- 📝 **Interactive Form Builder**: Step-by-step form with 3D effects and smooth animations
- 🚀 **Quick Start**: Load sample resume data to get started instantly
- 📄 **PDF Export**: Download your resume as a professional PDF
- 🖨️ **Print Support**: Print your resume directly from the browser
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎯 **ATS Friendly**: Templates optimized for Applicant Tracking Systems

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or extract the project files
2. Navigate to the project directory:
   ```bash
   cd Resume-Builder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## How to Use

### 1. Create Your Resume

1. **Start Building**: Click "Create Resume" on the homepage
2. **Load Sample Data**: Click "📝 Load Sample Resume" to see how it works with example data
3. **Fill in Your Information**: Complete each step of the form:
   - **Step 1**: Personal Information (name, contact details, location)
   - **Step 2**: Professional Summary (your career overview)
   - **Step 3**: Work Experience (add your job history)
   - **Step 4**: Education & Skills (academic background and skills)
   - **Step 5**: Choose Template (select your preferred design)

### 2. Choose Your Template

The resume builder offers three professional templates:

- **Classic Professional**: Traditional design perfect for corporate environments
- **Modern Minimalist**: Contemporary two-column layout with clean aesthetics
- **Creative Portfolio**: Eye-catching design with gradients and visual elements

### 3. Preview and Export

1. **Preview**: Review your resume in the selected template
2. **Download PDF**: Click "Download PDF" to save your resume
3. **Print**: Use the print button for physical copies

## Template Features

### Classic Professional Template
- Clean, traditional layout
- Professional typography
- ATS-friendly format
- Perfect for corporate jobs

### Modern Minimalist Template
- Two-column design
- Modern typography
- Visual hierarchy
- Great for creative fields

### Creative Portfolio Template
- Gradient backgrounds
- Card-based layout
- Visual appeal
- Stand out design

## Customization

### Adding Content
- **Work Experience**: Add multiple job positions with descriptions
- **Education**: Include degrees, schools, and graduation dates
- **Skills**: List technical and soft skills separated by commas
- **Contact Info**: Add LinkedIn profile and other professional links

### Editing
- All fields are editable in real-time
- Use the "Previous" and "Next" buttons to navigate between steps
- Remove items using the "Remove" button
- Add new items with the "+ Add" buttons

## Technical Details

### Built With
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing
- **React Bootstrap**: UI components and responsive design
- **html2pdf.js**: PDF generation
- **Styled Components**: CSS-in-JS styling
- **React Icons**: Beautiful icon library

### Project Structure
```
src/
├── components/
│   ├── FORMS/
│   │   ├── ResumeForm3D.jsx      # Main form component
│   │   └── ResumeForm3D.css      # Form styling
│   ├── TemplateSelector/
│   │   ├── TemplateSelector.jsx  # Template selection
│   │   └── TemplateSelector.css  # Template styles
│   ├── ResumePreview/
│   │   ├── ResumePreview.jsx     # Resume preview
│   │   └── ResumePreview.css     # Preview styling
│   └── UI/                       # Layout components
├── utils/
│   └── pdfGenerator.js           # PDF generation utility
└── App.js                        # Main application
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### Common Issues

1. **PDF Download Not Working**
   - Ensure you're using a modern browser
   - Check if pop-up blockers are disabled
   - Try refreshing the page

2. **Form Not Saving**
   - The form saves automatically as you type
   - Use the browser's back button to return to previous steps

3. **Template Not Loading**
   - Refresh the page
   - Clear browser cache
   - Try a different browser

### Performance Tips

- Use the sample data to see how the templates look
- Preview templates before making your final choice
- Keep your professional summary concise (2-4 lines)
- Use bullet points in job descriptions for better readability

## Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the templates
- Adding new functionality

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the browser compatibility
3. Ensure all dependencies are properly installed

---

**Happy Resume Building! 🚀**
