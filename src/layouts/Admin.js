 import SideMenu from '../components/AdminHeader/SideMenuBar'
 import TopBar from '../components/AdminHeader/TopBar'
import Rotus from '../Rout/Routs';

 const Admin = () =>{
     return(
        <div id="wrapper">
    <SideMenu/>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <TopBar/>
    <div className="container-fluid">
        <Rotus/>
    </div>
    </div>
    </div>
    </div>
     )

 }
 export default Admin;