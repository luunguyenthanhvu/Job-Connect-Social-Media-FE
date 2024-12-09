import React, {useState} from "react";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./style.css";
import AppLogo from "../../components/icons/AppLogo";
import UserCV from "../../components/cv/UserCV"
import '@pqina/pintura/pintura.css';
import EmployerDetailsForm
  from "../../components/enter-details/formCreateAccount/EmployerDetailsForm";
import ApplicantDetailsForm
  from "../../components/enter-details/formCreateAccount/ApplicantDetailsForm";
import ImageEditor from "../../components/enter-details/imageEditor/ImageEditor"
import html2pdf from 'html2pdf.js';
import MiniEmployerPage from "../profile/MiniEmployerPage";
import {useLoading} from "../../context/LoadingContext";
import {useNavigate} from "react-router-dom";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const downloadCV = () => {
  const element = document.getElementById("cv-container");  // ID của phần tử chứa CV

  const options = {
    margin: 0,  // Giảm margin nếu cần
    filename: 'CV.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {scale: 6},
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'  // Đảm bảo orientation là portrait (dọc)
    }
  };

  html2pdf().from(element).set(options).save();
}

const AccountSetup = () => {
  // snack bar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Hàm mở Snackbar
  const showSnackbar = (message, severity = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  // Hàm đóng Snackbar
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  // Loading axios here
  const {showLoading, hideLoading} = useLoading();

  // Redirect to other page
  const navigate = useNavigate();
  // Alert info for user
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const {throwError} = useGlobalError();

  const nodeRef = React.useRef(null);
  const [inlineResult, setInlineResult] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxFileSize = 1 * 1024 * 1024;

      if (file.size > maxFileSize) {
        showSnackbar("File size exceeds 1MB. Please upload a smaller image.!",
            "error");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // handle image to base 64
  const [tabValue, setTabValue] = useState(0);
  const [step, setStep] = useState(0);

  const [formValueEmployer, setFormValueEmployer] = useState({
    description: "",
    website: "",
    country: "",
    industry: "",
    addresses: [],
  });

  const [formValueApplicant, setFormValueApplicant] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    website: "",
    objective: "",
    address: "",
    emailUser: "",
    education: [],
    workExperience: [],
    project: [],
    skills: "",
    phoneNum: "",
    position: ""
  });

  const steps = ["Account Type", "Enter Details", "Choose Avatar",
    "Review & Submit"];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setStep(0);
  };

  // For applicant
  const handleChangeApplicant = (e) => {
    const {name, value} = e.target;
    setFormValueApplicant((prevState) => ({
      ...prevState, [name]: value,
    }));
    console.log(formValueApplicant)
  };

  // For employer
  const handleInputEmployerChange = (event) => {
    setFormValueEmployer(
        {...formValueEmployer, [event.target.name]: event.target.value});
  };

  const handleAddressesChange = (addresses) => {
    console.log(formValueEmployer)
    setFormValueEmployer((prev) => ({...prev, addresses})); // Correct usage
  };
  const handleDescriptionEmployerChange = (data) => {
    setFormValueEmployer({...formValueEmployer, description: data});
  };
  const handleInputApplicantChange = (event) => {
    setFormValueApplicant(
        {...formValueApplicant, [event.target.name]: event.target.value});
  };

  const handleDescriptionApplicantChange = (data) => {
    setFormValueApplicant({...formValueApplicant, description: data});
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("accessToken");
    console.log(token)
    //const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnaWFvc3VraXJpdG9vQGdtYWlsLmNvbSIsInNjb3BlIjoiUk9MRV9VU0VSIiwiaXNzIjoidnVsdXUiLCJleHAiOjE3MzYyNjg2MjAsImlhdCI6MTczMzY3NjYyMCwidXNlcklkIjoiNTc5MWZjZmYtM2E4MS00YWRhLTk4YzEtNGM5Yjk5ZWJiZjZjIiwianRpIjoiMGNiZDFhYWUtY2FmOC00M2Y0LTllYjctY2MwYzUxMjk0ZWVhIn0.NjiQ_SXLAqCYSbOGgBFlK_3gCRSovLxDkma2FfCMv5PMn0wiMdpOArWyxdOs-5VCA11WxasvgElGWdgoiHV_SQ"
    // Chuyển inlineResult (giả sử nó là một Blob URL) thành byte array
    const byteArray = await convertBlobToByteArray(inlineResult);
    console.log("Đây là byte array")
    console.log(byteArray)
    // case employer
    if (tabValue === 0) {
      try {
        showLoading();

        console.log(byteArray)
        console.log(Array.from(byteArray))
        const response = await axios.post(apiConfig.createEmployer, {
          img: Array.from(byteArray),  // Dữ liệu hình ảnh đã chuyển đổi
          description: formValueEmployer.description,
          address: formValueEmployer.addresses,
          website: formValueEmployer.website,
          country: formValueEmployer.country,
          industry: formValueEmployer.industry,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        showSnackbar("Your accout setup success!", "success");
        setTimeout(() => {
          navigate('/home');
        }, 2000)
      } catch (error) {
        throwError(error);
      } finally {
        hideLoading();
      }
    }

    // case applicant
    if (tabValue === 1) {
      try {
        showLoading();

        // Format dữ liệu cho applicant
        const formattedData = {
          img: Array.from(byteArray),
          firstname: formValueApplicant.firstname,
          lastname: formValueApplicant.lastname,
          dob: formValueApplicant.dob,
          gender: formValueApplicant.gender,
          position: formValueApplicant.position,
          userEmail: formValueApplicant.emailUser,
          objective: formValueApplicant.objective,
          address: formValueApplicant.address ? [formValueApplicant.address]
              : [],
          educationRequestDTO: formValueApplicant.education.map((edu) => ({
            institutionName: edu.institutionName,
            fieldOfStudy: edu.fieldOfStudy,
            degree: edu.degree,
            startDate: edu.startDate,
            endDate: edu.endDate,
          })),
          projectRequestDTO: formValueApplicant.project.map((project) => ({
            projectName: project.projectName,
            description: project.description,
            position: project.position,
            startDate: project.startDate,
            endDate: project.endDate,
          })),
          workExperienceRequestDTO: formValueApplicant.workExperience.map(
              (exp) => ({
                companyName: exp.companyName,
                position: exp.position,
                startDate: exp.startDate,
                endDate: exp.endDate,
                description: exp.description,
              })),
          skills: formValueApplicant.skills,
        };
        console.log(formValueApplicant.emailUser)
        const response = await axios.post(apiConfig.createApplicant,
            formattedData
            , {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
        console.log(response.data);
        showSnackbar("Your accout setup success!", "success");
        setTimeout(() => {
          navigate('/home');
        }, 2000)
      } catch (error) {
        throwError(error);
      } finally {
        hideLoading();
      }
    }
  };

// Hàm chuyển Blob URL thành mảng byte (Uint8Array)
  async function convertBlobToByteArray(blobUrl) {
    const blob = await fetch(blobUrl).then((response) => response.blob());

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = function () {
        const arrayBuffer = reader.result;
        const byteArray = new Uint8Array(arrayBuffer);
        resolve(byteArray);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(blob);
    });
  }

  const renderFormFields = () => {
    if (tabValue === 0) {
      return (<EmployerDetailsForm
          formValue={formValueEmployer}
          onChange={handleInputEmployerChange}
          onDescriptionChange={handleDescriptionEmployerChange}
          onAddressesChange={handleAddressesChange}
      />);
    }

    if (tabValue === 1) {
      return (<ApplicantDetailsForm
          formValue={formValueApplicant}
          setFormValue={setFormValueApplicant}
          handleChange={handleChangeApplicant}
      />);
    }
  };

  const renderReviewFields = () => {
    if (tabValue === 0) {
      return (
          <MiniEmployerPage
              image={inlineResult}
              formValue={formValueEmployer}
          />
      );
    }

    if (tabValue === 1) {
      return (
          <div style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '0 auto',
            position: 'relative', // Đảm bảo nút căn chỉnh chính xác
          }}>
            <div id="cv-container">
              <UserCV
                  img={inlineResult}
                  name={`${formValueApplicant.firstname} ${formValueApplicant.lastname}`}
                  position={formValueApplicant.position || "N/A"}
                  phone={formValueApplicant.phoneNum || "N/A"}
                  emailUser={formValueApplicant.emailUser || "N/A"}
                  website={formValueApplicant.website
                      || "N/A"}
                  location={formValueApplicant.address || "N/A"}
                  objective={formValueApplicant.objective
                      || "N/A"}
                  skills={formValueApplicant.skills || "N/A"}
                  education={formValueApplicant.education || []}
                  projects={formValueApplicant.project || []}
                  workExperience={formValueApplicant.workExperience || []}
              />
            </div>
            <button
                style={{
                  position: 'absolute', // Định vị nút
                  top: '10px', // Điều chỉnh khoảng cách so với đầu container
                  right: '10px', // Căn sát góc phải
                  width: '150px',
                  padding: '10px 15px',
                  backgroundColor: '#007BFF', // Màu xanh dễ nhìn
                  color: '#fff', // Màu chữ trắng
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Tạo hiệu ứng nổi
                  transition: 'background-color 0.3s ease, transform 0.2s ease', // Hiệu ứng khi hover
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} // Thay đổi màu khi hover
                onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'} // Trở về màu gốc
                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Hiệu ứng khi click
                onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Trở về kích thước gốc
                onClick={downloadCV}
            >
              Download CV as PDF
            </button>
          </div>
      );
    }
  }

  return (<Box sx={{
        maxWidth: "100%",
        backgroundColor: "#fff",
        margin: "auto",
        padding: "30px 200px",
        mt: 4
      }}>
        <Typography
            sx={{
              display: "flex", justifyContent: "center", alignItems: "center"
            }}
            variant="h4"
            align="center"
            gutterBottom
        >
          <AppLogo width={60} height={60}/>
          Create Your Account
        </Typography>

        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Employer"/>
          <Tab label="Applicant"/>
        </Tabs>

        <Stepper activeStep={step} sx={{my: 3}}>
          {steps.map((label, index) => (<Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>))}
        </Stepper>

        <TransitionGroup>
          <CSSTransition key={step} nodeRef={nodeRef} timeout={500}
                         classNames="fade">
            <div ref={nodeRef}>
              <Box>
                {step === 0 && (<Box textAlign="center">
                  <Typography variant="h6">Step 1: Choose Account
                    Type</Typography>
                  <Typography variant="body1" sx={{mt: 2}}>
                    Selected: {tabValue === 0 ? "Employer" : "Applicant"}
                  </Typography>
                </Box>)}
                {step === 1 && <Box>{renderFormFields()}</Box>}
                {step === 2 && (<ImageEditor
                    imageSrc={imageSrc}
                    handleImageChange={handleImageChange}
                    setInlineResult={setInlineResult}
                    inlineResult={inlineResult}
                />)}
                {step === 3 && (renderReviewFields())}
              </Box>
            </div>
          </CSSTransition>
        </TransitionGroup>

        <Box sx={{mt: 3, display: "flex", justifyContent: "space-between"}}>
          <Button variant="outlined" disabled={step === 0}
                  onClick={handlePreviousStep}>
            Back
          </Button>
          {step === steps.length - 1 ? (
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>) : (
              <Button variant="contained" onClick={handleNextStep}>
                Next
              </Button>)}
        </Box>
        {/* Snackbar với Alert */}
        <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
  )
      ;
};

export default AccountSetup;
