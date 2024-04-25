import React from 'react'
import Nav from './nav'
import Footer from './Footer'
import Image from '../Images/about us.jpg'
function Aboutus() {
  return (
    <div className='bg-light'>
        <Nav/>
        <div className="container-fluid banner-2">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-light my-4 montserrat-600' style={{textAlign:'center'}}>ABOUT US</h1>
                </div>
            </div>
        </div>
        <div className="container-fluid banner-4">
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 col-lg-5">
                        <img style={{width:'100%', height:'100%'}} src={Image} alt="" />
                    </div>
                    <div className="col-12 col-lg-7">
                        <h1 className='montserrat-400'>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ex velit. Nulla ullamcorper tempor ornare. Nam cursus lectus in sem blandit, eget hendrerit eros vestibulum. Nam tempus orci non viverra molestie. Aenean auctor metus risus, id vehicula leo aliquam id. Vivamus dignissim sagittis rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed sapien auctor, accumsan ipsum nec, faucibus justo. Maecenas eu maximus neque, quis semper leo. Nam tincidunt eu magna at dignissim. Vestibulum condimentum, tortor eget euismod aliquet, odio orci semper est, eget scelerisque nisl nulla a libero.

Vivamus molestie a nulla et efficitur. Aliquam euismod, eros sed laoreet cursus, augue diam sollicitudin leo, id ullamcorper ex tortor eu lacus. Maecenas semper metus tortor, vel gravida massa gravida ac. Donec in congue risus. Nam mollis blandit feugiat. Integer vel faucibus massa, ut tincidunt diam. Sed rhoncus dolor vitae sapien faucibus, a facilisis tortor elementum. Nam orci libero, gravida quis nulla eget, consequat aliquam ex. Etiam sit amet mollis erat. Vivamus ipsum ante, efficitur non egestas sollicitudin, varius eleifend tortor. Donec feugiat consequat ipsum, non volutpat diam blandit a. Vivamus rhoncus sodales ullamcorper. Sed vehicula vitae sapien at dictum.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Aboutus