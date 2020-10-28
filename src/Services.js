import React from 'react';
import Footer from './Footer';
import { Container, Row } from "react-bootstrap";
import Navibar from './Navbar';
import "./Services.css";

function Services(props) {
    return (
        <> 
            <Navibar />
            <Container>
            <h1 className=" text-center pb-2 text-uppercase serv-txt">
                <strong>Services</strong>
            </h1>
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
              src={process.env.PUBLIC_URL + "car1.jpg"}
              className="img-fluid img-thumbnail"
              alt="imags"
            />
          </div>
        </Row>
        </Container>
            <div className="container">
            <h1 className=" text-center pb-2 text-uppercase">
            <small className="text-capitalize">Our Focus</small>
            <br />
                <strong>What we do</strong>
                </h1>
                <div className="row">
                <div className="col-12 col-md-4">
                <div id="f1_container">
                    <div id="f1_card" className="shadow">
                    <div className="front face">
                   
                        <img src={process.env.PUBLIC_URL + 'fertilizer.svg'}
                        alt="Responsive ima 1"  />
                        <h6>Fertilizers Recommend</h6>
                    </div>
                    <div className="back face center">
                        <p>This is nice for exposing more information about an image.</p>
                        <p>Any content can go here.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                <div id="f1_container">
                    <div id="f1_card" className="shadow">
                    <div className="front face">
                    <img src={process.env.PUBLIC_URL + 'smart.png'}
                        alt="Responsive ima 2"  />
                        <h6>Fertilizers Recommend</h6>
                    </div>
                    <div className="back face center">
                        <p>This is nice for exposing more information about an image.</p>
                        <p>Any content can go here.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                <div id="f1_container">
                    <div id="f1_card" className="shadow">
                    <div className="front face">
                    <img src={process.env.PUBLIC_URL + 'cloudy.svg'}
                        alt="Responsive ima 3"  />
                        <h6>Fertilizers Recommend</h6>
                    </div>
                    <div className="back face center">
                        <p>This is nice for exposing more information about an image.</p>
                        <p>Any content can go here.</p>
                    </div>
                    </div>
                    </div>
                </div>
               
                </div>
                <div className="row">
                <div className="col-12 col-md-4">
                <div id="f1_container">
                    <div id="f1_card" className="shadow">
                    <div className="front face">
                    <img src={process.env.PUBLIC_URL + 'agriculture.svg'}
                        alt="Responsive ima 4"  />
                        <h6>Fertilizers Recommend</h6>                    </div>
                    <div className="back face center">
                        <p>This is nice for exposing more information about an image.</p>
                        <p>Any content can go here.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                <div id="f1_container">
                    <div id="f1_card" className="shadow">
                    <div className="front face">
                    <img src={process.env.PUBLIC_URL + 'pesticide.svg'}
                        alt="Responsive ima 5"  />
                        <h6>Fertilizers Recommend</h6>                    </div>
                    <div className="back face center">
                        <p>This is nice for exposing more information about an image.</p>
                        <p>Any content can go here.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                <div id="f1_container">
                    <div id="f1_card" className="shadow">
                    <div className="front face">
                    <img src={process.env.PUBLIC_URL + 'location.png'}
                        alt="Responsive ima 6"  />
                        <h6>Fertilizers Recommend</h6>                    </div>
                    <div className="back face center">
                        <p>This is nice for exposing more information about an image.</p>
                        <p>Any content can go here.</p>
                    </div>
                    </div>
                    </div>
                </div>
               
                </div>                 
            </div>
            <Footer />
           
        </>
    );
}

export default Services;