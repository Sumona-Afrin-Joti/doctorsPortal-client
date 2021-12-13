import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password, name, history) => {

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);

        // calling saveUserToDb
        saveUserToDb(email, name, 'POST');

        //send name to  firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => {

          })
          .catch(error => {
            setAuthError(error);

          })
        history.replace('/')
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false)
      );

  };



  const loginUser = (email, password, location, history) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.push(destination)
        setAuthError('')

      })
      .catch((error) => {
        setAuthError(error.message);

      })
      .finally(() => setIsLoading(false)
      );

  }


  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        saveUserToDb(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || '/';
        history.push(destination)
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);

      })
      .finally(() => setIsLoading(false));

  }


  // observe user state
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }

      setIsLoading(false);

    });

    return () => unsubscribe;

  }, []);


  const logOut = () => {
    setIsLoading(true)

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setAuthError(error.message);
    })
      .finally(() => setIsLoading(false)
      );
  };


  const saveUserToDb = (email, displayName, method) => {
    const user = { email, displayName };

    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()

  }


  return {
    user,
    isLoading,
    registerUser,
    loginUser,
    logOut,
    signInUsingGoogle,
    authError,
    setAuthError
  }
}

export default useFirebase;
