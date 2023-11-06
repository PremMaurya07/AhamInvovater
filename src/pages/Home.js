import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
//  import Typography from '@mui/material/Typography';
 import Typography from '../GlobalComponent/Typography';
 import Button from '../GlobalComponent/Button';
//  import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { AnimationOnScroll } from 'react-animation-on-scroll';
 import aboutUs from '../assets/images/aboutus1.jpeg'
 import backgroundImage from '../assets/images/lightgray.jpg'
 import Banner2 from '../assets/images/man-doing-technology.jpg'
 import IOT from '../assets/images/iot.webp'
 import android from '../assets/images/android.webp'
 import  sliderone from '../assets/images/sliderone.jpg'
 import "animate.css/animate.min.css";
 import Reveal from 'react-reveal/Reveal';
 import Slider from "react-slick-slider";
 import Carousel from 'react-bootstrap/Carousel';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

//  import Slider from 'react-slick';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';

import './Home.css'


const Page = (props) => {
  const {children,...rest} =props;
  return (
  <div {...rest} className="page">
     {children}
    </div>
 )
}


const HeroLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      minHeight: 450,
      maxHeight: 600,
    },
  }));
  
  const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  });





  function HeroLayout(props) {
    const { sxBackground, children } = props;
  
    return (
      <HeroLayoutRoot>
        <Container
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              //  backgroundColor: '#537459',
              //  opacity: 0.5,
              zIndex: -1,
            }}
          />
          {/* <Background sx={sxBackground} /> */}

        </Container>
      </HeroLayoutRoot>
    );
  }
  
 HeroLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
  const UnderlinedBox = styled(Box)(({ theme }) => ({
    borderBottom: `5px solid #64846c`, // Customize the color as needed
    paddingBottom: '4px', // Adjust as needed to control the space between content and underline
    display: 'inline-block', // Ensures the underline spans the content width
  }));
  

const Home = () => {
  const settingsTop = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
   
  };

    return (
     <>
 
    <HeroLayout
      // sxBackground={{
      //    backgroundImage: `url(${backgroundImage})`,
      //   backgroundColor: '#ffffff', // Average color of the background image.
      //   backgroundPosition: 'center',
      // }}
    >
    
    <Grid>
        
        <Grid
          item
          className={"slideRight"}
          xs={12}
          md={12}
          sx={{ display: { md: 'block',xs:'none' }, position: 'relative' }}
        >

    <Carousel>
      <Carousel.Item>
      <img  src={sliderone} alt="..." className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"></img>
     
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img  src={IOT} alt="..." className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"></img>
      </Carousel.Item>

      <Carousel.Item>
      <img  src={android} alt="..." className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"></img>
     
      </Carousel.Item>

      </Carousel>


    
        </Grid>
        {/* <Grid item xs={12} md={5} sx={{ zIndex: 1 }} className={"slideLeft"}>
          <UnderlinedBox
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: '#fff',
              color:'#000',
              py: 8,
              px: 3,
            }}
          >
            <Box component="section">
              <Typography color="inherit" align="center" variant="h2" className='slide-up' gutterBottom>
              Transforming Ideas into Digital Realities
              </Typography>
            </Box>
          </UnderlinedBox>
        </Grid> */}
       
      </Grid>


    </HeroLayout>

 
    <section>
  <h3>Our Services</h3>
  <p class="section-lead"> A Complete digital Agency offering wide range of services, API, Chatbots, blockchain, AI, Web and Mobile Apps, E-commerce, SEO/SMO and more
</p>
  <div class="services-grid">
    <div class="service service1">
      <i class="ti-bar-chart"></i>
      <h4>WEB DESIGNING & DEVELOPMENT
</h4>
      <p>Our expert designers create stunning websites that captivate your audience and enhance your online presence. We focus on user experience, aesthetics, and functionality to deliver websites that leave a lasting impression.</p>
      <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
    </div>

    <div class="service service3">
      <i class="ti-light-bulb"></i>
      <h4>MOBILE APPLICATION DEVELOPMENT</h4>
      <p>Stay ahead in the mobile-first world with our cutting-edge mobile app development services. We build intuitive and feature-rich applications for iOS and Android platforms, tailored to meet your specific business requirements.
</p>
      <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
    </div>

    <div class="service service2">
      <i class="ti-money"></i>
      <h4>SOFTWARE DEVELOPMENT</h4>
      <p>From custom software solutions to enterprise-grade applications, our experienced developers are skilled in creating robust and scalable software that streamlines your business processes and drives efficiency.</p>
      <a href="#" class="cta">Read more <span class="ti-angle-right"></span></a>
    </div>
  </div>
  <div class="services-grid">
  <div class="service service2">

      <i class="ti-light-bulb"></i>
      <h4>DIGITAL MARKETING</h4>
      <p>In Digital Marketing segment of our services, we offer Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, Email Marketing, Influencer Marketing etc like procedures to enhance the presence your brand promotion.</p>
      <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
    </div>

    <div class="service service1">
      <i class="ti-bar-chart"></i>
      <h4>GRAPHIC DESGNING</h4>
      <p>It is a method of expressing ideas with the help of visual and textual content. For creating a graphic design, we may take help of text, images or graphics.
</p>
      <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
    </div>

    

    <div class="service service3">
      <i class="ti-money"></i>
      <h4>INDUSTRIAL TRANING</h4>
      <p>In industrial training program we provides the IT and program related knowledge like PHP, My SQL, Mobile app, company internship etc. This program will also provide students with real work experience.
</p>
      <a href="#" class="cta">Read more <span class="ti-angle-right"></span></a>
    </div>
  </div>
</section>

    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#cecece', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt:5,
          mb:5,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
     
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 10 }}>
         About Us
        </Typography>
       
        <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <UnderlinedBox
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: '#fff',
              color:'#000',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form"  sx={{ maxWidth: 400 }}>
  
              <Typography >
              Aham Innovator are passionate about technology and dedicated to delivering IT solutions that drive business success. With a focus on innovation and a commitment to excellence, we are your trusted partner in the digital age.
 
              We are advanced enough with distinctive services such as Website Designing, Web Development, Mobile App Development Graphic Designing, Robotic Services, Website Testing, E-commerce, SEO, Digital Marketing, and so on.
                
              At Aham Innovator, our professionals offer high-quality web customer solutions at an affordable cost.
              We have a massive amount of projects that are relevant to multiple fields and categories.
 
              </Typography>
             
              <Button
               color="secondary"
               variant="contained"
               size="large"
               component="a"
                sx={{ width: '100%' }}
              >
               Read More
              </Button>
            </Box>
          </UnderlinedBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />


          <Box
            component="img"
            src={aboutUs}
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />


        </Grid>
      </Grid>
 
      </Container>
    </Box>

 

