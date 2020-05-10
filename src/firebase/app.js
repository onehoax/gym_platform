import firebase from 'firebase/app'
import credentials from './credentials'

// Initialize the firebase appp
export const firebaseApp = firebase.initializeApp(credentials.config);