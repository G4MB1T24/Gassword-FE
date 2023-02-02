import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../Contexts/DataContext";

const Login = () => {
  const navigate = useNavigate();

  const context = useContext(DataContext);
  const { Login, isAuthenticated } = context;

  const [Creds, setCreds] = useState({
    email: "",
    password: "",
    mpin: "",
    enc_key: "",
  });

  const { email, password, mpin, enc_key } = Creds;
  const [disabled, setdisabled] = useState(true);
  const handleChange = (e) => {
    setCreds({ ...Creds, [e.target.name]: e.target.value });
  };
  if (isAuthenticated) {
    navigate("/");
  }
  const FormSubmit = (e) => {
    e.preventDefault();
    Login(email, password, mpin, enc_key);
  };
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
  return (
    <>
      <div className="flex items-center h-screen bg-gray-50 py-12 bg-gradient-to-r from-purple-400 to-pink-500 to-blue-300 to-red-300 ">
        <div className="w-full max-w-sm mx-auto">
          <form
            // onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-lg font-medium mb-4 text-center">Login</h2>
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
                name="email"
                value={Creds.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
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
                type="password"
                id="password"
                value={Creds.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter password"
                required
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
                type="text"
                id="enckey"
                value={Creds.enc_key}
                onChange={handleChange}
                name="enc_key"
                placeholder="Encryption Key"
                required
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
                type="text"
                id="mpin"
                value={Creds.mpin}
                name="mpin"
                onChange={handleChange}
                placeholder="mpin"
                required
              />
            </div>
            <div className="flex items-center justify-between"></div>
            <button
              className="bg-purple-500 hover:bg-purple-400 text-white font-medium py-2 px-4 rounded"
              type="submit"
              onClick={FormSubmit}
              disabled={Boolean(disabled)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
