import React, { useState } from 'react';
import './Sidebar.css'
import {
    
  
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    
    FaThList
}from "react-icons/fa";
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineHome} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    
    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<AiOutlineHome/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaThList/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/dash",
            name:"dash",
            icon:<BiTimeFive/>
        },
        {
            path:"/signup",
            name:"Product List",
            icon:<FaUserAlt/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <BiMenuAltRight onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;