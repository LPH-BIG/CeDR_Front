import React, { FC, useState } from 'react';
import styles from './index.less';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { GeneralState } from '@/pages/General/model';
import { Pagination, Select } from 'antd';
import { connect, Dispatch, Loading, history } from 'umi';
import { GeneralItem } from '@/pages/General/data';
import { DotChartOutlined } from '@ant-design/icons';
import { getRemoteKeywords, getSelect } from './service';
import sortBy from '@antv/data-set/lib/util/simple-sort-by';
import { routerRedux } from 'dva/router';
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
  inst: string | undefined;
}
const GeneralListPage: FC<GeneralPageProps> = ({
  general,
  dispatch,
  generalListLoading,
}) => {
  const [record, setRecord] = useState<GeneralItem | undefined>(undefined);

  const [source, setSource] = useState([]);
  const [tissue, setTissue] = useState([]);
  const [phenotype, setPhenotype] = useState([]);
  const [celltype, setCelltype] = useState([]);
  const [inst, setInst] = useState([]);
  const [keywords, setKeywords] = useState<SearchKeywords>({});
  const changeHandler = (value: any, options: any) => {
    // console.log(value);
    // console.log(options);
    if (options.type == 'source') {
      setKeywords({ ...keywords, source: value });
    } else if (options.type == 'tissue') {
      setKeywords({ ...keywords, tissue: value });
    } else if (options.type == 'phenotype') {
      setKeywords({ ...keywords, phenotype: value });
    } else if (options.type == 'celltype') {
      setKeywords({ ...keywords, celltype: value });
    } else if (options.type == 'inst') {
      setKeywords({ ...keywords, inst: value });
    }
  };
  const sourceHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getSelect({
        type: 'source',
        name: value,
      });
      if (remoteKeywords) {
        setSource(remoteKeywords);
        // console.log(remoteKeywords);
      }
    }
  };
  const tissueHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getSelect({
        type: 'tissue',
        name: value,
      });
      if (remoteKeywords) {
        setTissue(remoteKeywords);
        // console.log(remoteKeywords);
      }
    }
  };
  const phenotypeHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getSelect({
        type: 'phenotype',
        name: value,
      });
      if (remoteKeywords) {
        setPhenotype(remoteKeywords);
        // console.log(remoteKeywords);
      }
    }
  };
  const celltypeHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getSelect({
        type: 'celltype',
        name: value,
      });
      if (remoteKeywords) {
        setCelltype(remoteKeywords);
        // console.log(remoteKeywords);
      }
    }
  };
  const instHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getSelect({
        type: 'inst',
        name: value,
      });
      if (remoteKeywords) {
        setInst(remoteKeywords);
        // console.log(remoteKeywords);
      }
    }
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
        const options = source.map((item) => (
          <Option key={item.id} value={item.name} type={item.type}>
            {item.name}
          </Option>
        ));
        return (
          <Select
            key={'sourceSelect'}
            showSearch={true}
            allowClear={true}
            placeholder={'input and select a source'}
            filterOption={false}
            onSearch={sourceHandler}
            onChange={changeHandler}
          >
            {options}
          </Select>
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
          <a
            onClick={() => {
              // console.log(record);
              // console.log(history.location.pathname);
              // @ts-ignore
              // const {dispatch} = this.props;
              // dispatch(routerRedux.push({
              //   pathname: '/subproject',
              //   record: record.subproject,//传的值
              // }))
              history.push(
                '/subproject/' + record.project + ' ' + record.subproject,
              );
            }}
          >
            {text}
          </a>
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
        const options = tissue.map((item) => (
          <Option key={item.id} value={item.name} type={item.type}>
            {item.name}
          </Option>
        ));
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
          >
            {options}
          </Select>
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
        const options = phenotype.map((item) => (
          <Option key={item.id} value={item.name} type={item.type}>
            {item.name}
          </Option>
        ));
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
          >
            {options}
          </Select>
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
        const options = celltype.map((item) => (
          <Option key={item.id} value={item.name} type={item.type}>
            {item.name}
          </Option>
        ));

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
          >
            {options}
          </Select>
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
        const options = inst.map((item) => (
          <Option key={item.id} value={item.name} type={item.type}>
            {item.name}
          </Option>
        ));

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
          >
            {options}
          </Select>
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

  // console.log(props.activeKey);
  return (
    <div>
      <ProTable<GeneralItem>
        columns={columns}
        dataSource={general.data}
        loading={generalListLoading}
        pagination={false}
        key={'general'}
        onSubmit={(params) => {
          const source = keywords.source;
          const tissue = keywords.tissue;
          const celltype = keywords.celltype;
          const phenotype = keywords.phenotype;
          const inst = keywords.inst;
          // console.log('submit');
          // console.log(keywords);
          dispatch({
            type: 'general/getRemote',
            payload: {
              pageIndex: 1,
              pageSize: 10,
              source: source,
              tissue: tissue,
              phenotype: phenotype,
              celltype: celltype,
              inst: inst,
            },
          });
        }}
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
}: // props,
{
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
