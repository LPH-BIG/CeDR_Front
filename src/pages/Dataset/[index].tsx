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
  Image,
  Alert,
} from 'antd';
import { history } from '@@/core/history';
import { Dispatch, Loading, DatasetState } from 'umi';
import { connect } from 'umi';
import ProTable, { IntlProvider, enUSIntl } from '@ant-design/pro-table';
import Tsne from '@/components/Tsne';
import Pie from '@/components/Pie';
import {
  getRemoteTsne,
  getRemoteNetwork,
  getRemotePie,
  getRemoteSummary,
  getRemoteKeywords,
} from './service';
import Network from '@/components/Network';
import { AssociationItem } from '@/pages/Dataset/data';
import { GeneralItem, SearchKeywords } from '@/pages/General/data';
import { DetailIcon } from '@/components/Icons';
import { DotChartOutlined } from '@ant-design/icons';
interface DatasetPageProps {
  dataset: DatasetState;
  dispatch: Dispatch;
  datasetListLoading: boolean;
}
const { TabPane } = Tabs;
const Index: FC<DatasetPageProps> = ({
  dataset,
  dispatch,
  datasetListLoading,
}) => {
  const [activeKey, setActivekey] = useState('tab2');
  const [record, setRecord] = useState<AssociationItem | undefined>(undefined);
  const [tsne, setTsne] = useState({});
  const [summary, setSummary] = useState<GeneralItem | undefined>(undefined);
  const [tsnetitle, setTsnetitle] = useState(' ');
  const [network, setNetwork] = useState([]);
  const [pie, setPie] = useState();
  const [celltype, setCelltype] = useState([]);
  const [drug, setDrug] = useState([]);
  const [pcutoff, setPcutoff] = useState([0.05, 0.01, 0.001, 0.0001]);
  const [pcutoff2, setPcutoff2] = useState([0.05, 0.01, 0.001, 0.0001]);
  const [spcutoff, setSpcutoff] = useState([0.05, 0.01, 0.001, 0.0001]);
  const [orcutoff, setOrcutoff] = useState([1, 2, 3]);
  const [orcutoff2, setOrcutoff2] = useState([1, 2, 3]);
  const [spearman, setSpearman] = useState([-0.2, -0.4, -0.6]);
  const [gene, setGene] = useState([]);
  const [keywords, setKeywords] = useState<SearchKeywords>({});
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const data = dataset.data[0];
    if (data) {
      const { datasetid } = data;
      setKeywords({ ...keywords, datasetid: datasetid });
      getRemoteSummary({ datasetid: datasetid }).then((res) => {
        setSummary(res.data[0]);
      });
    }
  }, [dataset]);
  useEffect(() => {
    const data = dataset.data[0];
    if (data) {
      const { datasetid } = data;
      getRemoteTsne({ datasetid: datasetid }).then((res) => {
        setTsne(res.data);
      });
      setTsnetitle(
        data.project + ' ' + data.tissuegroup + ' ' + data.phenotype,
      );
    }
  }, [dataset, history.location.pathname]);
  useEffect(() => {
    const data = dataset.data[0];
    if (data) {
      const { datasetid } = data;
      getRemoteNetwork({ datasetid: datasetid }).then((res) => {
        setNetwork(res.data);
      });
    }
  }, [dataset]);
  useEffect(() => {
    const data = dataset.data[0];

    if (data) {
      const { datasetid } = data;
      getRemotePie({ datasetid: datasetid }).then((res) => {
        // console.log(res.data);
        setPie(res.data);
      });
    }
  }, [dataset]);

  const columns = [
    {
      // title: 'Order',
      title: 'Association ID',
      tooltip: 'Click to see the association detail',
      ellipsis: true,
      dataIndex: 'associationid',
      search: false,
      fixed: 'left',
      width: 100,
      render: (text, record, index) => {
        // console.log(record)
        return (
          <span>
            <a
              onClick={async () => {
                setRecord(record);
                setDisabled(false);
                // setActivekey('tab3');
                // console.log(record.inst);
                // getRemoteDrug({ name: record.inst }).then((res) => {
                //   setDruginformation(res.data);
                // });
                history.push('/association/' + record.associationid);
              }}
            >
              <Space>
                {record.associationid}
                <DotChartOutlined />
              </Space>
            </a>
          </span>
        );
      },
    },
    {
      title: 'Cell Type',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
      ellipsis: true,
      tooltip: 'Click to see all associations of the cell type',
      hideInForm: true,
      width: 200,
      render: (text, record) => {
        return (
          <span>
            <a
              onClick={() => {
                history.push('/browse/celltype/' + record.celltype);
              }}
            >
              {record.celltype}
            </a>
          </span>
        );
      },
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
            placeholder={'input and select a cell type'}
            filterOption={false}
            onFocus={async () => {
              getRemoteKeywords({
                datasetid: dataset.data[0].datasetid,
                celltype: undefined,
                drug: keywords.drug,
                overlapgene: keywords.overlapgene,
              }).then((res) => {
                setCelltype(res.data.celltype);
              });
            }}
            onSearch={async (value) => {
              // console.log(value);
              getRemoteKeywords({
                datasetid: dataset.data[0].datasetid,
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
    },
    {
      title: 'Drug',
      dataIndex: 'drug',
      valueType: 'text',
      hideInForm: true,
      tooltip: 'Click to see the drug detail in DrugBank ',
      ellipsis: true,
      width: 125,
      render: (text, record) => {
        return (
          <span>
            <a
              onClick={() => {
                https: window.open(
                  'https://go.drugbank.com/unearth/q?utf8=%E2%9C%93&searcher=drugs&query=' +
                    record.drug,
                );
              }}
            >
              {record.drug}
            </a>
          </span>
        );
      },
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
            onFocus={async () => {
              // console.log(value);
              getRemoteKeywords({
                datasetid: dataset.data[0].datasetid,
                celltype: keywords.celltype,
                drug: undefined,
                overlapgene: keywords.overlapgene,
              }).then((res) => {
                // console.log(res);
                setDrug(res.data.drug);
              });
            }}
            onSearch={async (value) => {
              // console.log(value);
              getRemoteKeywords({
                datasetid: dataset.data[0].datasetid,
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
      title: 'p-value 1 (High Expression)',
      dataIndex: 'pvalue1',
      key: 'pvalue1',
      // valueType: (),
      render: (text, record, index) => {
        return parseFloat(record.pvalue1).toExponential(4);
      },
      tooltip:
        'The explanation of p-value 1 is in Documentation page and it means the p-value <0.00001 when this column shows 0.',
      ellipsis: true,
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
      search: false,
      ellipsis: true,
      // renderFormItem: () => {
      //   const options = orcutoff.map((item) => (
      //     <Select.Option key={item} value={item} type={item}>
      //       {item}
      //     </Select.Option>
      //   ));
      //   return (
      //     <Select
      //       key={'pcutoffSelect'}
      //       showSearch={true}
      //       placeholder={'select a Odds Ratio cutoff'}
      //       filterOption={false}
      //       onChange={(value, option) => {
      //         setKeywords({ ...keywords, orcutoff: value });
      //       }}
      //     >
      //       {options}
      //     </Select>
      //   );
      // },
    },
    {
      title: 'p-value 2  (Low Expression)',
      dataIndex: 'pvalue2',
      tooltip:
        'The explanation of p-value 2 is in Documentation page and it means the p-value <0.00001 when this column shows 0.',
      key: 'pvalue2',
      // valueType: 'text',
      render: (text, record, index) => {
        return parseFloat(record.pvalue2).toExponential(4);
      },
      hideInForm: true,
      ellipsis: true,
      // search: false,
      renderFormItem: () => {
        const options = pcutoff2.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'pcutoff2Select'}
            showSearch={true}
            placeholder={'select a p-value cutoff'}
            filterOption={false}
            onChange={(value, option) => {
              setKeywords({ ...keywords, pcutoff2: value });
            }}
          >
            {options}
          </Select>
        );
      },
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
      title: 'Spearman Correlation Coefficient',
      dataIndex: 'spearman',
      key: 'spearman',
      valueType: 'text',
      hideInForm: true,
      // search: false,
      ellipsis: true,
      renderFormItem: () => {
        const options = spearman.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'spearmanSelect'}
            showSearch={true}
            placeholder={'select a spearman correlation coefficient cutoff'}
            filterOption={false}
            onChange={(value, option) => {
              setKeywords({ ...keywords, spearman: value });
            }}
          >
            {options}
          </Select>
        );
      },
    },
    {
      title: 'Spearman p-value',
      dataIndex: 'spvalue',
      key: 'spvalue',
      tooltip:
        'The explanation of S p-value is in Documentation page and it means the p-value <0.00001 when this column shows 0.',
      render: (text, record, index) => {
        return parseFloat(record.spvalue).toExponential(4);
      },
      hideInForm: true,
      // search: false,
      ellipsis: true,
      renderFormItem: () => {
        const options = spcutoff.map((item) => (
          <Select.Option key={item} value={item} type={item}>
            {item}
          </Select.Option>
        ));
        return (
          <Select
            key={'spearmanSelect'}
            showSearch={true}
            placeholder={'select a spearman p-value cutoff'}
            filterOption={false}
            onChange={(value, option) => {
              setKeywords({ ...keywords, spcutoff: value });
            }}
          >
            {options}
          </Select>
        );
      },
    },
    {
      title: '#Overlap Genes',
      dataIndex: 'overlapgenenum',
      key: 'overlapgenenum',
      valueType: 'text',
      hideInForm: true,
      search: false,
      // width: 100,
      ellipsis: true,
    },
    {
      title: 'Overlap Genes',
      dataIndex: 'overlapgene',
      key: 'overlapgene',
      valueType: 'text',
      hideInForm: true,
      ellipsis: true,
      search: false,
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
                datasetid: dataset.data[0].datasetid,
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
    // {
    //   title: 'Detail',
    //   dataIndex: 'index',
    //   // valueType: 'index',
    //   width: 58,
    //   search: false,
    //   render: (text, record, index) => {
    //     // console.log(record)
    //     return (
    //       <span>
    //         <a
    //           onClick={async () => {
    //             // console.log("click");
    //             setRecord(record);
    //             history.push('/association/' + record.associationid);
    //             // setDisabled(false);
    //             // setActivekey('tab3');
    //             // console.log(record.inst);
    //             // getRemoteDrug({ name: record.inst }).then((res) => {
    //             //   setDruginformation(res.data);
    //             // });
    //           }}
    //         >
    //           <DetailIcon key={record.id} />
    //         </a>
    //       </span>
    //     );
    //   },
    // },
  ];
  const paginationHandler = (page: number, pageSize?: number) => {
    dispatch({
      type: 'dataset/getRemote',
      payload: {
        pageIndex: page,
        pageSize: pageSize ? pageSize : dataset.meta.pageSize,
        datasetid: dataset.data[0].datasetid,
        overlapgene: keywords.overlapgene,
        celltype: keywords.celltype,
        drug: keywords.drug,
        pcutoff: keywords.pcutoff,
        orcutoff: keywords.orcutoff,
        pcutoff2: keywords.pcutoff2,
        orcutoff2: keywords.orcutoff2,
        spcutoff: keywords.spcutoff,
        spearman: keywords.spearman,
      },
    });
  };
  const sizeChangeHandler = (current: number, size: number) => {
    dispatch({
      type: 'dataset/getRemote',
      payload: {
        pageIndex: current,
        pageSize: size,
        datasetid: dataset.data[0].datasetid,
        overlapgene: keywords.overlapgene,
        celltype: keywords.celltype,
        drug: keywords.drug,
        pcutoff: keywords.pcutoff,
        orcutoff: keywords.orcutoff,
        pcutoff2: keywords.pcutoff2,
        orcutoff2: keywords.orcutoff2,
        spcutoff: keywords.spcutoff,
        spearman: keywords.spearman,
      },
    });
  };

  return (
    <div>
      <Tabs
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        onChange={(activeKey) => {
          // console.log(activeKey)
          if (activeKey == 'tab1') {
            history.push('/general');
          }
          if (activeKey == 'tab2') {
            // console.log(activeKey);
            window.location.reload();
          }
        }}
      >
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              General Table
            </span>
          }
          key="tab1"
        ></TabPane>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              {/*<AndroidOutlined />*/}
              Dataset Detail
            </span>
          }
          key="tab2"
        >
          <div className={styles.plot}>
            <Row>
              <Col xs={6} sm={8} md={24} lg={24} xl={24}>
                <Descriptions title={'Summary'} bordered>
                  <Descriptions.Item label="Project" span={1}>
                    <a href={summary?.reference}>{summary?.project}</a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Dataset ID">
                    <a
                      onClick={() => {
                        history.push('/dataset/' + summary?.datasetid);
                      }}
                    >
                      {summary?.datasetid}
                    </a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Description">
                    {summary?.title}
                  </Descriptions.Item>
                  <Descriptions.Item label="Source">
                    {summary?.source}
                  </Descriptions.Item>
                  <Descriptions.Item label="Tissue">
                    {summary?.tissue}
                  </Descriptions.Item>
                  <Descriptions.Item label="Tissue Group">
                    {summary?.tissuegroup}
                  </Descriptions.Item>
                  <Descriptions.Item label="Phenotype">
                    {summary?.phenotype}
                  </Descriptions.Item>
                  <Descriptions.Item label="Cell Source">
                    {summary?.cell_source}
                  </Descriptions.Item>
                  <Descriptions.Item label="Total Reported Cells">
                    {summary?.total_reported_cell}
                  </Descriptions.Item>
                  <Descriptions.Item label="Number of Reported Celltypes">
                    {summary?.celltype_num}
                  </Descriptions.Item>
                  <Descriptions.Item label="Top 10 Drugs" span={3}>
                    {summary?.drug.split(', ').slice(0, 10).join(', ')}
                  </Descriptions.Item>
                  <Descriptions.Item label="Top 10 Cell Types" span={3}>
                    {summary?.celltype.split(', ').slice(0, 10).join(', ')}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col xs={4} sm={6} md={8} lg={8} xl={8}>
                <Tsne data={tsne} title={tsnetitle} />
                <Row justify={'center'}>
                  <strong>
                    <span style={{ color: 'red' }}>
                      Number of Displayed Cells:
                      {summary?.total_reported_cell > 5000
                        ? parseInt(summary?.total_reported_cell / 10)
                        : summary?.total_reported_cell}
                      ({summary?.total_reported_cell > 5000 ? '10%' : '100%'})
                    </span>
                  </strong>
                </Row>
              </Col>
              <Col xs={4} sm={6} md={8} lg={8} xl={8}>
                <Pie data={pie} />
              </Col>
              <Col
                xs={4}
                sm={6}
                md={8}
                lg={8}
                xl={8}
                style={{ height: '400px', textAlign: 'center' }}
              >
                <Network network={network} />
                <strong>
                  Point Color: <span style={{ color: 'red' }}>dataset:red</span>{' '}
                  &nbsp;{' '}
                  <span style={{ color: 'orange' }}>cell type: orange</span>
                  &nbsp; <span style={{ color: 'blue' }}>drug:blue</span>
                </strong>
              </Col>
            </Row>
          </div>
          <Divider />
          <div>
            <Row>
              <Col>
                <IntlProvider value={enUSIntl}>
                  <ProTable<AssociationItem>
                    columns={columns}
                    dataSource={dataset.data}
                    loading={datasetListLoading}
                    pagination={false}
                    scroll={{ x: true }}
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
                        datasetid,
                        celltype,
                        drug,
                        overlapgene,
                        pcutoff,
                        orcutoff,
                        pcutoff2,
                        spearman,
                        spcutoff,
                      } = keywords;
                      // console.log('submit');
                      // console.log(keywords);
                      dispatch({
                        type: 'dataset/getRemote',
                        payload: {
                          pageIndex: 1,
                          pageSize: 10,
                          datasetid: datasetid,
                          overlapgene: overlapgene,
                          celltype: celltype,
                          drug: drug,
                          pcutoff: pcutoff,
                          orcutoff: orcutoff,
                          pcutoff2: pcutoff2,
                          spearman: spearman,
                          spcutoff: spcutoff,
                        },
                      });
                    }}
                    onReset={() => {
                      setKeywords({});
                      dispatch({
                        type: 'dataset/getRemote',
                        payload: {
                          pageIndex: 1,
                          pageSize: 10,
                          datasetid: keywords.datasetid,
                        },
                      });
                    }}
                    // search={false}
                    search={{
                      defaultCollapsed: false,
                      labelWidth: 'auto',
                      searchText: 'Search',
                      resetText: 'Reset',
                      collapseRender: false,
                      collapsed: false,
                    }}
                    options={false}
                  />
                  <Pagination
                    key={'generalPagination'}
                    className={styles.pagenation}
                    showQuickJumper
                    defaultCurrent={1}
                    total={dataset.meta.total}
                    pageSize={dataset.meta.pageSize}
                    showSizeChanger
                    showTotal={(total) => `Total ${total} items`}
                    pageSizeOptions={[10, 20, 50, 100]}
                    onChange={paginationHandler}
                    onShowSizeChange={sizeChangeHandler}
                  />
                </IntlProvider>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane
          tab={
            <span style={{ fontFamily: 'Arial', fontSize: 'large' }}>
              Cellular Drug Association
            </span>
          }
          key="tab3"
          disabled={disabled}
        ></TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = ({
  dataset,
  loading,
}: // props,
{
  dataset: DatasetState;
  loading: Loading;
}) => {
  //这个传的是state对象，可以通过此处测试数据是否正确
  // console.log(loading);
  // console.log(dataset);
  return {
    dataset,
    datasetListLoading: loading.models.dataset,
  };
};

export default connect(mapStateToProps)(Index);
