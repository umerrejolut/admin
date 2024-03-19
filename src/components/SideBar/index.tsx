// import React, { useState } from "react";
// import SidebarMenu from "../SidebarMenu";
// import { useTranslation } from "react-i18next";

// export default function SideBar(){
//     const { t } = useTranslation()
//     const [index, setIndex] = useState();
//     return (
//         <div className="relative">
//             <div className="w-[240px] h-full border-r-[0.75px] border-r-lightprimary bg-background-blackmain">
//                 <div>
//                     <SidebarMenu 
//                     name={t("sidebar.menu.menu1")}
//                     index={0}
//                     activeIndex={index}
//                     onClick={(i) => setIndex(i)}
//                     />
//                     <SidebarMenu name="Loading"/>
//                     <SidebarMenu name="Admin Panel"/>
//                     <SidebarMenu name="Side Bar"/>
//                     <SidebarMenu name="Sidebar testing"/>
//                     <SidebarMenu name="Hero section"/>
//                     <SidebarMenu name="Common json"/>
//                     <SidebarMenu name="Play song"/>
//                     <SidebarMenu name="Submit"/>
//                 </div>
//             </div>
//         </div>
//     )
// }