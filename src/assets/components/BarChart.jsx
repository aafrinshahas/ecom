import ProjectionChart from "./ProjectionChart";

const BarChart = () => {
    return(

<div className="group bg-[#F7F9FB] py-4 md:py-6 pl-4 pr-6 rounded-2xl dark:bg-[#FFFFFF0D] dark:backdrop-blur-sm w-full h-full 
  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
  hover:shadow-lg hover:-translate-y-[2px] 
  dark:hover:shadow-[0_6px_20px_rgba(255,255,255,0.08),0_2px_10px_rgba(200,200,200,0.05)]">

  <p className="text-[#1C1C1C] font-semibold text-sm mb-4 pl-4 dark:text-white transition-colors duration-200 group-hover:text-[#fffff]">
    Projections vs Actuals
  </p>

  <div className="w-full h-[188px] relative rounded-lg hover:shadow-md transition-all duration-500 active:scale-[0.99] dark:hover:shadow-[0_2px_5px_rgba(255,255,255,0.08),0_2px_5px_rgba(200,200,200,0.05)]">
    <ProjectionChart />
  </div>
</div>


    )
}

export default BarChart;