import React from "react";
import Card from "@mui/material/Card";
import {Box, Divider, Typography} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const styles = {
  icon_with_text: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    margin: "5px 0",
    color: "#fff",
    fontWeight: "500",
  },
  iconStyle: {
    color: "rgb(94, 94, 94)",
    width: "16px",
    height: "16px",
    backgroundColor: "rgba(20, 171, 226, 255)",
    borderRadius: "50%",
    padding: "3px",
  },
};

const UserCV = ({
  name,
  position,
  phone,
  email,
  github,
  location,
  objective,
  skills,
  education,
  projects,
}) => {
  return (
      <Card
          sx={{
            width: "70%",
            display: "flex",
            boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
            margin: "auto",
            marginTop: "20px",
            overflow: "hidden",
            minHeight: "800px",
          }}
      >
        {/* Sidebar */}
        <Box
            sx={{
              width: "30%",
              padding: "20px",
              backgroundColor: "rgb(94, 94, 94)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
        >
          <img
              src="https://faceinch.vn/upload/elfinder/%E1%BA%A2nh/chup-chan-dung-5.jpg"
              alt="Profile"
              style={{
                width: "90px",
                height: "120px",
                marginBottom: "15px",
                objectFit: "cover",
                border: "1px solid #ddd",
              }}
          />
          <Typography
              variant="h5"
              component="h4"
              sx={{
                color: "rgba(20,171,226,255)",
                fontWeight: "600",
                textAlign: "center",
              }}
          >
            {name}
          </Typography>
          <Typography
              variant="body1"
              sx={{
                color: "rgba(20,171,226,255)",
                marginTop: "10px",
                textAlign: "center",
              }}
          >
            {position}
          </Typography>
          <Typography variant="body2" sx={{marginTop: "20px"}}>
            <span style={styles.icon_with_text}>
              <PhoneIcon style={styles.iconStyle}/>
              <span>{phone}</span>
            </span>

            <span style={styles.icon_with_text}>
              <EmailIcon style={styles.iconStyle}/>
              <span>{email}</span>
            </span>

            <span style={styles.icon_with_text}>
              <LanguageIcon style={styles.iconStyle}/>
              <span>{github}</span>
            </span>

            <span style={styles.icon_with_text}>
              <LocationOnIcon style={styles.iconStyle}/>
              <span>{location}</span>
            </span>
          </Typography>
          <Divider
              sx={{backgroundColor: "#fff", margin: "20px 0", width: "100%"}}
          />
          <Typography
              variant="h6"
              sx={{
                color: "rgba(20,171,226,255)",
                fontWeight: "600",
                marginBottom: "10px",
              }}
          >
            OBJECTIVE
          </Typography>
          <Typography variant="body2" gutterBottom>
            {objective}
          </Typography>
          <Divider
              sx={{backgroundColor: "#fff", margin: "20px 0", width: "100%"}}
          />
          <Typography
              variant="h6"
              sx={{
                color: "rgba(20,171,226,255)",
                fontWeight: "600",
                marginBottom: "10px",
              }}
          >
            SKILLS
          </Typography>
          <Typography variant="body2" gutterBottom>
            {skills.map((skill, index) => (
                <span key={index}>- {skill}</span>
            ))}
          </Typography>
        </Box>

        {/* Main Content */}
        <Box sx={{width: "70%", padding: "20px"}}>
          <Typography
              variant="h6"
              sx={{
                color: "rgba(20,171,226,255)",
                fontWeight: "600",
                marginBottom: "10px",
              }}
          >
            EDUCATION
          </Typography>
          {education.map((edu, index) => (
              <Typography variant="body2" key={index}
                          sx={{marginBottom: "15px"}}>
                <b>{edu.name}</b> <br/>
                {edu.detail} <br/>
                <i>{edu.duration}</i>
              </Typography>
          ))}
          <Divider sx={{marginBottom: "20px"}}/>

          <Typography
              variant="h6"
              sx={{
                color: "rgba(20,171,226,255)",
                fontWeight: "600",
                marginBottom: "10px",
              }}
          >
            PROJECTS
          </Typography>
          {projects.map((project, index) => (
              <Typography
                  variant="body2"
                  key={index}
                  sx={{marginBottom: "10px"}}
              >
                <b>{project.name}</b> <br/>
                <i>{project.duration}</i> <br/>
                Position: {project.position} <br/>
                {project.description} <br/>
                {project.link && <a href={project.link}>{project.link}</a>}
              </Typography>
          ))}
        </Box>
      </Card>
  );
};

export default UserCV;
