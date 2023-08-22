import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

// cteate user on 
    const createUser = (email,password)=>{
        setLoading(false)
       return createUserWithEmailAndPassword(auth,email,password)

    }

// loging user on 
    const loginUser =(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }

//google login 

const googleLogin =()=>{
    signInWithPopup(auth,googleProvider)
}

// log out on 
    const logOut =()=>{
       return signOut(auth)
    }

//update profile 
   const updateUser =(name,photoUrl)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          })
   }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log("current user ", currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])


    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUser,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;