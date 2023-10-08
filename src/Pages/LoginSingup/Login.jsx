/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import "./Login.css"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

const Login = () => {

    const { signIn, signInWithGoogle} =
    useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page location", location);
    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // validate
        setError("");
        setSuccess("");
        // if (password) {
        // setError("Please add at least one uppercase");
        // return;
        // } else if (!/(?=.*[!@#$&*])/.test(password)) {
        // setError("Please add a special character.");
        // return;
        // } else if (password.length < 6) {
        // setError("Please add at least 6 characters in your password");
        // return;
        // }


        signIn(email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess("User has been login successfully");
            navigate(from, { replace: true });
        })
        .catch((error) => {
            console.log(error);
            setError(error.message);
        });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess("User has been login successfully");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      };

    return (
        <MDBContainer fluid>
            <MDBRow className='flex justify-center items-center '>
                <div className='bg-white my-5 mx-auto border-2' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                    
                    <form onSubmit={handleLogin} className="p-5 w-100 flex flex-col">
                        <p className="text-red-600 text-center">{error}</p>
                        <p className="text-green-600">{success}</p>
                        <h2 className="fw-bold text-4xl font-bold mb-2 text-center">Login</h2>
                        <p className="text-white-50 mb-3 text-center">Please enter your email and password!</p>
                        
                        <div>
                        <span className='text-xl'> Email</span>
                        <input type="email" required placeholder="Enter Your Email" name="email" className="input input-bordered w-full max-w-xs mb-2 mt-2" />
                        </div>

                        <div>
                        <span className='text-xl'> Password</span>
                        <input type={show ? "text" : "password"} required placeholder="Enter Your Password" name="password" className="input input-bordered w-full max-w-xs mb-2 mt-2" />
                        </div>
                        <div className="pws-btn">
                            <label onClick={() => setShow(!show)}>
                                <small className="show-hide">
                                {show ? (
                                    <span>Hide Password</span>
                                ) : (
                                    <span>Show Password</span>
                                )}
                                </small>
                            </label>
                        </div>

                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                        
                        <div className="form-control">
                        <button className="btn btn-primary">Login</button>
                        </div>

                        <MDBBtn onClick={handleGoogleLogin} className="mb-2 mt-4 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                        <MDBIcon fab icon="google" className="mx-2"/>Login with google</MDBBtn>

                        <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/singup"><u>Register</u></Link></p>

                    </form>   

                </div>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;