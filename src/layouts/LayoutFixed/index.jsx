import React from 'react';
import styles from './index.less';
import { Layout, Menu, Breadcrumb, BackTop } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
import HeaderLab from '../HeaderLab';
import { history } from 'umi';
import {
  CellIcon,
  DrugIcon,
  TissueIcon,
  ContactIcon,
  StatusIcon,
} from '../../components/Icons/index';
import {
  EyeOutlined,
  HomeOutlined,
  SearchOutlined,
  FileTextOutlined,
  DownloadOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';

export default function (props) {
  const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
  };
  // console.log(history.location);
  console.log(props);
  return (
    <div className={styles.container}>
      <HeaderLab />
      <div id="components-layout-demo-fixed">
        <Layout>
          <Header style={{ zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              // selectedKeys={[this.state.current]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1" onClick={() => props.history.push('/home')}>
                <HomeOutlined />
                Home
              </Menu.Item>

              <Menu.Item key="2" onClick={() => props.history.push('/browse')}>
                <EyeOutlined />
                Browse
              </Menu.Item>
              {/*<SubMenu key="2" icon={<EyeOutlined />} title={<><span>Browse </span><DownOutlined /></>}>*/}

              {/*  <Menu.Item key="sub1" icon={<TissueIcon />}*/}
              {/*             onClick={() => props.history.push('/users')}>Tissue</Menu.Item>*/}
              {/*  <Menu.Item key="sub2" icon={<CellIcon />} onClick={() => props.history.push('/high/2')}>Cell*/}
              {/*    Type</Menu.Item>*/}
              {/*  <Menu.Item key="sub3" icon={<DrugIcon />}*/}
              {/*             onClick={() => props.history.push('/network/3')}>Drug</Menu.Item>*/}
              {/*  <Menu.Item key="sub4" icon={<StatusIcon />}*/}
              {/*             onClick={() => props.history.push('/diseases')}>Diseases</Menu.Item>*/}
              {/*</SubMenu>*/}
              <Menu.Item key="3" onClick={() => props.history.push('/search')}>
                <SearchOutlined />
                Search
              </Menu.Item>
              <Menu.Item
                key="4"
                onClick={() => props.history.push('/downloads')}
              >
                <DownloadOutlined />
                Downloads
              </Menu.Item>
              <Menu.Item
                key="5"
                onClick={() => props.history.push('/documentation')}
              >
                <FileTextOutlined />
                Documentation
              </Menu.Item>
              <Menu.Item key="6" onClick={() => props.history.push('/contact')}>
                <ContactIcon />
                Contact
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            className="site-layout"
            style={{ padding: '0 50px', marginTop: 20 }}
          >
            {/*<Breadcrumb itemRender={itemRender} routes={props.routes[0].routes} />*/}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              {props.children}
            </div>
          </Content>
          <BackTop />
          <Footer style={{ textAlign: 'center' }}>
            <div>
              © 2021 National Genomics Data Center, China National Center for
              Bioinformation / Beijing Institute of Genomics, Chinese Academy of
              Sciences
            </div>
            <div>
              No.1 Beichen West Road, Chaoyang District, Beijing 100101, China
            </div>
            <div>
              Tel: +86 (10) 8409-7340 | Fax: +86 (10) 8409-7200 | ngdc@big.ac.cn
            </div>
          </Footer>
        </Layout>
      </div>
    </div>
  );
}
