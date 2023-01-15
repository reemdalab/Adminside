import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Befit Pro</Typography>

          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#03C9D7' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
