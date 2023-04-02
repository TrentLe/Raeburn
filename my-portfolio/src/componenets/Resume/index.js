import React, {state} from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import './index.scss';
import Resumefile from '../../assets/document/Resumepdf.pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {

    const file = Resumefile;

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