// import React from 'react'
import Hero from "../Components/Home/Hero"
import TrendingServices from "../Components/Home/TrendingServices"
import '../Components/Home/home.css'
import ExploreCats from "../Components/Home/ExploreCats"
import ReadyToStart from "../Components/Home/ReadyToStart"
import Blogs from "../Components/Home/Blogs"
import HappUsers from "../Components/Home/HappUsers"
const Home = () => {
  return (
    <>
    <Hero />
    <TrendingServices />
    <ExploreCats  />
    <HappUsers />
    <ReadyToStart />
    <Blogs />
    </>
    
  )
}

export default Home