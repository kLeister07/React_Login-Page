import React from 'react';
import Input from './Input';

const Login = (props) => {
    let userIsRegistered = props.userIsRegistered
    return (
        <form className='form'>
            <Input type='text' placeholder='Username' />
            <Input type='password' placeholder='Password' />
            {!userIsRegistered ? (
                <>
                    <Input type='password' placeholder='Confirm Password' />
                    <button type='submit'>Register</button>
                </>
            ) : (
                <button type='submit'>Login</button>
            )}
        </form>
    );
};

export default Login;
