import React from 'react';
import "./Testimons.css";

function Testimons(props) {
    return (
        <div className="testimons pt-2">
        <div className="container">
          <div className="row ">
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn2JM0AFcW9_buBAmlQfWv2tACkl_AyUltg&usqp=CAU"
                        alt="First sde"
                      />
                      <p className="m-0 ">
                      “This is an excellent app for novice farmers like me. 
                      I have hugely benefited from the CropPlan and Agri News feature. 
                      Thanks to Acro-Xf for bringing such a useful App to young and new 
                      generation who wants to come back to their roots.” 
                      </p>
                    </div>
                    <h5 className="mt-1 mb-0">
                      <strong className="text-warning text-uppercase">
                      Damalapati Gopi
                      </strong>
                    </h5>
                    <h6 className="text-dark m-0">Farmer ( Madhya Pradesh )</h6>
                  </div>
                  <div className="carousel-item text-center">
                    <div className="d-flex img-box border  m-auto">
                      <img
                        className="d-block w-50 rounded-circle"
                        src="data:image/jpeg;base64,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"
                        alt="First slide"
                      />
                      <p className="m-0  ">
                      “Previously, 
                      I used to hesitate before applying any fertilizer to the 
                      farm as I was not sure about which fertilizer to use amd
                      in what proportion. Also, with the help of CropPlan, 
                      I have been able to increase my yield and
                       at the same time, I have saved a lot of money.” 
                      </p>
                    </div>
                    <h5 className="mt-1 mb-0">
                      <strong className="text-warning text-uppercase">
                      V. Srinivasa Reddy
                      </strong>
                    </h5>
                    <h6 className="text-dark m-0">Farmer Indore</h6>
                  </div>
                  <div className="carousel-item text-center">
                    <div className=" d-flex img-box border m-auto">
                      <img
                        className="d-block w-50 rounded-circle"
                        src="data:image/jpeg;base64,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"
                        alt="First sli"
                      />
                      <p className="m-0 ">
                      “I like the Farm Voice feature, it helps me to connect with our 
                      farmer brothers from across the county to seek and
                      provide help of all the farming-related issues and
                       share success stories. Not only this,
                       but it also gives an Agri expert opinion for your queries.” 
                      </p>
                    </div>
                    <h5 className="mt-1 mb-0">
                      <strong className="text-warning text-uppercase">
                      Nandish
                      </strong>
                    </h5>
                    <h6 className="text-dark m-0">Farmer Uttar Pardesh</h6>
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