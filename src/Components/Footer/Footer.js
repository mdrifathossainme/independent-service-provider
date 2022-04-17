import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./Footer.css"
const Footer = () => {
    return (
        
        <>
        <footer className='bg-black py-5 text-white'>
        <div className="container footer">
        <div className="footer-left">
                <div  className="logo">
                   <Link to="/"> <img style={{width:"100px"}} src={"https://i.ibb.co/XDZsLVF/zz-letter-logo-design-template-260nw-1144706711-prev-ui.png"} alt="" /></Link>
                </div>
               <p className='mt-3'>It doesn't matter how many times <br /> you win an award, it is always very special.</p>
               <div className="font-icon">
                   <a href="https://www.facebook.com/mdrifathossain.me" target="_black" >  <img src={'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/facebook-app.svg'} alt="" /></a>

                   <a href="https://www.instagram.com/mdrifathossain.me/" target="_black" ><img src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/ig-instagram.svg"} alt="" /> </a>
                   <a href="https://twitter.com/md_rifathossain" target="_black" ><img src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/twitter-app.svg"} alt="" /></a>

                   <a href="https://twitter.com/md_rifathossain" target="_black" ><img src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/wa-whatsapp.svg"} alt="" /></a>
                
               </div>
            </div>
            <div className="footer-center">
                <h3 className="text-bold" >Useful links</h3>
                <div className="footerLink">
                <Link className='footerNav'  to="/home">Home</Link>
                <Link className='footerNav'  to="/about">About</Link>
                <Link className='footerNav'  to="/blog">Blog</Link>
                <Link className='footerNav'  to="/checkout">Check Out</Link>
                <Link className='nav-item' to="/login">Login</Link>
                <Link className='nav-item' to="/signup">Sign Up</Link>
                </div>
            </div>
            <div className="footer-right">
                <h3>Subscribe</h3>
            <Form className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Send
                </Button>
            </Form>
            </div>
        </div>
       
        </footer>
         <div className="copyright text-white text-center">
             <p>Copyright &copy; {(new Date().getFullYear())} zinidine zidane</p>
            </div>
        </>
    );
};

export default Footer;