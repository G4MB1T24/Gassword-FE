import Navbar from "./UI/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import DataState from "./Contexts/DataState";
import Home from "./UI/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
function App() {
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
            </Routes>
          </Router>
        </ChakraProvider>
      </DataState>
    </>
  );
}

export default App;