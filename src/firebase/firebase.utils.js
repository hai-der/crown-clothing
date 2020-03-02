import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDFPqL-bDlrCHtHIvZhITnOp3FU9G8pQr4',
  authDomain: 'crown-db-de369.firebaseapp.com',
  databaseURL: 'https://crown-db-de369.firebaseio.com',
  projectId: 'crown-db-de369',
  storageBucket: 'crown-db-de369.appspot.com',
  messagingSenderId: '520483422103',
  appId: '1:520483422103:web:c3df71c545017512150ed2',
  measurementId: 'G-2YDBJ8DQR8'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = userRef.get();

  // save user to database if not already done
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.error('error creating user:', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
