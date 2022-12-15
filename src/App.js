import Navbar from "./UI/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import DataState from "./Contexts/DataState";
import Home from "./UI/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Data from "./Components/Data";
import CreateGass from "./CD/CreateGass"
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
              <Route exact path="/create" element={<CreateGass></CreateGass>} />
            </Routes>
          </Router>
        </ChakraProvider>
      </DataState>
    </>
  );
}

export default App;
