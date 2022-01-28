import React, { useEffect } from 'react'
import logo  from '../assets/logo/webscript.png';
import { useState } from 'react';
import user from '../assets/user.jpg';
import MenuItem from './MenuItem';






const menusItems = [
    {name: 'Dashboard', to: '/', iconClassName: "bi bi-speedometer2" },
    {
        name: 'Content', 
        to : '/content',
        iconClassName: "bi bi-newspaper",
        subMenus: [
            {name: 'Courses',to: '/content/courses'}, 
            {name: 'Videos', to: '/content/videos'},
        ],
    },    
    {name: 'Design', to : '/design', iconClassName: "bi bi-palette" },
];    

const SideMenu = (props) => {

    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if(inactive){
            document.querySelectorAll('.sub-menu').forEach(element => {
                element.classList.remove('active');
            });
        }

        props.onCollapse(inactive);

    }, [inactive]);

    return (
        <div className = {`side-menu ${inactive ? 'inactive' : ""}`}>

            <div className = 'top-section'>
                <div className = 'logo'>
                    <img src = {logo} className = ''alt = ''/>
                </div>

                <div onClick={() => setInactive(!inactive)} className = 'toggle-menu-btn'>
                    {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>} 
                </div>    
            </div>

            <div className = 'search-controller'>

                <button className = 'search-btn'>
                        <i class="bi bi-search"></i>
                    </button>
                    
                <input type="text" placeholder="Search"/>
             </div>

             <div className = 'divider'></div>   
        
                <div className = 'main-menu'>
                    <ul>
                        {menusItems.map((menuItem, index) => (
                            <MenuItem 
                                key={index}
                                name = {menuItem.name}
                                tO = {menuItem.to}
                                subMenus = {menuItem.subMenus || []}
                                iconClassName = {menuItem.iconClassName}
                                onClick = {() => {
                                    if (inactive) {
                                        setInactive(false);
                                    }
                                }}
                            />
                        ))}






                       {/* <li>
                            <a className = 'menu-item'>

                                <div className = 'menu-icon'>
                                 <i class="bi bi-speedometer2"></i>
                                </div>
                                <span>Dashboard</span>
                                </a>
                        </li>

                        <MenuItem

                            name = {"Content"}
                            subMenus = {[{name: "Courses"}, {name: "Videos"}]}

                        />

                        <li>
                            <a className = 'menu-item'>

                                <div className = 'menu-icon'>
                                <i class="bi bi-palette"></i>
                                </div>
                                <span></span>Design
                                </a>
                        </li> //*/}
                    </ul>    

                </div>

                <div className = 'side-menu-footer'>

                    <div className = 'avatar'> 
                        <img src={user} alt="user"/>
                    </div>
                    <div className = 'user-info'>
                        <h5>Jahir Khan</h5>
                        <p>jahirk@icloud.com</p>
                    </div>    

                </div>
        
        </div>
    );
};

export default SideMenu;
