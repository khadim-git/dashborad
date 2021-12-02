import MenuJson from '../../../../JsonData/MenuJson'
import { Link} from 'react-router-dom';

const InerFace = () =>{
    const MenuData =  MenuJson[0]
console.log(MenuData.items_inner[0])
     return(
         <>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                {MenuData.elementheading}
                </div>
                <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className={`fas fa-fw ${MenuData.icon}`}></i>
                    <span>{MenuData.items_perent}</span>
                </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            {MenuData.items_child.map((items,key) =>{
                                return(
                                    <>
                                    <Link  className="collapse-item" to={items.path}> {items.name}</Link>
                                    </>
                                )

                            })}

                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className={`fas fa-fw ${MenuData.items_inner[0].icon}`}></i>

                        <span>{MenuData.items_inner[0].items_perent}</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            {MenuData.items_inner[0].items_child.map((items,key) =>{
                                return(
                                    <>
                                    <Link  className="collapse-item" key={key} to={items.path}> {items.name}</Link>
                                    </>
                                )

                            })}
                        </div>
                    </div>
                </li>
        </>

     )
 }

 export default InerFace