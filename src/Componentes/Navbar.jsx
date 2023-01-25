import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import CartWidget from './CartWidget';


const NavBar = ()=>{
    return(
        <>
        <header>
            
        </header>
    <div className =''>
        <ul className='navbar'>
        <li className=''><a href="">Inicio</a></li>
        <li className=''><a href="">Sobre Nosotros</a></li>
        <li className=''><a href="">Catalogo</a></li>
        <li className=''><a href="">Contacactanos</a></li>
        <li><CartWidget/></li>
        </ul>
    </div> 
    </>)
}
export default NavBar; 