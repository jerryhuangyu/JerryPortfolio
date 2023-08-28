import pdf from "../../../assets/resume.pdf";

const DownloadIcon = () => (
  <svg
    className="css-i6dzq1 invert"
    strokeLinejoin="round"
    strokeLinecap="round"
    fill="none"
    strokeWidth="2"
    stroke="currentColor"
    height="24"
    width="24"
    viewBox="0 0 24 24"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line y2="3" x2="12" y1="15" x1="12"></line>
  </svg>
);

const DocumentIcon = () => (
  <svg
    className="css-i6dzq1 invert"
    strokeLinejoin="round"
    strokeLinecap="round"
    fill="none"
    strokeWidth="2"
    stroke="currentColor"
    height="20"
    width="20"
    viewBox="0 0 24 24"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line y2="13" x2="8" y1="13" x1="16"></line>
    <line y2="17" x2="8" y1="17" x1="16"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const DownloadBtn = ({ OnclickEvent, className }) => {
  return (
    <button className={`group relative border-0 rounded z-[1] ${className}`}>
      <a href={pdf} download="黃柏瑜簡歷.pdf">
        <div className="flex items-center justify-between gap-2.5 min-h-[50px] px-2.5 rounded z-[1] bg-[#242a35] border-solid border-2 border-[#e8e8e82d] dark:border-out">
          <DocumentIcon />
          <p className="text-white font-semibold">Resume</p>
        </div>

        <div className="resume-download-btn absolute flex inset-0 items-center justify-center max-w-[50%] max-h-[80%] my-auto z-[-1] rounded-r translate-x-[100%] translate-y-0 bg-out border-solid border-[1px] border-[#62cdff2d] transition-all group-hover:translate-x-[200%]">
          <DownloadIcon />
        </div>
      </a>
    </button>
  );
};

export default DownloadBtn;
