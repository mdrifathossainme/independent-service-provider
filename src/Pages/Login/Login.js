import React, { useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Login.css"
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword,useSignInWithGithub,useSignInWithGoogle,useSignInWithFacebook, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../Components/Spinner';


const Login = () => {
    const [validated, setValidated] = useState(false);
    const navigate=useNavigate();
    const [customError,setCustomError]=useState('');
    const emailRef=useRef('');
    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
    const [user]=useAuthState(auth);
    const location=useLocation();
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

      const [ signInWithEmailAndPassword, usere, loading, error,] = useSignInWithEmailAndPassword(auth);
      const [signInWithGithub, userGit, loadingGit, erroGitr] = useSignInWithGithub(auth);
      const [signInWithGoogle, userGoogle, loadingGoogle, erroGoogle] = useSignInWithGoogle(auth);
      const [signInWithFacebook, userFacebook, loadingFacebook, erroFacebook] = useSignInWithFacebook(auth);
      const [sendPasswordResetEmail, sending, errorforget] = useSendPasswordResetEmail(auth);

   
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
      if(usere){
          event.target.email.value="";
          event.target.password.value="";
        }
        
      if(error){
          
        setCustomError(error.message)
        return
    }

    };
  
  
  const handleRegister=()=>{
    navigate('/signup')
  }
const forgetPassword= async (event)=>{
    const email=(emailRef.current.value)

    await sendPasswordResetEmail(email)
    toast("Email sending")
}
if(sending){

}

const handleGoogle=()=>{
    signInWithGoogle()
}
const handlefacebook=()=>{
    signInWithFacebook()
}
const handleGithub=()=>{
    signInWithGithub()
}
if(loading ||loadingGit|| loadingGoogle|| loadingFacebook){
    return <Loading/>
}


const from= location.state?.from?.pathname ||"/"

        if(user){
        navigate(from, {replace:true})
        }
    return (
        <div className='Login' >
            <div className="from-box">
            <div className=" LoginForm p-5">
                <h1 className='text-center'>Login</h1>
                <ToastContainer />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} name="email" type="email" placeholder="Email" required />
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
                <img onClick={handleGoogle} src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google-color.svg"} alt="" />
                <img onClick={handlefacebook} src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/facebook-round-color.svg"} alt="" />
                <img onClick={handleGithub} src={"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/github.svg"} alt="" />
                
            </div>
            </div>
           
            </div>
            
        </div>
    );
};

export default Login;