import { useTheme } from "../context/ThemeContext";
import { icons } from "../utilis/icons";
const OrderFunctionality = ({ searchTerm, onSearchChange }) => {
const { theme } = useTheme();

return (
<div className="bg-[#F7F9FB] p-2 rounded-lg w-full flex items-center justify-between dark:bg-[#FFFFFF0D] mb-2">
<div className="flex items-center gap-1">
<img src={icons.add[theme]} alt="Add icon" className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF1A]" />
<img src={icons.filter[theme]} alt="Filter icon" className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF1A]" />
<img src={icons.short[theme]} alt="Sort icon" className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md cursor-pointer transform transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:scale-110 active:scale-95 hover:shadow-md dark:hover:shadow-[#FFFFFF1A]" />
</div>
<div className="flex items-center py-1 px-2 text-black dark:text-white rounded-lg w-26 sm:w-40 h-full border border-[#1C1C1C1A] bg-[#FFFFFF66] dark:border-[#FFFFFF1A] dark:bg-[#1C1C1C66] transition-all duration-200 ease-in-out focus-within:shadow-md hover:shadow-sm active:scale-[0.98] dark:hover:shadow-[#FFFFFF66]">
<div className="flex gap-1 justify-between items-center w-full h-full">
<img src={icons.search[theme]} alt="Search icon" />
<input
type="text"
placeholder="Search"
value={searchTerm}
onChange={onSearchChange}
className="bg-transparent outline-none w-full h-full text-sm placeholder:text-[#1C1C1C33] dark:placeholder:text-[#FFFFFF33]"
/>
</div>
</div>
</div>
);
};

export default OrderFunctionality;
