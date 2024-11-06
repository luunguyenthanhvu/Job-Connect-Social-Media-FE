import React, {useState} from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography
} from "@mui/material";

// Dữ liệu mẫu cho các công ty
const sampleCompanies = [
  {
    id: 1,
    name: "Company A",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company A"
  },
  {
    id: 2,
    name: "Company B",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company B"
  },
  {
    id: 3,
    name: "Company C",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company C"
  },
  {
    id: 4,
    name: "Company D",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company D"
  },
  {
    id: 5,
    name: "Company E",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company E"
  },
  {
    id: 6,
    name: "Company F",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company F"
  },
  {
    id: 7,
    name: "Company G",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company G"
  },
  {
    id: 8,
    name: "Company H",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company H"
  },
  {
    id: 9,
    name: "Company I",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company I"
  },
  {
    id: 10,
    name: "Company J",
    logo: "https://via.placeholder.com/150",
    description: "Description for Company J"
  },
  // Thêm các công ty khác nếu cần
];

const Company = () => {
  const itemsPerPage = 4; // Số lượng công ty hiển thị trên mỗi trang
  const [page, setPage] = useState(1);

  // Tính toán các công ty hiển thị trên trang hiện tại
  const totalPages = Math.ceil(sampleCompanies.length / itemsPerPage);
  const displayedCompanies = sampleCompanies.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
  );

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
      <Box sx={{padding: "20px"}}>
        <Typography variant="h4" sx={{mb: 3}}>
          Danh sách các công ty tuyển dụng
        </Typography>

        <Grid container spacing={2}>
          {displayedCompanies.map((company) => (
              <Grid item xs={12} sm={6} md={3} key={company.id}>
                <Card sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}>
                  <CardMedia
                      component="img"
                      height="140"
                      image={company.logo}
                      alt={`${company.name} logo`}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {company.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {company.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          ))}
        </Grid>

        {/* Phân trang */}
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 3}}>
          <Pagination
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              color="primary"
          />
        </Box>
      </Box>
  );
};

export default Company;
