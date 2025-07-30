import { Link } from "react-router-dom";
import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";

const DashboardMenu = () => {
  const { menuItems, active, setActive, arrow } = useContext(Dashboardcontext);

  return (
    <div className="text-sm font-normal mb-3">
      <div className="text-[#1C1C1C66] py-1 px-2 mb-2 dark:text-[#FFFFFF66]">Dashboards</div>
      <ul className="space-y-1.5">
        {menuItems.map((item) => (
          <Link key={item.label} to={item.path}>
            <li
              onClick={() => setActive(item.label)}
              className={`flex items-start gap-1.5 cursor-pointer px-1 py-2 mb-2 rounded-lg relative transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]
    hover:shadow-sm dark:hover:shadow-[#FFFFFF66] ${
                active === item.label
                  ? "bg-[#1C1C1C0D] text-[#1C1C1C] dark:text-[#FFFFFF] dark:bg-[#FFFFFF1A]"
                  : "text-[#1C1C1C] hover:bg-gray-50 dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF0F]"
              }`}
            >
              <div
                className={`h-4 w-1 rounded-full transition-all duration-200 ease-in-out transform ${
                  active === item.label ? "bg-[#1C1C1C] dark:bg-[#C6C7F8] scale-y-100" : "bg-transparent scale-y-0"
                }`}
              ></div>

              <img
                src={arrow}
                 className={`w-4 h-4 transition-opacity duration-200 ${active === item.label ? "opacity-0" : "opacity-100"}`}
                alt="arrow"
              />
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
              <span>{item.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DashboardMenu;
