import React from 'react'
import './Footer.css'
import { ArrowCircleUp, Facebook, Instagram, LocationOn, MailOutline, Phone, Pinterest, Twitter} from '@mui/icons-material';
const Footer = () => {
    const pageHandler = ()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
  return (
    <div className='FooterContainer'>
        <div className='FooterLeft'>
            <h1 title='Logo'>SURENDRA</h1>
            <p>Fashion is part of the daily air and it changes all the time, 
            with all the events. You can even see the approaching of a revolution in clothes.
             You can see and feel everything in clothes.</p>
            <div className='Socials'>
                <Facebook className='facebook'/>
                <Instagram className='instagram'/>
                <Twitter className='twitter'/>
                <Pinterest className='pinterest'/>
            </div>
        </div>
        <div className='FooterCenter'>
            <h3 >Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Men Fashion</li>
                <li>woman Fashion</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className='FooterRight'>
            <div className='contactWrapper'>
                <h3>Contact</h3>
                <div className='contact'>
                    <LocationOn style={{marginRight:"10px"}} />D.no-123 abc street, Gachibowli, Hyderabad.
                </div>
                <div className='contact'>
                    <Phone style={{marginRight:"10px"}} />9381937477  
                </div>
                <div className='contact'>
                    <MailOutline style={{marginRight:"10px"}} />surendrachagantipati@gmail.com
                </div>
                <div className='payment' >
                    <img src='https://i.ibb.co/Qfvn4z6/payment.png' alt='payment methods' />
                </div>
                <div className='pageTop'>
                    <button onClick={pageHandler} ><b>Top</b><ArrowCircleUp style={{fontSize:"20px",marginLeft:"5px"}}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer