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
                        src={process.env.PUBLIC_URL + 'car2.jpg'}
                        className="img-fluid w-100" 
                        alt="Responsive image" 
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
                                                            Exceptional Web Solutions
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur
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
                        <h3>Our Missions</h3>
                            <p>
                                    Exceptional Web Solutions
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur
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
                src="http://nicesnippets.com/demo/profile-1.jpg"
                alt="card-image" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <div className="card my-card">
                <img className="d-block card-img-top"
                src="http://nicesnippets.com/demo/profile-1.jpg"
                alt="card-image" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <div className="card my-card">
                <img className="d-block card-img-top"
                src="http://nicesnippets.com/demo/profile-1.jpg"
                alt="card-image" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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