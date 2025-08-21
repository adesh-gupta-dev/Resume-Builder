# 🚀 Professional Resume Builder

A modern, interactive resume builder with 3D effects, multiple templates, and PDF export functionality.

## ✨ Features

### 🎨 **3D Interactive Form**
- **Mouse-responsive 3D rotation** - Cards tilt based on mouse position
- **Smooth animations** - CSS-based transitions for optimal performance
- **Gradient effects** - Beautiful visual feedback on form elements
- **Glassmorphism design** - Modern translucent UI elements

### 📝 **Multi-Step Form Process**
1. **Personal Information** - Name, contact details, location, LinkedIn
2. **Professional Summary** - Career overview and objectives
3. **Work Experience** - Dynamic job entries with dates and descriptions
4. **Education & Skills** - Academic background and technical skills
5. **Template Selection** - Choose from 3 professional designs

### 🎯 **Three Professional Templates**

#### **Template 1: Classic Professional**
- Traditional and elegant design
- Perfect for corporate environments
- Clean typography and professional layout
- ATS-friendly format

#### **Template 2: Modern Minimalist**
- Contemporary design with clean lines
- Two-column layout for better space utilization
- Modern typography and visual hierarchy
- Creative yet professional appearance

#### **Template 3: Creative Portfolio**
- Eye-catching design with gradients
- Card-based layout with visual elements
- Stand-out design for creative fields
- Visual appeal with professional content

### 📄 **Preview & Export Features**
- **Live preview** - See your resume in real-time
- **PDF download** - Generate professional PDF files
- **Print functionality** - Print-ready formatting
- **Template switching** - Preview different designs instantly

## 🛠️ Technology Stack

- **React.js** - Modern UI framework
- **React Bootstrap** - UI components and responsive design
- **React Icons** - Beautiful icon library
- **html2pdf.js** - PDF generation
- **CSS3** - Advanced styling and animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn



## 📁 Project Structure

```
resume-builder/
├── src/
│   ├── components/
│   │   ├── FORMS/
│   │   │   ├── ResumeForm3D.jsx          # Main form component
│   │   │   └── ResumeForm3D.css          # Form styling
│   │   ├── ResumePreview/
│   │   │   ├── ResumePreview.jsx         # Preview component
│   │   │   └── ResumePreview.css         # Preview styling
│   │   ├── TemplateSelector/
│   │   │   ├── TemplateSelector.jsx      # Template selection
│   │   │   └── TemplateSelector.css      # Template selector styling
│   │   └── UI/                           # Layout components
│   ├── utils/
│   │   └── pdfGenerator.js               # PDF generation utilities
│   └── App.js                            # Main application
├── public/
└── package.json
```

## 🎯 Key Components

### ResumeForm3D
The main form component with 3D effects and multi-step navigation.

**Features:**
- 3D mouse-responsive rotation
- Step-by-step form progression
- Dynamic form fields (add/remove experience/education)
- Real-time validation
- Template selection integration

### ResumePreview
Displays the resume in the selected template with export options.

**Features:**
- Three different template designs
- PDF download functionality
- Print support
- Responsive design
- Professional formatting

### TemplateSelector
Allows users to choose from different resume templates.

**Features:**
- Visual template previews
- Template comparison
- Feature descriptions
- Interactive selection

## 🎨 Customization

### Adding New Templates
1. Create a new template function in `ResumePreview.jsx`
2. Add template styles in `ResumePreview.css`
3. Update the template selector with new options
4. Add mockup preview in `TemplateSelector.jsx`

### Styling Customization
- Modify CSS variables for color schemes
- Adjust 3D rotation parameters in `Wrapper3D` component
- Customize form field styling in `ResumeForm3D.css`

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Print media

## 🚀 Performance Optimizations

- **CSS-only animations** - No JavaScript animation overhead
- **Efficient re-renders** - Optimized state management
- **Lazy loading** - Components render only when needed
- **Minimal dependencies** - Lightweight and fast

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🎯 Future Enhancements

- [ ] More template designs
- [ ] Advanced PDF customization
- [ ] Resume sharing functionality
- [ ] Cloud storage integration
- [ ] AI-powered content suggestions
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Advanced form validation

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ using React and modern web technologies**
