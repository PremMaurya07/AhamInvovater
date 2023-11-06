import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { experimentalStyled as makeStyles } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
  

// import './styles.css'; // Import your custom CSS file
import './navbar.css'



function StatusBar() {
  // const classes = useStyles();
 const [progress, setProgress] = React.useState(0);
 
 React.useEffect(() => {
 
   let computeProgress = () => {
     // The scrollTop gives length of window that has been scrolled
     const scrolled = document.documentElement.scrollTop;
     // scrollHeight gives total length of the window and 
     // The clientHeight gives the length of viewport
     const scrollLength = document.documentElement.scrollHeight - 
     document.documentElement.clientHeight;
     const progress = `${100*scrolled/scrollLength}`;
 
     setProgress(progress);
   }

 
   // Adding event listener on mounting
   window.addEventListener("scroll", computeProgress);
 
   // Removing event listener upon unmounting
   return () => window.removeEventListener("scroll", computeProgress);
 });
 
 return (
   <div>
     <LinearProgress variant="determinate" color='secondary' value={progress} />
    </div>
 );
}
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  
  

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function Header(props) {
 
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);


  

  return (
    <>
  
    <ElevationScroll {...props}>
    <AppBar   style={{'backgroundColor':colorChange?'#537459' :'#e5e5e5' , transition: 'background-color 0.9s ease',}} >
      <Toolbar>

      <nav className='sticky-top' >
        <div class="wrapper">
          <div class="logo"><a href="#">Logo</a></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><i class="fa fa-times"></i></label>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li>
              <a href="#" class="desktop-item">Services <i class="fa fa-angle-down"></i></a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile-item">Services <i class="fa fa-angle-down"></i></label>
              <ul class="drop-menu">
                <li><a href="#">Drop menu 1</a></li>
                <li><a href="#">Drop menu 2</a></li>
                <li><a href="#">Drop menu 3</a></li>
                <li><a href="#">Drop menu 4</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="desktop-item">Trainee  <i class="fa fa-angle-down"></i></a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">Trainee  <i class="fa fa-angle-down"></i></label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Design Services</header>
                    <ul class="mega-links">
                      <li><a href="#">Graphics</a></li>
                      <li><a href="#">Vectors</a></li>
                      <li><a href="#">Business cards</a></li>
                      <li><a href="#">Custom logo</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Email Services</header>
                    <ul class="mega-links">
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Security services</header>
                    <ul class="mega-links">
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">VPS Hosting</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#">Feedback</a></li>
          </ul>
          <label for="menu-btn" class="btn menu-btn"><i class="fa fa-bars"></i></label>
        </div>
      </nav>
 
      </Toolbar>
      <StatusBar/>
    </AppBar>
   
  </ElevationScroll>
  
     
  </>
  );
}



export default Header;
