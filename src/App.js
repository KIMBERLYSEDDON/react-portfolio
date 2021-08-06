import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import PortfolioRender from "./components/PortfolioRender";
import bgImg from "./images/bgclouds.jpg"
export default function App() {

    return (
<div style={{backgroundImage: "url(" + bgImg + ")", backgroundSize: "cover"}}>
<Header />
<div  className="container p-3">
<PortfolioRender />
</div>
<Footer />
</div>
    )

}
