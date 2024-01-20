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
                    </div>
                    <nav class="footer-nav">
                        <div>
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/about">About</a></li>
                                <li><a href="/service">Services</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>WrenchiFy</h3>
                            <ul>
                                <li><a href="#">Community</a></li>
                                <li><a href="/subscription">Subscriptions</a></li>
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
