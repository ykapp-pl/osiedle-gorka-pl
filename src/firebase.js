// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore' // Firestore (opcjonalnie)
import { getAuth } from 'firebase/auth' // Authentication (opcjonalnie)

const firebaseConfig = {
  apiKey: 'AIzaSyA8mTmUADBVm41W-o0G89MMj_rIVGq7j2k',
  authDomain: 'osiedlegorka-pl.firebaseapp.com',
  projectId: 'osiedlegorka-pl',
  storageBucket: 'osiedlegorka-pl.firebasestorage.app',
  messagingSenderId: '321683041142',
  appId: '1:321683041142:web:46cff0a4d4b206e0166857',
  measurementId: 'G-CG2ELTXELB'
}

// Inicjalizacja Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Eksport usług Firebase
const db = getFirestore(firebaseApp) // Firestore
const auth = getAuth(firebaseApp) // Authentication
const analytics = getAnalytics(firebaseApp)
export { db, auth, analytics }
