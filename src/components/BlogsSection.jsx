import React from 'react';
import './BlogsSection.css';  // Import the CSS for styling

const BlogsSection = () => {
  return (
    <div className="blogs-section">
      <h2>Our Latest Blogs</h2>
      <div className="blogs-container">
        <div className="blog-card">
          <h3>Blog Title 1</h3>
          <p>Brief description or intro to the blog.</p>
        </div>
        <div className="blog-card">
          <h3>Blog Title 2</h3>
          <p>Brief description or intro to the blog.</p>
        </div>
        <div className="blog-card">
          <h3>Blog Title 3</h3>
          <p>Brief description or intro to the blog.</p>
        </div>
        
        {/* Add more blog cards as needed */}
      </div>
    </div>
  );
}

export default BlogsSection;
