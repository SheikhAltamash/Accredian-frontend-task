import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";


export default function Form({ show, setshowform, setSuccess, notification }) {
  const initialDetails = {
    referrerName: "",
    referrerEmail: "",
    refreeName: "",
    refreeEmail: "",
    course:"Full Stack Development"
  };

  const [data, setData] = useState(initialDetails);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const showForm = async () => {
    setshowform(false);
    };
    let notify =async () => {
      notification();
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!data.referrerName) newErrors.referrerName = "Your name is required";
    if (!data.referrerEmail) newErrors.referrerEmail = "Your email is required";
    if (!data.refreeName) newErrors.refreeName = "Referee name is required";
    if (!data.refreeEmail) newErrors.refreeEmail = "Referee email is required";
     setErrors(newErrors);
     if (Object.keys(newErrors).length > 0) {
       setError(true);
       return; // Stop form submission if there are errors
     }
    console.log(data);
      setError(false);
      setSuccess(true);
      notify();
    try {
      setshowform(false);
      const response = await axios.post(
        "https://courdemy.onrender.com/getdata",
        {
          data,
        }
      );
        
        
      setMessage("Form submitted successfully!");
      setData(initialDetails); // Reset form

      setErrors({});
    } catch (error) {
      setMessage("Failed to submit form. Please try again.");
      setSuccess(false);
      console.log(error.message);
    }
  };

  const handleChange = (name, e) => {
    setData({ ...data, [name]: e.target.value });
    setErrors({ ...errors, [name]: "" }); // Clear error message on change
  };

  return (
    <div className="form">
      <div className="under_form">
        <button
          className="btn_close"
          onClick={() => {
            setshowform(false);
          }}
        >
          <CloseIcon />
        </button>
        <h1 className="h1_form">Referral Form</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <h4>Enter your details</h4>
            <TextField
              className="input_form"
              error={!!errors.referrerName}
              id="referrer-name"
              label="Your Name"
              value={data.referrerName}
              onChange={(e) => handleChange("referrerName", e)}
              helperText={errors.referrerName || ""}
            />
            <TextField
              className="input_form"
              error={!!errors.referrerEmail}
              id="referrer-email"
              label="Your Email"
              value={data.referrerEmail}
              onChange={(e) => handleChange("referrerEmail", e)}
              helperText={errors.referrerEmail || ""}
            />
          </div>
          <hr />
          <div>
            <h4>Enter referee details</h4>
            <TextField
              className="input_form"
              error={!!errors.refreeName}
              id="refree-name"
              label="Referee Name"
              value={data.refreeName}
              onChange={(e) => handleChange("refreeName", e)}
              helperText={errors.refreeName || ""}
            />
            <TextField
              className="input_form"
              error={!!errors.refreeEmail}
              id="refree-email"
              label="Referee Email"
              value={data.refreeEmail}
              onChange={(e) => handleChange("refreeEmail", e)}
              helperText={errors.refreeEmail || ""}
            />
          </div>

          <h4>Course</h4>
          <Select className="select_form"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={data.course}
            label="Course"
            onChange={(e) => {
              handleChange("course", e);
            }}
          >
            <MenuItem value="Full Stack Development">
              Full Stack Development
            </MenuItem>
            
            <MenuItem value={"Python"}>Python</MenuItem>
            <MenuItem value={"Full Stack Java Development"}>
              Full Stack Java Development
            </MenuItem>
            <MenuItem value={"Machine Learning"}>Machine Learning</MenuItem>
            <MenuItem value={"Data Mining"}>
              Data Mining
            </MenuItem>
            <MenuItem value={"Blockchain Development"}>
              Blockchain Development
            </MenuItem>
            <MenuItem value={"Cloud Computing"}>
              Cloud Computing
            </MenuItem>
          </Select> <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="btn_nav"
          >
            Submit
          </Button>
          {message && <p>{message}</p>}

          {error && <Alert severity="error">Please fill in all fields.</Alert>}
        </Box>
      </div>
    </div>
  );
}
