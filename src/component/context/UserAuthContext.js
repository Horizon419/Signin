import React from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup
} from "firebase/auth"
import {auth} from "../../firebase"
import {useEffect, useState, createContext, useContext} from "react"

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
const [user, setUser]= useState("");
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email, password) {
        console.log("Email", email)
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser);
});
return () => {
    unsubscribe();
}
    },[]);

    return <userAuthContext.Provider value={{user, signUp, signIn, signOut}}>{children}</userAuthContext.Provider>
        
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
