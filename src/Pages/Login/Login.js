import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
const Login = () => {
    const [validated, setValidated] = useState(false);
    const navigate=useNavigate();

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };

  const handleRegister=()=>{
    navigate('/signup')
  }
    return (
        <div className='Login' >
            <div className="from-box">
            <div className=" w-50  signupForm p-5">
                <h1 className='text-center'>Login</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide Email.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-5'>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide password.
                    </Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Button  className='w-100' type="submit" >Sign Up</Button>
            </Form>
            <p className='mt-4'>Create  Account <span style={{cursor:"pointer"}} className='text-primary' onClick={handleRegister}>Register</span> </p>
             <span style={{cursor:"pointer"}} className='text-primary' onClick={handleRegister}>Forget Password</span>
            <div className="or">
                <div className="div"></div>
                    <p>or</p>
                <div className="div"></div>
            </div>
            <div className="social-link">
                <img src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google-color.svg"} alt="" />
                <img src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/facebook-round-color.svg"} alt="" />
                <img src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/github.svg"} alt="" />
                
            </div>
            </div>
           
            </div>
            
        </div>
    );
};

export default Login;