import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import Navbar from "../components/NavBar";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    skills: '',
    image: '',
  });

  const [userProfile, setUserProfile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const token = 'your-jwt-token-here';

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/profile/', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUserProfile(data);
        setFormData({
          name: data.name || '',
          bio: data.bio || '',
          skills: data.skills || '',
          image: data.image || '',
        });
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch('http://127.0.0.1:8000/api/profile/', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      setResponse(data);
      setUserProfile(data); // update display after saving
      alert('Profile saved successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">👤 Your Profile</h1>

        {userProfile ? (
          <div className="profile-card">
            <img src={userProfile.image || 'https://via.placeholder.com/150'} alt="Profile" />
            <h2>{userProfile.name}</h2>
            <p><strong>Bio:</strong> {userProfile.bio}</p>
            <p><strong>Skills:</strong> {userProfile.skills}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}

        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="skills" placeholder="Skills (e.g. React, Django)" value={formData.skills} onChange={handleChange} required />
          <textarea name="bio" placeholder="Short Bio" value={formData.bio} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Profile Image URL" value={formData.image} onChange={handleChange} />
          <button type="submit" className="submit-button">Save Profile</button>
        </form>

        {response && (
          <div className="success-message">
            <h2>Response:</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}

        {error && (
          <div className="error-message">
            <h2>Error:</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
