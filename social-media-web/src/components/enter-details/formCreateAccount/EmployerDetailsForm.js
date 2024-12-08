import React from "react";
import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DeleteIcon from "@mui/icons-material/Delete";

const EmployerDetailsForm = ({
  formValue,
  onChange,
  onDescriptionChange,
  onAddressesChange
}) => {
  const handleAddressChange = (index, event) => {
    const updatedAddresses = [...formValue.addresses];
    updatedAddresses[index] = event.target.value;
    onAddressesChange(updatedAddresses);
  };

  const addAddress = () => {
    const updatedAddresses = [...formValue.addresses, ""];
    onAddressesChange(updatedAddresses);
  };

  const removeAddress = (index) => {
    const updatedAddresses = formValue.addresses.filter((_, i) => i !== index);
    onAddressesChange(updatedAddresses);
  };

  return (
      <Grid container spacing={2}>
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
          <Typography variant="h6" gutterBottom>
            Addresses:
          </Typography>
          {formValue.addresses.map((address, index) => (
              <Grid container spacing={1} style={{
                margin: "10px"
              }}
                    alignItems="center" key={index}>
                <Grid item xs={10}>
                  <TextField
                      fullWidth
                      label={`Address ${index + 1}`}
                      value={address}
                      onChange={(event) => handleAddressChange(index, event)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => removeAddress(index)}>
                    <DeleteIcon/>
                  </IconButton>
                </Grid>
              </Grid>
          ))}
          <Button variant="contained" onClick={addAddress}
                  style={{marginTop: "10px"}}>
            Add Address
          </Button>
        </Grid>
      </Grid>
  );
};

export default EmployerDetailsForm;
