import BarChart from "./BarChart";
import Cards from "./Cards";
import LineChart from "./LineChart";
import Map from "./Map";
import PieChart from "./PieChart";
import ProductList from "./ProductList";

const Ecomm = () => {
return (
<div className="pt-7 px-4 md:px-7">
<h2 className="text-[#1C1C1C] text-sm mb-4 font-semibold dark:text-[#FFFFFF]">
eCommerce
</h2>

{/* Top Row: Cards and Bar Chart */}
<div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
    <Cards />
    <BarChart/>
</div>

{/* Middle Row: Line Chart and Map */}
 <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
    <div className="xl:col-span-2">
 <LineChart />
    </div>
   
    <Map />
 </div>

{/* Bottom Row: Product List and Pie Chart */}
 <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
    <div className="xl:col-span-2">
<ProductList />
    </div>
   
 <PieChart />
 </div>

</div>
);
};

export default Ecomm;
