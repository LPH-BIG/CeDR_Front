import React, { FC, useState } from 'react';
import styles from './index.less';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { GeneralState } from '@/pages/General/model';
import { Pagination, Select } from 'antd';
import { connect, Dispatch, Loading } from 'umi';
import { GeneralItem } from '@/pages/General/data';
import { DotChartOutlined } from '@ant-design/icons';
import { Options } from 'prettier';
interface GeneralPageProps {
  general: GeneralState;
  dispatch: Dispatch;
  generalListLoading: boolean;
}
export interface SearchKeywords {
  source: string | undefined;
  tissue: string | undefined;
  phenotype: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
}
const GeneralListPage: FC<GeneralPageProps> = ({
  general,
  dispatch,
  generalListLoading,
}) => {
  const [record, setRecord] = useState<GeneralItem | undefined>(undefined);

  const [keywords, setKeywords] = useState<SearchKeywords>({});
  const changeHandler = (value: any, options: any) => {
    // setOptions(options);
    // console.log(value);
    console.log(options);
    const source = options.source;
    const tissue = options.tissue;
    const celltype = options.celltype;
    const phenotype = options.phenotype;
    const inst = options.inst;
    dispatch({
      type: 'general/getRemote',
      payload: {
        source,
        tissue,
        celltype,
        phenotype,
        inst,
      },
    });
  };
  const sourceHandler = (value: string) => {
    setKeywords({ ...keywords, source: value });
    // console.log(keywords);
    dispatch({
      type: 'general/getKeywords',
      payload: {
        keywords: keywords,
      },
    });
  };
  const tissueHandler = (value: string) => {
    setKeywords({ ...keywords, tissue: value });
    // console.log(keywords);
    dispatch({
      type: 'general/getKeywords',
      payload: {
        keywords: keywords,
      },
    });
  };
  const phenotypeHandler = (value: string) => {
    setKeywords({ ...keywords, phenotype: value });
    // console.log(keywords);
    dispatch({
      type: 'general/getKeywords',
      payload: {
        keywords: keywords,
      },
    });
  };
  const celltypeHandler = (value: string) => {
    setKeywords({ ...keywords, celltype: value });
    // console.log(keywords);
    dispatch({
      type: 'general/getKeywords',
      payload: {
        keywords: keywords,
      },
    });
  };
  const instHandler = (value: string) => {
    setKeywords({ ...keywords, inst: value });
    // console.log(keywords);
    dispatch({
      type: 'general/getKeywords',
      payload: {
        keywords: keywords,
      },
    });
  };

  const columns = [
    {
      title: 'Order',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      // valueType: 'text',
      hideInForm: true,
      renderFormItem: () => {
        // const options = all
        return (
          <Select
            key={'sourceSelect'}
            showSearch={true}
            allowClear={true}
            placeholder={'input and select a source'}
            filterOption={false}
            onSearch={sourceHandler}
            onChange={(value, option) => {
              changeHandler(value, option);
            }}
          ></Select>
        );
      },
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
      // valueType: 'text',
      search: false,
      render: (text: string, record: GeneralItem) => (
        <span>
          <a onClick={() => {}}>{text}</a>
          &nbsp;&nbsp;
          <DotChartOutlined />
        </span>
      ),
    },
    {
      title: 'Tissue',
      dataIndex: 'tissue',
      key: 'tissue',
      // valueType: 'text',
      hideInForm: true,
      renderFormItem: () => {
        // const options = all
        return (
          <Select
            key={'tissueSelect'}
            showSearch={true}
            allowClear={true}
            placeholder={'input and select a tissue'}
            filterOption={false}
            onSearch={tissueHandler}
            onChange={(value, option) => {
              changeHandler(value, option);
            }}
          ></Select>
        );
      },
    },
    {
      title: 'Phenotype',
      dataIndex: 'phenotype',
      key: 'phenotype',
      valueType: 'text',
      hideInForm: true,
      renderFormItem: () => {
        // const options = all
        return (
          <Select
            key={'phenotypeSelect'}
            showSearch={true}
            allowClear={true}
            placeholder={'input and select a phenotype'}
            filterOption={false}
            onSearch={phenotypeHandler}
            onChange={(value, option) => {
              changeHandler(value, option);
            }}
          ></Select>
        );
      },
    },
    {
      title: 'Cell Type',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
      hideInForm: true,
      renderFormItem: () => {
        // const options = all
        return (
          <Select
            key={'celltypeSelect'}
            showSearch={true}
            allowClear={true}
            placeholder={'input and select a cell type'}
            filterOption={false}
            onSearch={celltypeHandler}
            onChange={(value, option) => {
              changeHandler(value, option);
            }}
          ></Select>
        );
      },
    },
    {
      title: 'Drug',
      dataIndex: 'inst',
      key: 'inst',
      valueType: 'text',
      hideInForm: true,
      renderFormItem: () => {
        // const options = all
        return (
          <Select
            key={'instSelect'}
            showSearch={true}
            allowClear={true}
            placeholder={'input and select a drug'}
            filterOption={false}
            onSearch={instHandler}
            onChange={(value, option) => {
              changeHandler(value, option);
            }}
          ></Select>
        );
      },
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
        key={'general'}
        onSubmit={(params) => {
          console.log('submit');
          // console.log(params)
        }}
        search={{
          defaultCollapsed: false,
          labelWidth: 'auto',
          searchText: 'Search',
          resetText: 'Reset',
        }}
        onRow={(record) => {
          return {
            onClick: (event) => {
              console.log('click event');
            }, // 点击行
            onDoubleClick: (event) => {},
            onContextMenu: (event) => {},
            onMouseEnter: (event) => {}, // 鼠标移入行
            onMouseLeave: (event) => {},
          };
        }}
      />
      <Pagination
        key={'generalPagination'}
        className={styles.pagenation}
        showQuickJumper
        defaultCurrent={1}
        total={general.meta.total}
        pageSize={general.meta.pageSize}
        showSizeChanger
        showTotal={(total) => `Total ${total} items`}
        pageSizeOptions={[10, 20, 50, 100]}
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
  //这个传的是state对象，可以通过此处测试数据是否正确
  // console.log(loading);
  // console.log(general);
  return {
    general,
    generalListLoading: loading.models.general,
  };
};

export default connect(mapStateToProps)(GeneralListPage);
