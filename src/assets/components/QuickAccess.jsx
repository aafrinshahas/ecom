import { Link } from "react-router-dom";

const QuickAccess = () => {
    return(
        <div className="pb-3 mb-1 text-sm font-normal">
            <div className="flex items-center gap-2.5 mb-1.5">
                <p className="p-1 rounded-lg text-[#1C1C1C66] dark:text-[#FFFFFF66] cursor-pointer">Favorites</p>
                <p className="p-1 rounded-lg text-[#1C1C1C33] dark:text-[#FFFFFF66] cursor-pointer">Recently</p>
            </div>
            <ul className="text-[#1C1C1C] list-disc list-inside dark:text-[#FFFFFF]">
                <li className="custom-disc py-1 px-2 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]
    hover:shadow-sm dark:hover:shadow-[#FFFFFF66] mt-2 hover:bg-gray-50 dark:hover:bg-[#FFFFFF0F]"><Link to="/">Overview</Link></li>
                <li className="custom-disc py-1 px-2 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]
    hover:shadow-sm dark:hover:shadow-[#FFFFFF66] hover:bg-gray-50 dark:hover:bg-[#FFFFFF0F]"><Link to="/">Projects</Link></li>
            </ul>
        </div>
    )
}

export default QuickAccess;