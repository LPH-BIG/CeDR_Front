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
import {
  getRemoteTypeKeywords,
  getSelect,
  multipleKeywordsItem,
} from '@/pages/Search/service';
import { history } from 'umi';
const { Title } = Typography;
export default function Page() {
  const [searchkey, setSearchkey] = useState<searchKeywordsItem>();
  const [multiplekey, setMultiplekey] = useState<multipleKeywordsItem>({});
  const [coptions, setCoptions] = useState([]);
  const [options, setOptions] = useState([]);
  return (
    <div>
      <Row style={{ justifyContent: 'center' }}>
        <Col md={24}>
          <PageHeader
            className="site-page-header"
            title="Single Criteria  Search"
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
          <PageHeader
            className="site-page-header"
            title="Multiple Criteria  Search"
          />
          <Row justify="center" style={{ marginBottom: '10%' }}>
            <Col xs={18} sm={18} md={18} lg={18} xl={12}>
              <Select
                style={{ width: '70%' }}
                placeholder="input and select multiple keyword"
                showSearch={true}
                allowClear={true}
                showArrow
                optionLabelProp="value"
                mode="multiple"
                onFocus={() => {
                  getRemoteTypeKeywords('').then((res) => {
                    const op = res.data.map((item) => (
                      <Select.Option
                        key={item.id}
                        value={item.name}
                        type={item.type}
                      >
                        <Tag
                          icon={<FlagOutlined />}
                          style={{ float: 'left', color: '#3D84B8' }}
                        >
                          {item.type} is
                        </Tag>
                        <Tag
                          icon={<EnvironmentOutlined />}
                          style={{ float: 'right' }}
                        >
                          {item.name}
                        </Tag>
                      </Select.Option>
                    ));
                    setOptions(op);
                  });
                }}
                onSearch={(value: string) => {
                  getRemoteTypeKeywords(value).then((res) => {
                    const op = res.data.map((item) => (
                      <Select.Option
                        key={item.id}
                        value={item.name}
                        type={item.type}
                      >
                        <Tag
                          icon={<FlagOutlined />}
                          style={{ float: 'left', color: '#3D84B8' }}
                        >
                          {item.type} is
                        </Tag>
                        <Tag
                          icon={<EnvironmentOutlined />}
                          style={{ float: 'right' }}
                        >
                          {item.name}
                        </Tag>
                      </Select.Option>
                    ));
                    setOptions(op);
                  });
                }}
                onSelect={(value, option) => {
                  // console.log(option);
                  switch (option.type) {
                    case 'source': {
                      setMultiplekey({ ...multiplekey, source: value });
                      break;
                    }
                    case 'tissue': {
                      setMultiplekey({ ...multiplekey, tissuegroup: value });
                      break;
                    }
                    case 'phenotype': {
                      setMultiplekey({ ...multiplekey, phenotype: value });
                      break;
                    }
                    case 'celltype': {
                      setMultiplekey({ ...multiplekey, celltype: value });
                      break;
                    }
                    case 'drug': {
                      setMultiplekey({ ...multiplekey, drug: value });
                      break;
                    }
                  }
                }}
                onDeselect={(value, option) => {
                  // console.log(value);
                  // console.log(option);
                  switch (option.type) {
                    case 'source': {
                      setMultiplekey({ ...multiplekey, source: undefined });
                      break;
                    }
                    case 'tissue': {
                      setMultiplekey({
                        ...multiplekey,
                        tissuegroup: undefined,
                      });
                      break;
                    }
                    case 'phenotype': {
                      setMultiplekey({ ...multiplekey, phenotype: undefined });
                      break;
                    }
                    case 'celltype': {
                      setMultiplekey({ ...multiplekey, celltype: undefined });
                      break;
                    }
                    case 'drug': {
                      setMultiplekey({ ...multiplekey, drug: undefined });
                      break;
                    }
                  }
                }}
              >
                {options}
              </Select>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                onClick={() => {
                  console.log(multiplekey);
                  history.push(
                    '/browse' +
                      '/source/' +
                      multiplekey.source +
                      '/tissue/' +
                      multiplekey.tissuegroup +
                      '/phenotype/' +
                      multiplekey.phenotype +
                      '/cellltype/' +
                      multiplekey.celltype +
                      '/drug/' +
                      multiplekey.drug,
                  );
                  setMultiplekey({});
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
