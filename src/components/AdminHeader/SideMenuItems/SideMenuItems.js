
import AdminInfo from './AdminInfo/AdminInfo'
import Dashboard from './Dashboard/Dashboard'
import InterFace from './InterFace/InterFace'
import Addons from './Addons/Addons'
import Tables from './Tables/Tables'
import Charts from './Charts/Charts'

import SidebarToggleButton from './SidebarToggleButton/SidebarToggleButton'

const SideMenuItems = () =>{
    return(
        <>
        <AdminInfo/>
        <Dashboard/>
        <InterFace/>
        <Addons/>
        <Charts/>
        <Tables/>
        <SidebarToggleButton/>
        </>

    )
}
 export default SideMenuItems;