import {
  Dispatch,
  GeneralState,
  Loading,
  SubprojectState,
} from '@@/plugin-dva/connect';
import React, { FC } from 'react';
import { connect } from 'umi';
import { getRemoteDrug } from '@/pages/Subproject/service';
import { Select, Space } from 'antd';
import { getRemoteKeywords } from '@/pages/General/service';

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
      search: false,
      render: (text, record, index) => {
        // console.log(record)
        return (
          <span>
            <a
              onClick={async () => {
                // console.log("click");
                // setRecord(record);
                // setDisabled(false);
                // setActivekey('tab3');
                // console.log(record.inst);
                // getRemoteDrug({ name: record.inst }).then((res) => {
                //   setDruginformation(res.data);
                // });
              }}
            >
              {/*{' '}*/}
              <Space>{record.id}</Space>
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
      hideInForm: true,
      width: 200,
      // renderFormItem: () => {
      //   const options = celltype.map((item) => (
      //     <Select.Option key={item} value={item} type={item}>
      //       {item}
      //     </Select.Option>
      //   ));
      //   return (
      //     <Select
      //       key={'celltypeSelect'}
      //       showSearch={true}
      //       placeholder={'input and select a source'}
      //       filterOption={false}
      //       onSearch={async (value) => {
      //         // console.log(value);
      //         getRemoteKeywords({
      //           project: subproject.data[0].project,
      //           subproject: subproject.data[0].subproject,
      //           celltype: value,
      //           drug: keywords.drug,
      //           overlapgene: keywords.overlapgene,
      //         }).then((res) => {
      //           setCelltype(res.data.celltype);
      //         });
      //       }}
      //       onChange={(value, option) => {
      //         setKeywords({ ...keywords, celltype: value });
      //       }}
      //     >
      //       {options}
      //     </Select>
      //   );
      // },
      // // search: false,
    },
    {
      title: 'Drug',
      dataIndex: 'inst',
      key: 'inst',
      valueType: 'text',
      hideInForm: true,
      // renderFormItem: () => {
      //   const options = drug.map((item) => (
      //     <Select.Option key={item} value={item} type={item}>
      //       {item}
      //     </Select.Option>
      //   ));
      //   return (
      //     <Select
      //       key={'drugSelect'}
      //       showSearch={true}
      //       placeholder={'input and select a drug'}
      //       filterOption={false}
      //       onSearch={async (value) => {
      //         // console.log(value);
      //         getRemoteKeywords({
      //           project: subproject.data[0].project,
      //           subproject: subproject.data[0].subproject,
      //           celltype: keywords.celltype,
      //           drug: value,
      //           overlapgene: keywords.overlapgene,
      //         }).then((res) => {
      //           // console.log(res);
      //           setDrug(res.data.drug);
      //         });
      //       }}
      //       onChange={(value, option) => {
      //         setKeywords({ ...keywords, drug: value });
      //       }}
      //     >
      //       {options}
      //     </Select>
      //   );
      // },
    },
    {
      title: 'p-value 1',
      dataIndex: 'pvalue1',
      key: 'pvalue1',
      valueType: 'text',
      // search: false,
      // renderFormItem: () => {
      //   const options = pcutoff.map((item) => (
      //     <Select.Option key={item} value={item} type={item}>
      //       {item}
      //     </Select.Option>
      //   ));
      //   return (
      //     <Select
      //       key={'pcutoffSelect'}
      //       showSearch={true}
      //       placeholder={'select a p-value cutoff'}
      //       filterOption={false}
      //       onChange={(value, option) => {
      //         setKeywords({ ...keywords, pcutoff: value });
      //       }}
      //     >
      //       {options}
      //     </Select>
      //   );
      // },
    },
    {
      title: 'Odds Ratio 1',
      dataIndex: 'oddsratio1',
      key: 'oddsratio1',
      valueType: 'text',
      // search: false,
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
      // renderFormItem: () => {
      //   const options = gene.map((item) => (
      //     <Select.Option key={item} value={item} type={item}>
      //       {item}
      //     </Select.Option>
      //   ));
      //   return (
      //     <Select
      //       key={'geneSelect'}
      //       showSearch={true}
      //       placeholder={'input and select genes'}
      //       filterOption={false}
      //       onSearch={async (value) => {
      //         // console.log(value);
      //         getRemoteKeywords({
      //           project: subproject.data[0].project,
      //           subproject: subproject.data[0].subproject,
      //           celltype: keywords.celltype,
      //           drug: keywords.drug,
      //           overlapgene: value,
      //         }).then((res) => {
      //           // console.log(res);
      //           setGene(res.data.overlapgene);
      //         });
      //       }}
      //       onChange={(value, option) => {
      //         setKeywords({ ...keywords, overlapgene: value });
      //       }}
      //     >
      //       {options}
      //     </Select>
      //   );
      // },
    },
    {
      title: 'Detail',
      dataIndex: 'index',
      // valueType: 'index',
      width: 58,
      search: false,
      // render: (text, record, index) => {
      //   // console.log(record)
      //   return (
      //     <span>
      //       <a
      //         onClick={async () => {
      //           // console.log("click");
      //           setRecord(record);
      //           setDisabled(false);
      //           setActivekey('tab3');
      //           // console.log(record.inst);
      //           getRemoteDrug({ name: record.inst }).then((res) => {
      //             setDruginformation(res.data);
      //           });
      //         }}
      //       >
      //         <DetailIcon key={record.id} />
      //       </a>
      //     </span>
      //   );
      // },
    },
  ];
  return <div>browse</div>;
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
