import React, { FC, useState } from 'react';
import styles from './index.less';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { GeneralState } from '@/pages/General/model';
import { Pagination, Select, Space, Tabs } from 'antd';
import { connect, Dispatch, Loading } from 'umi';
import { history } from 'umi';
import {
  GeneralItem,
  SearchKeywords,
  SelectKeywords,
} from '@/pages/General/data';
import { DotChartOutlined } from '@ant-design/icons';
import { getRemoteGeneralKeywords } from './service';
interface GeneralPageProps {
  general: GeneralState;
  dispatch: Dispatch;
  generalListLoading: boolean;
}
const { TabPane } = Tabs;
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

  const sourceHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getRemoteGeneralKeywords({
        source: value,
        project: keywords.project,
        subproject: keywords.subproject,
        tissue: keywords.tissue,
        phenotype: keywords.phenotype,
        celltype: keywords.celltype,
        drug: keywords.drug,
      });
      if (remoteKeywords) {
        setSource(remoteKeywords.data.source);
      }
    }
  };
  const tissueHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getRemoteGeneralKeywords({
        source: keywords.source,
        project: keywords.project,
        subproject: keywords.subproject,
        tissue: value,
        phenotype: keywords.phenotype,
        celltype: keywords.celltype,
        drug: keywords.drug,
      });
      if (remoteKeywords) {
        setTissue(remoteKeywords.data.tissue);
      }
    }
  };
  const phenotypeHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getRemoteGeneralKeywords({
        source: keywords.source,
        project: keywords.project,
        subproject: keywords.subproject,
        tissue: keywords.tissue,
        phenotype: value,
        celltype: keywords.celltype,
        drug: keywords.drug,
      });
      if (remoteKeywords) {
        setPhenotype(remoteKeywords.data.phenotype);
      }
    }
  };
  const celltypeHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getRemoteGeneralKeywords({
        source: keywords.source,
        project: keywords.project,
        subproject: keywords.subproject,
        tissue: keywords.tissue,
        phenotype: keywords.phenotype,
        celltype: value,
        drug: keywords.drug,
      });
      if (remoteKeywords) {
        setCelltype(remoteKeywords.data.celltype);
      }
    }
  };
  const instHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getRemoteGeneralKeywords({
        source: keywords.source,
        project: keywords.project,
        subproject: keywords.subproject,
        tissue: keywords.tissue,
        phenotype: keywords.phenotype,
        celltype: keywords.celltype,
        drug: value,
      });
      if (remoteKeywords) {
        setInst(remoteKeywords.data.drug);
      }
    }
  };

  const columns = [
    {
      title: 'Order',
      dataIndex: 'index',
      valueType: 'index',
      key: 'index',
      width: 58,
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      width: 100,
      // valueType: 'text',
      hideInForm: true,
      ellipsis: true,
      renderFormItem: () => {
        const options = source.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'sourceSelect'}
            showSearch={true}
            // allowClear={true}
            placeholder={'input and select a source'}
            filterOption={false}
            onSearch={sourceHandler}
            onChange={(value) => {
              setKeywords({ ...keywords, source: value });
            }}
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
      // valueType: 'text',
      width: 150,
      search: false,
      ellipsis: true,
      render: (text: string, record: GeneralItem) => {
        return (
          <span>
            <a className={styles.link} href={record.reference}>
              <Space>{record.project}</Space>
            </a>
          </span>
        );
      },
    },
    {
      title: 'Subproject',
      dataIndex: 'subproject',
      key: 'subproject',
      // valueType: 'link',
      search: false,
      width: 300,
      ellipsis: true,
      render: (text: string, record: GeneralItem) => (
        <span>
          <a
            className={styles.link}
            onClick={() => {
              history.push(
                '/subproject/' + record.project + ' ' + record.subproject,
              );
            }}
          >
            <Space>
              {record.subproject}
              <DotChartOutlined />
            </Space>
          </a>
        </span>
      ),
    },
    {
      title: 'Tissue',
      dataIndex: 'tissue',
      key: 'tissue',
      width: 100,
      // valueType: 'text',
      hideInForm: true,
      ellipsis: true,
      renderFormItem: () => {
        const options = tissue.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'tissueSelect'}
            showSearch={true}
            placeholder={'input and select a tissue'}
            filterOption={false}
            onSearch={tissueHandler}
            onChange={(value) => {
              setKeywords({ ...keywords, tissue: value });
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
      ellipsis: true,
      renderFormItem: () => {
        const options = phenotype.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'phenotypeSelect'}
            showSearch={true}
            placeholder={'input and select a phenotype'}
            filterOption={false}
            onSearch={phenotypeHandler}
            onChange={(value) => {
              setKeywords({ ...keywords, phenotype: value });
            }}
          >
            {options}
          </Select>
        );
      },
    },
    {
      title: 'Total reported cell',
      dataIndex: 'total_reported_cell',
      ellipsis: true,
      hideInSearch: true,
      width: '100px',
    },
    {
      title: 'Celltype number',
      dataIndex: 'celltype_num',
      ellipsis: true,
      hideInSearch: true,
      width: '100px',
    },
    {
      title: 'Cell Type',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
      search: false,
      hideInForm: true,
      ellipsis: true,
      // renderFormItem: () => {
      //   const options = celltype.map((item) => (
      //     <Option key={item.id} value={item.name} type={item.type}>
      //       {item.name}
      //     </Option>
      //   ));
      //
      //   return (
      //     <Select
      //       key={'celltypeSelect'}
      //       showSearch={true}
      //       allowClear={true}
      //       placeholder={'input and select a cell type'}
      //       filterOption={false}
      //       onSearch={celltypeHandler}
      //       onChange={(value, option) => {
      //         changeHandler(value, option);
      //       }}
      //     >
      //       {options}
      //     </Select>
      //   );
      // },
    },
    {
      title: 'Drug',
      dataIndex: 'drug',
      key: 'drug',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
      // renderFormItem: () => {
      //   const options = inst.map((item) => (
      //     <Select.Option key={item.id} value={item.name} type={item.type}>
      //       {item.name}
      //     </Select.Option>
      //   ));
      //
      //   return (
      //     <Select
      //       key={'instSelect'}
      //       showSearch={true}
      //       allowClear={true}
      //       placeholder={'input and select a drug'}
      //       filterOption={false}
      //       onSearch={instHandler}
      //       onChange={(value, option) => {
      //         changeHandler(value, option);
      //       }}
      //     >
      //       {options}
      //     </Select>
      //   );
      // },
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

  //{/*不加rowkey会报warning:Each child in a list should have a unique "key" prop.*/}
  return (
    <div>
      <Tabs defaultActiveKey={'tab1'}>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              General Tables
            </span>
          }
          key="tab1"
        >
          <div>
            <ProTable<GeneralItem>
              columns={columns}
              dataSource={general.data}
              loading={generalListLoading}
              pagination={false}
              headerTitle={'Datasets Overview'}
              rowKey={(record: GeneralItem) => {
                return record.id.toString();
              }}
              onSubmit={(params) => {
                const { source, tissue, project, phenotype, subproject } =
                  keywords;
                dispatch({
                  type: 'general/getRemote',
                  payload: {
                    pageIndex: 1,
                    pageSize: 10,
                    source: source,
                    project: project,
                    subproject: subproject,
                    tissue: tissue,
                    phenotype: phenotype,
                  },
                });
              }}
              onReset={() => {
                dispatch({
                  type: 'general/getRemote',
                  payload: {
                    pageIndex: 1,
                    pageSize: 10,
                  },
                });
              }}
              search={{
                defaultCollapsed: false,
                labelWidth: 'auto',
                searchText: 'Search',
                resetText: 'Reset',
                collapseRender: false,
                collapsed: false,
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
        </TabPane>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              Subproject
            </span>
          }
          key="tab2"
          disabled
        ></TabPane>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              Cell Drug Association
            </span>
          }
          key="tab3"
          disabled
        >
          Cell Drug Association
        </TabPane>
      </Tabs>
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
  // console.log("loading");
  // console.log(general);
  return {
    general,
    generalListLoading: loading.models.general,
  };
};

export default connect(mapStateToProps)(GeneralListPage);
