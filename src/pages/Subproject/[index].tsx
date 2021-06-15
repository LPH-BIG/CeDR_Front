import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import { Col, message, Pagination, Row, Select, Tabs } from 'antd';
import { history } from '@@/core/history';
import {
  AndroidOutlined,
  AppleOutlined,
  DotChartOutlined,
} from '@ant-design/icons';
import { GeneralState } from '@/pages/General/model';
import { Dispatch, Loading } from '@@/plugin-dva/connect';
import { connect } from 'umi';
import { GeneralItem } from '@/pages/General/data';
import ProTable from '@ant-design/pro-table';
import Tsne from '@/components/Tsne';
import { getRemoteTsne, getRemoteNetwork } from './service';
import Network from '@/components/Network';
interface SubprojectPageProps {
  subproject: GeneralState;
  dispatch: Dispatch;
  subprojectListLoading: boolean;
}
const { TabPane } = Tabs;
const Index: FC<SubprojectPageProps> = ({
  subproject,
  dispatch,
  subprojectListLoading,
}) => {
  const [activeKey, setActivekey] = useState('2');
  const [record, setRecord] = useState<GeneralItem | undefined>(undefined);
  const [tsne, setTsne] = useState({});
  const [tsnetitle, setTsnetitle] = useState(' ');

  const [network, setNetwork] = useState([]);

  useEffect(() => {
    const dataset = subproject.data[0];
    if (dataset) {
      const { project, subproject } = dataset;
      const name = project + ' ' + subproject;
      // console.log("name: "+kk);
      getRemoteTsne({ name: name }).then((res) => {
        // console.log(res.data)
        setTsne(res.data);
      });
      setTsnetitle(dataset.project + ' ' + dataset.subproject);

      getRemoteNetwork({ project: project, subproject: subproject }).then(
        (res) => {
          setNetwork(res.data);
        },
      );
    }
  }, [subproject.data]);

  const columns = [
    {
      title: 'Order',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
    },
    {
      title: 'Cell Type',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
      hideInForm: true,
      // search: false,
    },
    {
      title: 'Drug',
      dataIndex: 'inst',
      key: 'inst',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: 'p-value 1',
      dataIndex: 'pvalue1',
      key: 'pvalue1',
      valueType: 'text',
      hideInForm: true,
      search: false,
    },
    {
      title: 'Odds Ratio 1',
      dataIndex: 'oddsratio1',
      key: 'oddsratio1',
      valueType: 'text',
      hideInForm: true,
      search: false,
    },
    {
      title: 'p-value 2',
      dataIndex: 'pvalue2',
      key: 'pvalue2',
      valueType: 'text',
      hideInForm: true,
      search: false,
    },
    {
      title: 'Odds Ratio 2',
      dataIndex: 'oddsratio2',
      key: 'oddsratio2',
      valueType: 'text',
      hideInForm: true,
      search: false,
    },
    {
      title: 'Spearman',
      dataIndex: 'spearman',
      key: 'spearman',
      valueType: 'text',
      hideInForm: true,
      search: false,
    },
    {
      title: 'S p-value',
      dataIndex: 'spvalue',
      key: 'spvalue',
      valueType: 'text',
      hideInForm: true,
      search: false,
    },
    {
      title: 'Overlap Gene Number',
      dataIndex: 'overlapgenenum',
      key: 'overlapgenenum',
      valueType: 'text',
      hideInForm: true,
      search: false,
    },
    {
      title: 'Overlap Gene',
      dataIndex: 'overlapgene',
      key: 'overlapgene',
      valueType: 'text',
      hideInForm: true,
      // search: false,
    },
  ];

  const paginationHandler = (page: number, pageSize?: number) => {
    dispatch({
      type: 'subproject/getRemote',
      payload: {
        pageIndex: page,
        pageSize: pageSize ? pageSize : subproject.meta.pageSize,
      },
    });
  };
  const sizeChangeHandler = (current: number, size: number) => {
    dispatch({
      type: 'subproject/getRemote',
      payload: {
        pageIndex: current,
        pageSize: size,
      },
    });
  };

  return (
    <div>
      <Tabs
        defaultActiveKey={activeKey}
        onChange={(activeKey) => {
          // console.log(activeKey)
          if (activeKey == '1') {
            history.push('/browse');
          }
          if (activeKey == '2') {
            history.push('/subproject/');
          }
          if (activeKey == '3') {
            history.push('/association');
          }
        }}
      >
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              General Tables
            </span>
          }
          key="1"
        ></TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Subproject
            </span>
          }
          key="2"
        >
          <div>
            <Row>
              <Col xs={4} sm={6} md={8} lg={10} xl={12}>
                <Tsne data={tsne} title={tsnetitle} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <ProTable<GeneralItem>
                  columns={columns}
                  dataSource={subproject.data}
                  loading={subprojectListLoading}
                  pagination={false}
                  rowKey="id"
                  // onSubmit={(params) => {
                  //   const source = keywords.source;
                  //   const tissue = keywords.tissue;
                  //   const celltype = keywords.celltype;
                  //   const phenotype = keywords.phenotype;
                  //   const inst = keywords.inst;
                  //   // console.log('submit');
                  //   // console.log(keywords);
                  //   dispatch({
                  //     type: 'general/getRemote',
                  //     payload: {
                  //       pageIndex: 1,
                  //       pageSize: 10,
                  //       source: source,
                  //       tissue: tissue,
                  //       phenotype: phenotype,
                  //       celltype: celltype,
                  //       inst: inst,
                  //     },
                  //   });
                  // }}
                  search={{
                    defaultCollapsed: false,
                    labelWidth: 'auto',
                    searchText: 'Search',
                    resetText: 'Reset',
                    // collapseRender: ()=>null,
                    // collapseRender: ()=>{return(<span>Collapse</span>)}
                  }}
                />
                <Pagination
                  key={'generalPagination'}
                  className={styles.pagenation}
                  showQuickJumper
                  defaultCurrent={1}
                  total={subproject.meta.total}
                  pageSize={subproject.meta.pageSize}
                  showSizeChanger
                  showTotal={(total) => `Total ${total} items`}
                  pageSizeOptions={[10, 20, 50, 100]}
                  onChange={paginationHandler}
                  onShowSizeChange={sizeChangeHandler}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={6} md={8} lg={10} xl={12}>
                <Network network={network} />
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Cell Drug Association
            </span>
          }
          key="3"
          disabled
        >
          Cell Drug Association
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = ({
  subproject,
  loading,
}: // props,
{
  subproject: GeneralState;
  loading: Loading;
}) => {
  //这个传的是state对象，可以通过此处测试数据是否正确
  // console.log(loading);
  // console.log(subproject);
  return {
    subproject,
    subprojectListLoading: loading.models.subproject,
  };
};

export default connect(mapStateToProps)(Index);
