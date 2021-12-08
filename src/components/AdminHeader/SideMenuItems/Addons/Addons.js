import MenuJson from '../../../../JsonData/MenuJson'
import { Link } from 'react-router-dom';

const Addons = () =>{
const MenuData =  MenuJson[1]

    return(
        <>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                    {MenuData.elementheading}
                </div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className={`fas fa-fw ${MenuData.icon}`}></i>
                        <span>{MenuData.items_perent}</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            {MenuData.items_child.map((items,key) =>{
                                return(
                                    < >
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

export default  Addons