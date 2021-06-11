import React, { FC, useState } from 'react';
import styles from './index.less';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { GeneralState } from '@/pages/General/model';
import { Pagination } from 'antd';
import { connect, Dispatch, Loading } from 'umi';
import { GeneralItem } from '@/pages/General/data';
interface GeneralPageProps {
  general: GeneralState;
  dispatch: Dispatch;
  generalListLoading: boolean;
}

const GeneralListPage: FC<GeneralPageProps> = ({
  general,
  dispatch,
  generalListLoading,
}) => {
  const [record, setRecord] = useState<GeneralItem | undefined>(undefined);

  const columns = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      valueType: 'text',
    },
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
      valueType: 'text',
      search: false,
    },
    {
      title: 'Subproject',
      dataIndex: 'subproject',
      key: 'subproject',
      valueType: 'text',
      search: false,
    },
    {
      title: 'Tissue',
      dataIndex: 'tissue',
      key: 'tissue',
      valueType: 'text',
    },
    {
      title: 'Phenotype',
      dataIndex: 'phenotype',
      key: 'phenotype',
      valueType: 'text',
    },
    {
      title: 'Cell Type',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
    },
    {
      title: 'Drug',
      dataIndex: 'inst',
      key: 'inst',
      valueType: 'text',
    },
  ];

  const paginationHandler = (page: number, pageSize?: number) => {
    dispatch({
      type: 'general/getRemote',
      payload: {
        pageIndex: page,
        pageSize: pageSize ? pageSize : general.meta.pageSize,
      },
    });
  };
  const sizeChangeHandler = (current: number, size: number) => {
    dispatch({
      type: 'general/getRemote',
      payload: {
        pageIndex: current,
        pageSize: size,
      },
    });
  };

  return (
    <div>
      <ProTable<GeneralItem>
        columns={columns}
        dataSource={general.data}
        loading={generalListLoading}
        pagination={false}
      />
      <Pagination
        className={styles.pagenation}
        showQuickJumper
        defaultCurrent={1}
        total={general.meta.total}
        pageSize={general.meta.pageSize}
        showSizeChanger
        showTotal={(total) => `Total ${total} items`}
        pageSizeOptions={[20, 10, 30]}
        onChange={paginationHandler}
        onShowSizeChange={sizeChangeHandler}
      />
    </div>
  );
};

const mapStateToProps = ({
  general,
  loading,
}: {
  general: GeneralState;
  loading: Loading;
}) => {
  return {
    general,
    generalListLoading: loading.models.general,
  };
};

export default connect(mapStateToProps)(GeneralListPage);
