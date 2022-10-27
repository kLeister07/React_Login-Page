import React from 'react';
import Login from './components/Login';

let isLoggedIn = false;
let userIsRegistered = false;

function App() {
    return (
        <div className='container'>
            {isLoggedIn ? (
                <h1>Hello</h1>
            ) : (
                <Login
                    isLoggedIn={isLoggedIn}
                    userIsRegistered={userIsRegistered}
                />
            )}
        </div>
    );
}

export default App;
