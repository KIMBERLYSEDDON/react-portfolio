import React from 'react';
import "../styles/Navigation.css"

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item navLink">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
      
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item navLink">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Project')}
        
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item navLink">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item navLink">
        <a
          href="#resume"

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
