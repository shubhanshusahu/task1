import DashboardIcon from '@mui/icons-material/Dashboard';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { Theme } from '../../data';


export const  SideBarItems = [
    {
        
        name :'Dashboard',
        icon : <DashboardIcon color={Theme.color}/>
    },
    {
        
        name :'Job Notification',
        icon : <CorporateFareIcon color={Theme.color}/>
    },
]