import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Particles from 'react-tsparticles';
import particlesConfig from "../../config/configParticles";


function Home () {
    return (
        <>
            <Particles className="particles" height="100vh" width="100vw" params={particlesConfig} />
            <HeroSection />
            <Card />
            <Footer />
        </>
    );
}

export default Home;