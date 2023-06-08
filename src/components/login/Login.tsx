import { useEffect, useState } from "react";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";

import Button from '@mui/material/Button';

export const Login = () => {
  const [value, setValue] = useState("");


    useEffect(()=>{
        // let email = localStorage.getItem("email")
        // if(email){
        //     setValue(email);
        // }
       
    },[])




  const handleLogin = () => {
    signInWithPopup(auth, provider).then((response) => {
     if(response.user.email){
        setValue(response.user.email);
        localStorage.setItem("email",response.user.email);
     
    //  navigate('/');
     }
     
    }).catch((err)=>{
        console.log(err)
    });
  };
  return (
    <div>
        <h1>Iniciar session con Google</h1>
        <Button variant="contained" onClick={handleLogin}>Iniciar Sesion</Button>
   
    </div>
  );
};
