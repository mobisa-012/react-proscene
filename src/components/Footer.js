import React from "react";
import './Footer.css';
import logo from './assets/log.png';
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
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

    return (
        <div className="footer">
            <main className="main-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Company Logo" />
                    </Link>
                </div>

                {/* Solutions Section */}
                <div className="footer-section">
                    <h3>Solutions</h3>
                    {solutionsSubMenuItems.map(item => (
                        <Link key={item.href} to={item.href} className="footer-link">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Sectors Section */}
                <div className="footer-section">
                    <h3>Sectors</h3>
                    {sectorsSubMenuItems.map(item => (
                        <Link key={item.href} to={item.href} className="footer-link">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Services Section */}
                <div className="footer-section">
                    <h3>Services</h3>
                    {servicesSubMenuItems.map(item => (
                        <Link key={item.href} to={item.href} className="footer-link">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Partners Section */}
                {/* <div className="footer-section">
                    <h3>Partners</h3>
                    {partnersSubMenuItems.map(item => (
                        <Link key={item.href} to={item.href} className="footer-link">
                            {item.label}
                        </Link>
                    ))}
                </div> */}

                {/* Social Media To proscene*/}
                <div className="social-icons">
                    <a href="https://www.facebook.com/proscenesystems" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://x.com/AudioVisualEA" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/company/proscene-systems-ltd/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/proscenesystems/?__pwa=1#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>                
            </main>
            {/* placing this here will make them go below the existing footer cntent */}
            {/* TODO: Figure how to make them a row */}
            <div className="legal-links">
                <Link to="/terms-and-conditions" className="footer-link">Terms & Conditions</Link>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <Copyright/>
            </div>
        </div>
    );
};

export default Footer;
