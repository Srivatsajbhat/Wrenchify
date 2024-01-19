import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer-body'>
        <footer>
            <div class="footer-wrapper">
                <div class="footer-section">
                    <div class="footer-subscribe">
                        <h2>
                            WrenchiFy® 
                        </h2>
                        {/* <div class="input-box">
                            <input type="email" placeholder="Email Address" />
                            <button>
                                <svg width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.002 11.001H0.501953M40.002 11.001L30.002 1.00098M40.002 11.001L30.002 21.001" stroke="#0E100F"></path>
                                </svg>
                            </button>
                        </div> */}
                    </div>
                    <nav class="footer-nav">
                        <div>
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>WrenchiFy</h3>
                            <ul>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Subscriptions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Connect</h3>
                            <ul>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Linkedin</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div class="footer-copyright">
                    <p>©2023 WrenchiFy, Inc. All rights reserved.</p>
                    <p>Privacy Policy.</p>
                    <p>Terms of Use.</p>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer
