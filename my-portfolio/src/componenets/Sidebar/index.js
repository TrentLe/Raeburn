import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logoR from '../../assets/images/logoR.png';
import Raelo from '../../assets/images/Raelo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
  <div className='nav-bar'>
    <Link className='logo'  to='/'>
        <img src={logoR} alt='logo' />
        <img className="sub-logo" src={Raelo} alt='Raeburn' />
    </Link>
    <nav className='nav-links'>
    <NavLink exact="true" activeclassname="active" to='/'>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" class="aboutLink" to='/about'>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" class="projectsLink" to='/projects'>
        <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" class="contactLink" to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </NavLink>
    </nav>
  </div>
  )

}

export default Sidebar;