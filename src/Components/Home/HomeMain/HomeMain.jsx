import React from 'react';
import HomeMainBanner from './HomeMainBanner/HomeMainBanner';
import HomeMainSkill from './HomeMainSkill/HomeMainSkill';
import HomeMainContact from './HomeMainContact/HomeMainContact';

const HomeMain = () => {
    return (
        <div>
            <HomeMainBanner />
            <HomeMainSkill />
            <HomeMainContact />
        </div>
    );
};

export default HomeMain;