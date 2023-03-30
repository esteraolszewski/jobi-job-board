import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Numbers from '../components/Numbers';
import NewListing from '../components/NewListing';
import TrustedStartups from '../components/TrustedStartups';
import Find from '../components/Find';
import Questions from '../components/Questions';
import Footer from '../components/Footer';


const Home =() => {
    return (
        <div>
            <Header/>
            <Categories/>
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