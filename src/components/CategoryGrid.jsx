import React from "react";
import "./CategoryGrid.css"; // Optional: use your own styling here

const categories = [
  { name: "Development & IT", rating: "4.85/5", skills: 1853, link: "#" },
  { name: "AI Services", rating: "4.8/5", skills: 294, link: "#" },
  { name: "Design & Creative", rating: "4.91/5", skills: 968, link: "#" },
  { name: "Sales & Marketing", rating: "4.77/5", skills: 392, link: "#" },
  { name: "Writing & Translation", rating: "4.92/5", skills: 505, link: "#" },
  { name: "Admin & Customer Support", rating: "4.83/5", skills: 436, link: "#" },
  { name: "Finance & Accounting", rating: "4.87/5", skills: 389, link: "#" },
  { name: "Engineering & Architecture", rating: "4.85/5", skills: 650, link: "#" },
];

const CategoryGrid = () => {
  return (
    <section className="category-section">
      <h2>Browse talent by category</h2>
      <p className="subtitle">
        Looking for work? <a href="#">Browse jobs</a>
      </p>
      <div className="category-grid">
        {categories.map((category, index) => (
          <a key={index} href={category.link} className="category-card">
            <h3>{category.name}</h3>
            <div className="rating">
              <span className="star">★</span> {category.rating}
            </div>
            <p>{category.skills} skills</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
