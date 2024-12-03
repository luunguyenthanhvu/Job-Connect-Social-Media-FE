import React from "react";
import Card from '@mui/material/Card';
import {Box, Divider, Typography} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const styles = {
  icon_with_text: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    margin: '5px 0',
    color: '#fff',
    fontWeight: '500',
  },
  iconStyle: {
    color: 'rgb(94, 94, 94)',
    width: '16px',
    height: '16px',
    backgroundColor: 'rgba(20, 171, 226, 255)',
    borderRadius: '50%',
    padding: '3px',
  }

}
const UserCV = () => {
  return (
      <Card sx={{
        width: '70%',
        display: 'flex',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
        margin: "auto",
        marginTop: '20px',
        overflow: 'hidden',
        minHeight: '800px'
      }}>
        {/* Sidebar */}
        <Box sx={{
          width: '30%',
          padding: '20px',
          backgroundColor: 'rgb(94, 94, 94)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <img
              src="https://faceinch.vn/upload/elfinder/%E1%BA%A2nh/chup-chan-dung-5.jpg"
              alt="Profile"
              style={{
                width: '90px',
                height: '120px',
                marginBottom: '15px',
                objectFit: 'cover',
                border: '1px solid #ddd',
              }}
          />
          <Typography variant="h5" component="h4" sx={{
            color: "rgba(20,171,226,255)",
            fontWeight: '600',
            textAlign: 'center'
          }}>
            Nguyễn Nhật Minh
          </Typography>
          <Typography variant="body1"
                      sx={{
                        color: "rgba(20,171,226,255)",
                        marginTop: '10px',
                        textAlign: 'center'
                      }}>
            JAVA DEVELOPER
          </Typography>
          <Typography variant="body2" sx={{marginTop: '20px'}}>
            <div style={styles.icon_with_text}>
              <PhoneIcon style={styles.iconStyle}/>
              <span>0901 611 585</span>
            </div>

            <div style={styles.icon_with_text}>
              <EmailIcon style={styles.iconStyle}/>
              <span>nnminh257@gmail.com</span>
            </div>

            <div style={styles.icon_with_text}>
              <LanguageIcon style={styles.iconStyle}/>
              <span> github.com/minknhom</span>
            </div>

            <div style={styles.icon_with_text}>
              <LocationOnIcon style={styles.iconStyle}/>
              <span> Biên Hòa, Đồng Nai, Việt Nam</span>
            </div>

          </Typography>
          <Divider
              sx={{backgroundColor: '#fff', margin: '20px 0', width: '100%'}}/>
          <Typography variant="h6"
                      sx={{
                        color: "rgba(20,171,226,255)",
                        fontWeight: '600',
                        marginBottom: '10px'
                      }}>
            OBJECTIVE
          </Typography>
          <Typography variant="body3" sx={{textAlign: 'justify'}}>
            To secure a position as a Backend Java Web Developer while putting
            my acquired skills and training in activities to benefit the hiring
            company.
          </Typography>
          <Divider
              sx={{backgroundColor: '#fff', margin: '20px 0', width: '100%'}}/>
          <Typography variant="h6"
                      sx={{
                        color: "rgba(20,171,226,255)",
                        fontWeight: '600',
                        marginBottom: '10px'
                      }}>
            SKILLS
          </Typography>
          <Typography variant="body3" sx={{textAlign: 'left'}}>
            - Proficient in Java programming <br/>
            - Knowledge of Spring Framework <br/>
            - Web Development: Servlets, JSP, Thymeleaf <br/>
            - HTML, CSS, JavaScript, JQuery <br/>
            - Databases: SQL Server, MySQL <br/>
            - Tools: Git, SourceTree <br/>
            - Good English communication
          </Typography>
        </Box>

        {/* Main Content */}
        <Box sx={{
          width: '70%',
          padding: '20px'
        }}>
          <Typography variant="h6"
                      sx={{
                        color: "rgba(20,171,226,255)",
                        fontWeight: '600',
                        marginBottom: '10px'
                      }}>
            EDUCATION
          </Typography>
          <Typography variant="body2" sx={{marginBottom: '15px'}}>
            <b>University of Information Technology</b> <br/>
            Faculty of Information System <br/>
            <i>9/2019 - Present</i>
          </Typography>
          <Typography variant="body2" sx={{marginBottom: '20px'}}>
            <b>FPT Software Academy</b> <br/>
            Fullstack Java Web Developer <br/>
            <i>3/2023 - Present</i>
          </Typography>
          <Divider sx={{marginBottom: '20px'}}/>

          <Typography variant="h6"
                      sx={{
                        color: "rgba(20,171,226,255)",
                        fontWeight: '600',
                        marginBottom: '10px'
                      }}>
            PROJECTS
          </Typography>
          <Typography variant="body2" sx={{marginBottom: '10px'}}>
            <b>Library Management Swing App</b> <br/>
            <i>3/2022 - 5/2022</i> <br/>
            Position: Developer <br/>
            - Designed the UI and implemented core functions such as user
            management and book borrowing. <br/>
            - Technologies used: Java, NetBeans, SQLServer JDBC <br/>
            - https://github.com/PhamNhuLong/java_IS216.m22.6
          </Typography>
          <Typography variant="body2" sx={{marginBottom: '10px'}}>
            <b>Library Management Android App</b> <br/>
            <i>3/2022 - 5/2022</i> <br/>
            Position: Developer <br/>
            - Developed using Android Studio and SQLite. <br/>
            - https://github.com/linhcuetch/diadong_quanlythuvien
          </Typography>
          <Typography variant="body2">
            <b>Shopping Website</b> <br/>
            <i>6/2023 - 7/2023</i> <br/>
            Position: Developer <br/>
            - Implemented a comprehensive shopping site using Spring Boot and
            MySQL. <br/>
            - https://github.com/minknhom/Shopme
          </Typography>
        </Box>
      </Card>
  );
};

export default UserCV;
