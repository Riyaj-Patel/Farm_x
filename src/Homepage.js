import React from "react";
import { Button } from "@material-ui/core";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import "./Homepage.css";
import Navibar from "./Navbar";
import Testimons from "./Testimons";



function Homepage() {
  
  return (
    <>   
      <Navibar />
      <Carousel />
      <Container>
        <Row className="row-content align-items-center r1">
          <div className="col-12 col-sm-8 col-md-8">
            <h1>Acro-XF</h1>
            <p>
              Acro-XF is the best Agriculture app for Indian farmers which helps
              them take critical decisions in their farming business to increase
              profitability. It harnesses the state of the art technologies like
              Global positioning, Satellite imagery, big data analytics, machine
              learning and image analytics to usher the farmers into the era of
              digital farming.
            </p>
          </div>
          <div className="col col-sm col-md">
            <img
              src={process.env.PUBLIC_URL + "bg2.jpeg"}
              className="img-fluid img-thumbnail"
              alt="imags"
            />
          </div>
        </Row>
        <Row>
          <div className="col-12">
          <h1>Our Specialities</h1>
          </div>
          
          
        <div className="col-md-4 mt-4">
    		    <div className="card profile-card-5">
    		        <div className="card-img-block">
                    <img className="card-img-top" 
                  src={process.env.PUBLIC_URL + 'fertilizer.svg'}
                  alt="Caimage" />
    		        </div>
                    <div className="card-body pt-0">
                    <h5 className="card-title text-center">Fertilizer Recommendation</h5>
                   
                    <div className="text-center">
                    <Button 
                    variant="contained" 
                    color="primary"
                    >
                    <NavLink className="btn-primary" to="/service">Read More</NavLink>  
                    </Button>
                    </div>
                  </div>
                </div>
    		</div>
        <div className="col-md-4 mt-4">
    		    <div className="card profile-card-5">
    		        <div className="card-img-block">
                    <img className="card-img-top" 
                     src={process.env.PUBLIC_URL + 'smart.png'} 
                    alt="Card imag" />
    		        </div>
                    <div className="card-body pt-0">
                    <h5 className="card-title text-center">Crop Guidence</h5>
                    
                    <div className="text-center">
                    <Button 
                    variant="contained" 
                    color="primary"
                    >
                    <NavLink className="btn-primary" to="/service">Read More</NavLink>  
                    </Button>
                    </div>
                  </div>
                </div>
    		</div>
        <div className="col-md-4 mt-4">
    		    <div className="card profile-card-5">
    		        <div className="card-img-block">
                    <img className="card-img-top" 
                    src={process.env.PUBLIC_URL + 'pesticide.svg'} 
                    alt="Card img" />
    		        </div>
                    <div className="card-body pt-0">
                    <h5 className="card-title text-center">Pest Attack Alert</h5>
                    
                    <div className="text-center">
                    <Button 
                    variant="contained" 
                    color="primary"
                    >
                    <NavLink className="btn-primary" to="/service">Read More</NavLink>  
                    </Button>
                    </div>
                  </div>
                </div>
                
    		</div>
        </Row>
        
        <Testimons />
        
      </Container>
      

      <Footer />
    </>
  );
}

export default Homepage;
