// General Imports
import { Routes, Route } from "react-router-dom";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCommentPage from "./pages/AddCommentPage/AddCommentPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage"
import VideoPage from "./pages/VideoPage/VideoPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


import {KEY} from "./localKey";

function YouTubePage() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<SearchResultsPage />} /> 
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default YouTubePage;