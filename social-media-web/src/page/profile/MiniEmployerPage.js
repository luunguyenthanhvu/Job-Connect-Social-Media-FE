import React from "react";
import {Avatar, Card, CardContent, Grid, Typography} from "@mui/material";

const MiniEmployerPage = ({formValue, image}) => {
  return (
      <Card
          sx={{
            maxWidth: "800px",
            margin: "20px auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
      >
        <Grid container spacing={2}>
          {/* Company Logo */}
          <Grid item xs={3}>
            <Avatar
                sx={{width: "100px", height: "100px", margin: "auto"}}
                src={image} // Replace with the company's logo if available
                alt="Company Logo"
            />
          </Grid>

          {/* Employer Details */}
          <Grid item xs={9}>
            <Typography variant="h5" sx={{fontWeight: "bold"}}>
              {"Company Name"}
            </Typography>
            <Typography variant="body1" sx={{color: "gray"}}>
              {formValue.industry || "Industry"}
            </Typography>
            <Typography variant="body2" sx={{fontWeight: "bold"}}>
              {formValue.website || "Website"}
            </Typography>
            <Typography variant="body2" sx={{color: "gray"}}>
              {formValue.country || "Location"}
            </Typography>
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <CardContent>
              <Typography
                  variant="h6"
                  sx={{fontWeight: "bold", marginBottom: "10px"}}
              >
                About Us
              </Typography>
              <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: formValue.description || "No description provided."
                  }}
              ></Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
  );
};

export default MiniEmployerPage;
