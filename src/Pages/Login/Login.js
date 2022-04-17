import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Login = () => {
    const [validated, setValidated] = useState(false);
    const navigate=useNavigate();
    const [customError,setCustomError]=useState('');


    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);

    const handleToggle=()=>{    
        if(type==='password'){
          setIcon(eye);      
          setType('text');
        }
        else{
          setIcon(eyeOff);     
          setType('password');
        }
      }

      const [ signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

   
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

      signInWithEmailAndPassword(email,password);
      if(user){
          alert('thank for login')
      }
      if(error){
        // setCustomError(error.message)
        return
    }

    };
  
  
  const handleRegister=()=>{
    navigate('/signup')
  }
const forgetPassword=()=>{

}

    return (
        <div className='Login' >
            <div className="from-box">
            <div className=" LoginForm p-5">
                <h1 className='text-center'>Login</h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide Email.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-1'>
                <Form.Group as={Col} md="12" controlId="validationCustom">
                    <Form.Label>Password</Form.Label>
                    <span className='password' >
                    <Form.Control name="password"  type={type} placeholder="Password" required />
                    <span ><Icon onClick={handleToggle} icon={icon} className='eyeicon' size={25}/></span>   
                    </span>
                    <Form.Control.Feedback type="invalid">
                        Please provide password.
                    </Form.Control.Feedback>
                </Form.Group>
                </Row>
                <p className='text-danger'>{customError}</p>
                <Button  className='w-100 mt-4' type="submit" >Sign Up</Button>

            </Form>

            <p className='mt-4'>Create  Account <span style={{cursor:"pointer"}} className='text-primary' onClick={handleRegister}>Register</span> </p>

             <span style={{cursor:"pointer"}} className='text-primary' onClick={forgetPassword}>Forget Password</span>

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