import React from 'react';
import './about.css';
import missionImage from '../../Images/about-main.jpeg'; // Import your image file here

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutLeft">
          <h2>All About WrenchiFy</h2>
        </div>
        <div className="aboutRight">
          <h2>Providing Top-Notch Garage Services</h2>
          <p>Quality repairs, reliable maintenance, and exceptional customer service.</p>
        </div>
      </div>
      <div className='aboutcentre'>
      <h1>About US</h1>
      <p>Wrenchify is a Platform that connects people who need automotive services with trusted mechanics in their area. Our user-friendly platform allows users to browse mechanic profiles, request quotes, and communicate directly with mechanics. We prioritize transparency and trust by encouraging honest reviews of mechanic services. Our mechanics are highly skilled and undergo a rigorous screening process to ensure top-notch service. We are committed to providing a reliable, hassle-free experience for our users.</p>
      </div>
      <div className="ourMission">
        <h2>Our Mission</h2>
        <div className="missionContent">
          <div className="missionText">
            <p>"At our core, we are driven by a singular mission: to revolutionize the automotive service industry by seamlessly connecting drivers with reliable and trustworthy service providers. Our commitment lies in ensuring the safety, convenience, and peace of mind of every individual who entrusts their vehicle to our platform. We strive to achieve this by leveraging cutting-edge technology, fostering partnerships with reputable garages, and upholding the highest standards of customer service. Through our dedication to excellence and innovation, we aim to redefine the automotive service experience, empowering drivers to navigate their journeys with confidence and assurance, knowing that we are here to support them every step of the way."</p>
          </div>
          <div className="missionImageContainer">
            <img src={missionImage} alt="Mission Image" className="missionImage" />
          </div>
        </div>
      </div>
      <div className="ourApproach">
      <h2>Our Approach</h2>
        <div className="approachContent">
          <div className="approachImageContainer">
            <img src={missionImage} alt="Approach Image" className="approachImage" />
          </div>
          <div className="approachText">
          
            <p>Our approach encompasses a comprehensive strategy that prioritizes customer satisfaction, technological innovation, and industry partnerships. Through meticulous attention to detail and a commitment to excellence, we strive to create a seamless and user-friendly platform that meets the diverse needs of drivers. By leveraging advanced technologies, such as artificial intelligence and data analytics, we enhance the efficiency of our services while ensuring accuracy and reliability. Additionally, we prioritize building strong relationships with reputable garages and service providers, fostering trust and transparency in every interaction. With this multifaceted approach, we aim to redefine the automotive service landscape, delivering unparalleled value and convenience to our customers.</p>
          </div>
        </div>
      </div>
      <div className="ourvision">
        <h2>Our Vision</h2>
        <div className="visionContent">
          <div className="visionText">
            <p>"At our core, we are driven by a singular mission: to revolutionize the automotive service industry by seamlessly connecting drivers with reliable and trustworthy service providers. Our commitment lies in ensuring the safety, convenience, and peace of mind of every individual who entrusts their vehicle to our platform. We strive to achieve this by leveraging cutting-edge technology, fostering partnerships with reputable garages, and upholding the highest standards of customer service. Through our dedication to excellence and innovation, we aim to redefine the automotive service experience, empowering drivers to navigate their journeys with confidence and assurance, knowing that we are here to support them every step of the way."</p>
          </div>
          <div className="visionImageContainer">
            <img src={missionImage} alt="Mission Image" className="visionImage" />
          </div>
        </div>
      </div>
      <div className="achievements">
  <h2>Our Achievements</h2>
  <div className="achievementContainer">
    <div className="circleContainer">
      <div className="circle">
        <h3>Ratings</h3>
        <p>100</p>
      </div>
      <div className="circle">
        <h3>Page Visits</h3>
        <p>200</p>
      </div>
      <div className="circle">
        <h3>Customers Reached</h3>
        <p>300</p>
      </div>
      <div className="circle">
        <h3>Total Garages</h3>
        <p>400</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default About;
