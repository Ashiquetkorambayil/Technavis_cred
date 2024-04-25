import React from 'react'
import Logo from '../Images/technavis_logo.png'
import {Link} from 'react-router-dom'
function SideNav() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-3 side-nav" style={{width:'15%'}}>
                  <div className="sn1section mt-3">
                        <img className='logo' src={Logo} alt="" />
                  </div>
                  <div className='sn2section mt-5'>
                    <ul className='montserrat-400'  style={{listStyle:'none', cursor:'pointer'}}>
                        
                       {/* <Link style={{textDecoration:'none'}} to='/categories'><li className='py-3 text-light'>DASHBORD</li></Link>  */}
                       <Link style={{textDecoration:'none'}} to='/categories'><li className='py-3 text-light'>CATEGORIES</li></Link> 
                       <Link style={{textDecoration:'none'}} to='/dishes'><li className='py-3 text-light'>ITEMS</li></Link> 
                       <Link style={{textDecoration:'none'}} to='/'><li className='py-3 text-light'>To client side</li></Link> 
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideNav