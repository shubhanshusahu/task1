import React, { useEffect, useState } from 'react'
import { SideBarItems } from './SideBarItems';
const Sidebar = ({ openSidebar, setOpenSidebar }) => {

    const [width, setWidth] = useState(window.innerWidth);
    let isMobile = width <= 768;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        // setOpenSidebar(!(width <= 768));
    }
    useEffect(() => {
        if (isMobile) {
            setOpenSidebar(false)
        }
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    return (
        <>


            <aside id="sidebar" className={openSidebar ? " sidebar z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" : 'sidebarHidden'} aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto">
                    <ul class="space-y-2 font-medium">
                        {SideBarItems.map(item =>
                            <li>
                                <div class=" sidebarItem flex items-center  p-2 rounded-lg text-gray-500
                                hover:text-blue-600
                                cursor-pointer
                                hover:bg-blue-50 transition duration-175 font-normal text-sm  group">
                                    {item.icon}
                                    <span class="ms-3">{item.name}</span>
                                </div>
                            </li>

                        )}
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar