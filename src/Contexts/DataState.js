import DataContext from "./DataContext";
import { useState } from "react";

import React from "react";



const DataState = (props) => {
  const [Gassword, setGassword] = useState([]);
  const [isAuthenticated , setisAuthenticated] = useState(false)
  const Login = async (email, password, mpin) => {
    const url = "http://localhost:4000/auth/api/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, mpin }),
    });
    const UserJson = await response.json();

    if(UserJson.success){
      localStorage.setItem('token', UserJson.token);
      localStorage.setItem('isLoggedin', true);
      localStorage.setItem("mpin" , mpin)
      setisAuthenticated(true)
      }
 
  };
  const signup = async (email, password, enc_key, mpin) => {
    
    const url = "http://localhost:4000/auth/api/createuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password,  enc_key , mpin }),
    });

    const UserJson = await response.json();


    if(UserJson.success){
      localStorage.setItem('token', UserJson.token);
      localStorage.setItem('enc_key' , enc_key)
      localStorage.setItem("mpin" , mpin)
      setisAuthenticated(true)
      }
  };
  const GetData = async () => {
    const mpin = localStorage.getItem("mpin")
    if (!mpin) {
      alert("No mpin found!")
    }
    const url = "http://localhost:4000/api/gass/getgass"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem("token")
      },
      body: JSON.stringify( {mpin}  )
      
    })
    const GassJson = await response.json()
    setGassword(GassJson)
    console.log(Gassword)
  }
  return (
    <>
      <DataContext.Provider value={{  Gassword, Login, signup , isAuthenticated , GetData  }}>
        {props.children}
      </DataContext.Provider>
    </>
  );
};

export default DataState;
