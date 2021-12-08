
import MenuJson from '../../../../JsonData/MenuJson'
import { Link } from 'react-router-dom';
 const Tabels = () =>{
 const MenuData =  MenuJson[1].items_inner[1]


     return(
         <>
         <li className="nav-item">
                    <Link className="nav-link" to={MenuData.path}>
                        <i className={`fas fa-fw ${MenuData.icon}`}></i>
                        <span>{MenuData.items_perent}</span></Link>
        </li>
         </>
     )
 }
 export default Tabels