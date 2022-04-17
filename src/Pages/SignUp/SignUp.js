import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff';

const SignUp = () => {
    const navigate=useNavigate();
    const [validated, setValidated] = useState(false);
    const [disable, setDisable]=useState(false);
    const [vpassword,setVpassword]=useState('');
    const [type, setType]=useState('password');
    const [type2, setType2]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
    const [icon2, setIcon2]=useState(eyeOff);

    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [customError,setCustomError]=useState('');


    const handleToggle1=()=>{    
        if(type==='password'){
          setIcon(eye);      
          setType('text');
        }
        else{
          setIcon(eyeOff);     
          setType('password');
        }
      }

    const handleToggle2=()=>{    
        if(type==='password'){
          setIcon2(eye);      
          setType2('text');
        }
        else{
          setIcon2(eyeOff);     
          setType2('password');
        }
      }



    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    const email=(event.target.email.value);
    const password=(event.target.password.value);
    const cpassword=(event.target.cpassword.value);
    const fastname=(event.target.fastname.value);
    const lastname=(event.target.lastname.value);
    const username=(event.target.username.value);

    if(password===cpassword){
        setVpassword(password)
    }
    else{
        setCustomError("password don't match");
        return;
    }

    createUserWithEmailAndPassword(email,vpassword)
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
                        <Form.Control name="fastname"  type="text" placeholder="First name" required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control name="lastname" type="text" placeholder="Last name"
                       required />
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
                    <span className='password' >
                    <Form.Control  name="password" type={type} placeholder="Password" required />
                    <span ><Icon onClick={handleToggle1} icon={icon} className='eyeicon1' size={25}/></span>   
                    </span>
                    <Form.Control.Feedback type="invalid">
                        Please provide password.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                    <Form.Label>Confirm Password</Form.Label>
                     <span className='password' >
                    <Form.Control  name="cpassword" type={type2} placeholder="Confirm Password" required />
                    <span ><Icon onClick={handleToggle2} icon={icon2} className='eyeicon2' size={25}/></span></span>

                    <Form.Control.Feedback type="invalid">
                        Please provide Password.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <p className='text-danger' >{customError}</p>
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