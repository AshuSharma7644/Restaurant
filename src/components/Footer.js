import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='main-footer'>
        <div className='inner-footer'>

            <div className='footer-subscribe'>
            <div className='inner-subscribe'>
                    <div className='footer-logo'>
                        <img src='./images/logo-main.png'/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='newsletter'>
                        <h4>Subscribe To Our Newsletter</h4>
                        <form id='form_1'>
                        <div className='form-input'>
                            <input type='text' className='footer-input' placeholder='Enter Your Email'/>
                        </div>
                        <div className='form-button'>
                        <button className='inner-button'>Subscribe</button>

                        </div>
                            
                        </form>
                    </div>
            </div>

            </div>



            <div className='footer-menu'>
                    <div className='inner-footer-menu'>
                    <div className='menu_footer'>
                        <h5>Contact</h5>
                        <ul>
                            <li>
                            <i className="fa fa-solid fa-location-dot"></i>
                            <p>1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
                            </li>
                            <li>
                            <i className="fa-solid fa-phone"></i>
                            <p>987-654-3210</p>
                            </li>
                            <li>
                            <i className="fa-solid fa-envelope"></i>
                            <p>info@example.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className='menu_footer'>
                        <h5>Our Links</h5>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Team</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='menu_footer'>
                    <h5>Our Services</h5>
                        <ul>
                            <li>Strategy & Research</li>
                            <li>Fast Delivery</li>
                            <li>Seat Reservation</li>
                            <li>Pickup in Store</li>
                            <li>Our Menu</li>
                        </ul>
                    </div>
                    <div className='menu_footer'>
                    <h5>Help Center</h5>
                    <ul>
                            <li>FAQ</li>
                            <li>Shop</li>
                            <li>Category Filter</li>
                            <li>Testimonials</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    </div>
            </div>





        </div>

        </div>
    </>
  )
}

export default Footer