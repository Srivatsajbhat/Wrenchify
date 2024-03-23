import React, { useState, useEffect } from 'react';
import './service.css';
import sc1 from '../../Images/Screenshot (90).png';
import sc2 from '../../Images/Screenshot (91).png';
import sc3 from '../../Images/Screenshot (92).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCar, 
  faTools, 
  faTachometerAlt, 
  faWrench, 
  faBolt, 
  faBatteryFull, 
  faMicrochip, 
  faGasPump, 
  faShieldAlt ,
  faClock, 
  faMapMarker, 
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

function Serv() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowData = [
    { image: sc1, text: 'Slide 1' },
    { image: sc2, text: 'Slide 2' },
    { image: sc3, text: 'Slide 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideshowData.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slideshowData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>

      <div className="services-container" >
        
        <div className="left-container">
          <h1>Assurances:</h1>
          <div className='paragraph'><p>
            Explore the Range of Guaranteed Services Commonly Offered Through Our
            Extensive Network of Affiliated Garages.
          </p>
          </div>
          <div className="guarantee-icons">
            <div className="guarantee-icon">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" />
              <p>Quality Guarantee</p>
            </div>
            <div className="guarantee-icon">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" />
              <p>Customer Satisfaction Guarantee</p>
            </div>
            <div className="guarantee-icon">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" />
              <p>Transparent Pricing Guarantee</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <h1>Upcoming Enhancements:</h1>
          <div className="slideshow-container">
            {slideshowData.map((turn, index) => (
              <div
                key={index}
                className={`turn ${currentSlide === index ? 'active' : ''}`}
              >
                <img src={turn.image} alt={turn.text} />
              </div>
            ))}
          </div>
          <div className="slide-indicator">
            {slideshowData.map((_, index) => (
              <input
                key={index}
                type="radio"
                checked={currentSlide === index}
                onChange={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="service-offer">
        <h2>Services We Offer:</h2>
        <div className="service-icons">
          <div className="service-row">
            <div className="service-item">
              <FontAwesomeIcon icon={faCar} size="2x" />
              <p>Oil Change</p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faTools} size="2x" />
              <p>Brake Repair</p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
              <p>Tire Service</p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faWrench} size="2x" />
              <p>Engine Tune-Ups</p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-item">
              <FontAwesomeIcon icon={faBolt} size="2x" />
              <p>Suspension Repair</p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faBatteryFull} size="2x" />
              <p>Battery Service</p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faMicrochip} size="2x" />
              <p>Diagnostic Service</p>
            </div>
            <div className="service-item">
              <FontAwesomeIcon icon={faGasPump} size="2x" />
              <p>Fuel Maintenance</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="additional-services-header">Why Choose WrenchiFy?</h2>
      <div className="additional-services">
        <div className="additional-service-item">
          <div className="circle-icon">
            <FontAwesomeIcon icon={faClock} size="2x" />
          </div>
          <div className="description">
            <p>24/7 on-spot Service</p>
            <p>Our services are available round-the-clock, ensuring assistance whenever you need it</p>
          </div>
        </div>
        <div className="additional-service-item">
          <div className="circle-icon">
            <FontAwesomeIcon icon={faMapMarker} size="2x" />
          </div>
          <div className="description">
            <p>Local garage showcase</p>
            <p>Explore our local garage showcase to discover nearby automotive service providers.</p>
          </div>
        </div>
        <div className="additional-service-item">
          <div className="circle-icon">
            <FontAwesomeIcon icon={faCar} size="2x" />
          </div>
          <div className="description">
            <p>Vehicle retrieval</p>
            <p>We offer convenient vehicle pickup from your designated location.</p>
          </div>
        </div>
        <div className="additional-service-item">
          <div className="circle-icon">
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
          </div>
          <div className="description">
            <p>Emergency Roadside Assistance</p>
            <p>Get instant roadside assistance for emergencies like towing, jump-starts, and tire changes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serv;
