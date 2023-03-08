import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
function Contact() {
  return (
    <div data-testid="contact-page">
      <img src={github} alt="github-logo" width="40px" height="60px" />
      <img src={linkedin} alt="github-logo" width="50px" height="60px" />
    </div>
  );
}

export default Contact;
