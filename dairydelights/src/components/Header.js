import React from 'react'
import { Grid2, IconButton, TextField } from '@mui/material'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';
import AuthContext from '../utils.js/AuthContext';
import { useContext } from 'react';
import { enqueueSnackbar } from 'notistack';
import { red } from '@mui/material/colors';
const Header = ({ onSearch, onSearchText, onClearText }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const handleLogout = () => {
    enqueueSnackbar("Logut Successfully !!!", {
      variant: "info",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    });
    logout();
    // navigate("/login")
  }
  return (
    <Grid2 bgcolor={'whitesmoke'}>
      <Grid2 display='flex' alignItems={'center'}
        justifyContent={'space-evenly'}>


        <img src="/logo.png" alt="header logo"
          style={{
            height: '70px',
            width: '100px',
            marginRight: '20px',
            borderRadius: '20px'
          }}
        />
        {!isLoggedIn && <Grid2>
          <TextField variant="outlined" label='Search Products'
            onChange={onSearch} value={onSearchText}
            slotProps={{
              input: {
                sx: { mb: 2 },
                startAdornment: (
                  <SearchIcon />
                ),
                endAdornment: onSearchText !== "" && (
                  <IconButton
                    onClick={onClearText}
                  >
                    <CloseIcon />
                  </IconButton>
                ),
              }
            }}
          />
        </Grid2>}
        <Grid2  >
          <Link to="/">
            <IconButton> <HomeSharpIcon fontSize='large' color='primary'/> </IconButton>
          </Link>
          {isLoggedIn ? (
            <Link to="/">
              <IconButton onClick={handleLogout}> <LogoutSharpIcon fontSize='large'sx={{color:red[500]}} /> </IconButton>
            </Link>
          ) : (
            <Link to="/login">
              <IconButton> <LoginSharpIcon fontSize='large' color='success' />  </IconButton>
            </Link>
          )}

        </Grid2>
      </Grid2>
    </Grid2>

  );
}

export default Header;