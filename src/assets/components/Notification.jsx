import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";

const Notification = () => {
const {notifications} = useContext(Dashboardcontext)
return(
<div className="text-sm font-normal mb-5">
<div className="text-[#1C1C1C] py-2 mb-2 dark:text-[#FFFFFF] font-semibold">Notifications</div>
<div className="space-y-3">
{notifications.map((notify)=>{
return(
<div className="flex items-start gap-2 py-2 px-1.5 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]
hover:shadow-sm dark:hover:shadow-[#FFFFFF66] cursor-pointer">
<div className="bg-[#E3F5FF] p-1 rounded-lg w-6 h-6">
<img src={notify.icon} alt="icons"/>
</div>

<div>
<p className="text-[#1C1C1C] text-sm dark:text-[#FFFFFF] ">{notify.message}</p>
<span className="text-[#1C1C1C66] text-xs dark:text-[#FFFFFF66]">{notify.timing}</span>
</div>
</div>
)
})}
</div>

</div>
)
}

export default Notification;