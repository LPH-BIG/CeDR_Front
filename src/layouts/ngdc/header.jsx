import React from 'react';
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
      <nav style={{ height: '30px' }}>
        <div style={{ height: '30px', width: '100%' }}>
          <div style={{ height: '30px', width: '100%', marginLeft: '30px' }}>
            <a
              href="https://www.cncb.ac.cn"
              target="_blank"
              className="bigd-navbar-brand"
            >
              <img
                src="https://ngdc.cncb.ac.cn/cdn/image/cncb-nav.png"
                className="bigd-img-responsive"
                style={{ width: '5%', height: '22px' }}
              />
            </a>
            <a href="https://ngdc.cncb.ac.cn/">
              <img
                src="https://ngdc.cncb.ac.cn/cdn/image/ngdc-nav.png"
                style={{ width: '5%', height: '22px' }}
              />
            </a>
            <a
              href="https://ngdc.cncb.ac.cn/databases"
              style={{ color: '#fff', marginLeft: '1000px' }}
            >
              {' '}
              Databases
            </a>
            <a
              href="https://ngdc.cncb.ac.cn/tools"
              style={{ color: '#fff', marginLeft: '50px' }}
            >
              Tools
            </a>
            <a
              href="https://ngdc.cncb.ac.cn/standards"
              style={{ color: '#fff', marginLeft: '50px' }}
            >
              Standards
            </a>
            <a
              href="https://ngdc.cncb.ac.cn/publications"
              style={{ color: '#fff', marginLeft: '50px' }}
            >
              Publications
            </a>
            <a
              href="https://ngdc.cncb.ac.cn/about"
              style={{ color: '#fff', marginLeft: '50px' }}
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
