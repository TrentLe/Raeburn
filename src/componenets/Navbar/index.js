import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import logoR from '../../assets/images/logoR.png';
import Raelo from '../../assets/images/Raelo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faHome,
    faUser,
    faFolder,
    faEnvelope,
    faBars,
    faImage } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
    <div className='nav-bar-mobile'>
    <nav className='nav-links-mobile'>
<NavLink exact="true" activeclassname="active" to='/Home'>
  <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
</NavLink>
<NavLink exact="true" activeclassname="active" class="resumeLink" to='/Resume'>
  <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
</NavLink>
<NavLink exact="true" activeclassname="active" class="projectsLink" to='/Gallery'>
        <FontAwesomeIcon icon={faImage} color="#4d4d4e" />
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

export default Navbar;