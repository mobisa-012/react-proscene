import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // const [isPartnersOpen, setIsPartnersOpen] = useState(false);

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

  // const partnersSubMenuItems = [
  //   { label: 'Panasonic', href: '/panasonic' },
  //   { label: 'Crestron', href: '/crestron' },
  //   { label: 'Optoma', href: '/optoma' },
  //   { label: 'Lifesize', href: '/lifesize' },
  //   { label: 'Barco', href: '/barco' },
  //   { label: 'Samsung', href: '/samsung' },
  //   { label: 'LG', href: '/lg' },
  //   { label: 'Epson', href: '/epson' },
  //   { label: 'Avaya', href: '/avaya' },
  //   { label: 'Kramer', href: '/kramer' },
  //   { label: 'Vogel', href: '/vogel' },
  //   { label: 'Extron', href: '/extron' },
  // ];

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        <li
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
        >
          <Link to="/solutions">Solutions</Link>
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
        >
          <Link to="/services">Services</Link>
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
        >
          <Link to="/sectors">Sectors</Link>
          {isSectorsOpen && (
            <ul className={`submenu ${isDesktopOrLaptop ? 'submenu-fullwidth' : ''}`}>
              {sectorsSubMenuItems.map((item, index) => (
                <li key={index}><Link to={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          )}
        </li>

        {/* <li
          onMouseEnter={() => setIsPartnersOpen(true)}
          onMouseLeave={() => setIsPartnersOpen(false)}
        >
          <Link to="/partners">Partners</Link>
          {isPartnersOpen && (
            <ul className={`submenu ${isDesktopOrLaptop ? 'submenu-fullwidth' : ''}`}>
              {partnersSubMenuItems.map((item, index) => (
                <li key={index}><Link to={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          )}
        </li> */}

        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
