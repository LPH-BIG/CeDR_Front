import { Dispatch, GeneralState, Loading, DatasetState } from 'umi';
import ProTable from '@ant-design/pro-table';
import React, { FC, useEffect, useState } from 'react';
import { connect, history } from 'umi';
import { getRemoteNetwork } from '@/pages/Dataset/service';
import { Col, Select, Space, Row } from 'antd';
import { AssociationItem } from '@/pages/Dataset/data';
import Network from '@/components/Network';
import { Parser } from 'json2csv';
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
      width: 120,
      fixed: 'left',
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
      width: 100,
      ellipsis: true,
      hideInForm: true,
    },
    {
      title: 'Project',
      dataIndex: 'project',
      valueType: 'text',
      hideInForm: true,
      width: 100,
      ellipsis: true,
    },

    {
      title: 'Tissue',
      dataIndex: 'tissue',
      valueType: 'text',
      hideInForm: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Tissue Group',
      dataIndex: 'tissuegroup',
      valueType: 'text',
      hideInForm: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Phenotype',
      dataIndex: 'phenotype',
      valueType: 'text',
      width: 100,
      ellipsis: true,
      hideInForm: true,
    },
    {
      title: 'Cell Type',
      dataIndex: 'celltype',
      key: 'celltype',
      valueType: 'text',
      hideInForm: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Drug',
      dataIndex: 'drug',
      valueType: 'text',
      hideInForm: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: 'p-value 1',
      dataIndex: 'pvalue1',
      key: 'pvalue1',
      valueType: 'text',
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Odds Ratio 1',
      dataIndex: 'oddsratio1',
      key: 'oddsratio1',
      valueType: 'text',
      width: 100,
      ellipsis: true,
    },
    {
      title: 'p-value 2',
      dataIndex: 'pvalue2',
      key: 'pvalue2',
      valueType: 'text',
      hideInForm: true,
      search: false,
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Odds Ratio 2',
      dataIndex: 'oddsratio2',
      key: 'oddsratio2',
      valueType: 'text',
      hideInForm: true,
      search: false,
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Spearman',
      dataIndex: 'spearman',
      key: 'spearman',
      valueType: 'text',
      hideInForm: true,
      search: false,
      width: 100,
      ellipsis: true,
    },
    {
      title: 'S p-value',
      dataIndex: 'spvalue',
      key: 'spvalue',
      valueType: 'text',
      hideInForm: true,
      search: false,
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Overlap Gene Number',
      dataIndex: 'overlapgenenum',
      key: 'overlapgenenum',
      valueType: 'text',
      hideInForm: true,
      search: false,
      width: 100,
      ellipsis: true,
      // width: 100,
    },
    {
      title: 'Overlap Gene',
      dataIndex: 'overlapgene',
      key: 'overlapgene',
      valueType: 'text',
      hideInForm: true,
      width: 300,
      ellipsis: true,
    },
  ];
  // const [network, setNetwork] = useState([]);
  // useEffect(() => {
  //   //TODO://从后端拿网络图数据
  //   // console.log(history.location.pathname);
  //   const k = history.location.pathname.split('/');
  //   if (k[2] == 'celltype') {
  //     console.log(k[3]);
  //     getRemoteNetwork({
  //       celltype: k[3],
  //       datasetid: undefined,
  //       drug: undefined,
  //     }).then((res) => {
  //       // console.log(res.data);
  //       setNetwork(res.data);
  //     });
  //   } else if (k[2] == 'drug') {
  //     getRemoteNetwork({
  //       drug: k[3],
  //       celltype: undefined,
  //       datasetid: undefined,
  //     }).then((res) => {
  //       // console.log(res.data);
  //       setNetwork(res.data);
  //     });
  //   }
  // }, []);

  const [celltype, setCelltype] = useState(undefined);
  const [drug, setDrug] = useState(undefined);
  const [phenotype, setPhenotype] = useState(undefined);
  const [tissue, setTissue] = useState(undefined);
  const [selectitems, setSelectitems] = useState<AssociationItem>([]);

  useEffect(() => {
    const k = history.location.pathname.split('/');
    if (k[2] == 'celltype') {
      // console.log(k[3]);
      setCelltype(k[3]);
    } else if (k[2] == 'drug') {
      setDrug(k[3]);
    } else if (k[2] == 'phenotype') {
      setPhenotype(k[3]);
    } else if (k[2] == 'tissue') {
      setTissue(k[3]);
    }
  });

  const paginationHandler = (page: number, pageSize?: number) => {
    dispatch({
      type: 'browse/getRemote',
      payload: {
        pageIndex: page,
        pageSize: pageSize ? pageSize : browse.meta.pageSize,
        celltype: celltype,
        drug: drug,
        tissuegroup: tissue,
        phenotype: phenotype,
        pcutoff: 0.01,
        pcutoff2: 0.01,
        spcutoff: 0.01,
      },
    });
  };
  const sizeChangeHandler = (current: number, size: number) => {
    dispatch({
      type: 'browse/getRemote',
      payload: {
        pageIndex: current,
        pageSize: size,
        celltype: celltype,
        drug: drug,
        tissuegroup: tissue,
        phenotype: phenotype,
        pcutoff: 0.01,
        pcutoff2: 0.01,
        spcutoff: 0.01,
      },
    });
  };

  return (
    <div>
      {/*<Row justify={'center'}>*/}
      {/*  <Col style={{ textAlign: 'center' }}>*/}
      {/*    <Network network={network} height={'500px'} width={1000} />*/}
      {/*    <strong>*/}
      {/*      Point Color: <span style={{ color: 'red' }}>dataset:red</span>{' '}*/}
      {/*      &nbsp; <span style={{ color: 'orange' }}>cell type: orange</span>*/}
      {/*      &nbsp; <span style={{ color: 'blue' }}>drug:blue</span>*/}
      {/*    </strong>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      <Row justify={'center'}>
        <Col md={24}>
          <div>
            <ProTable<AssociationItem>
              columns={columns}
              scroll={{ x: 1000 }}
              pagination={{
                // total:record?.overlapgenenum,
                showTotal: (total) => `Total ${total} items`,
                showSizeChanger: false,
                defaultPageSize: 10,
                total: browse.meta.total,
                onChange: paginationHandler,
                onShowSizeChange: sizeChangeHandler,
              }}
              dataSource={browse.data}
              loading={browseListLoading}
              rowKey={(record) => record.id}
              search={false}
              options={false}
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
                        <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
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
                          'associationid',
                          'source',
                          'project',
                          'tissue',
                          'tissuegroup',
                          'phenotype',
                          'celltype',
                          'inst',
                          'drug',
                          'pvalue1',
                          'oddsratio1',
                          'pvalue2',
                          'oddsratio2',
                          'spearman',
                          'spvalue',
                          'overlapgenenum',
                          'overlapgene',
                        ];
                        const json2csvParser = new Parser({ fields });
                        const csv = json2csvParser.parse(selectitems);
                        element.setAttribute(
                          'href',
                          'data:text/csv;charset=utf-8,' +
                            encodeURIComponent(csv),
                        );
                        element.setAttribute(
                          'download',
                          'CeDR_associations.csv',
                        );
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
