import React from "react";
import { Container, Row } from "react-bootstrap";
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
              src={process.env.PUBLIC_URL + "car1.jpg"}
              className="img-fluid img-thumbnail"
              alt="imags"
            />
          </div>
        </Row>
        <Testimons />
      </Container>
      

      <Footer />
    </>
  );
}

export default Homepage;
