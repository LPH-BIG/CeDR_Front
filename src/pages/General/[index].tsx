import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import ProTable from '@ant-design/pro-table';
import { GeneralState } from '@/pages/General/model';
import { Col, Pagination, Row, Select, Space, Tabs } from 'antd';
import { connect, Dispatch, Loading } from 'umi';
import { history } from 'umi';
import { GeneralItem, SearchKeywords } from '@/pages/General/data';
import { DotChartOutlined } from '@ant-design/icons';
import { getRemoteGeneralKeywords } from './service';
import { pathToRegexp } from 'path-to-regexp';
import { Parser } from 'json2csv';
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
  const [selectitems, setSelectitems] = useState<GeneralItem>([]);

  useEffect(() => {
    const match1 = pathToRegexp('/cedr/general/:type/:name').exec(
      location.pathname,
    );
    console.log(location.pathname);
    if (match1) {
      const type = match1[1];
      const name = decodeURIComponent(match1[2]);
      switch (type) {
        case 'source': {
          setKeywords({ ...keywords, source: name });
          console.log('kkk');
          break;
        }
        case 'tissue': {
          setKeywords({ ...keywords, tissuegroup: name });
          break;
        }
        case 'phenotype': {
          setKeywords({ ...keywords, phenotype: name });
          break;
        }
        case 'celltype': {
          setKeywords({ ...keywords, celltype: name });
          break;
        }
        case 'drug': {
          setKeywords({ ...keywords, drug: name });
          break;
        }
      }
    }
  }, []);
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
      fixed: 'left',
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
              href={record.projectsource}
              target={'_blank'}
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
      width: 90,
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
      width: 100,
      valueType: 'text',
      ellipsis: true,
      render: (text: string, record: GeneralItem) => {
        return <div className={styles.link}>{record.cell_source}</div>;
      },
      // render:(text: string, record: GeneralItem)=>{
      //   return (<span style={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{text}</span>)
      // }
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
        const options = tissuegroup.map((item) => {
          if (item) {
            return (
              <Select.Option key={item} value={item} type={item}>
                {item}
              </Select.Option>
            );
          }
        });
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
        const options = phenotype.map((item) => {
          if (item) {
            return (
              <Select.Option key={item} value={item} type={item}>
                {item}
              </Select.Option>
            );
          }
        });
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
      title: 'Title',
      dataIndex: 'title',
      // ellipsis: true,
      hideInSearch: true,
      width: 150,
      render: (text: string, record: GeneralItem) => {
        return (
          <span>
            <a href={'https://www.doi.org/' + record.doi} target={'_blank'}>
              <div className={styles.link}>{record.title}</div>
            </a>
          </span>
        );
      },
    },
    {
      title: 'Total Reported Cells',
      dataIndex: 'total_reported_cell',
      ellipsis: true,
      hideInSearch: true,
      width: 100,
    },
    {
      title: 'Cell Types Number',
      dataIndex: 'celltype_num',
      ellipsis: true,
      hideInSearch: true,
      width: 100,
    },
    {
      title: 'Top 10 Cell Types',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
      width: 100,
      search: false,
      // fixed:'right',
      hideInForm: true,
      ellipsis: true,
      render: (text: string, record: GeneralItem) => {
        return <div className={styles.link}>{record.celltype}</div>;
      },
    },
    {
      title: 'Top 10 Drugs',
      dataIndex: 'drug',
      key: 'drug',
      valueType: 'text',
      width: 100,
      // fixed:'right',
      hideInForm: true,
      search: false,
      ellipsis: true,
      render: (text: string, record: GeneralItem) => {
        return <div className={styles.link}>{record.cell_source}</div>;
      },
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
          <Row>
            <Col>
              <ProTable<GeneralItem>
                columns={columns}
                options={false}
                dataSource={general.data}
                loading={generalListLoading}
                pagination={false}
                // scroll={{ x: 500 }}
                scroll={{ x: 2000 }}
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
                rowSelection={{
                  fixed: true,
                  onSelect: (record, selected, selectedRows, nativeEvent) => {
                    if (selected) {
                      let a = Array.from(
                        new Set(selectitems.concat(selectedRows)),
                      );
                      let b = a.filter((res) => res != undefined);
                      setSelectitems(b);
                    } else {
                      let a = new Set();
                      a.add(record);
                      let b = selectitems.filter((x) => !a.has(x));
                      setSelectitems(b);
                    }
                  },
                  onSelectAll: (selected, selectedRows, changeRows) => {
                    if (selected) {
                      let a = Array.from(
                        new Set(selectitems.concat(selectedRows)),
                      );
                      let b = a.filter((res) => res != undefined);
                      setSelectitems(b);
                    } else {
                      let a = new Set(changeRows);
                      let b = selectitems.filter((x) => !a.has(x));
                      setSelectitems(b);
                    }
                  },
                }}
                tableAlertRender={({
                  selectedRowKeys,
                  selectedRows,
                  onCleanSelected,
                }) => {
                  const onCancelselected = () => {
                    setSelectitems([]);
                  };
                  return (
                    <Space size={24}>
                      <span>
                        {selectitems.length} items selected
                        <span onClick={onCancelselected}>
                          <a
                            style={{ marginLeft: 8 }}
                            onClick={onCleanSelected}
                          >
                            cancel selected
                          </a>
                        </span>
                      </span>
                      {/*<span>*/}
                      {/*  {`total overlap genes: ${selectedRows.reduce((pre, item) => pre + item.overlapgenenum,0)}`}*/}
                      {/*</span>*/}
                    </Space>
                  );
                }}
                tableAlertOptionRender={({
                  selectedRowKeys,
                  selectedRows,
                  onCleanSelected,
                }) => {
                  return (
                    <Space size={16}>
                      <a
                        onClick={() => {
                          let element = document.createElement('a');
                          const fields = [
                            'datasetid',
                            'source',
                            'cell_source',
                            'project',
                            'tissue',
                            'tissuegroup',
                            'phenotype',
                            'celltype',
                            'drug',
                            'total_reported_cell',
                            'celltype_num',
                            'technique',
                            'title',
                            'doi',
                          ];
                          const json2csvParser = new Parser({ fields });
                          const csv = json2csvParser.parse(selectitems);
                          element.setAttribute(
                            'href',
                            'data:text/csv;charset=utf-8,' +
                              encodeURIComponent(csv),
                          );
                          element.setAttribute('download', 'CeDR_datasets.csv');
                          element.style.display = 'none';
                          document.body.appendChild(element);
                          element.click();
                          document.body.removeChild(element);
                          onCleanSelected;
                        }}
                      >
                        Download
                      </a>
                    </Space>
                  );
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
            </Col>
          </Row>
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
