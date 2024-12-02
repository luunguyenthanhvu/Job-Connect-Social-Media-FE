import React from "react";
import Card from '@mui/material/Card';
import {Box, Divider, Typography} from "@mui/material";

const UserCV = () => {
  return (
      <Card sx={{
        width: '60%',
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
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                marginBottom: '15px'
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
                      sx={{ color: "rgba(20,171,226,255)",marginTop: '10px', textAlign: 'center'}}>
            JAVA DEVELOPER
          </Typography>
          <Typography variant="body2" sx={{marginTop: '20px'}}>
            0901 611 585 <br/>
            nnminh257@gmail.com <br/>
            github.com/minknhom <br/>
            Biên Hòa, Đồng Nai, Việt Nam
          </Typography>
          <Divider
              sx={{backgroundColor: '#fff', margin: '20px 0', width: '100%'}}/>
          <Typography variant="h6"
                      sx={{fontWeight: '600', marginBottom: '10px'}}>
            OBJECTIVE
          </Typography>
          <Typography variant="body2" sx={{textAlign: 'justify'}}>
            To secure a position as a Backend Java Web Developer while putting
            my acquired skills and training in activities to benefit the hiring
            company.
          </Typography>
          <Divider
              sx={{backgroundColor: '#fff', margin: '20px 0', width: '100%'}}/>
          <Typography variant="h6"
                      sx={{fontWeight: '600', marginBottom: '10px'}}>
            SKILLS
          </Typography>
          <Typography variant="body2" sx={{textAlign: 'left'}}>
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
                      sx={{ color: "rgba(20,171,226,255)",fontWeight: '600', marginBottom: '10px'}}>
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
                      sx={{ color: "rgba(20,171,226,255)",fontWeight: '600', marginBottom: '10px'}}>
            PROJECTS
          </Typography>
          <Typography variant="body2" sx={{marginBottom: '10px'}}>
            <b>Library Management Swing App</b> <br/>
            <i>3/2022 - 5/2022</i> <br/>
            Position: Developer <br/>
            - Designed the UI and implemented core functions such as user
            management and book borrowing. <br/>
            - Technologies used: Java, NetBeans, SQLServer JDBC <br/>
            <a href="https://github.com/PhamNhuLong/java_IS216.m22.6"
               target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Typography>
          <Typography variant="body2" sx={{marginBottom: '10px'}}>
            <b>Library Management Android App</b> <br/>
            <i>3/2022 - 5/2022</i> <br/>
            Position: Developer <br/>
            - Developed using Android Studio and SQLite. <br/>
            <a href="https://github.com/linhcuetch/diadong_quanlythuvien"
               target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Typography>
          <Typography variant="body2">
            <b>Shopping Website</b> <br/>
            <i>6/2023 - 7/2023</i> <br/>
            Position: Developer <br/>
            - Implemented a comprehensive shopping site using Spring Boot and
            MySQL. <br/>
            <a href="https://github.com/minknhom/Shopme" target="_blank"
               rel="noopener noreferrer">
              View Project
            </a>
          </Typography>
        </Box>
      </Card>
  );
};

export default UserCV;
