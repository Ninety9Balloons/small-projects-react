import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import LargeCardContainer from './components/LargeCardContainer'
import SmallCardContainer from './components/SmallCardContainer'

export default function SocialMediaDashboard() {
  // Makes dark mode default
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, [])


  return (
    // Main Container
    <div className="bg-light-white dark:bg-very-dark-blue-bg dark:text-white w-full h-full min-h-screen flex justify-center">
      {/* Content Container */}
      <div className=' flex flex-col p-5 w-full max-w-[400px] md:max-w-[1200px]'>
        <Header />

        {/* Large Cards */}
        <LargeCardContainer />

        {/* Small Cards */}
        <SmallCardContainer />
      </div>
    </div>
  )
}
