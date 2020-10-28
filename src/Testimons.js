import React from 'react';
import "./Testimons.css";

function Testimons(props) {
    return (
        <div className="testimons mt-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 offset-1 col-10 ">
              <h2 className="text-center pb-2 text-uppercase text-dark">
                <strong>Testimonials</strong>
              </h2>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner mt-4">
                  <div className="carousel-item text-center active">
                    <div className="d-flex img-box  border  m-auto">
                      <img
                        className="d-block w-50 rounded-circle"
                        src="http://nicesnippets.com/demo/profile-1.jpg"
                        alt="First slide"
                      />
                      <p className="m-0 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eu sem tempor, varius quam at, luctus dui. Mauris
                        magna metus, dapibus nec turpis vel, semper malesuada
                        ante. Idac bibendum scelerisque non non purus.
                        Suspendisse varius nibh non aliquet.
                      </p>
                    </div>
                    <h5 className="mt-1 mb-0">
                      <strong className="text-warning text-uppercase">
                        Paul Mitchel
                      </strong>
                    </h5>
                    <h6 className="text-dark m-0">Web Developer</h6>
                  </div>
                  <div className="carousel-item text-center">
                    <div className="d-flex img-box border  m-auto">
                      <img
                        className="d-block w-50 rounded-circle"
                        src="http://nicesnippets.com/demo/profile-3.jpg"
                        alt="First slide"
                      />
                      <p className="m-0  ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eu sem tempor, varius quam at, luctus dui. Mauris
                        magna metus, dapibus nec turpis vel, semper malesuada
                        ante. Idac bibendum scelerisque non non purus.
                        Suspendisse varius nibh non aliquet.
                      </p>
                    </div>
                    <h5 className="mt-1 mb-0">
                      <strong className="text-warning text-uppercase">
                        Steve Fonsi
                      </strong>
                    </h5>
                    <h6 className="text-dark m-0">Web Designer</h6>
                  </div>
                  <div className="carousel-item text-center">
                    <div className=" d-flex img-box border m-auto">
                      <img
                        className="d-block w-50 rounded-circle"
                        src="http://nicesnippets.com/demo/profile-7.jpg"
                        alt="First slide"
                      />
                      <p className="m-0 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eu sem tempor, varius quam at, luctus dui. Mauris
                        magna metus, dapibus nec turpis vel, semper malesuada
                        ante. Idac bibendum scelerisque non non purus.
                        Suspendisse varius nibh non aliquet.
                      </p>
                    </div>
                    <h5 className="mt-1 mb-0">
                      <strong className="text-warning text-uppercase">
                        Daniel vebar
                      </strong>
                    </h5>
                    <h6 className="text-dark m-0">Seo Analyst</h6>
                  </div>
                </div>
                {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Testimons;