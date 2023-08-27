import DownloadBtn from "./components/DownloadBtn";

const Resume = () => {
  const handleOnClick = () => console.log("click download");

  return (
    <div>Resume
      <br />
      <br />
      <br />
      <br />
      <DownloadBtn OnclickEvent={handleOnClick} />
    </div>
  )
}

export default Resume