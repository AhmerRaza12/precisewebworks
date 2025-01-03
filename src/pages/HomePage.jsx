import React from 'react'
import { Banner } from '../components/Banner'
import Services from '../components/Services'
import Contact from '../components/Contact'
import HeroSections from '../components/HeroSections'
import GetIntouch from '../components/GetIntouch'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio'

const HomePage = () => {
  return (
    <>
    <Banner />
    <Services/>
    <Contact    />
    <Features/>
    <Portfolio/>
    <HeroSections />
    <GetIntouch />
    </>
  )
}

export default HomePage