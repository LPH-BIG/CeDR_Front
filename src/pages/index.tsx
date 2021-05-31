import styles from './index.less';
import { Col, Input, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import  Pie  from './Pie';
import Network from '../components/Network';
const { Search } = Input;
export default function IndexPage() {

  const onSearch = (value:any) => console.log(value);

  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  return (
    <div>
      <Row justify="center">
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            // suffix={suffix}
          />
        </Col>
      </Row>
      <br/>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <Pie/>
        </Col>
        <Col xs={4} sm={6} md={8} lg={10} xl={12} push={1}>
          <Network/>
        </Col>
      </Row>
    </div>
  );
}
