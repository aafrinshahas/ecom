
import { icons } from '../utilis/icons';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Dashboardcontext } from '../context/DashboardContextProvider';
import { useContext } from 'react';

const TopNav = () => {
  const { theme, toggleTheme } = useTheme();
  const {desktopLeftPanel, desktopRightPanel, showSearch, handleDesktopToggleLeft, handleDesktopToggleRight, handleShowSearch, handleCloseSearch} = useContext(Dashboardcontext)

 const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname)
  const pathSegments = pathname.split('/').filter(Boolean); // ["order"]
  const value = pathSegments[pathSegments.length - 1];

  return (
    <div className='hidden min-[1023px]:block'>
    <div className='flex items-center justify-between py-5 px-7 border-b border-b-[#1C1C1C1A] dark:border-b-[#FFFFFF1A]'>
      {/* left */}
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1.5'>
          <img
            src={icons.leftSide[theme]}
            alt='Left side bar'
            className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md w-[28] h-[28] cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66]'
             onClick={handleDesktopToggleLeft}
          />
          <img
            src={icons.star[theme]}
            alt='Star'
            className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md w-[28] h-[28] cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66]'
          />
        </div>

        <div className='flex gap-2 items-center'>
          <p
            style={{ color: 'var(--breadcrumb)' }}
            className='font-normal text-sm hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] py-1 px-1.5 rounded-md '
          >
            <Link to="/">Dashboards</Link>
            
          </p>
          <p style={{ color: 'var(--breadcrumb-separator)' }}>/</p>
          <p
            style={{ color: 'var(--breadcrumb-active)' }}
            className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] py-1 px-1.5 rounded-md font-normal text-sm capitalize'
          >
            {
              value ? <Link to={`/${value}`}>{value}</Link> : 'Default'
            }
            
            
          </p>
        </div>
      </div>

      {/* right */}
      <div className='flex items-center gap-4'>
        {/* search for desktop and larger screen upto 1040px */}
        <div className='min-[1140px]:block hidden'>
        <div
          className='flex items-center py-1 px-2 text-black dark:text-white rounded-lg w-40 h-full transition-all duration-200 ease-in-out
             hover:shadow-sm focus-within:shadow-md
             dark:hover:shadow-[#FFFFFF66]
             hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]
             active:scale-[0.98]'
          style={{ background: 'var(--search-bg)' }}
        >
          <div className='flex gap-1 justify-between items-center w-full h-full '>
            <img src={icons.search[theme]} alt='Search icon' />
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent outline-none w-full h-full text-sm placeholder:text-[#1C1C1C33] dark:placeholder:text-[#FFFFFF33]'
            />
          </div>
          <img src={icons.text[theme]} />
        </div>
        </div>


     {/* search icon for medium to sm screen */}
     <div className='relative min-[1140px]:hidden block'>
      

             {
              showSearch ? <img src={icons.search[theme]} alt='Search icon' className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md w-[28] h-[28] cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66]'
             onClick={handleShowSearch}/> : (
              
<div className='flex items-center py-2 px-3 text-black dark:text-white rounded-lg w-40 h-[35px] transition-all duration-200 ease-in-out
             hover:shadow-sm focus-within:shadow-md
             dark:hover:shadow-[#FFFFFF66]
bg-gray-200 dark:bg-neutral-800
             active:scale-[0.98] absolute -top-4 right-0 z-50'
         
        >
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent outline-none w-full h-full text-sm placeholder:text-[#1C1C1C33] dark:placeholder:text-[#FFFFFF33]'
            />

           <button onClick={handleCloseSearch} className='cursor-pointer text-[#1C1C1C33] dark:text-[#FFFFFF33] font-semibold text-md transition-all duration-300 hover:text-[#1c1c1c] dark:hover:text-[#fff] p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
</div>
              )

             }
     </div>




 

        {/* icons */}
        <img src={icons.theme[theme]} alt='Theme icon' 
        onClick={toggleTheme}
        className='cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66] hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
        />
        <img src={icons.clockwise[theme]} alt='Clockwise' 
         className='cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66] hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
        />
        <img src={icons.notification[theme]} alt='Notification' 
         className='cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66] hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
        />
        <img src={icons.rightSide[theme]} alt='Right side' 
         className='cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66] hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
             onClick={handleDesktopToggleRight}
        />
      </div>
    </div>
    </div>

  );
};

export default TopNav;
