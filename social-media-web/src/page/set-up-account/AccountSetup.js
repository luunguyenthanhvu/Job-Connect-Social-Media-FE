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

const AccountSetup = () => {
  const nodeRef = React.useRef(null);
  const [inlineResult, setInlineResult] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [tabValue, setTabValue] = useState(0);
  const [step, setStep] = useState(0);

  const [formValueEmployer, setFormValueEmployer] = useState({
    description: "",
    website: "",
    country: "",
    industry: "",
  });

  const [formValueApplicant, setFormValueApplicant] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    website: "",
    objective: "",
    address: "",
    educationRequestDTO: "",
    workExperienceRequestDTO: "",
    projectRequestDTO: "",
    skills: ""
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
      ...prevState,
      [name]: value,  // Cập nhật giá trị của trường tương ứng trong formValueApplicant
    }));
    console.log(formValueApplicant)
  };

  // For employer
  const handleInputEmployerChange = (event) => {
    setFormValueEmployer(
        {...formValueEmployer, [event.target.name]: event.target.value});
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
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {

  };

  const renderFormFields = () => {
    if (tabValue === 0) {
      return (
          <EmployerDetailsForm
              formValue={formValueEmployer}
              onChange={handleInputEmployerChange}
              onDescriptionChange={handleDescriptionEmployerChange}
          />
      );
    }

    if (tabValue === 1) {
      return (
          <ApplicantDetailsForm
              formValue={formValueApplicant}
              setFormValue={setFormValueApplicant}
              handleChange={handleChangeApplicant}
          />
      );
    }
  };

  return (
      <Box sx={{
        maxWidth: "100%",
        backgroundColor: "#fff",
        margin: "auto",
        padding: "30px 200px",
        mt: 4
      }}>
        <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
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
          {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
          ))}
        </Stepper>

        <TransitionGroup>
          <CSSTransition key={step} nodeRef={nodeRef} timeout={500}
                         classNames="fade">
            <div ref={nodeRef}>
              <Box>
                {step === 0 && (
                    <Box textAlign="center">
                      <Typography variant="h6">Step 1: Choose Account
                        Type</Typography>
                      <Typography variant="body1" sx={{mt: 2}}>
                        Selected: {tabValue === 0 ? "Employer" : "Applicant"}
                      </Typography>
                    </Box>
                )}
                {step === 1 && <Box>{renderFormFields()}</Box>}
                {step === 2 && (
                    <ImageEditor
                        imageSrc={imageSrc}
                        handleImageChange={handleImageChange}
                        setInlineResult={setInlineResult}
                        inlineResult={inlineResult}
                    />
                )}
                {step === 3 && (
                    <UserCV
                        name="Nguyễn Nhật Minh"
                        position="JAVA DEVELOPER"
                        phone="0901 611 585"
                        email="nnminh257@gmail.com"
                        website="github.com/minknhom"
                        location="Biên Hòa, Đồng Nai, Việt Nam"
                        objective="To secure a position as a Backend Java Web Developer..."
                        skills={[
                          "Proficient in Java programming",
                          "Knowledge of Spring Framework",
                          "Web Development: Servlets, JSP, Thymeleaf",
                          "HTML, CSS, JavaScript, JQuery",
                          "Databases: SQL Server, MySQL",
                          "Tools: Git, SourceTree",
                          "Good English communication",
                        ]}
                        education={[
                          {
                            name: "University of Information Technology",
                            detail: "Faculty of Information System",
                            duration: "9/2019 - Present",
                          },
                          {
                            name: "FPT Software Academy",
                            detail: "Fullstack Java Web Developer",
                            duration: "3/2023 - Present",
                          },
                        ]}
                        projects={[
                          {
                            name: "Library Management Swing App",
                            duration: "3/2022 - 5/2022",
                            position: "Developer",
                            description: "Designed the UI and implemented core functions...",
                            link: "https://github.com/PhamNhuLong/java_IS216.m22.6",
                          },
                        ]}
                    />

                )}
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
              </Button>
          ) : (
              <Button variant="contained" onClick={handleNextStep}>
                Next
              </Button>
          )}
        </Box>
      </Box>
  );
};

export default AccountSetup;
