import { ButtonPrimary } from "./ButtonComponents";

const ResumeDownload = () => {
  return (
    <ButtonPrimary
      href="https://drive.google.com/file/d/1EUDm3eww7YxY2ya7z6tf53uydcw8cuhr/view?usp=drive_link" // Ensure the resume is in the public folder
      label="Download CV"
      icon="download"
      classes="my-custom-class"
      download={true}
    />
  );
};

export default ResumeDownload;
