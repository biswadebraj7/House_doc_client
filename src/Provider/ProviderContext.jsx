import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { auth } from '../Firebase/firebase';

export const ContextProvider=createContext();
const ProviderContext = ({children}) => {
    const [user, setuser]=useState('')
    const [loading, setloading]=useState(true)

    const createsingeMange=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
        setloading(true)
        }

    const SingInmange=(email, password)=>{

        return signInWithEmailAndPassword(auth, email, password)
        setloading(true)
        
     }
     const LogOut=()=>{
        return signOut(auth);
     }
  
  
     const unsubscribe= onAuthStateChanged(auth,(createuser)=>{
        setloading(false)
        setuser(createuser)
        return ()=>{
            return unsubscribe();
         }
           

       
     }
    )      
    

        
          //setloading(false)

                
          const userinfo={user, createsingeMange,SingInmange,LogOut}


  return (
    <div>
        <ContextProvider.Provider value={userinfo}>

            {children}

        </ContextProvider.Provider>
      
    </div>
  )
}

export default ProviderContext
