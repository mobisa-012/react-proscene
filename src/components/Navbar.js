import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logo from './assets/logo.png';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeAllDropdowns = () => {
    setIsSolutionsOpen(false);
    setIsSectorsOpen(false);
    setIsServicesOpen(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.navbar')) {
      closeAllDropdowns();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const solutionsSubMenuItems = [
    { label: 'Audio Visual Integration', href: '/avIntegration' },
    { label: 'Collaboration Solutions', href: '/collaborationSolutions' },
    { label: 'Digital Media', href: '/digitalMedia' },
    { label: 'Automation Solutions', href: '/automationSolutions' },
    { label: 'Interactive Technology', href: '/interactiveTechnology' },
  ];

  const sectorsSubMenuItems = [
    { label: 'Corporate', href: '/corporate' },
    { label: 'Education', href: '/education' },
    { label: 'Public Sector', href: '/publicSector' },
    { label: 'Healthcare', href: '/healthcare' },
    { label: 'Legal Collaboration', href: '/legalCollaboration' },
  ];

  const servicesSubMenuItems = [
    { label: 'Unified Communications', href: '/unifiedCommunications' },
    { label: 'Training and Support', href: '/trainingAndSupport' },
    { label: 'On-site Support', href: '/onSiteSupport' },
    { label: 'Equipment Repair', href: '/equipmentRepair' },
    { label: 'Leasing', href: '/leasing' },
    { label: 'Video Conference Rental', href: '/videoConferenceRental' },
  ];

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span>{isMenuOpen ? '✖' : '☰'}</span>
      </div>
      <div
        className={`overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <ul className={isMenuOpen ? 'show' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        <li
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          onClick={(e) => {
            e.stopPropagation();
            setIsSolutionsOpen(!isSolutionsOpen);
            setIsSectorsOpen(false);
            setIsServicesOpen(false);
          }}
          className={isSolutionsOpen ? 'showSubMenu' : ''}
        >
          <Link to="/solutions" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='pr-1'>Solutions</div><div> {isSolutionsOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
          </Link>
          {isSolutionsOpen && (
            <ul className={`submenu ${isDesktopOrLaptop ? 'submenu-fullwidth' : ''}`}>
              {solutionsSubMenuItems.map((item, index) => (
                <li key={index}><Link to={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          onClick={(e) => {
            e.stopPropagation();
            setIsServicesOpen(!isServicesOpen);
            setIsSolutionsOpen(false);
            setIsSectorsOpen(false);
          }}
          className={isServicesOpen ? 'showSubMenu' : ''}
        >
          <Link to="/services" style={{ display: 'flex', justifyContent: 'space-between' }}>
           <div className='pr-1'> Services</div><div> {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
          </Link>
          {isServicesOpen && (
            <ul className={`submenu ${isDesktopOrLaptop ? 'submenu-fullwidth' : ''}`}>
              {servicesSubMenuItems.map((item, index) => (
                <li key={index}><Link to={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => setIsSectorsOpen(true)}
          onMouseLeave={() => setIsSectorsOpen(false)}
          onClick={(e) => {
            e.stopPropagation();
            setIsSectorsOpen(!isSectorsOpen);
            setIsSolutionsOpen(false);
            setIsServicesOpen(false);
          }}
          className={isSectorsOpen ? 'showSubMenu' : ''}
        >
          <Link to="/sectors" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='pr-1'>Sectors</div><div> {isSectorsOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
          </Link>
          {isSectorsOpen && (
            <ul className={`submenu ${isDesktopOrLaptop ? 'submenu-fullwidth' : ''}`}>
              {sectorsSubMenuItems.map((item, index) => (
                <li key={index}><Link to={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          )}
        </li>
        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;