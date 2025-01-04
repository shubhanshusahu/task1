import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = ({ openSidebar, setOpenSidebar }) => {
    return (
        <div className='navbar'>
            <div className="leftNav">


                <IconButton  onClick={()=>setOpenSidebar(!openSidebar)}>
                    <MenuIcon color={'#898989'} />

                </IconButton>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                </div>
            </div>
            <div className='rightNav'>
                <IconButton aria-label="Example">
                    <HelpIcon color={'#898989'} />
                </IconButton>

                <IconButton aria-label="Example">
                    <NotificationsIcon color={'#898989'} />
                </IconButton>
                <img className='userimg' src="/assets/user.jpg" width='27' />
                <div className="namecontainer">
                    <div className='applicantname'>
                        Arohi Singh
                    </div>
                    <p className='role'> Applicant</p>
                </div>



            </div>

        </div>
    )
}

export default Navbar