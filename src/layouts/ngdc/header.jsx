import React from 'react';
import style from './index.less';
const Header = () => {
  return (
    <div
      style={{
        height: '30px',
        backgroundColor: '#0c64b6',
        borderColor: '#0c64b6',
        fontFamily: ' Arial',
      }}
    >
      <nav
        className="bigd-navbar-default bigd-navbar"
        style={{ height: '30px' }}
      >
        <div
          className="bigd-container"
          style={{ height: '30px', width: '100%' }}
        >
          <div
            className="bigd-navbar-header"
            style={{ height: '30px', width: '50%', marginLeft: '30px' }}
          >
            {/*<button type="button" className="bigd-navbar-toggle bigd-collapsed"><span className="bigd-sr-only">Toggle navigation</span><span*/}
            {/*  className="bigd-icon-bar"></span><span className="bigd-icon-bar"></span> <span className="bigd-icon-bar"></span>*/}
            {/*</button>*/}
            <a
              href="https://www.cncb.ac.cn"
              target="_blank"
              className="bigd-navbar-brand"
            >
              <img
                src="https://ngdc.cncb.ac.cn/cdn/image/cncb-nav.png"
                className="bigd-img-responsive"
                style={{ width: '10%', height: '22px' }}
              />
            </a>
            <a href="https://ngdc.cncb.ac.cn/" className="bigd-navbar-brand">
              <img
                src="https://ngdc.cncb.ac.cn/cdn/image/ngdc-nav.png"
                className="bigd-img-responsive"
                style={{ width: '10%', height: '22px' }}
              />
            </a>
          </div>
          <div
            className="bigd-collapse bigd-navbar-collapse"
            id="bigd-coll"
            style={{ width: '50%', height: '30px' }}
          >
            <ul className="bigd-nav bigd-navbar-nav bigd-navbar-right">
              <li>
                <a href="https://ngdc.cncb.ac.cn/databases"> Databases</a>
              </li>
              <li>
                <a href="https://ngdc.cncb.ac.cn/tools">Tools</a>
              </li>
              <li>
                <a href="https://ngdc.cncb.ac.cn/standards">Standards</a>
              </li>
              <li>
                <a href="https://ngdc.cncb.ac.cn/publications">Publications</a>
              </li>
              <li>
                <a href="https://ngdc.cncb.ac.cn/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
