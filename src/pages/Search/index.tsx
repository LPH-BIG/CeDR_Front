import React, { useState } from 'react';
import styles from './index.less';
import { Button, Select, PageHeader, Row, Col, Divider, Tag } from 'antd';
import {
  EnvironmentOutlined,
  FlagOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import { searchKeywordsItem } from '@/pages/index';
import { getSelect } from '@/pages/Search/service';
import { history } from 'umi';
const { Title } = Typography;
export default function Page() {
  const [celltypes, setCelltypes] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const [searchkey, setSearchkey] = useState<searchKeywordsItem>();
  const [coptions, setCoptions] = useState([]);
  const [doptions, setDoptions] = useState([]);
  return (
    <div>
      <Row style={{ justifyContent: 'center' }}>
        <Col md={24}>
          <PageHeader
            className="site-page-header"
            title="Advanced Search"
            // subTitle="This is a subtitle"
          />
          <Divider />
          <Row style={{ height: '100px' }}>
            <Col md={6} push={2}>
              <Title level={4}>Cell Type:</Title>
            </Col>
            <Col md={12}>
              <div>
                <Select
                  style={{ width: '70%' }}
                  placeholder="input and select a celltype"
                  showSearch={true}
                  allowClear={true}
                  onFocus={() => {
                    getSelect({ type: 'celltype', name: '' }).then((res) => {
                      const op = res.map((item) => (
                        <Select.Option
                          key={item.id}
                          value={item.name}
                          type={item.type}
                        >
                          {item.name}
                        </Select.Option>
                      ));
                      setCoptions(op);
                    });
                  }}
                  onSearch={(value: string) => {
                    getSelect({ type: 'celltype', name: value }).then((res) => {
                      const op = res.map((item) => (
                        <Select.Option
                          key={item.id}
                          value={item.name}
                          type={item.type}
                        >
                          {item.name}
                        </Select.Option>
                      ));
                      setCoptions(op);
                    });
                  }}
                  onChange={(value, option) => {
                    if (option) {
                      setSearchkey({ type: option.type, name: value });
                      console.log(searchkey);
                    }
                  }}
                >
                  {coptions}
                </Select>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={() => {
                    history.push(
                      '/browse/' + searchkey?.type + '/' + searchkey?.name,
                    );
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>
          </Row>
          <Divider />
          <Row style={{ height: '100px' }}>
            <Col md={6} push={2}>
              <Title level={4}>Drug:</Title>
            </Col>
            <Col
              md={12}
              // style={{ marginLeft: '40px' }}
            >
              <div>
                <Select
                  style={{ width: '70%' }}
                  placeholder="input and select a drug"
                  showSearch={true}
                  allowClear={true}
                  onFocus={() => {
                    getSelect({ type: 'drug', name: '' }).then((res) => {
                      const op = res.map((item) => (
                        <Select.Option
                          key={item.id}
                          value={item.name}
                          type={item.type}
                        >
                          {item.name}
                        </Select.Option>
                      ));
                      setCoptions(op);
                    });
                  }}
                  onSearch={(value: string) => {
                    getSelect({ type: 'drug', name: value }).then((res) => {
                      const op = res.map((item) => (
                        <Select.Option
                          key={item.id}
                          value={item.name}
                          type={item.type}
                        >
                          {item.name}
                        </Select.Option>
                      ));
                      setCoptions(op);
                    });
                  }}
                  onChange={(value, option) => {
                    if (option) {
                      setSearchkey({ type: option.type, name: value });
                      console.log(searchkey);
                    }
                  }}
                >
                  {coptions}
                </Select>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={() => {
                    history.push(
                      '/browse/' + searchkey?.type + '/' + searchkey?.name,
                    );
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>
          </Row>
          <Divider />
          <Row style={{ height: '100px' }}>
            <Col md={6} push={2}>
              <Title level={4}>Disease:</Title>
            </Col>
            <Col
              md={12}
              // style={{ marginLeft: '10px' }}
            >
              <div>
                <Select
                  style={{ width: '70%' }}
                  placeholder="input and select a disease"
                  showSearch={true}
                  allowClear={true}
                  onFocus={() => {
                    getSelect({ type: 'phenotype', name: '' }).then((res) => {
                      const op = res.map((item) => (
                        <Select.Option
                          key={item.id}
                          value={item.name}
                          type={item.type}
                        >
                          {item.name}
                        </Select.Option>
                      ));
                      setCoptions(op);
                    });
                  }}
                  onSearch={(value: string) => {
                    getSelect({ type: 'phenotype', name: value }).then(
                      (res) => {
                        const op = res.map((item) => (
                          <Select.Option
                            key={item.id}
                            value={item.name}
                            type={item.type}
                          >
                            {item.name}
                          </Select.Option>
                        ));
                        setCoptions(op);
                      },
                    );
                  }}
                  onChange={(value, option) => {
                    if (option) {
                      setSearchkey({ type: option.type, name: value });
                      // console.log(searchkey);
                    }
                  }}
                >
                  {coptions}
                </Select>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={() => {
                    history.push(
                      '/general/' + searchkey?.type + '/' + searchkey?.name,
                    );
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>
          </Row>
          <Divider />
          <Row style={{ height: '100px' }}>
            <Col md={6} push={2}>
              <Title level={4}>Tissue:</Title>
            </Col>
            <Col
              md={12}
              // style={{ marginLeft: '25px' }}
            >
              <div>
                <Select
                  style={{ width: '70%' }}
                  placeholder="input and select a tissue"
                  showSearch={true}
                  allowClear={true}
                  onFocus={() => {
                    getSelect({ type: 'tissue', name: '' }).then((res) => {
                      const op = res.map((item) => (
                        <Select.Option
                          key={item.id}
                          value={item.name}
                          type={item.type}
                        >
                          {item.name}
                        </Select.Option>
                      ));
                      setCoptions(op);
                    });
                  }}
                  onSearch={(value: string) => {
                    getSelect({ type: 'tissue', name: value }).then((res) => {
                      const op = res.map((item) => (
                        <Select.Option
                          key={item.id}
                          value={item.name}
                          type={item.type}
                        >
                          {item.name}
                        </Select.Option>
                      ));
                      setCoptions(op);
                    });
                  }}
                  onChange={(value, option) => {
                    if (option) {
                      setSearchkey({ type: option.type, name: value });
                      // console.log(searchkey);
                    }
                  }}
                >
                  {coptions}
                </Select>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={() => {
                    history.push(
                      '/general/' + searchkey?.type + '/' + searchkey?.name,
                    );
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
