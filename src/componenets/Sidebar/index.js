import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logoR from '../../assets/images/logoR.png';
import Raelo from '../../assets/images/Raelo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faHome,
    faUser,
    faFolder,
    faEnvelope,
    faBars, } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
       
  <div className='nav-bar'>
    <Link className='logo'  to='/'>
        <img src={logoR} alt='logo' />
  
    </Link>
   

    <nav className='nav-links'>
    <NavLink exact="true" activeclassname="active" to='/Home'>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" class="resumeLink" to='/Resume'>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" class="projectsLink" to='/projects'>
        <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" class="contactLink" to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </NavLink>
    </nav>
    <ul>
        <li>
        <a href='https://www.linkedin.com/in/traeburn058/' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-linkedin' ></i>
        </a>
        </li>
        <li>
        <a href='https://github.com/TrentLe' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-github' ></i>
        </a>
        </li>
        </ul>
  </div>
  
  )

}

export default Sidebar;