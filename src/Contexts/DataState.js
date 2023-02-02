import React from "react";
import DataContext from "./DataContext";
import { useState } from "react";
const DataState = (props) => {
  const [User, setUser] = useState([]);
  const [Gassword, setGassword] = useState([]);
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const Login = async (email, password, mpin, enc_key) => {
    const url = "http://localhost:4000/auth/api/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, mpin, enc_key }),
    });
    const UserJson = await response.json();
    // console.log(UserJson)

    if (UserJson.success) {
      localStorage.setItem("token", UserJson.token);
      localStorage.setItem("isLoggedin", true);
      localStorage.setItem("mpin", mpin);
      localStorage.setItem("enc_key", enc_key);
      setisAuthenticated(true);
    }
  };

  const signup = async (email, password, enc_key, mpin) => {
    const url = "http://localhost:4000/auth/api/createuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, enc_key, mpin }),
    });

    const UserJson = await response.json();

    // console.log(UserJson)
    if (UserJson.success) {
      localStorage.setItem("token", UserJson.token);
      localStorage.setItem("isLoggedin", true);
      localStorage.setItem("mpin", mpin);
      localStorage.setItem("enc_key", enc_key);
      setisAuthenticated(true);
    }
  };

  const GetData = async () => {
    const mpin = localStorage.getItem("mpin");
    if (!mpin) {
      alert("No mpin found!");
    }
    const url = "http://localhost:4000/api/gass/getgass";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ mpin }),
    });
    const GassJson = await response.json();
    console.log(GassJson);
    setGassword(GassJson);
  };

  const CreateGass = async (title, mail, password) => {
    console.log({ title, mail, password });
    const enc_key = localStorage.getItem("enc_key");
    if (!enc_key) {
      alert("No decrypters found!");
    }
    const url = "http://localhost:4000/api/gass/creategass";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, mail, password, enc_key }),
    });
    const GassJson = await response.json();
    console.log(GassJson);
    if (GassJson.success === true) {
      alert("success!");
    }
  };

  const GetUser = async () => {
    const url = "http://localhost:4000/api/user/getuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const UserJson = await response.json();
    setUser(UserJson["email"]);
  };

  const Delete = async (id) => {
    fetch(`http://localhost:4000/api/gass/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ mpin: localStorage.getItem("mpin") }),
    }).then((res) => {
      if (res.status === 200) {
        alert("Deleted!");
        window.location.reload();
      } else {
        alert("Something went wrong!");
      }
    });
  };

  return (
    <>
      <DataContext.Provider
        value={{
          Gassword,
          Login,
          signup,
          isAuthenticated,
          GetData,
          CreateGass,
          GetUser,
          User,
          Delete,
        }}
      >
        {props.children}
      </DataContext.Provider>
    </>
  );
};

export default DataState;
