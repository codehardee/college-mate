import React from 'react';
import blogs from '../utils/loadBlogs'; // new
import { Link } from 'react-router-dom';
import './BlogsPage.css';
import Navbar from "../components/NavBar";

const BlogsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="blogs-page container">
        
        <h2>All Blogs</h2>
        <div className="blogs-grid">
          {blogs.map(blog => (
            <div className="blog-card" key={blog.slug}>
              {/* Optional image if you add it to frontmatter later */}
              {/* <img src={blog.frontmatter.image} alt={blog.frontmatter.title} /> */}
              <h3>{blog.frontmatter.title}</h3>
              <p>{blog.frontmatter.intro}</p>
              
              <Link to={`/blogs/${blog.slug}`} className="btn">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
