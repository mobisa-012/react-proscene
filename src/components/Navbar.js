import React from "react";
import "./Navbar.css";
import logoHome from './assets/logo.png';

function Navbar() {
  return (
    <header
      id="site-header"
      className="site-header js-site-header site-header__sticky en">
      <div className="site-header__inner">
        <div className="container site-header__container" style={{maxWidth: '1400px',margin: '0 auto', paddingInline:'1em'}}>
          <div className="site-header__logo">
            <a
              href="/"
              className="site-header__logo-link">
              <img className="style-svg site-header__logo-img" src={logoHome} style={{maxHeight:'35px', minHeight:'25px'}} alt="Proscene"></img>
            </a>
          </div>

          <div className="site-header__side">
            <nav className="site-header__nav">
              <ul
                id="menu-header-en"
                className="site-header__menu js-menu-wrapper">

                {/* solutions part */}
                <li
                  id="menu-item-20758"
                  className="mega-menu solutions menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children active">
                  <a href="/">
                    <span>Solutions</span>
                  </a>
                  <div className="sub-menu-wrapper mega-menu-wrapper">
                    <ul className="sub-menu">
                      
                      <div
                        id="tab-20759"
                        className='tab-pane erp style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children active '>
                        <li
                          id="menu-item-20835"
                          className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                              <div className="first-item-wrapper">
                                <li
                                  id="menu-item-32670"
                                  className="menu-item menu-item-type-custom menu-item-object-custom">

                                {/* the recognized part */}
                                  <div className="block-area blue custom-image">                                    
                                    <div className="item-content-area">
                                      <div className="item-content-area-title dark">
                                        Recognized as the top Audio Visual Solution and Collaboraiton Partner in the 2024 TEC
                                      </div>
                                      <div className="item-content-area-description">
                                        Insight Report on Audio Visual Solutions for SMBs
                                      </div>
                                      <div className="item-content-area-button">
                                        <a
                                          href="/bookDemo"
                                          className="btn blue bg-[#3b37e6] text-white rounded-[15px] px-6 py-3 text-lg transition-all duration-300 hover:bg-[#16213d]"
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
                                  className="menu-item menu-item-type-post_type menu-item-object-page">
                                  <a
                                    href="/avIntegration"
                                    className="item-link"
                                  >
                                    <span className="item-title-area">
                                      <span className="item-title">Audio Visual Integration</span>
                                    </span>
                                    <span className="item-content-area-title">
                                      Seamless design and installation of audio-visual systems for any environment, 
                                      from meeting rooms to large venues, ensuring impactful communication and experiences.
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20837"
                                  className="menu-item menu-item-type-post_type menu-item-object-page"
                                >
                                  <a
                                    href="/collaborationSolutions"
                                    className="item-link"
                                  >
                                    <span className="item-title-area">
                                      <span className="item-title">
                                        Collaboration
                                      </span>
                                    </span>
                                    <span className="item-content-area-title">
                                      Tools and technologies that empower teams to connect, 
                                      communicate, and work together effectively, 
                                      regardless of location, fostering productivity and innovation.
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20838"
                                  className="menu-item menu-item-type-post_type menu-item-object-page"
                                >
                                  <a
                                    href="/digitalMedia"
                                    className="item-link"
                                  >
                                    <span className="item-title-area">
                                      <span className="item-title">
                                        Digital Media
                                      </span>
                                    </span>
                                    <span className="item-content-area-title">
                                      Creation and management of engaging digital content, 
                                      including video production, digital signage, and content distribution, 
                                      to enhance brand messaging and audience engagement.
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20839"
                                  className="menu-item menu-item-type-post_type menu-item-object-page"
                                >
                                  <a
                                    href="/automationSolutions"
                                    className="item-link"
                                  >
                                    <span className="item-title-area">
                                      <span className="item-title">Automation Solutions</span>
                                    </span>
                                    <span className="item-content-area-title">
                                      Streamlining processes and enhancing efficiency through automated control of AV systems, 
                                      lighting, and other building technologies, creating smart and responsive environments.
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20840"
                                  className="menu-item menu-item-type-custom menu-item-object-custom"
                                >
                                  <a
                                    href="/interactiveTechnology"
                                    className="item-link"
                                  >
                                    <span className="item-title-area">
                                      <span className="item-title">
                                        Interactive Technology
                                      </span>
                                    </span>
                                    <span className="item-content-area-title">
                                       Engaging and immersive experiences using touch screens, interactive displays, 
                                       and other innovative technologies to enhance presentations, 
                                       training, and customer engagement.
                                    </span>
                                  </a>
                                </li>
                              </div>
                        </li>
                        <div className="banner blue">
                          <div className="banner-description">
                            See how Proscene works for you
                          </div>
                          <a
                            className="btn bg-[#3b37e6] text-white rounded-[15px] px-6 py-3 text-lg transition-all duration-300 hover:bg-[#16213d]"
                            href="/bookDemo"
                          >
                            Book a demo
                          </a>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>

                {/* secotr link */}
                <li
                  id="menu-item-20835"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                  <a href="/sectors">
                    <span>Sectors</span>
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
                              <img 
                                src="https://www.priority-software.com/wp-content/uploads/2024/12/tec-logo-170-130.jpg" 
                                className="menu-item-image" 
                                alt="Proscene Logo"/>
                              <noscript>
                                <img 
                                  src="https://www.priority-software.com/wp-content/uploads/2024/12/tec-logo-170-130.jpg" 
                                  className="menu-item-image" 
                                  alt="Proscene Logo"/>
                              </noscript>

                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title dark">
                                Recognized as the top Audio Visual Solution and Collaboraiton Partner in the 2024 TEC
                              </div>
                              <div className="item-content-area-description">
                                Insight Report on Audio Visual Solutions for SMBs
                              </div>
                              <div className="item-content-area-button">
                                <a
                                  href="/bookDemo"
                                  className="btn blue bg-[#3b37e6] text-white rounded-[15px] px-6 py-3 text-lg transition-all duration-300 hover:bg-[#16213d]"
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
                            href="/corporate"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Corporate</span>
                            </span>
                            <span className="item-content-area-title">
                              Solutions designed to enhance communication, collaboration, 
                              and productivity within businesses of all sizes, from small 
                              enterprises to large corporations
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20837"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/education"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Education
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Technology and services that empower educators and students, 
                              fostering engaging learning environments and improving educational outcomes
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20838"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/publicSector"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Public Sector
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Tailored solutions for government agencies and 
                              public institutions to improve efficiency,transparency, and service delivery to citizens
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20839"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/healthcare"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Healthcare</span>
                            </span>
                            <span className="item-content-area-title">
                              Innovative technologies and services that support healthcare 
                              providers in delivering better patient care, streamlining 
                              operations, and improving healthcare outcomes
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20840"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="/legalCollaboration"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Legal Collaboration
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Secure and efficient communication and collaboration platforms 
                              designed specifically for the legal profession, facilitating seamless teamwork and client interaction.
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>

                {/* company link */}
                <li
                  id="menu-item-20841"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                  <a href="/company">
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
                                <img 
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20281%20150'%3E%3C/svg%3E" 
                                className="menu-item-image" 
                                width="281" 
                                height="150" 
                                alt="" 
                                data-lazy-src="https://www.priority-software.com/wp-content/uploads/2024/08/image-7-281x150.png"/>
                                <noscript>
                                <img 
                                src="https://www.priority-software.com/wp-content/uploads/2024/08/image-7-281x150.png" 
                                className="menu-item-image" width="281" height="150" alt=""/>
                                </noscript>
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
                                  href="/bookDemo"
                                  className="btn blue bg-[#3b37e6] text-white rounded-[15px] px-6 py-3 text-lg transition-all duration-300 hover:bg-[#16213d]"
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
                            href="/about"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">About us</span>
                            </span>
                            <span className="item-content-area-title">
                              Proscene is a technology solutions provider offering cutting-edge 
                              tools like audio-visual integration, collaboration systems, and 
                              digital media to enhance productivity and efficiency.
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20842"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/case-studies"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Case studies</span>
                            </span>
                            <span className="item-content-area-title">
                              Real world examples of how forward-thinking
                              businesses use Proscene to improve and grow
                            </span>
                          </a>
                        </li>                        
                        <li
                          id="menu-item-23000"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/contact"
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

                {/* serives link */}
                <li
                  id="menu-item-20847"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                  <a href="/services">
                    <span>Services</span>
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
                              <a href="">
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
                                <img 
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20281%20150'%3E%3C/svg%3E" 
                                className="menu-item-image" width="281" height="150" alt="" 
                                data-lazy-src="https://www.priority-software.com/wp-content/uploads/2024/08/deep-dive-1-15082400-17-28-17still005-1-281x150.jpg"/>
                                <noscript>
                                <img src="https://www.priority-software.com/wp-content/uploads/2024/08/deep-dive-1-15082400-17-28-17still005-1-281x150.jpg" 
                                className="menu-item-image" width="281" height="150" alt=""/>
                                </noscript>
                              </a>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title purple">
                                Proscene product tour
                              </div>
                              <div className="item-content-area-description">
                                Discover how Proscene’s powerful features
                              </div>
                              <div className="item-content-area-button">
                                <a
                                  href="/bookDemo"
                                  className="btn blue bg-[#3b37e6] text-white rounded-[15px] px-6 py-3 text-lg transition-all duration-300 hover:bg-[#16213d]"
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
                            href="/unifiedCommunications"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Unified Communications</span>
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
                            href="/trainingAndSupport"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Training & Support</span>
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
                            href="/onSiteSupport"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">On Site Support</span>
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
                            href="/equipmentRepair"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Equipment Repair</span>
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
                            href="/leasing"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Leasing</span>
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
                            href="/videoConferenceRental"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Video Conference Rental</span>
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

                {/* supprt link */}
                <li
                  id="menu-item-20853"
                  className="menu-item menu-item-type-custom menu-item-object-custom"
                >
                  <a href="/support">
                    <span>Support</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* get demo button */}
            <div className="site-header__button-wrapper">
              <a
                href="/bookDemo"
                className="site-header__button">
                Get a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