<section>

        <div id="btns">
  <div class="btn1" onclick="window.location='#'">
    <span class="icon">
    <i class="fa fa-handshake-o fa-5x" aria-hidden="true"></i>
    </span>
    <h2>Join</h2>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
  <div class="btn1" onclick="window.location='#'">
  <span class="icon">
    <i class="fa fa-book fa-5x" aria-hidden="true"></i>
    </span>
   
    <h2>Books</h2>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
  <div class="btn1" onclick="window.location='#'">
  <span class="icon">
    <i class="fa fa-certificate fa-5x" aria-hidden="true"></i>
 </span>
     
    <h2>Certificate</h2>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
  <div class="btn1" onclick="window.location='#'">
  <span class="icon">
  <i class="fa fa-graduation-cap fa-5x" aria-hidden="true"></i>
     </span>
    <h2>Graduation</h2>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
</section>

    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
  
    <Container component="section"  sx={{
          mt: 2,
          mb: 5,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
    <Typography variant="h4" marked="center" component="h2" sx={{ mb: 10 }}>
    Our Services
        </Typography>
        <div class="wrap">
<Grid container spacing={2}>
<Grid
    item
    xs={12}
    md={4}
    sx={{ display: { md: 'block' }, position: 'relative' }}
  >
      <AnimationOnScroll  animateOnce={false} delay={300} animateIn="animate__flipInX">
  <UnderlinedBox  sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
        color:'#000',
      }}>


<Box component="div" className="tile" >
 <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
 <div class="text">
  <h1>Lorem ipsum.</h1>
  <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
  <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
</Box>
  </UnderlinedBox>
  </AnimationOnScroll>
  </Grid>

  <Grid
    item
    xs={12}
    md={4}
    sx={{ display: { md: 'block' }, position: 'relative' }}
  >
      <AnimationOnScroll  animateOnce={false} delay={300} animateIn="animate__flipInX">
  <UnderlinedBox  sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
        color:'#000',
 
      }}>

<Box component="div" className="tile" >
 <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
 <div class="text">
  <h1>Lorem ipsum.</h1>
  <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
  <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
  </Box>

  </UnderlinedBox>
  </AnimationOnScroll>
  </Grid>

  <Grid
    item
    xs={12}
    md={4}
    sx={{ display: { md: 'block' }, position: 'relative' }}
  >
      <AnimationOnScroll  animateOnce={false} delay={300} animateIn="animate__flipInX">
  <UnderlinedBox  sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
              color:'#000',

      }}>

<Box component="div" className="tile" >
 <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
 <div class="text">
  <h1>Lorem ipsum.</h1>
  <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
  <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
