import React, { useEffect, useState } from 'react';
import Nav from './nav';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';

function Menu() {
    const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
    const [dishes, setDishes] = useState([]);
    const [search, setSeacrh] = useState('')
    const [getCategories, setGetCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log(search,"search")
        
            try {
                const response = await axios.get(`${backendUrl}/admin/getdishes/?search=${search}`);
                const data = response.data;
                setDishes(data);
                console.log(data,"hellooo")
            } catch (error) {
                console.log(error);
            }
        };
        const fetch = async()=>{
            try {
                const response = await axios.get(`${backendUrl}/admin/getcategories`);
                const data = response.data;
                setGetCategories(data);
               
              } catch (err) {
                console.log(err);
              }
        }
        fetch()
        fetchData();
    }, [search, backendUrl]);
//  console.log(search,'hello')
    const redirectToWhatsApp = (order) => {
        const phoneNumber = '+919778164782'; 
        const message = `Hi, I'd like to order ${order.dishes}  ₹ ${order.price}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };
  return (
    <div className='bg-light'>
        <Nav/>
        <div className="container-fluid banner-2">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-light my-4 montserrat-600' style={{textAlign:'center'}}>MENU</h1>
                </div>
            </div>
        </div>

        <div className="container">
                <div className="row">
                <div className="col-12 my-3" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                   <h1 style={{textAlign:'center'}} className='montserrat-400'>Our Specials</h1>
                   <select className='montserrat-400' name=""  onChange={(e)=> setSeacrh(e.target.value)}>
                    <option value="">Choose by categories</option>
                    {getCategories.map((items, index)=>(
                        <option  key={index} value={items._id}>{items.categories}</option>
                    ))}
                    
                   </select>
                  
               </div>
                    {dishes.map((item, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div style={{ height: '50%', width: '100%' }}>
                                <img className="dishimg" src={`${backendUrl}/images/${item.image}`} alt="" />
                            </div>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h4 className='montserrat-400'>{item.dishes}</h4>
                                <h5 className='montserrat-400'>₹ {item.price}</h5>
                            </div>
                            <Button variant="danger" onClick={() => redirectToWhatsApp(item)}><p className='montserrat-400 m-0'>ORDER</p></Button>{' '}
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
    </div>
    
    
  )
}

export default Menu