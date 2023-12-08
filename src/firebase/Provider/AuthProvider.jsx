import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser =  (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


      //observe auth state change

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {
                axios
                  .post("http://localhost:5000/jwt", loggedUser, {
                    withCredentials: true,
                  })
                  .then((res) => {
                    console.log("token response", res.data);
                  });
              }
              else {
                axios.post('http://localhost:5000/logout', loggedUser, {
                  withCredentials: true
                })
                .then( res => {
                  console.log(res.data);
                })
              }
        });

        return () => {
            unSubscribe();
        }

    } ,[])

    const logOut = () => {
        setLoading(true)
       return signOut(auth);
    }

    const authInfo = {
        setUser,
         user,
         loading,
         createUser,
         signInUser,
         signInWithGoogle,
         logOut
        }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;




