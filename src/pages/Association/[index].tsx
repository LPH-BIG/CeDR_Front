import React, { useEffect, useState } from 'react';
import {
  Alert,
  Col,
  Descriptions,
  Divider,
  Image,
  Pagination,
  Row,
  Space,
  Tabs,
} from 'antd';
import { history } from '@@/core/history';
import { IMG_PREFIX } from '@/common/constants';
import ProTable, { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import Title from 'antd/es/typography/Title';
import { getRemoteGene } from '@/pages/Subproject/service';
import { DrugItem, AssociationItem } from '@/pages/Subproject/data';
const { TabPane } = Tabs;
const Index = ({
  match: {
    params: { association },
  },
}) => {
  const [activeKey, setActivekey] = useState('tab3');
  const [alert, setAlert] = useState('none');
  const [record, setRecord] = useState<AssociationItem | undefined>(undefined);
  const [druginformation, setDruginformation] = useState<DrugItem>({});

  //TODO:修改association的条目，加上rank gene信息，拼接gene information与association的rank gene信息。
  const columns2 = [
    {
      title: 'Order',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
      valueType: 'text',
      width: 88,
    },
    {
      title: 'Ensembl ID',
      dataIndex: 'refs',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
      render: (text, record, index) => {
        return (
          <span>
            <a
              href={
                'https://www.ensembl.org/Homo_sapiens/Gene/Summary?db=core;g=' +
                record.refs
              }
            >
              {record.refs}
            </a>
          </span>
        );
      },
    },
    {
      title: 'Gene Symbol',
      dataIndex: 'symbol',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Chromosome',
      dataIndex: 'chromosome',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
  ];

  useEffect(() => {
    console.log(association);
  }, [association]);

  return (
    <div>
      <Tabs
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        onChange={(activeKey) => {
          // console.log(activeKey)
          if (activeKey == 'tab1') {
            history.push('/general');
          }
          if (activeKey == 'tab2') {
            history.push('/subproject/' + record?.subproject);
          }
        }}
      >
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              General Table
            </span>
          }
          key="tab1"
        ></TabPane>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              Subproject
            </span>
          }
          key="tab2"
        ></TabPane>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              {/*<AndroidOutlined />*/}
              Cell Drug Association
            </span>
          }
          key="tab3"
        >
          <div>
            <Row>
              <strong style={{ fontSize: '18px' }}>GSEA analysis</strong>
              <Divider />
              <Alert
                message="Warning"
                description="Sorry, this association has no significant GSEA results"
                type="warning"
                showIcon
                closable
                style={{ display: alert }}
              />
              <Image.PreviewGroup>
                <Space>
                  <Title level={3}>Cell Type:</Title>
                  <Image
                    width={'80%'}
                    src={IMG_PREFIX + record?.photocelltype}
                    fallback={
                      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                    }
                    onError={(event) => {
                      setAlert('inline');
                    }}
                  />
                  <Title level={3}>Drug:</Title>
                  <Image
                    width={'80%'}
                    src={IMG_PREFIX + record?.photodrug}
                    onError={(event) => {
                      setAlert('inline');
                    }}
                    fallback={
                      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                    }
                  />
                </Space>
              </Image.PreviewGroup>
            </Row>
            <Divider />
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Descriptions
                  title={'Drug Information'}
                  bordered
                  style={{ marginLeft: '2%' }}
                >
                  <Descriptions.Item label="Name" span={2}>
                    <a
                      onClick={() => {
                        history.push('/browse/drug/' + druginformation.name);
                      }}
                    >
                      {druginformation.name}
                    </a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Catalog Name">
                    {druginformation.catalog_name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Concentration">
                    {druginformation.concentration}
                  </Descriptions.Item>
                  <Descriptions.Item label="Duration">
                    {druginformation.duration}
                  </Descriptions.Item>
                  <Descriptions.Item label="Array">
                    {druginformation.array}
                  </Descriptions.Item>
                  <Descriptions.Item label="Vehicle">
                    {druginformation.vehicle}
                  </Descriptions.Item>
                  <Descriptions.Item label="Scanner">
                    {druginformation.scanner}
                  </Descriptions.Item>
                  <Descriptions.Item label="Vendor">
                    {druginformation.vendor}
                  </Descriptions.Item>
                  <Descriptions.Item label="Inst">
                    {druginformation.inst}
                  </Descriptions.Item>
                  <Descriptions.Item label="Array">
                    {druginformation.array}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <ProTable
              title={() => {}}
              columns={columns2}
              rowKey={'id'}
              request={async (params) => {
                // console.log("params");
                // console.log(params);
                let str = record?.overlapgene.substr(1);
                if (str) {
                  str = str.substr(0, str.length - 1);
                  str = str.replaceAll("'", '');
                  str = str.replace(/\s+/g, '');
                } else {
                  str = ' ';
                }
                // console.log(str);
                const msg = await getRemoteGene({ name: str }).then((res) => {
                  // console.log(res);
                  return res;
                });
                return {
                  data: msg.data,
                  success: msg.status == 200 ? true : false,
                };
              }}
              search={false}
              headerTitle={'Gene Information'}
              options={false}
            />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Index;
