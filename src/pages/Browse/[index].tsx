import {
  Dispatch,
  GeneralState,
  Loading,
  SubprojectState,
} from '@@/plugin-dva/connect';
import ProTable from '@ant-design/pro-table';
import React, { FC, useEffect, useState } from 'react';
import { connect, history } from 'umi';
import { getRemoteDrug, getRemoteNetwork } from '@/pages/Subproject/service';
import { Col, Select, Space, Row } from 'antd';
import { getRemoteKeywords } from '@/pages/General/service';
import { SubprojectItem } from '@/pages/Subproject/data';
import Network from '@/components/Network';
interface BrowsePageProps {
  browse: SubprojectState;
  dispatch: Dispatch;
  browseListLoading: boolean;
}
const Index: FC<BrowsePageProps> = ({
  browse,
  dispatch,
  browseListLoading,
}) => {
  const columns = [
    {
      // title: 'Order',
      title: 'Association ID',
      // dataIndex: 'index',
      dataIndex: 'id',
      // valueType: 'index',
      // width: 58,
      render: (text, record, index) => {
        return (
          <div>
            <span>
              <a
                onClick={() => {
                  history.push(
                    '/subproject/' + record.project + ' ' + record.subproject,
                  );
                }}
              >
                {record.id}
              </a>
            </span>
          </div>
        );
      },
    },
    {
      title: 'Source',
      dataIndex: 'source',
      valueType: 'text',
      hideInForm: true,
      render: (text, record, index) => {
        return (
          <div>
            <span>
              <a
                onClick={() => {
                  history.push('/general/source/' + text);
                }}
              >
                {text}
              </a>
            </span>
          </div>
        );
      },
    },
    {
      title: 'Project',
      dataIndex: 'project',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: 'subproject',
      dataIndex: 'subproject',
      valueType: 'text',
      hideInForm: true,
      render: (text, record, index) => {
        return (
          <div>
            <span>
              <a
                onClick={() => {
                  history.push(
                    '/subproject/' + record.project + ' ' + record.subproject,
                  );
                }}
              >
                {text}
              </a>
            </span>
          </div>
        );
      },
    },
    {
      title: 'tissue',
      dataIndex: 'tissue',
      valueType: 'text',
      hideInForm: true,
      render: (text, record, index) => {
        return (
          <div>
            <span>
              <a
                onClick={() => {
                  history.push('/general/tissue/' + text);
                }}
              >
                {text}
              </a>
            </span>
          </div>
        );
      },
    },
    {
      title: 'phenotype',
      dataIndex: 'phenotype',
      valueType: 'text',
      hideInForm: true,
      render: (text, record, index) => {
        return (
          <div>
            <span>
              <a
                onClick={() => {
                  history.push('/general/phenotype/' + text);
                }}
              >
                {text}
              </a>
            </span>
          </div>
        );
      },
    },
    {
      title: 'Cell Type',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: 'Drug',
      dataIndex: 'drug',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: 'p-value 1',
      dataIndex: 'pvalue1',
      key: 'pvalue1',
      valueType: 'text',
    },
    {
      title: 'Odds Ratio 1',
      dataIndex: 'oddsratio1',
      key: 'oddsratio1',
      valueType: 'text',
      ellipsis: true,
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
      width: 100,
    },
    {
      title: 'Overlap Gene',
      dataIndex: 'overlapgene',
      key: 'overlapgene',
      valueType: 'text',
      hideInForm: true,
      ellipsis: true,
    },
  ];
  const [network, setNetwork] = useState([]);
  useEffect(() => {
    //TODO://从后端拿网络图数据
    // console.log(history.location.pathname);
    const k = history.location.pathname.split('/');
    if (k[2] == 'celltype') {
      console.log(k[3]);
      getRemoteNetwork({
        project: undefined,
        subproject: undefined,
        celltype: k[3],
        drug: undefined,
      }).then((res) => {
        // console.log(res.data);
        setNetwork(res.data);
      });
    } else if (k[2] == 'drug') {
      getRemoteNetwork({
        project: undefined,
        subproject: undefined,
        celltype: undefined,
        drug: k[3],
      }).then((res) => {
        // console.log(res.data);
        setNetwork(res.data);
      });
    }
  }, [browse.data]);
  return (
    <div>
      <Row justify={'center'}>
        <Col md={12}>
          <Network network={network} height={'800px'} />
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col md={20}>
          <div>
            <ProTable<SubprojectItem>
              columns={columns}
              dataSource={browse.data}
              loading={browseListLoading}
              rowKey={(record) => record.id}
              search={false}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({
  browse,
  loading,
}: {
  browse: SubprojectState;
  loading: Loading;
}) => {
  //这个传的是state对象，可以通过此处测试数据是否正确
  // console.log("loading");
  // console.log(general);
  return {
    browse,
    browseListLoading: loading.models.browse,
  };
};

export default connect(mapStateToProps)(Index);
