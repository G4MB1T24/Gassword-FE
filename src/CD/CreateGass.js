import React, { useState, useContext, useEffect } from "react";
import DataContext from "../Contexts/DataContext";

const CreateGass = () => {
  const context = useContext(DataContext);
  const { CreateGass } = context;
  const [Payload, setPayload] = useState({
    title: "",
    email: "",
    password: "",
  });

  const { title, email, password } = Payload;
  const [disabled, setdisabled] = useState(true);

  useEffect(() => {
    if (title.length >= 3 && email.length >= 3 && password.length >= 5) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [title, email, password]);

  const handleChange = (e) => {
    setPayload({ ...Payload, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault()
    CreateGass(title, email, password);
    setTimeout(() => {
      setPayload({
        title: "",
        email: "",
        password: "",
      });
      document.getElementById("formmain").reset();
    }, 500);
  };

  return (
    <>
      <div className="flex items-center h-screen bg-gradient-to-r from-blue-300 to-white">
        <form
          id="formmain"
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
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
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="password"
              id="password"
              onChange={handleChange}
              name="password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={disabled}
              onClick={Submit}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateGass;
