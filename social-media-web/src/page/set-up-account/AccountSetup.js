import React, { useState } from "react";
import { Box, Button, Grid, Step, StepLabel, Stepper, Tab, Tabs, TextField, Typography } from "@mui/material";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./style.css";
import AppLogo from "../../components/icons/AppLogo";

const AccountSetup = () => {
  const [tabValue, setTabValue] = useState(0);
  const [step, setStep] = useState(0);

  const [formValues, setFormValues] = useState({
    description: "",
    website: "",
    country: "",
    industry: "",
    firstname: "",
    lastname: "",
    dob: "",
    summary: "",
    educationList: "",
    workExperiences: "",
    skills: "",
    certifications: "",
  });

  const steps = ["Account Type", "Enter Details", "Review & Submit"];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setStep(0);
  };

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleDescriptionChange = (data) => {
    setFormValues({ ...formValues, description: data });
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formValues);
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
                  data={formValues.description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    handleDescriptionChange(data);
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Website"
                  name="website"
                  value={formValues.website}
                  onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={formValues.country}
                  onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Industry"
                  name="industry"
                  value={formValues.industry}
                  onChange={handleInputChange}
              />
            </Grid>
          </Grid>
      );
    }

    if (tabValue === 1) {
      return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="First Name"
                  name="firstname"
                  value={formValues.firstname}
                  onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Last Name"
                  name="lastname"
                  value={formValues.lastname}
                  onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formValues.dob}
                  onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Summary"
                  name="summary"
                  value={formValues.summary}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
              />
            </Grid>
          </Grid>
      );
    }
  };

  return (
      <Box sx={{ maxWidth: "100%", backgroundColor: "#fff", margin: "auto", padding: "30px 200px", mt: 4 }}>
        <Typography
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            variant="h4"
            align="center"
            gutterBottom
        >
          <AppLogo width={60} height={60} />
          Create Your Account
        </Typography>

        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Employer" />
          <Tab label="Applicant" />
        </Tabs>

        <Stepper activeStep={step} sx={{ my: 3 }}>
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
                    <Typography variant="h6">Step 1: Choose Account Type</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Selected: {tabValue === 0 ? "Employer" : "Applicant"}
                    </Typography>
                  </Box>
              )}
              {step === 1 && <Box>{renderFormFields()}</Box>}
              {step === 2 && (
                  <Box>
                    <Typography variant="h6">Review Your Information</Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {JSON.stringify(formValues, null, 2)}
                    </Typography>
                  </Box>
              )}
            </Box>
          </CSSTransition>
        </TransitionGroup>

        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" disabled={step === 0} onClick={handlePreviousStep}>
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
