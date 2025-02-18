import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="sidebar">
      <p>Data</p>
      <p>Project wise Data</p>
      <p>5 days Delta</p>
      <Link to="/upload-excel">
        <p>Upload Excel</p>
      </Link>
    </div>
  );
};

export default Navbar;
