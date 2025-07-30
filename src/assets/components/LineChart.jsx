import RevenueChart from "./RevenueChart";

const LineChart = () => {
    return(

<div
  className="bg-[#F7F9FB] py-4 md:py-6 pl-4 pr-6 rounded-2xl dark:bg-[#FFFFFF0D]
  dark:backdrop-blur-sm w-full h-full
  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
  hover:shadow-lg hover:-translate-y-[2px] active:scale-[0.99]
  dark:hover:shadow-[0_6px_20px_rgba(255,255,255,0.08),0_2px_10px_rgba(200,200,200,0.05)]
  group"
>
  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-2 mb-4">
    <p className="text-[#1C1C1C] font-semibold text-sm dark:text-white md:pl-4 pl-0">
      Revenue
    </p>
    <p className="text-[#1C1C1C33] dark:text-[#FFFFFF33] hidden sm:block">|</p>

    <div className="flex items-center gap-1.5 mr-3 transition-transform group-hover:translate-y-[-1px]">
      <div className="w-2 h-2 bg-[#1C1C1C] rounded-full dark:bg-[#C6C7F8]"></div>
      <p className="text-[#1C1C1C] text-xs font-normal dark:text-white">
        Current Week <span className="font-semibold">$58,211</span>
      </p>
    </div>

    <div className="flex items-center gap-1.5 transition-transform group-hover:translate-y-[-1px]">
      <div className="w-2 h-2 bg-[#A8C5DA] rounded-full transition-all duration-300 hover:scale-125 active:scale-125"></div>
      <p className="text-[#1C1C1C] text-xs font-normal dark:text-white">
        Previous Week <span className="font-semibold">$68,768</span>
      </p>
    </div>
  </div>

  <div
    className="w-full h-full relative"
  >
    <RevenueChart />
  </div>
</div>


    )
}

export default LineChart;