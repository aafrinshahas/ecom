import { icons } from "../utilis/icons";
import { useTheme } from "../context/ThemeContext";

const Cards = () => {
const { theme } = useTheme();

const cardData = [
{
title: "Customers",
value: "3,781",
percentage: "+11.01%",
icon: icons.blackUpStock,
bg: "bg-[#E3F5FF]",
darkBg: "dark:bg-[#E3F5FF]",
textColor: "text-[#1C1C1C]",
},
{
title: "Orders",
value: "1,219",
percentage: "-0.03%",
icon: icons.order[theme],
bg: "bg-[#F7F9FB]",
darkBg: "dark:bg-[#FFFFFF0D]",
textColor: "text-[#1C1C1C] dark:text-[#FFFFFF]",
},
{
title: "Revenue",
value: "$695",
percentage: "+15.03%",
icon: icons.revenue[theme],
bg: "bg-[#F7F9FB]",
darkBg: "dark:bg-[#FFFFFF0D]",
textColor: "text-[#1C1C1C] dark:text-[#FFFFFF]",
},
{
title: "Growth",
value: "30.1%",
percentage: "+6.08%",
icon: icons.blackUpStock,
bg: "bg-[#E5ECF6]",
darkBg: "dark:bg-[#E5ECF6]",
textColor: "text-[#1C1C1C]",
},
];

return (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{cardData.map((card, index) => (
<div
key={index}
className={`rounded-2xl p-4 lg:p-4 xl:p-5 ${card.bg} ${card.darkBg} ${card.textColor} 
dark:backdrop-blur-sm
transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
hover:shadow-lg hover:-translate-y-[2px] active:scale-[0.99]
dark:hover:shadow-[0_6px_20px_rgba(255,255,255,0.08),0_2px_10px_rgba(200,200,200,0.05)]
group
flex
flex-col justify-evenly
`}
>
<p className="font-semibold text-sm mb-2.5">{card.title}</p>
<div className="group">

<div className="relative flex items-center justify-between gap-2 rounded-lg  group-hover:bg-[#1C1C1C0D] dark:group-hover:bg-[#FFFFFF1A] transition-all duration-300 group-hover:flex-row-reverse p-1.5">
<p className="xl:text-2xl lg:text-md text-md font-semibold transition-all duration-300 transform group-hover:translate-x-2">
{card.value}
</p>
<div className="flex items-center gap-1 transition-all duration-300 transform group-hover:-translate-x-2 ">
<p className="text-xs font-normal">{card.percentage}</p>
<img src={card.icon} alt={`${card.title} Arrow`} />
</div>
</div>

</div>
</div>
))}
</div>
);
};

export default Cards;
