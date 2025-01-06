
import React from 'react';
import SeoCarouselSlides from '../components/SeoCarouselSlides';
import SeoContact from '../components/SeoContact';
import SeoHeroSections from '../components/SeoHeroSections';
import ProcessSeo from '../components/ProcessSeo';
import SeoPricing from '../components/SeoPricing';
import SeoTypes from '../components/SeoTypes';

const Seo = () => {
    return (
        <>
        <SeoCarouselSlides/>
        <SeoContact/>
        <SeoHeroSections/>
        <ProcessSeo/>
        <SeoTypes/>
        <SeoPricing/>
        </>

    );
};

export default Seo;