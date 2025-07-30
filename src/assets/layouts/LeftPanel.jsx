import Profile from "../components/Profile";
import QuickAccess from "../components/QuickAccess";
import DashboardMenu from "../components/DashboardMenu";
import Pages from "../components/Pages";
import { icons } from '../utilis/icons';
import { useTheme } from '../context/ThemeContext';
const LeftPanel = () => {
const { theme, toggleTheme } = useTheme();
return(
<div>
<Profile/>
<div className='lg:hidden block my-4'>
<div
className='flex items-center py-2.5 px-3 text-black dark:text-white rounded-lg w-full h-full transition-all duration-200 ease-in-out
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


<QuickAccess/>
<DashboardMenu/>
<Pages/>



</div>
)
}

export default LeftPanel;