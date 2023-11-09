/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewPDF = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfWidth, setPdfWidth] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Define a scale factor that you can adjust as you wish
    const scaleFactor = 0.8;
    // Update the state with the new PDF width
    setPdfWidth(windowWidth * scaleFactor);
  }, [windowWidth]);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const onError = (error) => {
    console.error(error);
  };
  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="w-full col-span-4">
      {/* Render a Document component with the file prop */}
      <Document
        file={pdf}
        onLoadSuccess={onLoadSuccess}
        onError={onError}
      >
        {/* Render a Page component with the page number prop */}
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={pdfWidth}
          className="border border-platinum rounded-lg overflow-hidden"
        ></Page>
      </Document>
      {/* Display the number of pages */}
      <p className="w-full text-center text-rich/30 font-bold text-sm py-3">
        Page {pageNumber} of {numPages}
      </p>
      <div className="w-full flex justify-between pb-20">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="bg-mandarin hover:bg-mandarin/70 duration-200 transition-colors py-2 px-5 text-sm font-bold text-gray-800 rounded-full"
        >
          Prev
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          className="bg-mandarin hover:bg-mandarin/70 duration-200 transition-colors py-2 px-5 text-sm font-bold text-gray-800 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewPDF;
