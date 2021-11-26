import React from 'react';
import HomeProducts from '../../Home/HomeProducts/HomeProducts';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import HomeReviews from '../HomeReviews/HomeReviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Faq></Faq>
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default Home;