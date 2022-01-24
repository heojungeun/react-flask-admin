import React from 'react';
import './sidebar.css'
import {Link, NavLink} from 'react-router-dom'

function Sidebar(){
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <NavLink 
                                exact="true"
                                activeclassname='active' 
                                to='/'>
                                    Home
                            </NavLink>
                        </li>
                        <li className='sidebarListItem'>Analystics</li>
                        <li className='sidebarListItem'>DB</li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Settings</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <NavLink 
                                activeclassname='active' 
                                to='/user'>
                                    User
                            </NavLink>
                        </li>
                        <li className='sidebarListItem'>Products</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;