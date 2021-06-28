import {
  Dispatch,
  GeneralState,
  Loading,
  SubprojectState,
} from '@@/plugin-dva/connect';
import ProTable from '@ant-design/pro-table';
import React, { FC } from 'react';
import { connect, history } from 'umi';
import { getRemoteDrug } from '@/pages/Subproject/service';
import { Select, Space } from 'antd';
import { getRemoteKeywords } from '@/pages/General/service';
import { SubprojectItem } from '@/pages/Subproject/data';

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
                record.id
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
  const paginationHandler = (page: number, pageSize?: number) => {
    dispatch({
      type: 'subproject/getRemote',
      payload: {
        pageIndex: page,
        pageSize: pageSize ? pageSize : browse.meta.pageSize,
        // project: subproject.data[0].project,
        // subproject: subproject.data[0].subproject,
        // overlapgene: keywords.overlapgene,
        // celltype: keywords.celltype,
        // drug: keywords.drug,
      },
    });
  };
  const sizeChangeHandler = (current: number, size: number) => {
    dispatch({
      type: 'subproject/getRemote',
      payload: {
        pageIndex: current,
        pageSize: size,
        // project: subproject.data[0].project,
        // subproject: subproject.data[0].subproject,
        // overlapgene: keywords.overlapgene,
        // celltype: keywords.celltype,
        // drug: keywords.drug,
      },
    });
  };

  return (
    <div>
      <ProTable<SubprojectItem>
        columns={columns}
        dataSource={browse.data}
        loading={browseListLoading}
        rowKey={(record) => record.id}
        search={false}
        // pagination={false}
      />
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
