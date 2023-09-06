import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate from react-router-dom
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import UsersList from "./Pages/UsersList";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage"; // Import the SignupPage component
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect / to /login */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
