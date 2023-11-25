import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import { getItems, addItem } from './_utils/api-service';
import { useEffect } from 'react';

const LandingPage = () => {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleLogin(){
        await gitHubSignIn();
    };

    async function handleLogout(){
        await firebaseSignOut();
    };

async function loadItems(){
    try {
        const items = await getItems(user.uid);
        console.log(items);
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    loadItems();
}, [user.uid]);

async function handleAddItem() {
    try {
      const newItemId = await addItem(user.uid, { text: newItemText });
      const newItem = { id: newItemId, text: newItemText }; 
      setItems(prevItems => [...prevItems, newItem]);
      setNewItemText(''); 
    } catch (error) {
      console.error('Error adding item:', error);
    }
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
