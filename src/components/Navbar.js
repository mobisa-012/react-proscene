import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "./assets/logo.png";
import { useMediaQuery } from "react-responsive";

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
    if (!event.target.closest(".navbar")) {
      closeAllDropdowns();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const solutionsSubMenuItems = [
    { label: "Audio Visual Integration", href: "/avIntegration" },
    { label: "Collaboration Solutions", href: "/collaborationSolutions" },
    { label: "Digital Media", href: "/digitalMedia" },
    { label: "Automation Solutions", href: "/automationSolutions" },
    { label: "Interactive Technology", href: "/interactiveTechnology" },
  ];

  const sectorsSubMenuItems = [
    { label: "Corporate", href: "/corporate" },
    { label: "Education", href: "/education" },
    { label: "Public Sector", href: "/publicSector" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "Legal Collaboration", href: "/legalCollaboration" },
  ];

  const servicesSubMenuItems = [
    { label: "Unified Communications", href: "/unifiedCommunications" },
    { label: "Training and Support", href: "/trainingAndSupport" },
    { label: "On-site Support", href: "/onSiteSupport" },
    { label: "Equipment Repair", href: "/equipmentRepair" },
    { label: "Leasing", href: "/leasing" },
    { label: "Video Conference Rental", href: "/videoConferenceRental" },
  ];

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    // <nav classNameName="navbar">
    //   <div classNameName="logo">
    //     <Link to="/">
    //       <img src={logo} alt="Company Logo" />
    //     </Link>
    //   </div>
    //   <div classNameName="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    //     <span>{isMenuOpen ? '✖' : '☰'}</span>
    //   </div>
    //   <div
    //     classNameName={`overlay ${isMenuOpen ? 'show' : ''}`}
    //     onClick={() => setIsMenuOpen(false)}
    //   ></div>
    //   <ul classNameName={isMenuOpen ? 'show' : ''}>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/about">About</Link></li>

    //     <li
    //       onMouseEnter={() => setIsSolutionsOpen(true)}
    //       onMouseLeave={() => setIsSolutionsOpen(false)}
    //       onClick={(e) => {
    //         e.stopPropagation();
    //         setIsSolutionsOpen(!isSolutionsOpen);
    //         setIsSectorsOpen(false);
    //         setIsServicesOpen(false);
    //       }}
    //       classNameName={isSolutionsOpen ? 'showSubMenu' : ''}
    //     >
    //       <Link to="/solutions" style={{ display: 'flex', justifyContent: 'space-between' }}>
    //         <div classNameName='pr-1'>Solutions</div><div> {isSolutionsOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
    //       </Link>
    //       {isSolutionsOpen && (
    //         <ul classNameName={`submenu ${isDesktopOrLaptop ? 'submenu-fullwidth' : ''}`}>
    //           {solutionsSubMenuItems.map((item, index) => (
    //             <li key={index}><Link to={item.href}>{item.label}</Link></li>
    //           ))}
    //         </ul>
    //       )}
    //     </li>

    //     <li
    //       onMouseEnter={() => setIsServicesOpen(true)}
    //       onMouseLeave={() => setIsServicesOpen(false)}
    //       onClick={(e) => {
    //         e.stopPropagation();
    //         setIsServicesOpen(!isServicesOpen);
    //         setIsSolutionsOpen(false);
    //         setIsSectorsOpen(false);
    //       }}
    //       classNameName={isServicesOpen ? 'showSubMenu' : ''}
    //     >
    //       <Link to="/services" style={{ display: 'flex', justifyContent: 'space-between' }}>
    //        <div classNameName='pr-1'> Services</div><div> {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
    //       </Link>
    //       {isServicesOpen && (
    //         <ul classNameName={`submenu ${isDesktopOrLaptop ? 'submenu-fullwidth' : ''}`}>
    //           {servicesSubMenuItems.map((item, index) => (
    //             <li key={index}><Link to={item.href}>{item.label}</Link></li>
    //           ))}
    //         </ul>
    //       )}
    //     </li>

    //     <li
    //       onMouseEnter={() => setIsSectorsOpen(true)}
    //       onMouseLeave={() => setIsSectorsOpen(false)}
    //       onClick={(e) => {
    //         e.stopPropagation();
    //         setIsSectorsOpen(!isSectorsOpen);
    //         setIsSolutionsOpen(false);
    //         setIsServicesOpen(false);
    //       }}
    //       classNameName={isSectorsOpen ? 'showSubMenu' : ''}
    //     >
    //       <Link to="/sectors" style={{ display: 'flex', justifyContent: 'space-between' }}>
    //       <div classNameName='pr-1'>Sectors</div><div> {isSectorsOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
    //       </Link>
    //       {isSectorsOpen && (
    //         <ul classNameName={`submenu ${isDesktopOrLaptop ? 'submenu-fullwidth' : ''}`}>
    //           {sectorsSubMenuItems.map((item, index) => (
    //             <li key={index}><Link to={item.href}>{item.label}</Link></li>
    //           ))}
    //         </ul>
    //       )}
    //     </li>
    //     <li><Link to="/case-studies">Case Studies</Link></li>
    //     <li><Link to="/contact">Contact</Link></li>
    //   </ul>
    // </nav>
    <header
      id="site-header"
      className="site-header js-site-header site-header__sticky
     en    "
    >
      <div className="site-header__inner">
        <div className="container site-header__container">
          <div className="site-header__logo">
            <a
              href="https://www.priority-software.com/"
              className="site-header__logo-link"
            >
              {/* <img className="style-svg site-header__logo-img" src="../../www.priority-software.com/wp-content/uploads/2023/02/logo.svg" width="152" height="38" alt="Priority"> */}
            </a>
          </div>

          <div className="site-header__side">
            <nav className="site-header__nav">
              <ul
                id="menu-header-en"
                className="site-header__menu js-menu-wrapper"
              >
                <li
                  id="menu-item-20758"
                  className="mega-menu solutions menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                >
                  <a href="#">
                    <span>Solutions</span>
                  </a>
                  <div className="sub-menu-wrapper mega-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="tab-header retail-management style-purple menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a
                          href="https://www.priority-software.com/retail-management/"
                          data-tab="20803"
                        >
                          <span>Retail Management</span>
                        </a>
                      </div>
                      <div
                        id="tab-20803"
                        className="tab-pane retail-management style-purple menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20814"
                              className="columns-menu products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Products</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-29135"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20794"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/customer-loyalty/">
                                            <span>
                                              Customer loyalty management
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20796"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/e-commerce/">
                                            <span>E-commerce</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20816"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/e-commerce/onecore-full-cart-mode/">
                                                  <span>
                                                    OneCore Full Cart Mode
                                                  </span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>
                                        <li
                                          id="menu-item-20799"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/gift-card/">
                                            <span>Gift Card Management</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20800"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/head-office/">
                                            <span>Head Office</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20819"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/head-office/inventory-control/">
                                                  <span>Inventory control</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20818"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/head-office/omni-channel-crm/">
                                                  <span>Omnichannel CRM</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20817"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/head-office/purchasing/">
                                                  <span>Purchasing</span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    id="menu-item-29136"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20805"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/order-management/">
                                            <span>Order Management</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20807"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/pos-back-office/">
                                            <span>POS & Back Office</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20820"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/pos-back-office/mobile-back-office/">
                                                  <span>
                                                    Mobile Back Office
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20808"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/pos-back-office/priority-pos/">
                                                  <span>Priority POS</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20810"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/pos-back-office/self-service-kiosk/">
                                                  <span>
                                                    Self Service Kiosk
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20811"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/pos-back-office/tpos/">
                                                  <span>TPOS</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20809"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="https://www.priority-software.com/retail-management/pos-back-office/qpos/">
                                                  <span>QPOS</span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>
                                        <li
                                          id="menu-item-20812"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/replenishment/">
                                            <span>Replenishment</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20821"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/erp/retail/">
                                            <span>Retail ERP Software</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-27776"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/priority-mybranch/">
                                            <span>Priority MyBranch</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            <li
                              id="menu-item-20815"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Categories</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-29137"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20788"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/fashion-sports-footwear/">
                                            <span>Apparel & Footwear</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20789"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/bookstores-record-shops/">
                                            <span>
                                              Bookstores & Record shops
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20790"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/building-material-garden-equipment-and-hardware/">
                                            <span>
                                              Building Material, Garden
                                              Equipment, and Hardware
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20791"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/cellular-electronics-computers/">
                                            <span>
                                              Cellular, Electronics & Computers
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20792"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/convenience-stores/">
                                            <span>Convenience Stores</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20793"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/cosmetics/">
                                            <span>Cosmetics</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20795"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/duty-free/">
                                            <span>Duty Free</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    id="menu-item-29138"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20797"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/electrical-appliances-lighting-showrooms/">
                                            <span>
                                              Electrical Appliances & Lighting
                                              Showrooms
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20798"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/furniture-home-decor/">
                                            <span>Furniture & Home Decor</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20801"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/jewelry/">
                                            <span>Jewelry</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20802"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/liquor-spirits-tobacco/">
                                            <span>
                                              Liquor / Spirits / Tobacco
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20804"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/office-supplies-and-retail/">
                                            <span>
                                              Office Supplies & General Retail
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20806"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/pet-and-animal-supplies/">
                                            <span>Pet and Animal Supplies</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20813"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="https://www.priority-software.com/retail-management/sporting-goods/">
                                            <span>Sporting Goods</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner purple">
                          <div className="banner-description">
                            See how the Priority Retail Management Solution
                            works for you
                          </div>
                          <a className="btn" href="/demo/">
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header erp style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        {/* active above */}
                        <a
                          href="https://www.priority-software.com/erp/"
                          data-tab="20759"
                        >
                          <span>ERP</span>
                        </a>
                      </div>
                      <div
                        id="tab-20759"
                        className="tab-pane erp style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        {/* active above */}
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20774"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Products</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20761"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/business-intelligence/">
                                      <span>
                                        Analytics and Business Insights
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-31540"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/cloud-erp/">
                                      <span>Cloud ERP</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20763"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/crm-sales/">
                                      <span>CRM and Sales</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20765"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/equipment-rental/">
                                      <span>Equipment Rental</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20766"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/financial-management/">
                                      <span>Financial Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20769"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/human-resources-management/">
                                      <span>Human Resources Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20773"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/mobile/">
                                      <span>Mobile ERP</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20776"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/project-management/">
                                      <span>Project Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20777"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/portal-generator/">
                                      <span>Portal Generator</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20778"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/priority-payments/">
                                      <span>Priority Payments</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20779"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/supply-chain-management/">
                                      <span>Supply Chain Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20780"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/warehouse-management/">
                                      <span>Warehouse Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20770"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/localizations/">
                                      <span>Localizations</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            <li
                              id="menu-item-20775"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Industries</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20760"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/agriculture/">
                                      <span>Agriculture</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20762"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/construction/">
                                      <span>Construction</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20764"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/electronics/">
                                      <span>Electronics</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20767"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/financial-services/">
                                      <span>Financial Services</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20768"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/healthcare/">
                                      <span>Healthcare</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20771"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/manufacturing/">
                                      <span>Manufacturing</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20772"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/medical-devices/">
                                      <span>Medical Devices</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20781"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/municipalities/">
                                      <span>Municipalities</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20782"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/nonprofits/">
                                      <span>Nonprofits</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20783"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/pharmaceutical/">
                                      <span>Pharmaceutical</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20784"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/professional-services/">
                                      <span>Professional Services</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20785"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/retail/">
                                      <span>Retail</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20786"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/software-technology/">
                                      <span>Software and Technology</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20787"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/erp/wholesale-logistics/">
                                      <span>Wholesale & Distribution</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner blue">
                          <div className="banner-description">
                            See how Priority ERP works for you
                          </div>
                          <a
                            className="btn"
                            href="https://www.priority-software.com/demo/"
                          >
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header hospitality-management style-light-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a
                          href="https://www.priority-software.com/hospitality-management/"
                          data-tab="20822"
                        >
                          <span>Hospitality Management</span>
                        </a>
                      </div>
                      <div
                        id="tab-20822"
                        className="tab-pane hospitality-management style-light-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20829"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Products</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20828"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-pms/">
                                      <span>Optima PMS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20823"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/channel-manager/">
                                      <span>Channel Manager</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20826"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-cloud-pms/">
                                      <span>Optima Cloud PMS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24708"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-crm/">
                                      <span>Optima CRM</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20827"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-marketplace/">
                                      <span>Optima Marketplace</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24794"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-pos/">
                                      <span>Optima POS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30733"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-service-center/">
                                      <span>Optima Service Center</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-23483"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-event-management/">
                                      <span>Optima Event Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30722"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-anywhere/">
                                      <span>Optima Anywhere</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30724"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/optima-spa-management/">
                                      <span>Optima Spa Management</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            <li
                              id="menu-item-20830"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Categories</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-23482"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/boutique-hotel/">
                                      <span>Boutique hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24700"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/business-hotels/">
                                      <span>Business hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24701"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/hostels-management/">
                                      <span>Hostels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20824"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/hotel-chains-and-groups/">
                                      <span>
                                        Hotel chains and groups management
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20825"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/independent-hotels/">
                                      <span>Independent hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24702"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/resorts-management-software/">
                                      <span>Resorts management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-28921"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/hospitality-management/vacation-resorts/">
                                      <span>Vacation resorts</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner light-blue">
                          <div className="banner-description">
                            See how the Priority Hospitality Management Solution
                            works for you
                          </div>
                          <a className="btn" href="/demo/">
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header school-management style-coral menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a
                          href="https://www.priority-software.com/school-management/"
                          data-tab="20831"
                        >
                          <span>School Management</span>
                        </a>
                      </div>
                      <div
                        id="tab-20831"
                        className="tab-pane school-management style-coral menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-29128"
                              className="one-row menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <div className="block-area apricot">
                                <div className="block-area-image">
                                  {/* <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20281%20150'%3E%3C/svg%3E" className="menu-item-image" width="281" height="150" alt="" data-lazy-src="https://www.priority-software.com/wp-content/uploads/2024/03/10-reasons-for-choosing-priority-2-281x150.jpg"><noscript><img src="https://www.priority-software.com/wp-content/uploads/2024/03/10-reasons-for-choosing-priority-2-281x150.jpg" className="menu-item-image" width="281" height="150" alt=""></noscript> */}
                                </div>
                                <div className="item-content-area">
                                  <div className="item-content-area-title dark">
                                    10 Reasons for choosing Priority
                                  </div>
                                  <div className="item-content-area-description"></div>
                                  <div className="item-content-area-button">
                                    <a
                                      href="https://www.priority-software.com/wp-content/uploads/2024/03/10-reasons-for-choosing-priority-190324.pdf"
                                      className="btn blue"
                                    >
                                      Read more
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              id="menu-item-20834"
                              className="one-column menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Features</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20833"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/school-management/teachers/">
                                      <span>Teachers</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20832"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="https://www.priority-software.com/school-management/students-and-parents/">
                                      <span>Students and Parents</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20835"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="https://www.priority-software.com/become-a-partner/">
                    <span>Partners</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-32670"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue custom-image">
                            <div className="block-image">
                              {/* <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" className="menu-item-image" alt="" data-lazy-src="https://www.priority-software.com/wp-content/uploads/2024/12/tec-logo-170-130.jpg"><noscript><img src="https://www.priority-software.com/wp-content/uploads/2024/12/tec-logo-170-130.jpg" className="menu-item-image" alt=""></noscript> */}
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title dark">
                                Recognized as the top ERP Solution in the 2025
                                TEC
                              </div>
                              <div className="item-content-area-description">
                                Insight Report on ERP Solutions for SMBs
                              </div>
                              <div className="item-content-area-button">
                                <a
                                  href="https://www.priority-software.com/become-a-partner/"
                                  className="btn blue"
                                >
                                  Become a Partner
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-33327"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/become-a-partner/find-a-partner/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Find a partner</span>
                            </span>
                            <span className="item-content-area-title">
                              Find the perfect ERP partner to help you unlock
                              the full potential of your business
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20837"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/become-a-partner/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Become a partner
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Grow your business by joining Priority's extensive
                              Partner Network
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20838"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/become-a-partner/technology-partners/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Technology partners
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Utilize Priority’s global reach and expertise to
                              identify new opportunities
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20839"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/become-a-partner/aws-partner/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">AWS partner</span>
                            </span>
                            <span className="item-content-area-title">
                              Priority utilizes the AWS global network to
                              dynamically allocate resources and optimize the
                              system's performance
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20840"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="https://market.priority-software.com/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Priority Market
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Explore our network of technology partners and
                              discover new solutions and API's
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20841"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="https://www.priority-software.com/about-priority/">
                    <span>Company</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-31865"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue">
                            <div className="block-area-image">
                              <a href="https://hubs.ly/Q030WJ140">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="160"
                                  height="160"
                                  viewBox="0 0 160 160"
                                  fill="none"
                                >
                                  <circle
                                    cx="80"
                                    cy="80"
                                    r="79.5"
                                    fill="#E3EEFF"
                                    fill-opacity="0.8"
                                    stroke="#3B37E6"
                                  ></circle>
                                  <path
                                    d="M114 76.5359C116.667 78.0755 116.667 81.9245 114 83.4641L66 111.177C63.3333 112.717 60 110.792 60 107.713L60 52.2872C60 49.208 63.3333 47.2835 66 48.8231L114 76.5359Z"
                                    fill="#3B37E6"
                                  ></path>
                                </svg>
                                {/* <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20281%20150'%3E%3C/svg%3E" className="menu-item-image" width="281" height="150" alt="" data-lazy-src="https://www.priority-software.com/wp-content/uploads/2024/08/image-7-281x150.png"><noscript><img src="https://www.priority-software.com/wp-content/uploads/2024/08/image-7-281x150.png" className="menu-item-image" width="281" height="150" alt=""></noscript> */}
                              </a>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title dark">
                                Gevasol B.V. transformed their operational
                                efficiency and control
                              </div>
                              <div className="item-content-area-description"></div>
                              <div className="item-content-area-button">
                                <a
                                  href="https://hubs.ly/Q030WJ140"
                                  className="btn blue"
                                >
                                  Read more
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-20844"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/about-priority/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">About us</span>
                            </span>
                            <span className="item-content-area-title">
                              Priority specializes in providing organizations
                              with cutting-edge cloud-based business management
                              solutions.
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20842"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/about-priority/case-studies/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Case studies</span>
                            </span>
                            <span className="item-content-area-title">
                              Real world examples of how forward-thinking
                              businesses use Priority to improve and grow
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20843"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/about-priority/events/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Events</span>
                            </span>
                            <span className="item-content-area-title">
                              Join us at upcoming industry events to unlock new
                              insights and see Priority live!{" "}
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20846"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/news/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">News</span>
                            </span>
                            <span className="item-content-area-title">
                              Latest company updates, announcements, and
                              featured stories
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20845"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/careers/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Careers</span>
                            </span>
                            <span className="item-content-area-title">
                              Because great work starts with great people.
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-23000"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/contact-us/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Contact us</span>
                            </span>
                            <span className="item-content-area-title">
                              With offices and support worldwide, we are here
                              for you - let's connect!
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20847"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="https://www.priority-software.com/resources/">
                    <span>Resources</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-36405"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue">
                            <div className="block-area-image">
                              <a href="https://www.priority-software.com/erp/product-tour/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="160"
                                  height="160"
                                  viewBox="0 0 160 160"
                                  fill="none"
                                >
                                  <circle
                                    cx="80"
                                    cy="80"
                                    r="79.5"
                                    fill="#E3EEFF"
                                    fill-opacity="0.8"
                                    stroke="#3B37E6"
                                  ></circle>
                                  <path
                                    d="M114 76.5359C116.667 78.0755 116.667 81.9245 114 83.4641L66 111.177C63.3333 112.717 60 110.792 60 107.713L60 52.2872C60 49.208 63.3333 47.2835 66 48.8231L114 76.5359Z"
                                    fill="#3B37E6"
                                  ></path>
                                </svg>
                                {/* <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20281%20150'%3E%3C/svg%3E" className="menu-item-image" width="281" height="150" alt="" data-lazy-src="https://www.priority-software.com/wp-content/uploads/2024/08/deep-dive-1-15082400-17-28-17still005-1-281x150.jpg"><noscript><img src="https://www.priority-software.com/wp-content/uploads/2024/08/deep-dive-1-15082400-17-28-17still005-1-281x150.jpg" className="menu-item-image" width="281" height="150" alt=""></noscript> */}
                              </a>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title purple">
                                Priority ERP product tour
                              </div>
                              <div className="item-content-area-description">
                                Discover how Priority’s powerful features
                              </div>
                              <div className="item-content-area-button">
                                <a
                                  href="https://www.priority-software.com/erp/product-tour/"
                                  className="btn blue"
                                >
                                  Let's go
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-20849"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="https://www.priority-software.com/resources/?solutions=all&industries=all&media=57#all-resources"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Articles</span>
                            </span>
                            <span className="item-content-area-title">
                              Explore latest insights, trends, and updates in
                              business and technology
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20850"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="https://www.priority-software.com/resources/?solutions=all&industries=all&media=58#all-resources"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Brochures</span>
                            </span>
                            <span className="item-content-area-title">
                              Browse and view brochures for detailed information
                              on our products, services, and solutions
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20851"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="https://www.priority-software.com/resources/?solutions=all&industries=all&media=60#all-resources"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Webinars</span>
                            </span>
                            <span className="item-content-area-title">
                              Tune in for in-depth knowledge, industry trends,
                              and expert insights
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20852"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="https://www.priority-software.com/resources/?solutions=all&industries=all&media=61#all-resources"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Videos</span>
                            </span>
                            <span className="item-content-area-title">
                              Browse our video library for product demos,
                              stories and advice
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20848"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/resources/faq/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">FAQ</span>
                            </span>
                            <span className="item-content-area-title">
                              Commonly asked questions and answers to help you
                              reach your full potential
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20854"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="https://www.priority-software.com/blog/"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Blog</span>
                            </span>
                            <span className="item-content-area-title">
                              Dive into in-depth blog posts for unique
                              perspectives, expert opinions and great tips
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20853"
                  className="menu-item menu-item-type-custom menu-item-object-custom"
                >
                  <a href="https://support.priority-software.com/">
                    <span>Support</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="site-header__actions">
              <div className="site-header__search">
                <div className="site-header__search-icon">
                  <svg
                    className="open"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M20.8002 20.8257C22.2813 19.3831 23.2002 17.3727 23.2002 15.1491C23.2002 10.759 19.6185 7.2002 15.2002 7.2002C10.7819 7.2002 7.2002 10.759 7.2002 15.1491C7.2002 19.5391 10.7819 23.098 15.2002 23.098C17.3806 23.098 19.3572 22.2313 20.8002 20.8257ZM20.8002 20.8257L24.8002 24.8002"
                      stroke="#333333"
                      stroke-width="1.60294"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <svg
                    className="close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6.75781 17.2431L12.0008 12.0001L17.2438 17.2431M17.2438 6.75708L11.9998 12.0001L6.75781 6.75708"
                      stroke="black"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>

                <div className="site-header__search-form">
                  {/* <form role="search" method="get" className="searchform extra" action="https://www.priority-software.com/" id="searchform">
    <div className="input-wrapper">
        <input type="text" className="hs-input" placeholder="Search" value="" name="s" id="s">
                    <input type="hidden" name="orderby" value="relevance">
                <button type="submit" className="blue-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M20.8002 20.8257C22.2813 19.3831 23.2002 17.3727 23.2002 15.1491C23.2002 10.759 19.6185 7.2002 15.2002 7.2002C10.7819 7.2002 7.2002 10.759 7.2002 15.1491C7.2002 19.5391 10.7819 23.098 15.2002 23.098C17.3806 23.098 19.3572 22.2313 20.8002 20.8257ZM20.8002 20.8257L24.8002 24.8002" stroke="#fff" stroke-width="1.60294" stroke-linecap="round"></path>
            </svg>
        </button>
    </div>
</form> */}
                </div>
              </div>
              <div className="site-header__lang">
                <div className="site-header__lang-current">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C8.63333 20 7.34167 19.7373 6.125 19.212C4.90833 18.6873 3.846 17.9707 2.938 17.062C2.02933 16.154 1.31267 15.0917 0.788 13.875C0.262667 12.6583 0 11.3667 0 10C0 8.61667 0.262667 7.321 0.788 6.113C1.31267 4.90433 2.02933 3.846 2.938 2.938C3.846 2.02933 4.90833 1.31233 6.125 0.787C7.34167 0.262333 8.63333 0 10 0C11.3833 0 12.679 0.262333 13.887 0.787C15.0957 1.31233 16.154 2.02933 17.062 2.938C17.9707 3.846 18.6873 4.90433 19.212 6.113C19.7373 7.321 20 8.61667 20 10C20 11.3667 19.7373 12.6583 19.212 13.875C18.6873 15.0917 17.9707 16.154 17.062 17.062C16.154 17.9707 15.0957 18.6873 13.887 19.212C12.679 19.7373 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.83767 16.429 6.613 15.837C6.38767 15.2457 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.18733 15.5583 4.912 16.175C5.63733 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3623 16.7917 15.087 16.175C15.8123 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6127 15.2457 13.388 15.837C13.1627 16.429 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.56233 11.3373 5.537 11.012C5.51233 10.6873 5.5 10.35 5.5 10C5.5 9.65 5.51233 9.31267 5.537 8.988C5.56233 8.66267 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.104 8.66267 2.062 8.988C2.02067 9.31267 2 9.65 2 10C2 10.35 2.02067 10.6873 2.062 11.012C2.104 11.3373 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4377 11.3373 12.463 11.012C12.4877 10.6873 12.5 10.35 12.5 10C12.5 9.65 12.4877 9.31267 12.463 8.988C12.4377 8.66267 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.56267 8.66267 7.538 8.988C7.51267 9.31267 7.5 9.65 7.5 10C7.5 10.35 7.51267 10.6873 7.538 11.012C7.56267 11.3373 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.896 11.3373 17.938 11.012C17.9793 10.6873 18 10.35 18 10C18 9.65 17.9793 9.31267 17.938 8.988C17.896 8.66267 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4373 8.66267 14.462 8.988C14.4873 9.31267 14.5 9.65 14.5 10C14.5 10.35 14.4873 10.6873 14.462 11.012C14.4373 11.3373 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8123 4.44167 15.087 3.825C14.3623 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1627 3.57067 13.388 4.162C13.6127 4.754 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.38767 4.754 6.613 4.162C6.83767 3.57067 7.1 3 7.4 2.45C6.46667 2.75 5.63733 3.20833 4.912 3.825C4.18733 4.44167 3.58333 5.16667 3.1 6Z"
                      fill="#16213D"
                    ></path>
                  </svg>
                  <span className="site-header__lang-code">en </span>
                </div>

                <div className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-touch-device wpml-ls-legacy-list-vertical">
                  <ul>
                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-nl wpml-ls-first-item wpml-ls-item-legacy-list-vertical">
                      <a
                        href="https://www.priority-software.com/nl/"
                        className="wpml-ls-link"
                      >
                        <span className="wpml-ls-native" lang="nl">
                          Dutch
                        </span>
                      </a>
                    </li>
                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-il wpml-ls-last-item wpml-ls-item-legacy-list-vertical">
                      <a
                        href="https://www.priority-software.com/il/"
                        className="wpml-ls-link"
                      >
                        <span className="wpml-ls-native" lang="il">
                          Hebrew
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="site-header__button-wrapper">
              <a
                href="https://www.priority-software.com/demo/"
                className="site-header__button"
              >
                Get a Demo
              </a>
            </div>

            <button
              type="button"
              className="site-header__mobile-menu-btn js mobile-menu-btn"
              aria-label="Mobile nenu"
              title="Mobile menu"
              data-role="mobile-menu-action"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="mobile-menu-overlay js-mobile-menu-overlay"
        data-role="mobile-menu-action"
      ></div>
      <div id="mobile-menu" className="mobile-menu js-mobile-menu ">
        {/* adding show to this class will bring the mobile into view */}
        <div className="mobile-menu__container">
          <nav className="mobile-menu__nav">
            <ul
              id="menu-mobile-en"
              className="mobile-menu__menu sub-menu js-menu-wrapper"
            >
              <li
                id="menu-item-20880"
                className="mega-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20880"
              >
                {/* added active above */}
                <a
                  href="#"
                  className="nav__link"
                  data-role="show-sub-menu"
                  title=""
                >
                  Solutions<span className="sub-menu-toggle"></span>
                </a>
                <ul className="sub-menu active">
                  <li
                    id="menu-item-20881"
                    className="style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20881 active"
                  >
                    <a
                      href="https://www.priority-software.com/erp/"
                      data-role="sub-mega-menu-action"
                    >
                      ERP
                    </a>
                    <div className="fixed-menu-wrapper js-fixed-menu-wrapper">
                      <ul className="sub-menu">
                        <button
                          className="return-back"
                          data-role="sub-mega-menu-action"
                        >
                          Solutions
                        </button>
                        <a
                          href="https://www.priority-software.com/erp/"
                          className="menu-item-parent-link"
                        >
                          ERP
                        </a>{" "}
                        <li
                          id="menu-item-20882"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20882"
                        >
                          <a href="http://№">Products</a>
                          <ul
                            className="sub-menu "
                            // style={{ maxHeight: "241px" }}
                            // Has active above
                          >
                            <li
                              id="menu-item-20883"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20883"
                            >
                              <a href="https://www.priority-software.com/erp/business-intelligence/">
                                Analytics and Business Insights
                              </a>
                            </li>
                            <li
                              id="menu-item-31544"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31544"
                            >
                              <a href="https://www.priority-software.com/erp/cloud-erp/">
                                Cloud ERP
                              </a>
                            </li>
                            <li
                              id="menu-item-20884"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20884"
                            >
                              <a href="https://www.priority-software.com/erp/crm-sales/">
                                CRM and Sales
                              </a>
                            </li>
                            <li
                              id="menu-item-20885"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20885"
                            >
                              <a href="https://www.priority-software.com/erp/equipment-rental/">
                                Equipment Rental
                              </a>
                            </li>
                            <li
                              id="menu-item-20886"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20886"
                            >
                              <a href="https://www.priority-software.com/erp/financial-management/">
                                Financial Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20887"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20887"
                            >
                              <a href="https://www.priority-software.com/erp/human-resources-management/">
                                Human Resources Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20888"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20888"
                            >
                              <a href="https://www.priority-software.com/erp/mobile/">
                                Mobile ERP
                              </a>
                            </li>
                            <li
                              id="menu-item-20889"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20889"
                            >
                              <a href="https://www.priority-software.com/erp/project-management/">
                                Project Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20890"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20890"
                            >
                              <a href="https://www.priority-software.com/erp/portal-generator/">
                                Portal Generator
                              </a>
                            </li>
                            <li
                              id="menu-item-20891"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20891"
                            >
                              <a href="https://www.priority-software.com/erp/priority-payments/">
                                Priority Payments
                              </a>
                            </li>
                            <li
                              id="menu-item-20892"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20892"
                            >
                              <a href="https://www.priority-software.com/erp/supply-chain-management/">
                                Supply Chain Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20893"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20893"
                            >
                              <a href="https://www.priority-software.com/erp/warehouse-management/">
                                Warehouse management
                              </a>
                            </li>
                            <li
                              id="menu-item-20894"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20894"
                            >
                              <a href="https://www.priority-software.com/erp/localizations/">
                                Localizations
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-20895"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20895"
                        >
                          <a href="#">Industries</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20896"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20896"
                            >
                              <a href="https://www.priority-software.com/erp/agriculture/">
                                Agriculture
                              </a>
                            </li>
                            <li
                              id="menu-item-20897"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20897"
                            >
                              <a href="https://www.priority-software.com/erp/construction/">
                                Construction
                              </a>
                            </li>
                            <li
                              id="menu-item-20898"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20898"
                            >
                              <a href="https://www.priority-software.com/erp/electronics/">
                                Electronics
                              </a>
                            </li>
                            <li
                              id="menu-item-20899"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20899"
                            >
                              <a href="https://www.priority-software.com/erp/financial-services/">
                                Financial Services
                              </a>
                            </li>
                            <li
                              id="menu-item-20900"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20900"
                            >
                              <a href="https://www.priority-software.com/erp/healthcare/">
                                Healthcare
                              </a>
                            </li>
                            <li
                              id="menu-item-20901"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20901"
                            >
                              <a href="https://www.priority-software.com/erp/manufacturing/">
                                Manufacturing
                              </a>
                            </li>
                            <li
                              id="menu-item-20902"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20902"
                            >
                              <a href="https://www.priority-software.com/erp/medical-devices/">
                                Medical Devices
                              </a>
                            </li>
                            <li
                              id="menu-item-20903"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20903"
                            >
                              <a href="https://www.priority-software.com/erp/municipalities/">
                                Municipalities
                              </a>
                            </li>
                            <li
                              id="menu-item-20904"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20904"
                            >
                              <a href="https://www.priority-software.com/erp/nonprofits/">
                                Nonprofits
                              </a>
                            </li>
                            <li
                              id="menu-item-20905"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20905"
                            >
                              <a href="https://www.priority-software.com/erp/pharmaceutical/">
                                Pharmaceutical
                              </a>
                            </li>
                            <li
                              id="menu-item-20906"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20906"
                            >
                              <a href="https://www.priority-software.com/erp/professional-services/">
                                Professional Services
                              </a>
                            </li>
                            <li
                              id="menu-item-20907"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20907"
                            >
                              <a href="https://www.priority-software.com/erp/retail/">
                                Retail
                              </a>
                            </li>
                            <li
                              id="menu-item-20908"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20908"
                            >
                              <a href="https://www.priority-software.com/erp/software-technology/">
                                Software and Technology
                              </a>
                            </li>
                            <li
                              id="menu-item-20909"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20909"
                            >
                              <a href="https://www.priority-software.com/erp/wholesale-logistics/">
                                Wholesale & Distribution
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-20910"
                    className="style-purple menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20910"
                  >
                    <a
                      href="https://www.priority-software.com/retail-management/"
                      data-role="sub-mega-menu-action"
                    >
                      Retail ManagementTrue omnichannel experience
                    </a>
                    <div className="fixed-menu-wrapper js-fixed-menu-wrapper">
                      <ul className="sub-menu">
                        <button
                          className="return-back"
                          data-role="sub-mega-menu-action"
                        >
                          Solutions
                        </button>
                        <a
                          href="https://www.priority-software.com/retail-management/"
                          className="menu-item-parent-link"
                        >
                          Retail ManagementTrue omnichannel experience
                        </a>{" "}
                        <li
                          id="menu-item-20911"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20911"
                        >
                          <a href="#">Products</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20912"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20912"
                            >
                              <a href="https://www.priority-software.com/retail-management/customer-loyalty/">
                                Customer loyalty management
                              </a>
                            </li>
                            <li
                              id="menu-item-20913"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20913"
                            >
                              <a
                                href="https://www.priority-software.com/retail-management/e-commerce/"
                                className="nav__link"
                                data-role="show-sub-menu"
                                title=""
                              >
                                E-commerce
                                <span className="sub-menu-toggle"></span>
                              </a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-20914"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20914"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/e-commerce/onecore-full-cart-mode/"
                                    className="nav__link"
                                    title=""
                                  >
                                    OneCore Full Cart Mode
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-20915"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20915"
                            >
                              <a href="https://www.priority-software.com/retail-management/gift-card/">
                                Gift Card Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20916"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20916"
                            >
                              <a
                                href="https://www.priority-software.com/retail-management/head-office/"
                                className="nav__link"
                                data-role="show-sub-menu"
                                title=""
                              >
                                Head Office
                                <span className="sub-menu-toggle"></span>
                              </a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-20917"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20917"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/head-office/inventory-control/"
                                    className="nav__link"
                                    title=""
                                  >
                                    Inventory control
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20918"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20918"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/head-office/purchasing/"
                                    className="nav__link"
                                    title=""
                                  >
                                    Purchasing
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20919"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20919"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/head-office/omni-channel-crm/"
                                    className="nav__link"
                                    title=""
                                  >
                                    Omnichannel CRM
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-20920"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20920"
                            >
                              <a href="https://www.priority-software.com/retail-management/order-management/">
                                Order Management
                              </a>
                            </li>
                            <li
                              id="menu-item-27053"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27053"
                            >
                              <a href="https://www.priority-software.com/retail-management/priority-mybranch/">
                                Priority MyBranch
                              </a>
                            </li>
                            <li
                              id="menu-item-20921"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20921"
                            >
                              <a
                                href="https://www.priority-software.com/retail-management/pos-back-office/"
                                className="nav__link"
                                data-role="show-sub-menu"
                                title=""
                              >
                                POS & Back Office
                                <span className="sub-menu-toggle"></span>
                              </a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-20922"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20922"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/pos-back-office/priority-pos/"
                                    className="nav__link"
                                    title=""
                                  >
                                    Priority POS
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20923"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20923"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/pos-back-office/tpos/"
                                    className="nav__link"
                                    title=""
                                  >
                                    TPOS
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20924"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20924"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/pos-back-office/qpos/"
                                    className="nav__link"
                                    title=""
                                  >
                                    QPOS
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20925"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20925"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/pos-back-office/self-service-kiosk/"
                                    className="nav__link"
                                    title=""
                                  >
                                    Self Service Kiosk
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20926"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20926"
                                >
                                  <a
                                    href="https://www.priority-software.com/retail-management/pos-back-office/mobile-back-office/"
                                    className="nav__link"
                                    title=""
                                  >
                                    Mobile Back Office
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-27777"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27777"
                            >
                              <a href="https://www.priority-software.com/retail-management/priority-mybranch/">
                                Priority MyBranch
                              </a>
                            </li>
                            <li
                              id="menu-item-20927"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20927"
                            >
                              <a href="https://www.priority-software.com/retail-management/replenishment/">
                                Replenishment
                              </a>
                            </li>
                            <li
                              id="menu-item-20928"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20928"
                            >
                              <a href="https://www.priority-software.com/erp/retail/">
                                Retail ERP Software
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-20929"
                          className="two-columns menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20929"
                        >
                          <a href="#">Categories</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20930"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20930"
                            >
                              <a href="https://www.priority-software.com/retail-management/fashion-sports-footwear/">
                                Apparel & Footwear
                              </a>
                            </li>
                            <li
                              id="menu-item-20931"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20931"
                            >
                              <a href="https://www.priority-software.com/retail-management/bookstores-record-shops/">
                                Bookstores & Record shops
                              </a>
                            </li>
                            <li
                              id="menu-item-20932"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20932"
                            >
                              <a href="https://www.priority-software.com/retail-management/building-material-garden-equipment-and-hardware/">
                                Building Material, Garden Equipment, and
                                Hardware
                              </a>
                            </li>
                            <li
                              id="menu-item-20933"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20933"
                            >
                              <a href="https://www.priority-software.com/retail-management/cellular-electronics-computers/">
                                Cellular, Electronics & Computers
                              </a>
                            </li>
                            <li
                              id="menu-item-20934"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20934"
                            >
                              <a href="https://www.priority-software.com/retail-management/convenience-stores/">
                                Convenience Stores
                              </a>
                            </li>
                            <li
                              id="menu-item-20935"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20935"
                            >
                              <a href="https://www.priority-software.com/retail-management/cosmetics/">
                                Cosmetics
                              </a>
                            </li>
                            <li
                              id="menu-item-20936"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20936"
                            >
                              <a href="https://www.priority-software.com/retail-management/duty-free/">
                                Duty Free
                              </a>
                            </li>
                            <li
                              id="menu-item-20937"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20937"
                            >
                              <a href="https://www.priority-software.com/retail-management/furniture-home-decor/">
                                Furniture & Home Decor
                              </a>
                            </li>
                            <li
                              id="menu-item-20938"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20938"
                            >
                              <a href="https://www.priority-software.com/retail-management/electrical-appliances-lighting-showrooms/">
                                Electrical Appliances & Lighting Showrooms
                              </a>
                            </li>
                            <li
                              id="menu-item-20939"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20939"
                            >
                              <a href="https://www.priority-software.com/retail-management/jewelry/">
                                Jewelry
                              </a>
                            </li>
                            <li
                              id="menu-item-20940"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20940"
                            >
                              <a href="https://www.priority-software.com/retail-management/liquor-spirits-tobacco/">
                                Liquor / Spirits / Tobacco
                              </a>
                            </li>
                            <li
                              id="menu-item-20941"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20941"
                            >
                              <a href="https://www.priority-software.com/retail-management/office-supplies-and-retail/">
                                Office supplies & general retail
                              </a>
                            </li>
                            <li
                              id="menu-item-20942"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20942"
                            >
                              <a href="https://www.priority-software.com/retail-management/pet-and-animal-supplies/">
                                Pet and Animal Supplies
                              </a>
                            </li>
                            <li
                              id="menu-item-20943"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20943"
                            >
                              <a href="https://www.priority-software.com/retail-management/sporting-goods/">
                                Sporting Goods
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-20944"
                    className="style-light-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20944"
                  >
                    <a
                      href="https://www.priority-software.com/hospitality-management/"
                      data-role="sub-mega-menu-action"
                    >
                      Hospitality Management
                    </a>
                    <div className="fixed-menu-wrapper js-fixed-menu-wrapper">
                      <ul className="sub-menu">
                        <button
                          className="return-back"
                          data-role="sub-mega-menu-action"
                        >
                          Solutions
                        </button>
                        <a
                          href="https://www.priority-software.com/hospitality-management/"
                          className="menu-item-parent-link"
                        >
                          Hospitality Management
                        </a>{" "}
                        <li
                          id="menu-item-20945"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20945"
                        >
                          <a href="#">Products</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20946"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20946"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/optima-pms/">
                                Optima PMS
                              </a>
                            </li>
                            <li
                              id="menu-item-20947"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20947"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/optima-cloud-pms/">
                                Optima Cloud PMS
                              </a>
                            </li>
                            <li
                              id="menu-item-20949"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20949"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/channel-manager/">
                                Channel Manager
                              </a>
                            </li>
                            <li
                              id="menu-item-24801"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24801"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/optima-crm/">
                                Optima CRM
                              </a>
                            </li>
                            <li
                              id="menu-item-24800"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24800"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/optima-pos/">
                                Optima POS
                              </a>
                            </li>
                            <li
                              id="menu-item-20948"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20948"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/optima-marketplace/">
                                Optima Marketplace
                              </a>
                            </li>
                            <li
                              id="menu-item-26836"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26836"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/optima-event-management/">
                                Optima Event Management
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-20950"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20950"
                        >
                          <a href="#">Categories</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-24796"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24796"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/boutique-hotel/">
                                Boutique hotels management
                              </a>
                            </li>
                            <li
                              id="menu-item-24797"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24797"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/business-hotels/">
                                Business hotels management
                              </a>
                            </li>
                            <li
                              id="menu-item-26835"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26835"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/hostels-management/">
                                Hostels management
                              </a>
                            </li>
                            <li
                              id="menu-item-20952"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20952"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/hotel-chains-and-groups/">
                                Hotel chains and groups management
                              </a>
                            </li>
                            <li
                              id="menu-item-20951"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20951"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/independent-hotels/">
                                Independent hotels management
                              </a>
                            </li>
                            <li
                              id="menu-item-24799"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24799"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/resorts-management-software/">
                                Resorts management
                              </a>
                            </li>
                            <li
                              id="menu-item-28924"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28924"
                            >
                              <a href="https://www.priority-software.com/hospitality-management/vacation-resorts/">
                                Vacation resorts
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-20953"
                    className="style-coral menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20953"
                  >
                    <a
                      href="https://www.priority-software.com/school-management/"
                      data-role="sub-mega-menu-action"
                    >
                      School Management
                    </a>
                    <div className="fixed-menu-wrapper js-fixed-menu-wrapper">
                      <ul className="sub-menu">
                        <button
                          className="return-back"
                          data-role="sub-mega-menu-action"
                        >
                          Solutions
                        </button>
                        <a
                          href="https://www.priority-software.com/school-management/"
                          className="menu-item-parent-link"
                        >
                          School Management
                        </a>{" "}
                        <li
                          id="menu-item-20954"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20954"
                        >
                          <a href="#">Categories</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20955"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20955"
                            >
                              <a href="https://www.priority-software.com/school-management/teachers/">
                                Teachers
                              </a>
                            </li>
                            <li
                              id="menu-item-20956"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20956"
                            >
                              <a href="https://www.priority-software.com/school-management/students-and-parents/">
                                Students and Parents
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-20957"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20957"
              >
                <a
                  href="https://www.priority-software.com/become-a-partner/"
                  className="nav__link"
                  data-role="show-sub-menu"
                  title=""
                >
                  Partners<span className="sub-menu-toggle"></span>
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-20958"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20958"
                  >
                    <a href="https://www.priority-software.com/become-a-partner/hospitality-marketplace/">
                      Hospitality marketplace
                    </a>
                  </li>
                  <li
                    id="menu-item-20959"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20959"
                  >
                    <a href="https://www.priority-software.com/become-a-partner/">
                      Become a partner
                    </a>
                  </li>
                  <li
                    id="menu-item-20960"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20960"
                  >
                    <a href="https://www.priority-software.com/become-a-partner/technology-partners/">
                      Technology partners
                    </a>
                  </li>
                  <li
                    id="menu-item-20961"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20961"
                  >
                    <a href="https://www.priority-software.com/become-a-partner/aws-partner/">
                      AWS partner
                    </a>
                  </li>
                  <li
                    id="menu-item-20962"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20962"
                  >
                    <a href="https://market.priority-software.com/">
                      Priority Market
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-20963"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20963"
              >
                <a
                  href="https://www.priority-software.com/about-priority/"
                  className="nav__link"
                  data-role="show-sub-menu"
                  title=""
                >
                  Company<span className="sub-menu-toggle"></span>
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-20964"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20964"
                  >
                    <a href="https://www.priority-software.com/about-priority/">
                      About us
                    </a>
                  </li>
                  <li
                    id="menu-item-20965"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20965"
                  >
                    <a href="https://www.priority-software.com/about-priority/case-studies/">
                      Case studies
                    </a>
                  </li>
                  <li
                    id="menu-item-20966"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20966"
                  >
                    <a href="https://www.priority-software.com/about-priority/events/">
                      Events
                    </a>
                  </li>
                  <li
                    id="menu-item-20967"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20967"
                  >
                    <a href="https://www.priority-software.com/news/">News</a>
                  </li>
                  <li
                    id="menu-item-20968"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20968"
                  >
                    <a href="https://www.priority-software.com/careers/">
                      Careers
                    </a>
                  </li>
                  <li
                    id="menu-item-26837"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26837"
                  >
                    <a href="https://www.priority-software.com/contact-us/">
                      Contact us
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-20969"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20969"
              >
                <a
                  href="https://www.priority-software.com/resources/"
                  className="nav__link"
                  data-role="show-sub-menu"
                  title=""
                >
                  Resources<span className="sub-menu-toggle"></span>
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-20970"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20970"
                  >
                    <a href="https://www.priority-software.com/resources/?solutions=all&industries=all&media=57#all-resources">
                      Articles
                    </a>
                  </li>
                  <li
                    id="menu-item-20971"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20971"
                  >
                    <a href="https://www.priority-software.com/resources/?solutions=all&industries=all&media=58#all-resources">
                      Brochures
                    </a>
                  </li>
                  <li
                    id="menu-item-26843"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26843"
                  >
                    <a href="https://www.priority-software.com/resources/?solutions=all&industries=all&media=60#all-resources">
                      Webinars
                    </a>
                  </li>
                  <li
                    id="menu-item-20973"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20973"
                  >
                    <a href="https://www.priority-software.com/resources/?solutions=all&industries=all&media=61#all-resources">
                      Videos
                    </a>
                  </li>
                  <li
                    id="menu-item-20974"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20974"
                  >
                    <a href="https://www.priority-software.com/resources/faq/">
                      FAQ
                    </a>
                  </li>
                  <li
                    id="menu-item-20975"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20975"
                  >
                    <a href="https://www.priority-software.com/blog/">Blog</a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-20976"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20976"
              >
                <a href="https://support.priority-software.com/">Support</a>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu__lang js-lang-wrapper">
            <div
              className="mobile-menu__lang-current js-lang-current"
              data-role="lang-action"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C8.63333 20 7.34167 19.7373 6.125 19.212C4.90833 18.6873 3.846 17.9707 2.938 17.062C2.02933 16.154 1.31267 15.0917 0.788 13.875C0.262667 12.6583 0 11.3667 0 10C0 8.61667 0.262667 7.321 0.788 6.113C1.31267 4.90433 2.02933 3.846 2.938 2.938C3.846 2.02933 4.90833 1.31233 6.125 0.787C7.34167 0.262333 8.63333 0 10 0C11.3833 0 12.679 0.262333 13.887 0.787C15.0957 1.31233 16.154 2.02933 17.062 2.938C17.9707 3.846 18.6873 4.90433 19.212 6.113C19.7373 7.321 20 8.61667 20 10C20 11.3667 19.7373 12.6583 19.212 13.875C18.6873 15.0917 17.9707 16.154 17.062 17.062C16.154 17.9707 15.0957 18.6873 13.887 19.212C12.679 19.7373 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.83767 16.429 6.613 15.837C6.38767 15.2457 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.18733 15.5583 4.912 16.175C5.63733 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3623 16.7917 15.087 16.175C15.8123 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6127 15.2457 13.388 15.837C13.1627 16.429 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.56233 11.3373 5.537 11.012C5.51233 10.6873 5.5 10.35 5.5 10C5.5 9.65 5.51233 9.31267 5.537 8.988C5.56233 8.66267 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.104 8.66267 2.062 8.988C2.02067 9.31267 2 9.65 2 10C2 10.35 2.02067 10.6873 2.062 11.012C2.104 11.3373 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4377 11.3373 12.463 11.012C12.4877 10.6873 12.5 10.35 12.5 10C12.5 9.65 12.4877 9.31267 12.463 8.988C12.4377 8.66267 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.56267 8.66267 7.538 8.988C7.51267 9.31267 7.5 9.65 7.5 10C7.5 10.35 7.51267 10.6873 7.538 11.012C7.56267 11.3373 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.896 11.3373 17.938 11.012C17.9793 10.6873 18 10.35 18 10C18 9.65 17.9793 9.31267 17.938 8.988C17.896 8.66267 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4373 8.66267 14.462 8.988C14.4873 9.31267 14.5 9.65 14.5 10C14.5 10.35 14.4873 10.6873 14.462 11.012C14.4373 11.3373 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8123 4.44167 15.087 3.825C14.3623 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1627 3.57067 13.388 4.162C13.6127 4.754 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.38767 4.754 6.613 4.162C6.83767 3.57067 7.1 3 7.4 2.45C6.46667 2.75 5.63733 3.20833 4.912 3.825C4.18733 4.44167 3.58333 5.16667 3.1 6Z"
                  fill="#16213D"
                ></path>
              </svg>
              <span className="mobile-menu__lang-code">en</span>
            </div>
            <div className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-touch-device wpml-ls-legacy-list-vertical">
              <ul>
                <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-nl wpml-ls-first-item wpml-ls-item-legacy-list-vertical">
                  <a
                    href="https://www.priority-software.com/nl/"
                    className="wpml-ls-link"
                  >
                    <span className="wpml-ls-native" lang="nl">
                      Dutch
                    </span>
                  </a>
                </li>
                <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-il wpml-ls-last-item wpml-ls-item-legacy-list-vertical">
                  <a
                    href="https://www.priority-software.com/il/"
                    className="wpml-ls-link"
                  >
                    <span className="wpml-ls-native" lang="il">
                      Hebrew
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="https://www.priority-software.com/demo/"
            className="mobile-menu__button"
          >
            Get a Demo
          </a>{" "}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
