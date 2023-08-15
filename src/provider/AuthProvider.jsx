import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

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

// log out on 
    const logOut =()=>{
       return signOut(auth)
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
        logOut
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