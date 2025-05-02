import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import BidPage from "./pages/BidPage";

import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ProfilePage from './pages/ProfilePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/bid" element={<BidPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// import Home from "./pages/Home";

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;
