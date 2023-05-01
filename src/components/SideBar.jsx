import React from "react";
import { FaFire, FaPlus, FaPoop,FaBolt, FaCog} from 'react-icons/fa'
function SideBar() {
  return (
    <div className=" fixed top-0 left-0 h-screen w-16 
     bg-gray-900 shadow-lg flex flex-col ">
    <SideBarIcons icon={ <FaFire size='30'/>}/>
    <div className='w-full border-b  border-gray-800 my-2  '></div>
    <SideBarIcons icon={ <FaPlus size='30'/>}/>
    <SideBarIcons icon={ <FaBolt size='30'/>}/>
    <SideBarIcons icon={ <FaPoop size='30'/>}/>
    <div className='w-full border-b  border-gray-800 my-2  '></div>
    <SideBarIcons icon={ <FaCog size='30'/>}/>
    </div>
  );
}

const SideBarIcons = ({ icon , text = 'Tooltip 💡'}) => (
 <div className = 'sidebar-icon group'>
{ icon}
<span className='sidebar-tooltip group-hover:scale-100'>
     {text }
 </span>
 </div>
)


export default SideBar;
