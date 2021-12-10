
import AdminInfo from './AdminInfo/AdminInfo'
import Dashboard from './Dashboard/Dashboard'
import InterFace from './InterFace/InterFace'
import Addons from './Addons/Addons'
import Tables from './Tables/Tables'
import Charts from './Charts/Charts'

import SidebarToggleButton from './SidebarToggleButton/SidebarToggleButton'
import MenuJson from '../../../JsonData/MenuJson'
import { Link} from 'react-router-dom';
const SideMenuItems = () =>{
    console.log(MenuJson)
    return(
        <>

        {
        MenuJson.map((item,key) =>{
            return(
                <>
                  <hr className="sidebar-divider"/>
                            <div className="sidebar-heading">
                            {item.elementheading}
                            </div>
                    {
                      item.items.map((element,key) =>{
                           return(
                                <li className="nav-item">
                                    {element.datatarget ?  (<a className="nav-link collapsed" href="/" data-toggle="collapse" data-target={element.datatarget}
                                        aria-expanded="true" aria-controls={element.ariacontrols}>
                                        <i className={`fas fa-fw ${element.icon}`}></i>
                                        <span>{element.items_perent}</span>
                                        </a> ): (<Link to={element.path} >{element.name}</Link> )}
                                      {/* <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target={element.datatarget}
                                        aria-expanded="true" aria-controls={element.ariacontrols}>
                                        <i className={`fas fa-fw ${element.icon}`}></i>
                                        <span>{element.items_perent}</span>
                                    </a>                        */}
          
                                     {element.items_child && <div id={element.id} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">
                                            <h6 className="collapse-header">Custom Components:</h6>
                                            {element.items_child.map((Childitems,key) =>{
                                                return(
                                                    <>
                                                    <Link  className="collapse-item" to={Childitems.path}> {Childitems.name}</Link>
                                                    </>
                                                )

                                            })}

                                        </div>
                                    </div>
                      }
                                </li>
                                  )
                                    })}

                
                </>
            )
        })}
        <SidebarToggleButton/>
        </>

    )
}
 export default SideMenuItems;