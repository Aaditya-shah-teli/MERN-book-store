import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


//    const signUpWithGmail = () => {
//     return
//    }
const login = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const logout = () =>{
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
        setUser(CurrentUser)
        setLoading(false)
        
    });
    return () =>{
        return unsubscribe()
    }
},[])


const authInfo = {
    user,
    createUser,
    login,
    logout
}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
