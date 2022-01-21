import React from 'react';
import './sidebar.css'

function Sidebar(){
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>Home</li>
                        <li className='sidebarListItem'>Analystics</li>
                        <li className='sidebarListItem'>DB</li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Settings</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>User</li>
                        <li className='sidebarListItem'>Products</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;