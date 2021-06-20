import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import {
  Col,
  Divider,
  Descriptions,
  Pagination,
  Row,
  Select,
  Tabs,
  Space,
} from 'antd';
import { history } from '@@/core/history';
import {
  AndroidOutlined,
  AppleOutlined,
  DotChartOutlined,
} from '@ant-design/icons';
import { GeneralState } from '@/pages/General/model';
import { Dispatch, Loading, SubprojectState } from '@@/plugin-dva/connect';
import { connect } from 'umi';
import ProTable from '@ant-design/pro-table';
import Tsne from '@/components/Tsne';
import Pie from '@/components/Pie';
import {
  getRemoteTsne,
  getRemoteNetwork,
  getRemotePie,
  getRemoteGene,
  getRemoteDrug,
  getRemoteSummary,
} from './service';
import Network from '@/components/Network';
import { DrugItem, SubprojectItem } from '@/pages/Subproject/data';
import { getRemoteKeywords } from '@/pages/General/service';
import { GeneralItem, SearchKeywords } from '@/pages/General/data';
import { DetailIcon } from '@/components/Icons';
interface SubprojectPageProps {
  subproject: SubprojectState;
  dispatch: Dispatch;
  subprojectListLoading: boolean;
}
const { TabPane } = Tabs;
const Index: FC<SubprojectPageProps> = ({
  subproject,
  dispatch,
  subprojectListLoading,
}) => {
  const [activeKey, setActivekey] = useState('tab2');
  const [record, setRecord] = useState<SubprojectItem | undefined>(undefined);
  const [tsne, setTsne] = useState({});
  const [summary, setSummary] = useState<GeneralItem | undefined>(undefined);
  const [tsnetitle, setTsnetitle] = useState(' ');
  const [network, setNetwork] = useState([]);
  const [pie, setPie] = useState();
  const [celltype, setCelltype] = useState([]);
  const [drug, setDrug] = useState([]);
  const [pcutoff, setPcutoff] = useState([0.05, 0.01, 0.001]);
  const [orcutoff, setOrcutoff] = useState([1, 2, 3]);
  const [gene, setGene] = useState([]);
  const [keywords, setKeywords] = useState<SearchKeywords>({});
  const [disabled, setDisabled] = useState<boolean>(true);
  const [druginformation, setDruginformation] = useState<DrugItem>({});

  useEffect(() => {
    const dataset = subproject.data[0];
    if (dataset) {
      const { project, subproject } = dataset;
      setKeywords({ ...keywords, project: project, subproject: subproject });
      const name = project + ' ' + subproject;
      // console.log("name: "+kk);
      getRemoteSummary({ project: project, subproject: subproject }).then(
        (res) => {
          // console.log(res.data[0]);
          setSummary(res.data[0]);
        },
      );
      getRemoteTsne({ name: name }).then((res) => {
        // console.log(res.data)
        setTsne(res.data);
      });
      setTsnetitle(dataset.project + ' ' + dataset.subproject);

      getRemoteNetwork({ project: project, subproject: subproject }).then(
        (res) => {
          // console.log(res.data);
          setNetwork(res.data);
        },
      );
      getRemotePie({ name: name }).then((res) => {
        // console.log(res.data);
        setPie(res.data);
      });
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
      width: 200,
      renderFormItem: () => {
        const options = celltype.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'celltypeSelect'}
            showSearch={true}
            placeholder={'input and select a source'}
            filterOption={false}
            onSearch={async (value) => {
              // console.log(value);
              getRemoteKeywords({
                project: subproject.data[0].project,
                subproject: subproject.data[0].subproject,
                celltype: value,
                drug: keywords.drug,
                overlapgene: keywords.overlapgene,
              }).then((res) => {
                setCelltype(res.data.celltype);
              });
            }}
            onChange={(value, option) => {
              setKeywords({ ...keywords, celltype: value });
            }}
          >
            {options}
          </Select>
        );
      },
      // search: false,
    },
    {
      title: 'Drug',
      dataIndex: 'inst',
      key: 'inst',
      valueType: 'text',
      hideInForm: true,
      renderFormItem: () => {
        const options = drug.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'drugSelect'}
            showSearch={true}
            placeholder={'input and select a drug'}
            filterOption={false}
            onSearch={async (value) => {
              // console.log(value);
              getRemoteKeywords({
                project: subproject.data[0].project,
                subproject: subproject.data[0].subproject,
                celltype: keywords.celltype,
                drug: value,
                overlapgene: keywords.overlapgene,
              }).then((res) => {
                // console.log(res);
                setDrug(res.data.drug);
              });
            }}
            onChange={(value, option) => {
              setKeywords({ ...keywords, drug: value });
            }}
          >
            {options}
          </Select>
        );
      },
    },
    {
      title: 'p-value 1',
      dataIndex: 'pvalue1',
      key: 'pvalue1',
      valueType: 'text',
      // search: false,
      renderFormItem: () => {
        const options = pcutoff.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'pcutoffSelect'}
            showSearch={true}
            placeholder={'select a p-value cutoff'}
            filterOption={false}
            onChange={(value, option) => {
              setKeywords({ ...keywords, pcutoff: value });
            }}
          >
            {options}
          </Select>
        );
      },
    },
    {
      title: 'Odds Ratio 1',
      dataIndex: 'oddsratio1',
      key: 'oddsratio1',
      valueType: 'text',
      // search: false,
      ellipsis: true,
      renderFormItem: () => {
        const options = orcutoff.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'pcutoffSelect'}
            showSearch={true}
            placeholder={'select a Odds Ratio cutoff'}
            filterOption={false}
            onChange={(value, option) => {
              setKeywords({ ...keywords, orcutoff: value });
            }}
          >
            {options}
          </Select>
        );
      },
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
      renderFormItem: () => {
        const options = gene.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'geneSelect'}
            showSearch={true}
            placeholder={'input and select genes'}
            filterOption={false}
            onSearch={async (value) => {
              // console.log(value);
              getRemoteKeywords({
                project: subproject.data[0].project,
                subproject: subproject.data[0].subproject,
                celltype: keywords.celltype,
                drug: keywords.drug,
                overlapgene: value,
              }).then((res) => {
                // console.log(res);
                setGene(res.data.overlapgene);
              });
            }}
            onChange={(value, option) => {
              setKeywords({ ...keywords, overlapgene: value });
            }}
          >
            {options}
          </Select>
        );
      },
    },
    {
      title: 'Detail',
      dataIndex: 'index',
      // valueType: 'index',
      width: 58,
      search: false,
      render: (text, record, index) => {
        // console.log(record)
        return (
          <span>
            <a
              onClick={async () => {
                // console.log("click");
                setRecord(record);
                setDisabled(false);
                setActivekey('tab3');
                // console.log(record.inst);
                getRemoteDrug({ name: record.inst }).then((res) => {
                  setDruginformation(res.data);
                });
              }}
            >
              <DetailIcon key={record.id} />
            </a>
          </span>
        );
      },
    },
  ];
  const paginationHandler = (page: number, pageSize?: number) => {
    dispatch({
      type: 'subproject/getRemote',
      payload: {
        pageIndex: page,
        pageSize: pageSize ? pageSize : subproject.meta.pageSize,
        project: subproject.data[0].project,
        subproject: subproject.data[0].subproject,
        overlapgene: keywords.overlapgene,
        celltype: keywords.celltype,
        drug: keywords.drug,
      },
    });
  };
  const sizeChangeHandler = (current: number, size: number) => {
    dispatch({
      type: 'subproject/getRemote',
      payload: {
        pageIndex: current,
        pageSize: size,
        project: subproject.data[0].project,
        subproject: subproject.data[0].subproject,
        overlapgene: keywords.overlapgene,
        celltype: keywords.celltype,
        drug: keywords.drug,
      },
    });
  };

  const columns2 = [
    {
      title: 'Order',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
    },
    {
      title: 'Gene Symbol',
      dataIndex: 'symbol',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Chromosome',
      dataIndex: 'chromosome',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      valueType: 'text',
      hideInForm: true,
      search: false,
      ellipsis: true,
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        onChange={(activeKey) => {
          // console.log(activeKey)
          if (activeKey == 'tab1') {
            history.push('/browse');
          }
          if (activeKey == 'tab2') {
            // console.log(activeKey);
            window.location.reload();
          }
        }}
      >
        <TabPane
          tab={
            <span>
              {/*<AppleOutlined />*/}
              General Tables
            </span>
          }
          key="tab1"
        ></TabPane>
        <TabPane
          tab={
            <span>
              {/*<AndroidOutlined />*/}
              Subproject
            </span>
          }
          key="tab2"
        >
          <div className={styles.plot}>
            <Row>
              <Col xs={6} sm={8} md={24} lg={24} xl={24}>
                <Descriptions title={'Summary'} bordered>
                  <Descriptions.Item label="Project">
                    {summary?.project}
                  </Descriptions.Item>
                  <Descriptions.Item label="SubProject">
                    {summary?.subproject}
                  </Descriptions.Item>
                  <Descriptions.Item label="Source">
                    {summary?.source}
                  </Descriptions.Item>
                  <Descriptions.Item label="Tissue">
                    {summary?.tissue}
                  </Descriptions.Item>
                  <Descriptions.Item label="Phenotype">
                    {summary?.phenotype}
                  </Descriptions.Item>
                  <Descriptions.Item label="Description">
                    {summary?.description}
                  </Descriptions.Item>
                  <Descriptions.Item label="Drug">
                    {summary?.drug}
                  </Descriptions.Item>
                  <Descriptions.Item label="Cell Type">
                    {summary?.celltype}
                  </Descriptions.Item>
                  <Descriptions.Item label="Total reported cell">
                    {summary?.total_reported_cell}
                  </Descriptions.Item>
                  <Descriptions.Item label="Number of reported Celltype">
                    {summary?.celltype_num}
                  </Descriptions.Item>
                  <Descriptions.Item label="Cell Source">
                    {summary?.cell_source}
                  </Descriptions.Item>
                  <Descriptions.Item label="Technique">
                    {summary?.technique}
                  </Descriptions.Item>
                  <Descriptions.Item label="Journal">
                    {summary?.journal}
                  </Descriptions.Item>
                  <Descriptions.Item label="Title">
                    {summary?.title}
                  </Descriptions.Item>
                  <Descriptions.Item label="Date">
                    {summary?.date}
                  </Descriptions.Item>
                  <Descriptions.Item label="Contrasts">
                    {summary?.contrasts}
                  </Descriptions.Item>
                  <Descriptions.Item label="Developmental Stage">
                    {summary?.developmentalstage}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col xs={4} sm={6} md={8} lg={8} xl={8}>
                <Tsne data={tsne} title={tsnetitle} />
              </Col>
              <Col xs={4} sm={6} md={8} lg={8} xl={8}>
                <Pie data={pie} />
              </Col>
              <Col xs={4} sm={6} md={8} lg={8} xl={8}>
                <Network network={network} />
              </Col>
            </Row>
          </div>
          <Divider />
          <div>
            <Row>
              <Col>
                <ProTable<SubprojectItem>
                  columns={columns}
                  dataSource={subproject.data}
                  loading={subprojectListLoading}
                  pagination={false}
                  // headerTitle="日期类"
                  expandable={{
                    expandIconColumnIndex: 11,
                    expandedRowRender: (record, index, indent, expanded) => {
                      return (
                        <p style={{ textAlign: 'right' }}>
                          overlap genes: {record.overlapgene}
                        </p>
                      );
                    },
                  }}
                  rowKey={(record) => record.id}
                  onSubmit={(params) => {
                    const {
                      project,
                      subproject,
                      celltype,
                      drug,
                      overlapgene,
                      pcutoff,
                      orcutoff,
                    } = keywords;
                    // console.log('submit');
                    // console.log(keywords);
                    dispatch({
                      type: 'subproject/getRemote',
                      payload: {
                        pageIndex: 1,
                        pageSize: 10,
                        project: project,
                        subproject: subproject,
                        overlapgene: overlapgene,
                        celltype: celltype,
                        drug: drug,
                        pcutoff: pcutoff,
                        orcutoff: orcutoff,
                      },
                    });
                  }}
                  onReset={() => {
                    setKeywords({});
                    dispatch({
                      type: 'subproject/getRemote',
                      payload: {
                        pageIndex: 1,
                        pageSize: 10,
                        project: keywords.project,
                        subproject: keywords.subproject,
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
          </div>
        </TabPane>
        <TabPane
          tab={
            <span>
              {/*<AndroidOutlined />*/}
              Cell Drug Association
            </span>
          }
          key="tab3"
          disabled={disabled}
        >
          <div>
            <Row>
              <Col xs={4} sm={6} md={8} lg={12} xl={12}>
                <Descriptions title={'Drug Information'} bordered>
                  <Descriptions.Item label="Name">
                    {druginformation.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Concentration">
                    {druginformation.concentration}
                  </Descriptions.Item>
                  <Descriptions.Item label="Duration">
                    {druginformation.duration}
                  </Descriptions.Item>
                  <Descriptions.Item label="Array">
                    {druginformation.array}
                  </Descriptions.Item>
                  <Descriptions.Item label="Vehicle">
                    {druginformation.vehicle}
                  </Descriptions.Item>
                  <Descriptions.Item label="Scanner">
                    {druginformation.scanner}
                  </Descriptions.Item>
                  <Descriptions.Item label="Vendor">
                    {druginformation.vendor}
                  </Descriptions.Item>
                  <Descriptions.Item label="Vehicle_scan_id">
                    {druginformation.vehicle_scan_id}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <ProTable
              title={() => {}}
              columns={columns2}
              rowKey={'id'}
              request={async (params) => {
                // console.log("params");
                // console.log(params);
                let str = record?.overlapgene.substr(1);
                if (str) {
                  str = str.substr(0, str.length - 1);
                  str = str.replaceAll("'", '');
                  str = str.replace(/\s+/g, '');
                } else {
                  str = ' ';
                }
                // console.log(str);
                const msg = await getRemoteGene({ name: str }).then((res) => {
                  // console.log(res);
                  return res;
                });
                return {
                  data: msg.data,
                  success: msg.status == 200 ? true : false,
                };
              }}
              search={false}
              headerTitle={'Gene Information'}
            />
          </div>
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