</Box>

  </UnderlinedBox>
  </AnimationOnScroll>
  </Grid>

   <Grid
    item
    xs={12}
    md={4}
    sx={{ display: { md: 'block' }, position: 'relative' }}
  >
      <AnimationOnScroll  animateOnce={false} delay={300} animateIn="animate__flipInX">
  <UnderlinedBox  sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
         color:'#000',
      }}>


 
 <Box component="div" className="tile" >
 <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
 <div class="text">
  <h1>Lorem ipsum.</h1>
  <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
  <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
       
      </Box>

  </UnderlinedBox>
  </AnimationOnScroll>
  </Grid>
  <Grid
    item
    xs={12}
    md={4}
    sx={{ display: { md: 'block' }, position: 'relative' }}
  >
      <AnimationOnScroll  animateOnce={false} delay={300} animateIn="animate__flipInX">
  <UnderlinedBox  sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
              color:'#000',
      }}>

<Box component="div" className="tile" >
 <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
 <div class="text">
  <h1>Lorem ipsum.</h1>
  <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
  <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
</Box>

  </UnderlinedBox>
  </AnimationOnScroll>
  </Grid>
 
</Grid>
</div>
    </Container>
</Box>

<Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
   <Container component="section"  sx={{
          mt: 2,
          mb: 5,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
    <Typography variant="h4" marked="center" component="h2" sx={{ mb: 10 }}>
          How it works
        </Typography>
<Grid container spacing={2}>
  <Grid  item
    xs={12}
    md={6}
    sx={{ display: { md: 'block' }, position: 'relative' }} >
      <AnimationOnScroll  animateOnce={false} delay={200} animateIn="animate__fadeIn" >
    <UnderlinedBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
        color:'#000',
        py: 8,
        px: 3,
      }}
    >
      <Box component="form">
        <Typography variant="h2" component="h2" gutterBottom>
          Receive offers
        </Typography>
        <Typography variant="h5">
          Taste the holidays of the everyday close to home.
        </Typography>
       
      </Box>
    </UnderlinedBox>
    </AnimationOnScroll>
  </Grid>
  <Grid
    item
    xs={12}
    md={6}
    sx={{ display: { md: 'block' }, position: 'relative' }}
  >
      <AnimationOnScroll  animateOnce={false} delay={300} animateIn="animate__fadeIn">
  <UnderlinedBox  sx={{
        display: 'flex',
        justifyContent: 'center',
       bgcolor: '#fff',
              color:'#000',
        py: 8,
        px: 3,
      }}>
 <Box component="form" >
        <Typography variant="h2" component="h2" gutterBottom>
        <AnimationOnScroll animateOnce={false} animateIn="animate__rubberBand">
            <h2>Look what i am doing</h2>
          </AnimationOnScroll>
        </Typography>
        <Typography variant="h5">
          Taste the holidays of the everyday close to home.
        </Typography>
       
      </Box>

  </UnderlinedBox>
  </AnimationOnScroll>
  </Grid>

  <Grid  item
    xs={12}
    md={6}
    sx={{ display: { md: 'block' }, position: 'relative' }} >
      <AnimationOnScroll  animateOnce={false} delay={400} animateIn="animate__fadeIn">
    <UnderlinedBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
              color:'#000',
        py: 8,
        px: 3,
      }}
    >
      <Box component="form">
      <AnimationOnScroll animateOnce={false} delay={500} animateIn="animate__rubberBand">
      <Typography variant="h2" component="h2" gutterBottom>
          Receive offers
        </Typography>
          </AnimationOnScroll>
        
        <Typography variant="h5">
          Taste the holidays of the everyday close to home.
        </Typography>
       
      </Box>
    </UnderlinedBox>
    </AnimationOnScroll>
  </Grid>

  
  <Grid  item
    xs={12}
    md={6}
    sx={{ display: { md: 'block' }, position: 'relative' }} >
    <AnimationOnScroll  animateOnce={false} animateIn="animate__fadeIn">
    <UnderlinedBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
              color:'#000',
        py: 8,
        px: 3,
      }}
    >
      <Box component="form">
        <Typography variant="h2" component="h2" gutterBottom>
          Receive offers
        </Typography>
        <Typography variant="h5">
          Taste the holidays of the everyday close to home.
        </Typography>
       
      </Box>
    
    </UnderlinedBox>
    </AnimationOnScroll> 
  </Grid>
 

 
</Grid>
</Container>
    </Box>


    <Container component="section"  sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
   
<Typography variant="h4" marked="center" component="h2" sx={{ mb: 10 }}>
          How it works Client rr
        </Typography>
        </Container>
 

   <Box sx={{
          mb:5,
          overflow: 'hidden'
        }}>
   

      
        <Slider {...settings}>

        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          
          image="https://picsum.photos/400/200"
          alt="green iguana"
        />

      </CardActionArea>

    
    </Card>

  <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          
          image="https://picsum.photos/400/200"
          alt="green iguana"
        />

      </CardActionArea>
      
    
    </Card>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          
          image="https://picsum.photos/400/200"
          alt="green iguana"
        />

      </CardActionArea>
      
    
    </Card>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
         
          image="https://picsum.photos/400/200"
          alt="green iguana"
        />

      </CardActionArea>
      
    
    </Card>
</Slider>


</Box>
    
    </>
    );
}

export default Home;


