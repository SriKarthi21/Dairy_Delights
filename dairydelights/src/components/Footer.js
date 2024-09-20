import { Grid2 } from '@mui/material';
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {  Instagram, Twitter,LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";
const Footer = () => {
  return (
<Box
      component="footer"
      sx={{
        backgroundColor: "black",color:"white",
        p: 3.5
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={5} justifyContent={'space-evenly'}>
        <Grid2 >
          <img src="/logo.png" alt="logo pic" height={'150px'} />
        </Grid2>
        
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" maxWidth={200}>
              We are Dairy Product company, dedicated to providing the best product and service to our
              customers.
            </Typography>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" >
              123 Main Street, Anytown, INDIA
            </Typography>
            <Typography variant="body2" >
              Email: info@example.com
            </Typography>
            <Typography variant="body2" >
              Phone: +91 1234567899
            </Typography>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.linkedin.com/" color="inherit">
              <LinkedIn />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid2>
        </Grid2>
        {/* <Box mt={2}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box> */}
      </Container>
    </Box>  )
}

export default Footer;