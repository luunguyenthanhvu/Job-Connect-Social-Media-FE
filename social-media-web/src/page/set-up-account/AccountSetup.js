import React, {useState} from "react";
import {
  Box,
  Button,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  TextField,
  Typography
} from "@mui/material";
import AvatarEditor from 'react-avatar-editor';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./style.css";
import AppLogo from "../../components/icons/AppLogo";

const AccountSetup = () => {

  const [preview, setPreview] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [editorVisible, setEditorVisible] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setEditorVisible(true);
      };
      reader.readAsDataURL(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSaveAvatar = () => {
    const canvas = document.getElementById(
        'avatar-editor').getElementsByTagName('canvas')[0];
    const img = canvas.toDataURL(); // Get the image data after editing
    setPreview(img);
    setEditorVisible(false);
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
    description: "",
    firstname: "",
    lastname: "",
    dob: "",
    summary: "",
    educationList: "",
    workExperiences: "",
    skills: "",
    certifications: "",
  });

  const steps = ["Account Type", "Enter Details", "Choose Avatar",
    "Review & Submit"];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setStep(0);
  };

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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Description:
              </Typography>
              <CKEditor
                  editor={ClassicEditor}
                  data={formValueEmployer.description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    handleDescriptionEmployerChange(data);
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Website"
                  name="website"
                  value={formValueEmployer.website}
                  onChange={handleInputEmployerChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={formValueEmployer.country}
                  onChange={handleInputEmployerChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Industry"
                  name="industry"
                  value={formValueEmployer.industry}
                  onChange={handleInputEmployerChange}
              />
            </Grid>
          </Grid>
      );
    }

    if (tabValue === 1) {
      return (
          <Grid container spacing={2}
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
          >
            <Box sx={{
              width: '100%',
              display: 'flex',
              gap: '5px',
              margin: '5px 10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Grid item xs={16}>
                <TextField
                    fullWidth
                    label="First Name"
                    name="firstname"
                    value={formValueApplicant.firstname}
                    onChange={handleInputApplicantChange}
                />
              </Grid>
              <Grid item xs={16}>
                <TextField
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={formValueApplicant.lastname}
                    onChange={handleInputApplicantChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    InputLabelProps={{shrink: true}}
                    value={formValueApplicant.dob}
                    onChange={handleInputApplicantChange}
                />
              </Grid>
            </Box>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Description:
              </Typography>
              <CKEditor
                  editor={ClassicEditor}
                  data={formValueApplicant.description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    handleDescriptionApplicantChange(data);
                  }}
              />
            </Grid>
          </Grid>
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
          <CSSTransition key={step} timeout={500} classNames="fade">
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
                  <Box textAlign="center"
                       sx={{position: 'relative', display: 'inline-block'}}>
                    <Typography variant="h6" gutterBottom>Choose Your
                      Avatar</Typography>
                    <Box sx={{
                      position: 'relative',
                      width: 150,
                      height: 150,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid #ddd',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: '#f5f5f5',
                      '&:hover .overlay': {opacity: 1},
                    }}>
                      {preview ? (
                          <img src={preview} alt="Avatar Preview" style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}/>
                      ) : (
                          <Typography variant="body1" sx={{color: '#aaa'}}>No
                            Avatar</Typography>
                      )}
                    </Box>
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleAvatarChange}
                    />
                    <Button variant="contained" component="label" sx={{mt: 2}}>Upload
                      Avatar</Button>

                    {editorVisible && (
                        <Box sx={{mt: 3}}>
                          <AvatarEditor
                              id="avatar-editor"
                              image={imageSrc}
                              width={150}
                              height={150}
                              borderRadius={75} // Makes the crop area round
                          />
                          <Button variant="contained" sx={{mt: 2}}
                                  onClick={handleSaveAvatar}>Save
                            Avatar</Button>
                        </Box>
                    )}
                  </Box>
              )}
              {step === 3 && (
                  <Box>
                    <Typography variant="h6">Review Your
                      Information</Typography>
                    <Typography variant="body2" sx={{mt: 2}}>
                      {JSON.stringify(formValueApplicant, null, 2)}
                    </Typography>
                  </Box>
              )}
            </Box>
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
