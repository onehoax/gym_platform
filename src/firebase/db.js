import { firebaseApp } from './app'
import 'firebase/firestore'

export const db = firebaseApp.firestore();