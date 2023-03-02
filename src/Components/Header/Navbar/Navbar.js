import './Navbar.scss'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <div className='navbar'>
            <ul className='navbar__navContainer'>
                <li>
                    <NavLink to='/' className='navbar__link'>home</NavLink>
                </li>
                <li>
                    <NavLink to='/shop' className='navbar__link'>shop</NavLink>
                </li>
                <li>
                    <NavLink to='/checkout' className='navbar__link'>checkout</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;