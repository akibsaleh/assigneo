/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { SlClose } from 'react-icons/sl';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewPDF = ({ pdf, id }) => {
  console.log(pdf);
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
    <>
      <div
        id={`hs-basic-modal-${id}`}
        className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
      >
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-4xl sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">Submitted PDF</h3>
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay={`#hs-basic-modal-${id}`}
              >
                <span className="sr-only">Close</span>
                <SlClose />
              </button>
            </div>
            <div className="p-2 overflow-y-auto">
              <div>
                <Document
                  file={pdf}
                  onLoadSuccess={onLoadSuccess}
                  onError={onError}
                >
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={pdfWidth}
                    className="border border-platinum rounded-lg overflow-hidden"
                  ></Page>
                </Document>
                <p className="w-full text-center text-rich/30 font-bold text-sm py-3">
                  Page {pageNumber} of {numPages}
                </p>
                <div className="w-full flex justify-between pb-5">
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
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay={`#hs-basic-modal-${id}`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPDF;
