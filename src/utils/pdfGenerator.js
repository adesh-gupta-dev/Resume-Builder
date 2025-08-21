// PDF Generator Utility
// This is a simple implementation using html2pdf.js
// You can enhance this with more advanced PDF generation libraries
// import html2pdf from 'html2pdf.js/dist/html2pdf.min.js';

export const generatePDF = async (elementId, filename = 'resume.pdf') => {
  try {
    // Dynamic import of html2pdf.js
    const html2pdf = await import ("html2pdf.js/dist/html2pdf.min.js");

    
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    const opt = {
      margin: [10, 10, 10, 10],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    // Generate PDF
    await html2pdf.default().set(opt).from(element).save();
    
    return { success: true, message: 'PDF generated successfully' };
  } catch (error) {
    console.error('PDF generation failed:', error);
    return { success: false, message: 'PDF generation failed' };
  }
};

export const printResume = () => {
  try {
    window.print();
    return { success: true, message: 'Print dialog opened' };
  } catch (error) {
    console.error('Print failed:', error);
    return { success: false, message: 'Print failed' };
  }
};

// Alternative: Simple print-friendly CSS
export const getPrintStyles = () => `
  @media print {
    body {
      margin: 0;
      padding: 0;
      background: white;
    }
    
    .resume-preview-container {
      background: white !important;
      padding: 0 !important;
    }
    
    .preview-header {
      display: none !important;
    }
    
    .resume-paper {
      box-shadow: none !important;
      border-radius: 0 !important;
      max-width: none !important;
      margin: 0 !important;
    }
    
    .resume-template-3 {
      background: white !important;
    }
    
    .resume-template-3 .resume-header {
      background: #667eea !important;
      border-radius: 0 !important;
    }
  }
`; 