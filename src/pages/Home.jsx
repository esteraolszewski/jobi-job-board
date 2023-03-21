import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Numbers from '../components/Numbers';
import NewListing from '../components/NewListing';
import TrustedStartups from '../components/TrustedStartups';
import Find from '../components/Find';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Numbers/>
            <NewListing/>
            <TrustedStartups/>
            <Find/>
            <Questions/>
            <Footer/>
        </div>
    );
};

export default Home;