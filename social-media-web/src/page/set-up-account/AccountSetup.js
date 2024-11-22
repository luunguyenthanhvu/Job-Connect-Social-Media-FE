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
import { PinturaEditor } from '@pqina/react-pintura';
import { getEditorDefaults } from '@pqina/pintura';

import '@pqina/pintura/pintura.css';
const AccountSetup = () => {
  const [inlineResult, setInlineResult] = useState();
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
                  <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#f9f9f9",
                        width: "90%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                      }}
                  >
                    {/* Phần chọn ảnh */}
                    <Box
                        sx={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "10px",
                          border: "2px dashed #ccc",
                          borderRadius: "10px",
                          justifyContent: "center",
                          background: imageSrc ? `url(${imageSrc}) center/cover no-repeat` : "#f0f0f0",
                          height: "300px",
                          position: "relative",
                        }}
                    >
                      {!imageSrc && (
                          <Typography
                              sx={{
                                color: "#666",
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                          >
                            Click to Upload
                          </Typography>
                      )}
                      <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{
                            opacity: 0,
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                          }}
                      />
                    </Box>

                    {/* Trình chỉnh sửa ảnh */}
                    {imageSrc && (
                        <Box sx={{ flex: "2", display: "flex", flexDirection: "column", gap: "10px" }}>
                          <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
                            Edit Avatar
                          </Typography>
                          <Box sx={{ height: "300px" }}>
                            <PinturaEditor
                                {...getEditorDefaults()}
                                src={imageSrc}
                                imageCropAspectRatio={1}
                                outputWidth={1024}
                                outputHeight={1024}
                                onProcess={(res) => setInlineResult(URL.createObjectURL(res.dest))}
                            />
                          </Box>
                        </Box>
                    )}

                    {/* Ảnh chỉnh sửa xong */}
                    {inlineResult && (
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <Typography
                              variant="h6"
                              sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "10px" }}
                          >
                            Edited Image
                          </Typography>
                          <img
                              src={inlineResult}
                              alt="Edited"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                              }}
                          />
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
