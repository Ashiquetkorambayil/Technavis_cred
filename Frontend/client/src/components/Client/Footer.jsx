import React from 'react'
import Logo from '../Images/technavis_logo.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
        <div className="container-fluid bg-black">
            <div className="container">
                <div className="row p-4">
                    <div className="col-12 col-lg-4 py-3">
                        <img className='footer-logo' src={Logo} alt="" />
                    </div>
                    <div className="col-12 col-lg-4 text-light montserrat-400 " style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                       <div>
                       <h2>Quick links</h2>
                        <ul style={{listStyle:'none'}}>
                           <Link style={{textDecoration:'none'}} to={'/'}> <li>Home</li></Link>
                           <Link style={{textDecoration:'none'}} to={'/aboutus'}> <li>About us</li></Link>
                           <Link style={{textDecoration:'none'}} to={'/menu'}> <li>Menu</li></Link>
                            
                        </ul>
                       </div>
                        
                    </div>
                    <div className="col-12 col-lg-4">
                   <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.47826752331!2d-3.8443489207007935!3d40.43809861120072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sin!4v1713261916980!5m2!1sen!2sin" width={"100%"} height={'100%'} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer