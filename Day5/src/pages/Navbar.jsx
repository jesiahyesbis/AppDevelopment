import '../assets/css/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
     <>

    <header className='navbar'>
        <div className='navbar__title navbar__item'>MERCADO</div>
        <div className='navbar__item'><Link to='/AboutUs'>About Us</Link></div>
        <div className='navbar__item'><Link to='/Contact'>Contact</Link></div>
        <div className='navbar__item'><Link to='/Login'>Login</Link></div>
              
    </header>
    </>
)
    }
    export default Navbar