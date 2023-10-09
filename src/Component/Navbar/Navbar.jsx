/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGraduationCap } from "react-icons/fa6";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

    const links = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li className='lg:mx-2'><NavLink to='/services'>Services</NavLink></li>
     <li><NavLink to='/course'>Courses</NavLink></li>
     <li className='lg:mx-2'><NavLink to='/events'>Events</NavLink></li>
     <li><NavLink to='/blog'>Blog</NavLink></li>
    </>
    return (
       <>
       <nav>
          <div className="md:navbar bg-base-100 mx-auto max-w-screen-xl">
        <div className="md:navbar-start py-6">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-4xl"><FaGraduationCap></FaGraduationCap> Education</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 py-3 text-xl">
          {links}
          </ul>
        </div>
       
        <div className="md:navbar-end flex justify-center items-center gap-5 pb-5 md:pb-0">

        <div className="mr-2">
            {user ? (
            <div className='flex justify-center gap-3 items-center'>
            <p className='font-semibold text-xl'>{user.displayName}</p>
            <img className='rounded-full h-12 w-12' src={user.photoURL} />
            </div>
            ): <img className='rounded-full h-12 w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHTAJPlLEQwOQG_g-WNP0WayMmnpM-Nq9ZA&usqp=CAU" />
            }
          
        </div>
           {user ? (
              <button
                onClick={handleLogOut}
                variant="secondary"
                className='text-xl bg-[#dc3545] text-white py-2 px-5 rounded-md'
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className='text-xl bg-[#dc3545] text-white py-2 px-5 rounded-md' variant="secondary">Login</button>
              </Link>
            )}
        </div>
       
          </div>
       </nav>
       
       </>
    );
};

export default Navbar;