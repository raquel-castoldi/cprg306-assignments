import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    try {
      const itemsRef = firestore.collection('users').doc(userId).collection('items');
      const querySnapshot = await itemsRef.get();
  
      const items = [];
  
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          data: doc.data(),
        });
      });
  
      return items;
    } catch (error) {
      console.error('Error getting items:', error);
      throw error;
    }
  }
  
  async function addItem(userId, item) {
    try {
      const itemsRef = firestore.collection('users').doc(userId).collection('items');
      const docRef = await itemsRef.add(item);
  
      return docRef.id;
    } catch (error) {
      console.error('Error adding item:', error);
      throw error;
    }
  }
  