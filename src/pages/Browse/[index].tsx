import { Dispatch, GeneralState, Loading, DatasetState } from 'umi';
import ProTable from '@ant-design/pro-table';
import React, { FC, useEffect, useState } from 'react';
import { connect, history } from 'umi';
import { getRemoteNetwork } from '@/pages/Dataset/service';
import { Col, Select, Space, Row } from 'antd';
import { AssociationItem } from '@/pages/Dataset/data';
import Network from '@/components/Network';
interface BrowsePageProps {
  browse: DatasetState;
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
      title: 'Association ID',
      dataIndex: 'associationid',
      // valueType: 'index',
      width: 120,
      fixed: 'left',
      render: (text, record, index) => {
        return (
          <div>
            <span>
              <a
                onClick={() => {
                  history.push('/association/' + record.associationid);
                }}
              >
                {record.associationid}
              </a>
            </span>
          </div>
        );
      },
    },
    {
      title: 'Dataset ID',
      dataIndex: 'datasetid',
      valueType: 'text',
      hideInForm: true,
      render: (text, record, index) => {
        return (
          <div>
            <span>
              <a
                onClick={() => {
                  history.push('/dataset/' + record.datasetid);
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
      ellipsis: true,
    },

    {
      title: 'Tissue',
      dataIndex: 'tissue',
      valueType: 'text',
      hideInForm: true,
      ellipsis: true,
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
      title: 'Phenotype',
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
      ellipsis: true,
    },
    {
      title: 'Drug',
      dataIndex: 'drug',
      valueType: 'text',
      hideInForm: true,
      ellipsis: true,
    },
    {
      title: 'p-value 1',
      dataIndex: 'pvalue1',
      key: 'pvalue1',
      valueType: 'text',
      ellipsis: true,
    },
    {
      title: 'Odds Ratio 1',
      dataIndex: 'oddsratio1',
      key: 'oddsratio1',
      valueType: 'text',
      ellipsis: true,
      ellipsis: true,
    },
    {
      title: 'p-value 2',
      dataIndex: 'pvalue2',
      key: 'pvalue2',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Odds Ratio 2',
      dataIndex: 'oddsratio2',
      key: 'oddsratio2',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Spearman',
      dataIndex: 'spearman',
      key: 'spearman',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'S p-value',
      dataIndex: 'spvalue',
      key: 'spvalue',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Overlap Gene Number',
      dataIndex: 'overlapgenenum',
      key: 'overlapgenenum',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
      // width: 100,
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
        celltype: k[3],
        datasetid: undefined,
        drug: undefined,
      }).then((res) => {
        // console.log(res.data);
        setNetwork(res.data);
      });
    } else if (k[2] == 'drug') {
      getRemoteNetwork({
        drug: k[3],
        celltype: undefined,
        datasetid: undefined,
      }).then((res) => {
        // console.log(res.data);
        setNetwork(res.data);
      });
    }
  }, []);
  return (
    <div>
      <Row justify={'center'}>
        <Col style={{ textAlign: 'center' }}>
          <Network network={network} height={'500px'} width={1000} />
          <strong>
            Point Color: <span style={{ color: 'red' }}>dataset:red</span>{' '}
            &nbsp; <span style={{ color: 'orange' }}>cell type: orange</span>
            &nbsp; <span style={{ color: 'blue' }}>drug:blue</span>
          </strong>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col md={20}>
          <div>
            <ProTable<AssociationItem>
              columns={columns}
              scroll={{ x: true }}
              pagination={{
                // total:record?.overlapgenenum,
                showTotal: (total) => `Total ${total} items`,
                showSizeChanger: false,
                defaultPageSize: 10,
              }}
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
  browse: DatasetState;
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
