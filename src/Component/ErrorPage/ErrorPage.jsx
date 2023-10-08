/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Oopps!!!</h2>
            <Link to='/'> Go to Home</Link>
        </div>
    );
};

export default ErrorPage;