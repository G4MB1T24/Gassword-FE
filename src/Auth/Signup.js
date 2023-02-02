import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../Contexts/DataContext";
const Signup = () => {
  const navigate = useNavigate();

  const context = useContext(DataContext);
  const { signup, isAuthenticated } = context;

  const [Creds, setCreds] = useState({
    email: "",
    password: "",
    mpin: "",
    enc_key: "",
  });
  if (isAuthenticated) {
    navigate("/");
  }
  const [disabled, setdisabled] = useState(true);
  const { email, password, mpin, enc_key } = Creds;
  useEffect(() => {
    if (
      mpin.length === 4 &&
      email.length > 0 &&
      password.length > 5 &&
      enc_key.length > 4
    ) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [mpin, email, password, enc_key]);

  const handleChange = (e) => {
    setCreds({ ...Creds, [e.target.name]: e.target.value });
  };

  const FormSubmit = (e) => {
    e.preventDefault();

    console.log(Creds);
    signup(email, password, enc_key, mpin);
  };

  return (
    <>
      <div className="flex items-center h-screen bg-gradient-to-r from-purple-400 to-pink-500">
        <div className="w-full max-w-sm mx-auto">
          <form
            // onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-lg font-medium mb-4 text-center">Sign Up</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full border border-gray-400 rounded py-2 px-3"
                id="email"
                value={Creds.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full border border-gray-400 rounded py-2 px-3"
                id="password"
                type="password"
                value={Creds.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="enckey"
              >
                Encryption Key
              </label>
              <input
                className="w-full border border-gray-400 rounded py-2 px-3"
                id="enckey"
                value={Creds.enc_key}
                name="enc_key"
                onChange={handleChange}
                placeholder="Encryption key Don't forget this!"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="mpin"
              >
                MPIN
              </label>
              <input
                className="w-full border border-gray-400 rounded py-2 px-3"
                id="mpin"
                type="text"
                value={Creds.mpin}
                name="mpin"
                onChange={handleChange}
                placeholder="MPIN"
              />
            </div>
            <button
              className="bg-purple-500 hover:bg-purple-400 text-white font-medium py-2 px-4 rounded"
              disabled={Boolean(disabled)}
              onClick={FormSubmit}
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
