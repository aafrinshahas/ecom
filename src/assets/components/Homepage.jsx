import TopNav from "../layouts/TopNav";
import LeftPanel from "../layouts/LeftPanel";
import RightPanel from "../layouts/RightPanel";
import { Outlet } from "react-router-dom";
import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";
import StackTopNav from "../layouts/StackTopNav";


const HomePage = () => {

  const {desktopLeftPanel, desktopRightPanel, menuToggle, handleCloseMenu, moreToggle, handleCloseMore} = useContext(Dashboardcontext)

  return (
// layouts grid
<div
  className={`min-h-screen relative grid transition-all duration-300 ease-in-out
   ${
  desktopLeftPanel && desktopRightPanel
    ? 'lg:grid-cols-[220px_1fr_280px]'
    : desktopLeftPanel
    ? 'lg:grid-cols-[220px_1fr]'
    : desktopRightPanel
    ? 'lg:grid-cols-[1fr_280px]'
    : 'lg:grid-cols-[1fr]'
}

    lg:grid-cols-1 md:grid-cols-1 grid-cols-1 relative`}
>
   {/* leftside bar */}
   {
    desktopLeftPanel &&
  <aside className="w-[220px] h-full p-4 py-5 px-4 border-r border-[#1C1C1C1A] dark:border-[#FFFFFF1A] lg:block hidden">
     <LeftPanel />
  </aside>

   }
   {/* menu bar */}
   {menuToggle && (
<div
  className="w-[240px] md:w-[280px] fixed top-0 bottom-0 overflow-y-auto scroll-smooth custom-scrollbar z-[999999] h-full lg:hidden block inset-0"
>
  <div className="overlay" onClick={handleCloseMenu}></div>
<div className="slide-menu bg-gray-100 p-4 py-5 dark:bg-neutral-950">
                <div className="flex justify-end w-full">
<button
  class={`text-lg mb-4 active:bg-[#1C1C1C0D] dark:active:bg-[#FFFFFF1A] 
         p-1 rounded-md cursor-pointer transform transition duration-300 ease-in-out
         active:scale-95 shadow-sm active:shadow-md-[FFFFFF66] bg-[#A8C5DA] dark:bg-[#6B9EBF]`}
         onClick={handleCloseMenu}
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       stroke-width="1.5" stroke="currentColor" class="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
</button>

    </div>
          <LeftPanel/>
        </div>
</div>


      )} 
 


  {/* Main Content */}
  <main className="min-h-screen">
    <div className="lg:block hidden">
<TopNav />
    </div>
        <div className="lg:hidden block">
<StackTopNav/>
    </div>

<Outlet />
  </main>

  {/* Right Side bar */}
  {
    desktopRightPanel && 
  <aside className="w-[240px] md:w-[280px] h-full py-5 px-4 border-l border-[#1C1C1C1A] dark:border-[#FFFFFF1A] lg:block hidden">
  <RightPanel />
  </aside>

  }

     {/* menu bar */}
   {moreToggle && (
<div
  className="w-[280px] fixed top-0 bottom-0 overflow-y-auto scroll-smooth custom-scrollbar z-[999999] h-full lg:hidden block inset-0"
>
  <div className="overlay" onClick={handleCloseMore}></div>
<div className="slide-menu bg-gray-100 p-4 py-5 dark:bg-neutral-950">
                <div className="flex justify-end w-full">
<button
  class={`text-lg mb-4 active:bg-[#1C1C1C0D] dark:active:bg-[#FFFFFF1A] 
         p-1 rounded-md cursor-pointer transform transition duration-300 ease-in-out
         active:scale-95 shadow-sm active:shadow-md-[FFFFFF66] bg-[#A8C5DA] dark:bg-[#6B9EBF]`}
         onClick={handleCloseMore}
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       stroke-width="1.5" stroke="currentColor" class="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
</button>

    </div>
        <RightPanel/>
        </div>
</div>


      )} 

  
 </div>
  );
};

export default HomePage;
