import React,{useState,useEffect} from 'react';
//  import ResponsiveMenu from './ResponsiveMenu';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Banner1 from '../assets/images/2.jpg'
import Footer from './Footer';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import withRoot from '../WithRoot';
import "../App.css";


function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    };
  
    return (
      <Fade in={trigger} >
        <Box
          onClick={handleClick}
          role="presentation"
         
          sx={{ position: 'fixed', bottom: 16, right: 16,zIndex:999 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  


function UserLayout(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
 

    return (

        <React.Fragment>

        {loading ? (
        <div className="loader-container">
            <div className="spinner">loading..........</div>
        </div>
      ) : (
        
        <div className='splash'>
      <CssBaseline />
     
        <Header/>
       
      <Toolbar id="back-to-top-anchor" />
     
      <Outlet />
     
     <Footer/>
      <ScrollTop {...props}>
        <Fab size="small" style={{backgroundColor:"#537459"}} aria-label="scroll back to top">
          <KeyboardArrowUpIcon   />
        </Fab>
      </ScrollTop>
      </div>
      )}
    </React.Fragment>


    );
}
export default withRoot(UserLayout);
//export default UserLayout;