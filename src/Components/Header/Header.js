import './Header.scss'

// Components
import Navbar from './Navbar/Navbar';

function Header() {
    return (
        <div className='header'>        
            <div className="header__hContain">
                <h1 className="header__title">fshn</h1>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header;