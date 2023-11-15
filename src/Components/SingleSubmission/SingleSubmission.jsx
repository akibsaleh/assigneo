import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkingForm from './MarkingForm';
import { SlClose } from 'react-icons/sl';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import ViewPDF from './ViewPDF';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SingleSubmission = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/submission/${id}`).then((res) => setData(res.data));
  }, [id]);

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
    <div className="container max-w-screen-xl mx-auto flex flex-col grow bg-white dark:bg-rich px-5 lg:px-0">
      <div className="w-full container text-center mx-auto py-10">
        <h1 className="text-rich font-bold capitalize dark:text-white text-3xl">Assignment Submission</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-10 gap-4 lg:gap-10 items-center justify-items-center pb-20">
        <div className="md:col-span-4 lg:col-span-5">
          <div className="pb-5">
            <p className="font-bold text-sm text-rich/50 dark:text-gray-200">Examinee</p>
            <p className="col-span-8">{data?.displayName}</p>
          </div>
          <div className="pb-5">
            <p className="font-bold text-sm text-rich/50 dark:text-gray-200">Assignment</p>
            <p className="col-span-8">{data?.assignment_title}</p>
          </div>
          {data?.note && (
            <div className="pb-5">
              <p className="font-bold text-sm text-rich/50 dark:text-white">Quick Note</p>
              <p className="cols-span-8">{data?.note}</p>
            </div>
          )}
          <div className="flex flex-col">
            <p className="mb-10 space-x-3">
              <span className="inline-block pb-2 lg:pb-0">View Submitted pdf</span>
              <button
                className="w-fit py-2.5 px-6 inline-flex gap-x-2 font-bold capitalize justify-center items-center rounded-full border border-mandarin/50 bg-mandarin text-rich shadow-sm hover:bg-mandarin/75 duration-200 transition-colors"
                data-hs-overlay={`#hs-basic-modal-${id}`}
              >
                Click Here
              </button>
            </p>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-5 w-full">
          <MarkingForm
            id={id}
            submission={data}
          />
        </div>
      </div>
      <ViewPDF
        pdf={data?.pdf}
        id={id}
      />
      <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white">Submitted PDF</h3>
          <button
            type="button"
            className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#hs-basic-modal"
          >
            <span className="sr-only">Close</span>
            <SlClose />
          </button>
        </div>
        <div className="p-2 overflow-y-auto">
          <div>
            <Document
              file={data?.pdf}
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
            data-hs-overlay="#hs-basic-modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSubmission;
