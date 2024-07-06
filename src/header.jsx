import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Notification from "./notification";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Header({success}) {
  return (
    <div>
      <div className="success"></div>
      <div className="top">
        {" "}
        <p>
          Navigate your ideal carrer path with tailored expert advice{" "}
          &nbsp;&nbsp;
          <span style={{ color: "blue" }}> Contact Expert</span>{" "}
        </p>
      </div>
      <div className="mid">
        <div className="name_div">
          <div className="logo">
            <p className="name">courdemy</p>
            <p className="under_name">credentials that matters</p>
          </div>
          <button className="select">
            Courses <ExpandMoreIcon className="icon_name"></ExpandMoreIcon>
          </button>
          
         
          
        </div>
        <div className="nav">
          <p>Refer & Earn </p>
          <p>Resources</p>
          <p>About Us</p>
          <button className="btn_nav">login</button>
          <button className="btn_nav">Try for free</button>
        </div>
      </div>
      {success && <Notification></Notification>}
      <div className="bottom">
        <p style={{ color: "blue" }}>Refer</p>
        <p>Benefit </p>
        <p>FAQs</p>
        <p>Support</p>
      </div>
    </div>
  );
}
