import React from 'react';
import { NavLink } from 'react-router-dom';
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
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
 
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + 'bg3.jpg'} alt="First slide" />
      <div className="carousel-caption">
      <h2 className="animated an1s">Require <span>Fertilizers</span></h2>
      <h3 className="animated an2s">The exact amount of fertilizers that your crop needs</h3>
      <p className="animated an3s"><NavLink className="btn-primary" to="/service">Know More</NavLink></p>
      
      </div>
      </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + 'bg5.jpg'} alt="Second slide"/>
      <div className="carousel-caption">
      <h2 className="animated an1s" >Accurate <span>Weather</span></h2>
      <h3 className="animated an2s	" >Weather conditions that you need know</h3>
      <p className="animated an3s"><NavLink className="btn-primary" to="/service">Know More</NavLink></p>
     
      </div>
      </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + 'car7.jpg'} alt="Third slide"/>
     <div className="carousel-caption">
      <h2 className="animated an1s" >Know when <span>Pest</span></h2>
      <h3 className="animated an2s" >may attack on your crop</h3>
      <p className="animated an3s"><NavLink className="btn-primary" to="/service">Know More</NavLink></p>
      </div>
      </div>
      <div className="carousel-item">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + 'bg4.jpg'} alt="Third slide"/>
     <div className="carousel-caption">
      <h2 className="animated an1s" >When and Which <span>Crop</span></h2>
      <h3 className="animated an2s" >can be planted in your farm</h3>
      <p className="animated an3s"><NavLink className="btn-primary" to="/service">Know More</NavLink></p>
      </div>
      </div>
      
      </div>
    </div>
  </div>
</div>
        
    );
};



export default Carousel;