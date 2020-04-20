import React from "react";
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
    <header>
        <div className="header-area ">
          
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3">
                  <div className="logo">
                    <Link to="/">
                      <img style={{height:70}} src="../img/about/bb.png" alt="nepal corona" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9">
                  <div className="main-menu">
                    <nav>
                      <ul id="navigation">
                        <li><Link to="/New">Nepal Infection data</Link></li>
                        <li><Link to="/About">Podcasts</Link></li>
                        <li><Link to="/Blog">News </Link>
                          
                        </li>
                        <li><Link to="/Pages">Myths</Link>
                          
                        </li>
                        <li><Link to="/Contact">FAQs</Link></li>
                        <li><Link to="/Last">ALL nepali data</Link></li>
                        <li><Link to="/Hos">list hospital</Link></li>
                      </ul>
                    </nav>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </header>
);
}

export default Navbar;