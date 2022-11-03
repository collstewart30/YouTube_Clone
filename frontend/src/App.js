// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCommentPage from "./pages/AddCommentPage/AddCommentPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



function App() {

  return (
    <div>
      <Navbar />
      <div className="container">
          <div>
            <h2>Search Videos </h2>
            <SearchBar />
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
            <Route path="/video/:videoId" element={<VideoPage />} />
            <Route path="/search" element={<SearchResultsPage />} /> 
            <Route 
              path="/addcomment" 
              element={
                <PrivateRoute>
                  <AddCommentPage />
                </PrivateRoute>} 
                />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
