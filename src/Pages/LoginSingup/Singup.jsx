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
  }
  from 'mdb-react-ui-kit';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Singup = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page location", location);
    const from = location.state?.from?.pathname || "/";    

    const handleSingup = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // validate
        setError("");
        setSuccess("");
        if (password.length < 6) {
        setError("Please add at least 6 characters in your password.");
        return;
        } else if  (!/(?=.*[A-Z])/.test(password))  {
        setError("Please add at least one uppercase.");
        return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
        setError("Please add a special character.");
        return;
        }


        createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("User has been created successfully");
        updateUserName(result.user, name);
        updateUserPhoto(result.user, photo);
        navigate(from, { replace: true });
   
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
      toast("User has been created successfully!");

    }

    const updateUserName = (user, name) => {
      updateProfile(user, {
        displayName: name,
      })
        .then(() => {
          console.log("user name updated");
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    };

    const updateUserPhoto = (user, photo) => {
      updateProfile(user, {
        photoURL: photo,
      })
        .then(() => {
          console.log("user photo updated");
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess("User has been Singup successfully");
            // setSuccess(alert('success'));
            
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      };

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
      };

    return (
        <MDBContainer fluid> 
            <MDBRow className='flex justify-center items-center '>
                <div className='bg-white my-5 mx-auto border-2' style={{borderRadius: '1rem',   maxWidth: '500px'}}>
                    <form onSubmit={handleSingup} className="p-5 w-100 flex flex-col">
                        <p className="text-red-600 text-center">{error}</p>
                        <p className="text-green-600">{success}</p>

                        <h2 className="fw-bold mb-2 text-4xl font-bold text-center">Please Register</h2>
                        
                        <div>
                        <span className='text-xl'> Name</span>
                        <input type="text" required placeholder="Enter Your Name" name="name" className="input input-bordered w-full max-w-xs mb-2 mt-2" />
                        </div>

                        <div>
                        <span className='text-xl'> Photo URL</span>
                        <input type="url" required placeholder="Enter Your Photo URL" name="photo" className="input input-bordered w-full max-w-xs mb-2 mt-2" />
                        </div>

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

                        <div>
                        <input
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        className='mr-3'
                        />
                        <>
                        Accept <Link>Terms and Conditions</Link>
                        </>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn btn-primary" disabled={!accepted}>Register</button>
                        </div>

                        <MDBBtn onClick={handleGoogleSignIn} className="mb-2 mt-4 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                        <MDBIcon fab icon="google" className="mx-2"/> Sign in with google</MDBBtn>

                        <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login"><u>Login</u></Link></p>
                    </form>      
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        />           
                </div>
            </MDBRow>
        </MDBContainer>
    );
};

export default Singup;