// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCommentPage from "./pages/AddCommentPage/AddCommentPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

import {KEY} from "./localKey";



function App() {

  return (
    <div>
      <Navbar />
      <div>
        <h2>Search Videos </h2>
        {/* <SearchBar searchBarParent={searchBar}/> */}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/addcomment" 
          element={
            <PrivateRoute>
              <AddCommentPage />
            </PrivateRoute>} 
            />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
