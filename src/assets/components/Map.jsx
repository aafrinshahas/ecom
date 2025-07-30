const Map = () => {
return(
<div className="bg-[#F7F9FB] rounded-2xl dark:bg-[#FFFFFF0D] w-full h-full
p-4
md:p-6
 dark:backdrop-blur-sm
  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
  hover:shadow-lg hover:-translate-y-[2px] active:scale-[0.99]
  dark:hover:shadow-[0_6px_20px_rgba(255,255,255,0.08),0_2px_10px_rgba(200,200,200,0.05)]
  group
">

<div className="text-[#1C1C1C] text-sm font-semibold mb-4 dark:text-[#FFFFFF]">Revenue by Location</div>
<div className="map-container">
<div className="map">
<div class="dot ny"><div class="inner-dot"></div></div>
<div class="dot sf"><div class="inner-dot"></div></div>
<div class="dot sydney"><div class="inner-dot"></div></div>
<div class="dot sg"><div class="inner-dot"></div></div>

</div>

<div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-1
gap-4
 transition-all duration-700
">
<div>
<div className="location">
<span>New York</span><span>72K</span>
</div>
<div className="bar"><div className="bar-fill" style={{width: '75%'}}></div></div>
</div>

<div>
<div className="location">
<span>San Francisco</span><span>39K</span>
</div>
<div className="bar"><div className="bar-fill" style={{width: '38%'}}></div></div>
</div>

<div>
<div className="location">
<span>Sydney</span><span>25K</span>
</div>
<div className="bar"><div className="bar-fill" style={{width: '50%'}}></div></div>
</div>

<div>
<div className="location">
<span>Singapore</span><span>61K</span>
</div>
<div className="bar"><div className="bar-fill" style={{width: '65%'}}></div></div>
</div>



</div>


</div>


</div>
)
}

export default Map;