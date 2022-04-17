import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [disable, setDisable]=useState(false)
    const navigate=useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
      console.log(event.target.email.value)




    };

    const handlecheck =(event)=>{
        setDisable(event.target.checked)
    }
  const handleLogin=()=>{
    navigate('/login')
  }
    return (
        <div className='signup' >
            <div className="from-box">
            <div className="  signupForm p-5">
                <h1 className='text-center'>Sign Up</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control name="fistname"  type="text" placeholder="First name"/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control name="lastname" type="text" placeholder="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                </Row>

                <Row>
                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control name="username"   type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required
                            />
                            <Form.Control.Feedback type="invalid">
                            Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide Email.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  name="password" type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide password.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="cpassword" type="password" placeholder="Confirm Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide Password.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check onClick={handlecheck}  label="Agree for  Create Account" feedback="You must agree before submitting." feedbackType="invalid"
                    />
                </Form.Group >
                <Button disabled={!disable} className='w-100' type="submit" >Sign Up</Button>
            </Form>
            <p className='mt-4'>I have Already Account <span style={{cursor:"pointer"}} className='text-primary' onClick={handleLogin}>Login</span> </p>
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

export default SignUp;