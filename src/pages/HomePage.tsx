import React from 'react'
import ViewAllJobs from '../components/ViewAllJobs'
import JobListings from '../components/JobListings'
import HomeCard from '../components/HomeCard'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <>

      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Developers and Employers --> */}
      <HomeCard />

      {/* <!-- Browse Jobs --> */}
      <JobListings isHome />

      <ViewAllJobs />
    </>
  )
}

export default HomePage