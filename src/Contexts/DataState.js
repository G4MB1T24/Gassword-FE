import DataContext from "./DataContext";
import { useState } from "react";

import React from "react";



const DataState = (props) => {
  // const [Gassword, setGassword] = useState([]);
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
    console.log(UserJson);
    if(UserJson.success){
      localStorage.setItem('token', UserJson.token);
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
      setisAuthenticated(true)
      }
  };
  // const GetData = () => {
  //   //Data fetching here
  // }
  return (
    <>
      <DataContext.Provider value={{ Login, signup , isAuthenticated  }}>
        {props.children}
      </DataContext.Provider>
    </>
  );
};

export default DataState;
