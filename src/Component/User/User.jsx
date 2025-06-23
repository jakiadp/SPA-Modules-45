import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const{name, phone, email } = user;

    const userStyle ={
        border:'2px solid blue',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'

    }
    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <p>Phone: {phone} </p>
            <p>Email:{email}</p>
            <Link to={`/users/${id}`}>Show Detailes</Link>
        </div>
    );
};

export default User;
