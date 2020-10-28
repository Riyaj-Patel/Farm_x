import React from 'react';
import './Carousel.css';


const Carousel = props => {
    return (
        <div>
<div className="row justify-content-md-center">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + 'car1.jpg'} alt="First slide" />
      <div class="carousel-caption">
      <h2 className="animated an1s">WE are 1 <span>Creative</span></h2>
      <h3 className="animated an2s">Web design and Development</h3>
      <p className="animated an3s"><a href="#" >Know More</a></p>
      
      </div>
      </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + 'car2.jpg'} alt="Second slide"/>
      <div class="carousel-caption">
      <h2 className="animated an1s" >WE are 2 <span>Creative</span></h2>
      <h3 className="animated an2s	" >Web design and Development</h3>
      <p className="animated an3s"><a href="#" >Know More</a></p>
     
      </div>
      </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + 'car3.jpg'} alt="Third slide"/>
     <div class="carousel-caption">
      <h2 className="animated an1s" >WE are 3 <span>Creative</span></h2>
      <h3 className="animated an2s" >Web design and Development</h3>
      <p className="animated an3s"><a href="#" >Know More</a></p>
      </div>
      </div>
      </div>
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
        
    );
};

Carousel.propTypes = {
    
};

export default Carousel;