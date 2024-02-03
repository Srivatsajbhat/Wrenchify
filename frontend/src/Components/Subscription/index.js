import React from 'react'
import './subs.css'

function Subsciption() {
  return (
    <div>
      <div className='subscription'>
        <h1 className='sub-head'>Subscribscription  Plans</h1>
        <h3>Our subscription plans are designed to fit all types of users, whether you are a vehicle owner or a garage owner. Choose the plan that best suits your needs and enjoy the benefits of our platform.</h3>
        <div className='sub-container container'>
          <div class="container">
            <div class="card_box">
              {/* <span>
              </span> */}
              <h3 className='plan-head'>Normal</h3>
              <h4></h4>
            </div>
          </div>
          <div class="container">
            <div class="card_box">
              <span>
              </span>
              <h3 className='plan-head'>Modrate</h3>
              <h4></h4>
            </div>
          </div>
          <div class="container">
            <div class="card_box">
              <span>
              </span>
              <h3 className='plan-head'>Pro</h3>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subsciption
