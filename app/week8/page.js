import React from 'react';
import { useUserAuth } from './_utils/auth-context';

const LandingPage = () => {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleLogin(){
        await gitHubSignIn();
    };

    async function handleLogout(){
        await firebaseSignOut();
    };

    return (
        <div>
        {user ? (
            <div>
            <p>Welcome, {user.displayName} ({user.email})</p>
            <button onClick={handleLogout}>Logout</button>
            <a href="/shopping-list">Go to Shopping List</a>
            </div>
        ) : (
            <button onClick={handleLogin}>Login with GitHub</button>
        )}
        </div>
    );
};

export default LandingPage;
