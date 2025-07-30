import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";
const ProductList = () => {
    const {productlist} = useContext(Dashboardcontext)
    return(
        <div className="bg-[#F7F9FB] p-4 md:p-6 rounded-2xl dark:bg-[#FFFFFF0D] 
        
        w-full h-full
         dark:backdrop-blur-sm
  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
  hover:shadow-lg hover:-translate-y-[2px] active:scale-[0.99]
  dark:hover:shadow-[0_6px_20px_rgba(255,255,255,0.08),0_2px_10px_rgba(200,200,200,0.05)]
  group overflow-x-auto scroll-smooth custom-scrollbar
        ">
           <p className="font-semibold text-sm mb-1 dark:text-[#FFFFFF]">Top Selling Products</p>
           <div className="overflow-x-auto scroll-smooth">
           <table className="w-full">
    
                        <thead className="border-b border-[#1C1C1C33] dark:border-[#FFFFFF33]">
                            <tr>
<th className="text-[#1C1C1C66] py-2.5 text-sm font-normal text-left w-[40%] dark:text-[#FFFFFF66] px-1">Name</th>
<th className="text-[#1C1C1C66] py-2.5 text-sm font-normal text-left w-[20%] dark:text-[#FFFFFF66] px-1">Price</th>
<th className="text-[#1C1C1C66] py-2.5 text-sm font-normal text-left w-[20%] dark:text-[#FFFFFF66] px-1">Quantity</th>
<th className="text-[#1C1C1C66] py-2.5 text-sm font-normal text-left w-[20%] dark:text-[#FFFFFF66] px-1">Amount</th>
                            </tr>
                        
                        </thead>
                        <tbody>
                            {productlist.map((list)=>{
                                return(
                                    <tr className="transition-all duration-300 hover:bg-[#1C1C1C11] dark:hover:bg-[#FFFFFF0D] active:scale-[0.99] cursor-pointer">
                                        <td className="text-[#1C1C1C] text-xs py-3 text-left dark:text-[#FFFFFF] px-1">{list.name}</td>
                                        <td className="text-[#1C1C1C] text-xs py-3 text-left dark:text-[#FFFFFF] px-1">{list.price}</td>
                                        <td className="text-[#1C1C1C] text-xs py-3 text-left dark:text-[#FFFFFF] px-1">{list.quantity}</td>
                                        <td className="text-[#1C1C1C] text-xs py-3 text-left dark:text-[#FFFFFF] px-1">{list.amount}</td>
                            
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

           </div>

        </div>
    )
}

export default ProductList