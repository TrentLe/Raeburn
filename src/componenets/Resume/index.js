import React, {state} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './index.scss';
import FinalResume from '../../assets/document/FinalResume.pdf';
import resume from '../../assets/document/resume.docx';
import DocViewer from "react-doc-viewer";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {

    const file = FinalResume;

 return (
    <section className="resume">
        <Document file={file}>
            <Page pageNumber={1} />
            <br />
            <br />
            <br />
            <br />

            <Page pageNumber={2} />
        </Document>
   
    
    </section>
    
    
    )

   
}

export default Resume;