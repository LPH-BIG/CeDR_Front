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
import ProTable, { createIntl, IntlProvider } from '@ant-design/pro-table';
import Title from 'antd/es/typography/Title';
import enUSIntl from 'antd/lib/locale/en_US';
import {
  getRemoteDataset,
  getRemoteDrug,
  getRemoteGene,
} from '@/pages/Dataset/service';
import { DrugItem, AssociationItem } from '@/pages/Dataset/data';
import Text from 'antd/es/typography/Text';
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
  const columns = [
    {
      title: 'Order',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
    },
    {
      title: 'Gene ID',
      dataIndex: 'id',
      valueType: 'text',
      width: 88,
      render: (text: string, record) => {
        return (
          <span>
            <a
              href={'https://www.ncbi.nlm.nih.gov/gene/?term=' + record.id}
              target={'_blank'}
            >
              {record.id}
            </a>
          </span>
        );
      },
    },
    {
      title: 'Ensembl ID',
      dataIndex: 'refs',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
      render: (text: string, record) => {
        return (
          <span>
            <a
              href={
                'https://www.ensembl.org/Homo_sapiens/Gene/Summary?db=core;g=' +
                record.refs
              }
              target={'_blank'}
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
    {
      title: 'Other Name',
      dataIndex: 'other_name',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },

    // {
    //   title: 'Type',
    //   dataIndex: 'type',
    //   valueType: 'text',
    //   hideInForm: true,
    //   search: false,
    //   ellipsis: true,
    // },
  ];

  useEffect(() => {
    console.log(association);
    if (association) {
      getRemoteDataset({ associationid: association }).then((res) => {
        setRecord(res.data[0]);
        // console.log(res.data[0])
      });
    }
  }, [association]);

  useEffect(() => {
    console.log(record);
    if (record) {
      getRemoteDrug({ name: record.inst }).then((res) => {
        setDruginformation(res.data);
      });
    }
  }, [record]);

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
            history.push('/dataset/' + record?.datasetid);
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
              Dataset Detail
            </span>
          }
          key="tab2"
        ></TabPane>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              Cellular Drug Association
            </span>
          }
          key="tab3"
        >
          <div>
            <Row>
              <Title level={4}>GSEA analysis:</Title>
              <Divider />
              <Alert
                message="Warning"
                description="Sorry, this association has no significant GSEA results"
                type="warning"
                showIcon
                closable
                style={{ display: alert }}
                // style={{ display: 'none' }}
              />
            </Row>
            <Row justify={'center'}>
              <Col md={12} style={{ textAlign: 'center' }}>
                <Title level={4}>Cell Type: &nbsp; {record?.celltype}</Title>
              </Col>
              <Col md={12} style={{ textAlign: 'center' }}>
                <Title level={4}>Drug: &nbsp;{druginformation.name}</Title>
              </Col>
            </Row>
            <Row justify={'center'}>
              <Col md={12} style={{ textAlign: 'center' }}>
                <Image
                  width={'50%'}
                  src={IMG_PREFIX + record?.photocelltype.replace('|||', '___')}
                  preview={false}
                  fallback={
                    'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                  }
                  onError={(event) => {
                    // setAlert('inline');
                  }}
                />
              </Col>
              <Col md={12} style={{ textAlign: 'center' }}>
                <Image
                  width={'50%'}
                  src={IMG_PREFIX + record?.photodrug.replace('|||', '___')}
                  preview={false}
                  onError={(event) => {
                    // setAlert('inline');
                  }}
                  fallback={
                    'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                  }
                />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Descriptions
                  title={<Title level={4}>Drug Information:</Title>}
                  bordered
                  // style={{ marginLeft: '2%' }}
                >
                  <Descriptions.Item label="Name">
                    <a
                      onClick={() => {
                        https: window.open(
                          'https://go.drugbank.com/unearth/q?utf8=%E2%9C%93&searcher=drugs&query=' +
                            druginformation.name,
                        );
                      }}
                    >
                      {druginformation.name}
                    </a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Inst ID">
                    {druginformation.inst}
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
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Descriptions
                  title={<Title level={4}>Cell Type Information:</Title>}
                  bordered
                  // style={{ marginLeft: '4%' }}
                >
                  <Descriptions.Item label="Cell Type Name" span={1}>
                    {record?.celltype}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <Row justify={'center'}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Image.PreviewGroup>
                  {/*<Space>*/}
                  <Title level={4}>Matrix Plot:</Title>
                  <p style={{ textAlign: 'center', fontSize: '18px' }}>
                    Matrix plot of signature genes in {record?.datasetid} scRNA
                    dataset referring to {druginformation.name}-
                    {record?.celltype} association
                  </p>
                  <Image
                    style={{ marginLeft: '10%' }}
                    width={'80%'}
                    preview={false}
                    src={IMG_PREFIX + record?.matrixplot}
                    fallback={
                      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                    }
                    onError={(event) => {
                      // setAlert('inline');
                    }}
                  />
                  {/*</Space>*/}
                </Image.PreviewGroup>
              </Col>
            </Row>
            <Divider />
            <IntlProvider value={enUSIntl}>
              <ProTable
                columns={columns}
                rowKey={'id'}
                // showTotal={total => `Total ${total} items`}
                pagination={{
                  // total:record?.overlapgenenum,
                  showTotal: (total) => `Total ${total} items`,
                  showSizeChanger: false,
                }}
                params={record}
                request={async () => {
                  if (record) {
                    let str = record.overlapgene.substr(1);
                    if (str) {
                      str = str.substr(0, str.length - 1);
                      str = str.replaceAll("'", '');
                      str = str.replace(/\s+/g, '');
                    } else {
                      str = ' ';
                    }
                    const msg = await getRemoteGene({ name: str }).then(
                      (res) => {
                        // console.log(res);
                        return res;
                      },
                    );
                    return {
                      data: msg.data,
                      success: msg.status == 200 ? true : false,
                    };
                  }
                }}
                search={false}
                headerTitle={<Title level={4}>Gene Information:</Title>}
                options={false}
              />
            </IntlProvider>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Index;
