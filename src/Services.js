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
            The proposed system is “ACRO-XF”. The user only has to fill a farm health report to the web
            through his Smartphone. With the help of soil test report we will find out the requirement of
            different nutrients present in the soil. These identification will help us to determine the most
            specific fertilizers and their amounts that should be spread in the crops. This will help us to
            reduce the extra amount of chemicals in crop and will also help to reduce the total farming
            expenditures. Weather plays an important role in agricultural production. It has a profound
            influence on crop growth, development and yields; on the incidence of pests and diseases; on
            water needs; and on fertilizer requirements. So we’ll provide accurate prediction of Weather
            warnings. We will Help the user to Select the type of seed according to his crop requirement
            and his weather conditions, With the help of the soil reports and weather conditions we will
            suggest the most suitable type of seed which can eve be a hybrid. We will Help the user to
            Select the Vegetables to be grown in between the empty period of kharif and rabi season.
            Usually the field is left empty during this season.

            </p>
          </div>
          <div className="col col-sm col-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIuPm8zNLJ9MtJfwtujc0XCRmy2mcBeF-tw&usqp=CAU"
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
                        <p>With the help of soil test report we will find out the
                            requirement of different nutrients present in the soil.
                            These identification will help us to determine the most
                            specific fertilizers and their amounts that should be spread
                            in the crops.
                            </p>
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
                        <h6>Analysis of Yield</h6>
                    </div>
                    <div className="back face center">
                        <p>To predict the yield accprding to farming activities</p>
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
                        <h6>Weather Prediction</h6>
                    </div>
                    <div className="back face center">
                        <p>For optimal productivity at a given
                        location, crops and cropping practices must be such that while
                        their cardinal phased weather requirements match the temporal
                        march of the relevant weather element(s), endemic periods of
                        pests, diseases and hazardous weather are avoided. </p>
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
                        <h6>Crop Recommend</h6>                    </div>
                    <div className="back face center">
                        <p>We will Help the user to Select the Vegetables to be grown
                        in between the empty period of kharif and rabi season.
                        Usually the filed is left empty during this season. This time
                        can be use to enhance the fertility of soil in a natural ways
                        by planting crops that can help in it</p>
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
                        <h6>Minimal Pest Attack Alert</h6>                    </div>
                    <div className="back face center">
                        <p>Pest and Weed will reduce the production So it
                        is necessary to control weed and pest before
                        they ruin the crop.
                        • With the help of ML we can predict the pest
                        and weed attack on crop.
                      </p>
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
                        <h6>Interface Connectivity</h6>                    </div>
                    <div className="back face center">
                        <p>•System that provides farmers an
                            interface to sell their produce, and
                            connect with the buyers all over
                            India o Simple interface that
                            works on mobile.
                            </p>
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