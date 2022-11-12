// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



function App() {

  return (
    <div>
      <Navbar />
      <div className="container">
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
            <Route path="/search/:formData" element={<SearchResultsPage />} /> 
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
