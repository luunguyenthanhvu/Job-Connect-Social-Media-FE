import React from "react";
import Card from "@mui/material/Card";
import {Box, Divider, Typography} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import parse from 'html-react-parser';
import "./style.css";

const styles = {
  icon_with_text: {
    display: "flex",  // Sử dụng flexbox để căn chỉnh icon và text
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    margin: "5px 0",  // Cách đều giữa các dòng
    color: "#fff",
    fontWeight: "500",
    width: "100%",  // Đảm bảo mỗi cặp icon và text chiếm hết chiều rộng
  },
  iconStyle: {
    color: "rgb(94, 94, 94)",
    width: "16px",
    height: "16px",
    backgroundColor: "rgba(20, 171, 226, 255)",
    borderRadius: "50%",
    padding: "3px",
  },
  text: {
    whiteSpace: "nowrap",  // Ngăn chữ bị cắt hoặc xuống dòng
    overflow: "hidden",
    textOverflow: "ellipsis",  // Thêm dấu ba chấm nếu chữ quá dài
  },
  projectDate: {
    fontStyle: "italic",
    color: "#6c757d",
    fontSize: "0.9rem",
    marginTop: "4px",
    marginBottom: "8px",
    display: "inline-block "
  },

};

const UserCV = ({
  img,
  name,
  position,
  phone,
  emailUser,
  website,
  location,
  objective,
  skills,
  education,
  projects,
  workExperience
}) => {

  return (
      <Card
          sx={{
            width: "100%",
            display: "flex",
            boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
            margin: "auto",
            overflow: "hidden",
            minHeight: "800px",
          }}
      >
        {/* Sidebar */}
        <Box
            sx={{
              width: "32%",
              padding: "20px",
              backgroundColor: "rgb(94, 94, 94)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
        >
          <img
              src={img}
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
              variant="h6"
              component="h6"
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
              <span style={styles.text}>{phone}</span>
            </span>

            <span style={styles.icon_with_text}>
              <EmailIcon style={styles.iconStyle}/>
              <span style={styles.text}>{emailUser}</span>
            </span>

            <span style={styles.icon_with_text}>
              <LanguageIcon style={styles.iconStyle}/>
              <span style={styles.text}>{website}</span>
            </span>

            <span style={styles.icon_with_text}>
              <LocationOnIcon style={styles.iconStyle}/>
              <span style={styles.text}>{location}</span>
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
          <div sx={{
            width: '100%',
            textAlign: 'left'
          }}>
            {parse(objective)}
          </div>
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
          <div sx={{
            width: '100%',
            textAlign: 'left'
          }}>
            {parse(skills)}
          </div>
        </Box>

        {/* Main Content */
        }
        <Box sx={{width: "68%", padding: "20px"}}>
          <Typography
              variant="h6"
              sx={{
                color: "rgba(20,171,226,255)",
                fontWeight: "600",
              }}
          >
            EDUCATION
          </Typography>
          <div className="projects-list">
            {education.map((edu, index) => (
                <div className="project-item" key={index}>
                  <Typography variant="h6" className="project-name">
                    {edu.institutionName}
                  </Typography>
                  <Typography variant="body2" className="project-date">
                    <i>{edu.startDate} - {edu.endDate}</i>
                  </Typography>
                  <Typography variant="body2" className="project-position">
                    <span> Degree: </span> {edu.degree}
                  </Typography>
                  <Typography variant="body2" className="project-description">
                    <span>{edu.fieldOfStudy}</span>
                  </Typography>
                </div>
            ))}
          </div>

          <Divider sx={{marginBottom: "20px"}}/>

          <Typography
              variant="h6"
              sx={{
                color: "rgba(20,171,226,255)",
                fontWeight: "600",
              }}
          >
            PROJECTS
          </Typography>
          <div className="projects-list">
            {projects.map((project, index) => (
                <div className="project-item" key={index}>
                  <Typography variant="h6" className="project-name">
                    {project.projectName}
                  </Typography>
                  <Typography variant="body2" className="project-date">
                    <i>{project.startDate} - {project.endDate}</i>
                  </Typography>
                  <Typography variant="body2" className="project-position">
                    <span>Position: </span> {project.position}
                  </Typography>
                  <div className="project-description">
                    {parse(project.description)}
                  </div>
                </div>
            ))}
          </div>

          {workExperience.length > 0 && (
              <div>
                <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(20,171,226,255)",
                      fontWeight: "600",
                    }}
                >
                  Work Experience
                </Typography>
                <div className="projects-list">
                  {workExperience.map((work, index) => (
                      <div className="project-item" key={index}>
                        <Typography variant="h6" className="project-name">
                          {work.companyName}
                        </Typography>
                        <Typography variant="body2" className="project-date">
                          <i>{work.startDate} - {work.endDate}</i>
                        </Typography>
                        <Typography variant="body2"
                                    className="project-position">
                          <span> Position: </span> {work.position}
                        </Typography>
                        <div className="project-description">
                          {parse(work.description)}
                        </div>
                      </div>
                  ))}
                </div>
              </div>
          )}
        </Box>
      </Card>
  )
      ;
};

export default UserCV;
