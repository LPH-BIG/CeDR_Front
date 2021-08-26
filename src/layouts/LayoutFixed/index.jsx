import React, { useEffect, useState } from 'react';
import styles from './index.less';
import NgdcHeader from '../ngdc/header';
import NgdcFooter from '../ngdc/footer';
import { Layout, Menu, Breadcrumb, BackTop, Typography, Row, Col } from 'antd';
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
const { Title } = Typography;
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
  // console.log(props);
  const [selectKey, setSelectkey] = useState('1');
  useEffect(() => {
    if (
      history.location.pathname.startsWith('/general') |
      history.location.pathname.startsWith('/dataset') |
      history.location.pathname.startsWith('/browse') |
      history.location.pathname.startsWith('/association')
    ) {
      setSelectkey('2');
    } else if (history.location.pathname.startsWith('/search')) {
      setSelectkey('3');
    } else if (history.location.pathname.startsWith('/downloads')) {
      setSelectkey('4');
    } else if (history.location.pathname.startsWith('/documentation')) {
      setSelectkey('5');
    } else if (history.location.pathname.startsWith('/contact')) {
      setSelectkey('6');
    }
    // console.log(history.location.pathname);
  }, [history.location]);
  return (
    <Row className={styles.container}>
      <Col>
        <NgdcHeader />
        <HeaderLab />
        <div id="components-layout-demo-fixed">
          <Layout>
            <Header style={{ zIndex: 2, width: '100%' }}>
              <Row justify={'center'}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  // defaultSelectedKeys={['1']}
                  selectedKeys={[selectKey]}
                  // selectedKeys={[this.state.current]}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item
                    key="1"
                    onClick={() => {
                      props.history.push('/home');
                      setSelectkey('1');
                    }}
                  >
                    <HomeOutlined />
                    &nbsp;
                    <strong style={{ color: '#fff' }}>Home</strong>
                  </Menu.Item>

                  <Menu.Item
                    key="2"
                    onClick={() => {
                      props.history.push('/general');
                      setSelectkey('2');
                    }}
                  >
                    <EyeOutlined />
                    &nbsp;
                    <strong style={{ color: '#fff' }}>Browse</strong>
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
                  <Menu.Item
                    key="3"
                    onClick={() => {
                      props.history.push('/search');
                      setSelectkey('3');
                    }}
                  >
                    <SearchOutlined />
                    &nbsp;
                    <strong style={{ color: '#fff' }}>Search</strong>
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    onClick={() => {
                      props.history.push('/downloads');
                      setSelectkey('4');
                    }}
                  >
                    <DownloadOutlined />
                    &nbsp;
                    <strong style={{ color: '#fff' }}>Download</strong>
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    onClick={() => {
                      props.history.push('/documentation');
                      setSelectkey('5');
                    }}
                  >
                    <FileTextOutlined />
                    &nbsp;
                    <strong style={{ color: '#fff' }}>Documentation</strong>
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    onClick={() => {
                      props.history.push('/contact');
                      setSelectkey('6');
                    }}
                  >
                    <ContactIcon />
                    &nbsp;
                    <strong style={{ color: '#fff' }}>Contact</strong>
                  </Menu.Item>
                </Menu>
              </Row>
            </Header>
            <Row justify={'center'}>
              <Col md={24}>
                <Content className="site-layout">
                  {/*<Breadcrumb itemRender={itemRender} routes={props.routes[0].routes} />*/}
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 380 }}
                  >
                    {props.children}
                  </div>
                </Content>
              </Col>
            </Row>
            <BackTop />
            <Footer>
              <NgdcFooter />
            </Footer>
          </Layout>
        </div>
      </Col>
    </Row>
  );
}
