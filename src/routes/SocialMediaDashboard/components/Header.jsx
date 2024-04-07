import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:mb-6'>
      {/* // Header */}
      <div className='flex flex-col py-3 border-b-[1px] md:border-0 dark:border-desaturated-blue'>
        <h1 className='text-2xl font-bold'>Social Media Dashboard</h1>
        <p className='dark:text-desaturated-blue text-dark-grayish-blue font-bold text-sm'>Total Followers: 23,000</p>
      </div>

      {/* // Dark Mode Toggle */}
      <DarkModeToggle />
    </div>
  )
}