import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const MenuItem = (props) => {

    const { name, subMenus, iconClassName, onClick, to} = props;
    const [expand, setExpand] = useState(false);

  return (

    <li onClick={props.onClick}>
        <a to={to} onClick={() =>setExpand(!expand)} className = 'menu-item'>

            <div className = 'menu-icon'>
                <i class={iconClassName}></i>
            </div>
            <span>{name}</span>
        </a>

        {
           subMenus && subMenus.length > 0 ? (
                                    
            <ul className = {`sub-menu ${expand ? "active" : ""}`}>
                {subMenus.map((menu, index) => (
                <li key={index}>
                    <NavLink to={menu.to}>P{menu.name}  </NavLink>
                </li> 
                ))}
            </ul>    
           ) : null}
    </li>


    );
};

export default MenuItem;