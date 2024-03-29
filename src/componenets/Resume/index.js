import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './index.scss';
import FinalResume from '../../assets/document/FinalResume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        <br />
        <br />
        <br />
        <br />
        <Page pageNumber={3} />
      </Document>
    </section>
  );
};

export default Resume;
