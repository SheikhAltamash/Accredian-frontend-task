import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";
export default function FAQS() {
    return (
      <div>
        <div className="FAQS">
          <h2>
            Frequently Asked <span style={{ color: "Blue" }}>Questions</span>{" "}
          </h2>
          <p className="question">
            Do i need to have Project Managaement experience to enroll in the
            program ?
          </p>
          <p className="answer">
            <span>Answer : </span> No, the program is designed to be inclusive
            of all levels of experience . All topics will be cover from the
            basic , making it suitable for individuals from any field of work
          </p>
          <div className="deeper">
            <div className="deeper_under">
              <div className="icon">
                <div className="under">
                  <SupportAgentIcon className="icon_deeper"></SupportAgentIcon>
                </div>
              </div>
              <div className="p_deeper">
                <p className="top_deeper">
                  Want to deleve Deepeer into the program ?
                </p>
                <p className="low_deeper">
                  Share your details to recieve experience insights from our
                  program team !
                </p>
              </div>
            </div>
            <button className="deeper_button">Get in touch</button>
          </div>
        </div>
        <div className="bottom_pri">
          <div className="about">
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Contact Us</p>
          </div>
          <div className="logos">
            <FacebookIcon className="icon_down"></FacebookIcon>
            <InstagramIcon className="icon_down"></InstagramIcon>
            <LinkedInIcon className="icon_down"></LinkedInIcon>
            <WhatsAppIcon className="icon_down"></WhatsAppIcon>
            <YouTubeIcon className="icon_down"></YouTubeIcon>
          </div>
          <p className="p_rights"><CopyrightIcon className="icon_c"></CopyrightIcon> Courdemy. All rights reserved </p>
        </div>
      </div>
    );
}
