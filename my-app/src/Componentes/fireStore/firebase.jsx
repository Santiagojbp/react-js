import React from 'react'
import { useEffect,useState } from 'react'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesy

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfddo_1FnyfgDRqmzgs57SL2wEVnkoqck",
  authDomain: "nuevocursoreact.firebaseapp.com",
  projectId: "nuevocursoreact",
  storageBucket: "nuevocursoreact.appspot.com",
  messagingSenderId: "859637698371",
  appId: "1:859637698371:web:24acdec72679fee73669f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const ComprasCliente = collection(db,"compras")
const Inventario = collection(db, "items")

export const getItem = async () => {
  const snapshot = await getDocs(Inventario)
  let dbP = []
  snapshot.forEach(el => {
      dbP.push({id:el.id,...el.data()})
  });
  return dbP
}

