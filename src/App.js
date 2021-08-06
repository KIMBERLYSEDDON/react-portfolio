import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import PortfolioRender from "./components/PortfolioRender";
import bgImg from "./images/bgclouds.jpg"
export default function App() {

    return (
<div style={{backgroundImage: "url(" + bgImg + ")", backgroundSize: "cover", height: "100vh"}}>
<Header />
<PortfolioRender />;
<Footer />
</div>
    )

}
