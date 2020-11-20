import React from 'react';
import "./About.css";
import Navibar from './Navbar';
import Testimons from './Testimons';
import Footer from './Footer';

function About(props) {
    return (
        <div>
            <Navibar />
            <div className="container">
                <h1 className=" text-center pb-2 text-uppercase abt-txt">
                <strong>About us</strong>
                </h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img 
                        src="https://cdn4.vectorstock.com/i/1000x1000/27/13/smart-farming-futuristic-technologies-in-farm-vector-26982713.jpg"
                        className="img-fluid w-100" 
                        alt="Responsive image1" 
                        />
                    </div>
                    <div className="col-12 col-md-6">
                    <div id="accordion" className="myaccordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="d-flex align-items-center justify-content-between btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What We Do
                            </button>
                        </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <h3>What We Do</h3>
                            <p>
                            i) Tracking the present farm detail of farmers.
                            <br/>
                            ii) Predict the accurate NPK Quantity.
                            <br/>
                            iii) Suggest the different fertilizers.
                            <br/>
                            iv) Perfect Crop prediction according to seasons and soil types.
                            <br/>
                            v) Gather the different weather reports and show the warnings.

                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Our Missions
                            </button>
                        </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                        <h3>The foremost mission is to make farming as profitable bussiness.</h3>
                            <p>
                                <h5>AND</h5>
                            i) To get the accurate amount of NPK requirement for soil.<br />
                            ii) Provide different chemical fertilizers according to Soil.<br />
                            iii) Weather Reports.<br />
                            iv) Variety of crops to sow as per Soil reports.<br />
                            </p>
                            
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    
                    
                    
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className=" text-center pb-2 text-uppercase meet-team">
                <strong>Meet our team</strong>
                </h3>
                <div className="row">
                <div className="col-12 col-md-4">
                <div className="card my-card">
                <img 
                className="d-block card-img-top"
                src={process.env.PUBLIC_URL + "bg2.jpeg"}
                alt="card-image1" />
                <div className="card-body">
                    <p className="card-text">RIYAJ PATEL</p>
                </div>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <div className="card my-card">
                <img className="d-block card-img-top"
                src={process.env.PUBLIC_URL + "bg2.jpeg"}
                alt="card-image11" />
                <div className="card-body">
                    <p className="card-text">SAHIL PARASWAL</p>
                </div>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <div className="card my-card">
                <img className="d-block card-img-top"
                src={process.env.PUBLIC_URL + "bg2.jpeg"}
                alt="card-image111" />
                <div className="card-body">
                    <p className="card-text">SANSKAR CHANDAK</p>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div className="pt-5">
            <Testimons />
            </div>
            <Footer />
            
         
            
            
        </div>
    );
}

export default About;