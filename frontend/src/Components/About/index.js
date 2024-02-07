import React from 'react'
import './about.css'
import aboutMain from '../../Images/about-main.jpeg'

function About() {
  return (
    <div className='about-main'>
      <div className='about-container'>
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="about-wrapper">
        <div className='tagline'>
          <h3>"Revitalize Your Ride,</h3>
          <h4>Elivate Your Experience:</h4>
          <h4>Unlesh Excellence with Every Maintenence Stop."</h4>
        </div>
        <div className='about-main-img'>
          <img src={aboutMain} alt='about-main-img' />
        </div>
      </div>
      </div>
      <div className="content">
        <div className="about-content">
          <h3>
          Wrenchify revolutionizes automotive services by directly linking users with reputable mechanics. Our platform boasts intuitive profiles, enabling users to browse mechanics' expertise and reviews effortlessly. Requesting quotes is simplified, with users receiving competitive offers swiftly. Direct communication channels facilitate seamless interaction between users and mechanics, ensuring clarity throughout the service process.
          Mechanics in our network are rigorously vetted, guaranteeing expertise and professionalism. Transparent reviews contribute to our community's trust and accountability. At Wrenchify, we prioritize reliability, striving to deliver hassle-free automotive assistance. With our user-centric approach, finding trustworthy mechanics and securing quality service has never been easier.
          </h3>
        </div>
        <div className="about-side">
          <div className="about-side-card">
            <h3>Ratings</h3>
            <h4>3.5</h4>
          </div>
          <div className="about-side-card">
            <h3>Page Visits</h3>
            <h4>200+</h4>
          </div>
          <div className="about-side-card">
            <h3>Customers Reached</h3>
            <h4>1000+</h4>
          </div>
          <div className="about-side-card">
            <h3>Total Garages</h3>
            <h4>50+</h4>
          </div>
        </div>
       </div> 
    </div>
  )
}

export default About
