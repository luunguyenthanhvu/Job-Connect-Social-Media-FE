import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@mui/material";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FormControlLabel from "@mui/material/FormControlLabel";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male'

const ApplicantForm = ({formValue, setFormValue, handleChange}) => {

  const handleAddItem = (listName, newItem) => {
    setFormValue({
      ...formValue,
      [listName]: [...formValue[listName], {id: Date.now(), ...newItem}],
    });
    console.log(formValue)
  };

  const handleRemoveItem = (listName, id) => {
    setFormValue({
      ...formValue,
      [listName]: formValue[listName].filter((item) => item.id !== id),
    });
    console.log(formValue)
  };

  const handleItemChange = (listName, id, key, value) => {
    setFormValue({
      ...formValue,
      [listName]: formValue[listName].map((item) =>
          item.id === id ? {...item, [key]: value} : item
      ),
    });
    console.log(formValue)
  };

  const renderList = (listName, fields) => {
    // Ensure that the list is initialized as an array
    const list = formValue[listName] || [];

    return (
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            {listName.charAt(0).toUpperCase() + listName.slice(1)}
          </Typography>
          <Button
              variant="contained"
              onClick={() => handleAddItem(listName, fields)}
              sx={{mt: 2, mb: 2}}
          >
            Add {listName.charAt(0).toUpperCase() + listName.slice(1)}
          </Button>
          {list.map((item) => (
              <Paper
                  key={item.id}
                  elevation={3}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: "8px",
                    backgroundColor: "#f9f9f9",
                  }}
              >
                {Object.keys(fields).map((key) => {
                  if (key === "description") {
                    return (
                        <Box key={key} mt={2}>
                          <Typography variant="body1" gutterBottom>
                            Description:
                          </Typography>
                          <CKEditor
                              editor={ClassicEditor}
                              data={item[key]}
                              onChange={(event, editor) =>
                                  handleItemChange(listName, item.id, key,
                                      editor.getData())
                              }
                          />
                        </Box>
                    );
                  } else if (key === "date") {
                    return (
                        <Grid container spacing={2} key={key} mt={2}>
                          <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Start Date"
                                type="date"
                                InputLabelProps={{shrink: true}}
                                value={item.startDate || ""}
                                onChange={(e) =>
                                    handleItemChange(listName, item.id,
                                        "startDate", e.target.value)
                                }
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="End Date"
                                type="date"
                                InputLabelProps={{shrink: true}}
                                value={item.endDate || ""}
                                onChange={(e) =>
                                    handleItemChange(listName, item.id,
                                        "endDate", e.target.value)
                                }
                            />
                          </Grid>
                        </Grid>
                    );
                  } else {
                    return (
                        <Box key={key} mt={2}>
                          <TextField
                              fullWidth
                              label={key.charAt(0).toUpperCase() + key.slice(1)}
                              value={item[key] || ""}
                              onChange={(e) =>
                                  handleItemChange(listName, item.id, key,
                                      e.target.value)
                              }
                          />
                        </Box>
                    );
                  }
                })}
                <Button
                    color="error"
                    variant="outlined"
                    sx={{mt: 2}}
                    onClick={() => handleRemoveItem(listName, item.id)}
                >
                  Remove
                </Button>
              </Paper>
          ))}
        </Box>
    );
  };

  return (
      <Box p={4}>
        <Typography variant="h4" mb={4} textAlign="center">
          Input your profile to create a CV
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
                fullWidth
                label="First Name"
                name="firstname"
                value={formValue.firstname}
                onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
                fullWidth
                label="Last Name"
                name="lastname"
                value={formValue.lastname}
                onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                value={formValue.dob}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
            />
          </Grid>
          <Grid
              item
              xs={6}
              sx={{display: 'flex', alignItems: 'center', gap: 2}}
          >
            <Typography sx={{mb: 0}}>Gender:</Typography>
            <RadioGroup
                row
                name="gender"
                value={formValue.gender}
                onChange={(e) => setFormValue(
                    {...formValue, gender: e.target.value})}
                sx={{display: 'flex', alignItems: 'center'}}
            >
              <FormControlLabel
                  value="Male"
                  control={<Radio/>}
                  label="Male"
                  icon={<MaleIcon/>}
                  labelPlacement="end"
              />
              <FormControlLabel
                  value="Female"
                  control={<Radio/>}
                  label="Female"
                  icon={<FemaleIcon/>}
                  labelPlacement="end"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <TextField
                fullWidth
                label="Email User"
                name="emailUser"
                value={formValue.emailUser}
                onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
                fullWidth
                label="Phone Number"
                name="phoneNum"
                value={formValue.phoneNum}
                onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
                fullWidth
                label="Address"
                name="address"
                value={formValue.address}
                onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
                fullWidth
                label="Position"
                name="position"
                value={formValue.position}
                onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
                fullWidth
                label="Your website or github account"
                name="website"
                value={formValue.website}
                onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Typography sx={{
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: "500",
                fontSize: "1.25rem",
                lineHeight: "1,6"
              }} gutterBottom>
                Skills
              </Typography>
              <CKEditor
                  editor={ClassicEditor}
                  data={formValue.skills} // Dữ liệu hiện tại
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setFormValue({...formValue, skills: data}); // Cập nhật formValue
                  }}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box mt={2}>
              <Typography sx={{
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: "500",
                fontSize: "1.25rem",
                lineHeight: "1,6"
              }} gutterBottom>
                Objective
              </Typography>
              <CKEditor
                  editor={ClassicEditor}
                  data={formValue.objective} // Dữ liệu hiện tại
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setFormValue({...formValue, objective: data}); // Cập nhật formValue
                  }}
              />
            </Box>
          </Grid>
        </Grid>

        {renderList("education", {
          institutionName: "",
          fieldOfStudy: "",
          degree: "",
          date: ""
        })}

        {renderList("workExperience", {
          companyName: "",
          position: "",
          date: "",
          description: "",
        })}

        {renderList("project", {
          projectName: "",
          position: "",
          date: "",
          description: "",
        })}
      </Box>
  );
};

export default ApplicantForm;
