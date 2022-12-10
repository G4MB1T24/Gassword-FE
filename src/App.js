import Navbar from "./UI/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import DataState from "./Contexts/DataState";
import Home from "./UI/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
// import DataItem from "./Components/DataItem";
import Data from "./Components/Data";

function App() {
  // const isLoggedin = localStorage.getItem("isLoggedin")
  return (
    <>
      <DataState>
        <ChakraProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home></Home>} />
              <Route exact path="/login" element={<Login></Login>} />
              <Route exact path="/signup" element={<Signup></Signup>} />
              <Route exact path="/vault" element={<Data></Data>} />
            </Routes>
          </Router>
        </ChakraProvider>
      </DataState>
    </>
  );
}

export default App;
