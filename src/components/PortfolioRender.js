import React, { useState } from 'react';
import About from './About'
import Contact from './Contact'
import NavBar from './Navigation';
import Project from './Project'
import projects from '../projects';
import Resume from './Resume'

export default function PortfolioRender() {

  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    console.log(currentPage)
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project projects={projects}/>;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
    return <Resume />
  };


  return (
    <div>
<NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
{renderPage()}
    </div>
  );
}
