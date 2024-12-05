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
    description: "", website: "", country: "", industry: "",
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
    skills: "",
    phoneNum: ""
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
      ...prevState, [name]: value,  // Cập nhật giá trị của trường tương ứng trong formValueApplicant
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
    if (step === 2 && isFormValid()) {
      alert(
          "Please fill in all required fields before proceeding to the next step.");
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {

  };

  const renderFormFields = () => {
    if (tabValue === 0) {
      return (<EmployerDetailsForm
          formValue={formValueEmployer}
          onChange={handleInputEmployerChange}
          onDescriptionChange={handleDescriptionEmployerChange}
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

  // validate for form
  const isFormValid = () => {
    console.log("Validating form...");
    console.log("Form values:", formValueApplicant);

    const requiredFields = ["firstname", "lastname", "dob", "gender", "address",
      "skills", "objective",];

    for (const field of requiredFields) {
      if (!formValueApplicant[field] || formValueApplicant[field].trim()
          === '') {
        console.log(`Field ${field} is invalid`);
        return false;
      }
    }

    if (!formValueApplicant.educationRequestDTO?.length
        || !formValueApplicant.workExperienceRequestDTO?.length
        || !formValueApplicant.projectRequestDTO?.length) {
      console.log("One of the lists (education/work/project) is invalid");
      return false;
    }

    console.log("Form is valid");
    return true;
  };

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
            {step === 3 && (

                <UserCV
                    name={`${formValueApplicant.firstname} ${formValueApplicant.lastname}`}
                    position={formValueApplicant.skills?.split(",")[0]
                        || "Position"}
                    phone={formValueApplicant.phoneNum}// Thêm trường điện thoại trong form nếu cần
                    email="nnminh257@gmail.com" // Thêm trường email trong form nếu cần
                    website={formValueApplicant.website || "N/A"}
                    location={formValueApplicant.address || "N/A"}
                    objective={formValueApplicant.objective
                        || "No objective provided"}
                    skills={formValueApplicant.skills
                    ?.split(",")
                    .map(skill => skill.trim()) || []}
                    education={formValueApplicant.educationRequestDTO || []}
                    projects={formValueApplicant.projectRequestDTO || []}
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
          </Button>) : (
          <Button variant="contained" onClick={handleNextStep}>
            Next
          </Button>)}
    </Box>
  </Box>);
};

export default AccountSetup;
