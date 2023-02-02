import React, { useContext, useEffect, useState } from "react";
import DataContext from "../Contexts/DataContext";
import "../Css/index.css";
const Home = () => {
  const context = useContext(DataContext);
  const { GetUser, User } = context;
  useEffect(() => {
    GetUser();
  });
  const [Checker, setChecker] = useState("");
  const handleChange = (e) => {
    setChecker(e.target.value);
  };
  const CheckGate = () => {
    if (Checker === localStorage.getItem("enc_key")) {
      localStorage.setItem("enc_key", Checker);
      alert("Correct");
    } else {
      alert("Not Correct");
    }
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-300 to-white ">
        <div className="w-full max-w-sm">
          <div>
            <h1 className="text-2xl font-bold text-center mb-2">
              Welcome {User}
            </h1>
            <h5 className=" font-bold text-center mb-2">
              Do you still remember your Encryption key?
            </h5>
            <div className="mb-4">
              <input
                type="password"
                className="border border-gray-400 rounded p-2 w-full"
                placeholder="Encryption Key"
                onChange={handleChange}
                  name="checker"
                  value={Checker}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={CheckGate}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* <PasswordChecker></PasswordChecker> */}
    </>
  );
};

export default Home;
