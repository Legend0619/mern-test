import React from "react";
import { Container } from "@mui/material";
//Routing
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import PasswordSetting from "./components/PasswordSettings/PasswordSettings";
import TestList from "./components/TestList/TestList";
import Profile from "./components/Profile/Profile";
import AddTest from "./components/AddTest/AddTest";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route exact path="/" element={<TestList />} />
          <Route exact path="/auth" element={<Login />} />
          <Route exact path="/password" element={<PasswordSetting />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/add" element={<AddTest />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
