import React, { FC, useState } from 'react';
import styles from './index.less';
import ProTable from '@ant-design/pro-table';
import { GeneralState } from '@/pages/General/model';
import { Pagination, Select, Space, Tabs } from 'antd';
import { connect, Dispatch, Loading } from 'umi';
import { history } from 'umi';
import { GeneralItem, SearchKeywords } from '@/pages/General/data';
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
  const [tissuegroup, setTissuegroup] = useState([]);
  const [phenotype, setPhenotype] = useState([]);
  const [celltype, setCelltype] = useState([]);
  const [inst, setInst] = useState([]);
  const [keywords, setKeywords] = useState<SearchKeywords>({});

  const sourceHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getRemoteGeneralKeywords({
        source: value,
        project: keywords.project,
        tissue: keywords.tissue,
        tissuegroup: keywords.tissuegroup,
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
        tissue: value,
        tissuegroup: keywords.tissuegroup,
        phenotype: keywords.phenotype,
        celltype: keywords.celltype,
        drug: keywords.drug,
      });
      if (remoteKeywords) {
        setTissue(remoteKeywords.data.tissue);
      }
    }
  };
  const tissuegroupHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getRemoteGeneralKeywords({
        source: keywords.source,
        project: keywords.project,
        tissue: keywords.tissue,
        tissuegroup: value,
        phenotype: keywords.phenotype,
        celltype: keywords.celltype,
        drug: keywords.drug,
      });
      if (remoteKeywords) {
        setTissuegroup(remoteKeywords.data.tissuegroup);
      }
    }
  };
  const phenotypeHandler = async (value: string) => {
    if (Object.keys(value).length != 0) {
      const remoteKeywords = await getRemoteGeneralKeywords({
        source: keywords.source,
        project: keywords.project,
        tissue: keywords.tissue,
        tissuegroup: keywords.tissuegroup,
        phenotype: value,
        celltype: keywords.celltype,
        drug: keywords.drug,
      });
      if (remoteKeywords) {
        setPhenotype(remoteKeywords.data.phenotype);
      }
    }
  };

  const columns = [
    {
      title: 'Dataset ID',
      dataIndex: 'datasetid',
      // valueType: 'index',
      // key: 'index',
      width: 120,
      search: false,
      render: (text: string, record: GeneralItem) => (
        <span>
          <a
            className={styles.link}
            onClick={() => {
              history.push('/dataset/' + record.datasetid);
            }}
          >
            <Space>
              {record.datasetid}
              <DotChartOutlined />
            </Space>
          </a>
        </span>
      ),
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
            <a
              className={styles.link}
              href={'https://www.doi.org/' + record.doi}
            >
              <Space>{record.project}</Space>
            </a>
          </span>
        );
      },
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
            onFocus={async () => {
              const remoteKeywords = await getRemoteGeneralKeywords({
                source: undefined,
                project: keywords.project,
                tissue: keywords.tissue,
                tissuegroup: keywords.tissuegroup,
                phenotype: keywords.phenotype,
                celltype: keywords.celltype,
                drug: keywords.drug,
              });
              if (remoteKeywords) {
                setSource(remoteKeywords.data.source);
              }
            }}
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
      title: 'Cell Source',
      dataIndex: 'cell_source',
      search: false,
      width: 160,
      ellipsis: true,
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
            onFocus={async () => {
              const remoteKeywords = await getRemoteGeneralKeywords({
                source: keywords.source,
                project: keywords.project,
                tissue: undefined,
                tissuegroup: keywords.tissuegroup,
                phenotype: keywords.phenotype,
                celltype: keywords.celltype,
                drug: keywords.drug,
              });
              if (remoteKeywords) {
                setTissue(remoteKeywords.data.tissue);
              }
            }}
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
      title: 'Tissue Group',
      dataIndex: 'tissuegroup',
      width: 100,
      hideInForm: true,
      ellipsis: true,
      renderFormItem: () => {
        const options = tissuegroup.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'tissuegroupSelect'}
            showSearch={true}
            placeholder={'input and select a tissuegroup'}
            filterOption={false}
            onFocus={async () => {
              const remoteKeywords = await getRemoteGeneralKeywords({
                source: keywords.source,
                project: keywords.project,
                tissue: keywords.tissue,
                tissuegroup: undefined,
                phenotype: keywords.phenotype,
                celltype: keywords.celltype,
                drug: keywords.drug,
              });
              if (remoteKeywords) {
                setTissuegroup(remoteKeywords.data.tissuegroup);
              }
            }}
            onSearch={tissuegroupHandler}
            onChange={(value) => {
              setKeywords({ ...keywords, tissuegroup: value });
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
      width: 180,
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
            onFocus={async () => {
              const remoteKeywords = await getRemoteGeneralKeywords({
                source: keywords.source,
                project: keywords.project,
                tissue: keywords.tissue,
                tissuegroup: keywords.tissuegroup,
                phenotype: undefined,
                celltype: keywords.celltype,
                drug: keywords.drug,
              });
              if (remoteKeywords) {
                setPhenotype(remoteKeywords.data.phenotype);
              }
            }}
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
      title: 'Description',
      dataIndex: 'title',
      ellipsis: true,
      hideInSearch: true,
      width: 150,
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
      title: 'Top 10 Cell Types',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
      search: false,
      hideInForm: true,
      ellipsis: true,
    },
    {
      title: 'Top 10 Drugs',
      dataIndex: 'drug',
      key: 'drug',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
  ];

  const paginationHandler = (page: number, pageSize?: number) => {
    const { source, tissue, project, phenotype, tissuegroup } = keywords;
    dispatch({
      type: 'general/getRemote',
      payload: {
        pageIndex: page,
        pageSize: pageSize ? pageSize : general.meta.pageSize,
        source: source,
        project: project,
        tissue: tissue,
        tissuegroup: tissuegroup,
        phenotype: phenotype,
      },
    });
  };
  const sizeChangeHandler = (current: number, size: number) => {
    const { source, tissue, project, phenotype, tissuegroup } = keywords;
    dispatch({
      type: 'general/getRemote',
      payload: {
        pageIndex: current,
        pageSize: size,
        source: source,
        project: project,
        tissue: tissue,
        tissuegroup: tissuegroup,
        phenotype: phenotype,
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
              General Table
            </span>
          }
          key="tab1"
        >
          <div>
            <ProTable<GeneralItem>
              columns={columns}
              options={false}
              dataSource={general.data}
              loading={generalListLoading}
              pagination={false}
              headerTitle={'Dataset Overview'}
              rowKey={(record: GeneralItem) => {
                return record.id.toString();
              }}
              onSubmit={(params) => {
                const { source, tissue, project, phenotype, tissuegroup } =
                  keywords;
                dispatch({
                  type: 'general/getRemote',
                  payload: {
                    pageIndex: 1,
                    pageSize: 10,
                    source: source,
                    project: project,
                    tissue: tissue,
                    tissuegroup: tissuegroup,
                    phenotype: phenotype,
                  },
                });
              }}
              onReset={() => {
                setKeywords({});
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
              Dataset Detail
            </span>
          }
          key="tab2"
          disabled
        ></TabPane>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              Cellular Drug Association
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
