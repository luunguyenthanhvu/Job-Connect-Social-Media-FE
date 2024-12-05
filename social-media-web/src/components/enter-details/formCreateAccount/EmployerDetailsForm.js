import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EmployerDetailsForm = ({ formValue, onChange, onDescriptionChange }) => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Description:
          </Typography>
          <CKEditor
              editor={ClassicEditor}
              data={formValue.description}
              onChange={(event, editor) => {
                const data = editor.getData();
                onDescriptionChange(data);
              }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
              fullWidth
              label="Website"
              name="website"
              value={formValue.website}
              onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
              fullWidth
              label="Country"
              name="country"
              value={formValue.country}
              onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
              fullWidth
              label="Industry"
              name="industry"
              value={formValue.industry}
              onChange={onChange}
          />
        </Grid>
      </Grid>
  );
};

export default EmployerDetailsForm;
