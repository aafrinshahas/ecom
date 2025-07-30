import { icons } from '../utilis/icons';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Dashboardcontext } from '../context/DashboardContextProvider';
import { useContext } from 'react';
const StackTopNav = () => {
const { theme, toggleTheme } = useTheme();
const { handleMenuToggle, handleMoreToggle} = useContext(Dashboardcontext)

const location = useLocation();
const pathname = location.pathname;
console.log(pathname)
const pathSegments = pathname.split('/').filter(Boolean); // ["order"]
const value = pathSegments[pathSegments.length - 1];
return(
<div className="sticky top-0 bg-[#FFFFFF] dark:bg-[#000] shadow-md z-50">
<div className='flex items-center justify-between py-4 px-4 border-b border-b-[#1C1C1C1A] dark:border-b-[#FFFFFF1A]'>
<div className='flex items-center gap-1'>
<div className="arrow-icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>


</div>
<p
style={{ color: 'var(--breadcrumb-active)' }}
className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] py-1 px-1.5 rounded-md font-normal text-sm capitalize'
>
{
value ? <Link to={`/${value}`}>{value}</Link> : 'Default'
}

</p>
</div>

<div className='flex items-center gap-2'>

<img
src={icons.star[theme]}
alt='Star'
className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md  cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66]'
/>
{/* theme icons */}
<img src={icons.theme[theme]} alt='Theme icon' 
onClick={toggleTheme}
className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md  cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66]'
/>
{/* menu icons */}
<div className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md  cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66]'
onClick={handleMenuToggle}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>
{/* more icons */}
<div className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md  cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF66] '
onClick={handleMoreToggle}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>

</div>


</div>
</div>
</div>
)
}

export default StackTopNav;