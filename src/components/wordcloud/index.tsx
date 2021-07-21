import React, { useEffect, useState } from 'react';
import styles from './index.less';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsWordcloud from 'highcharts/modules/wordcloud';
import { history } from 'umi';
HighchartsWordcloud(Highcharts);
const Index = (props: any) => {
  const data = [
    ['Bile Duct Cancer', 4],
    ['Bladder Cancer', 6],
    ['Bone Cancer', 3],
    ['Brain Cancer', 12],
    ['Colon Colorectal Cancer', 10],
    ['Endometrial Uterine', 10],
    ['Esophageal Cancer', 7],
    ['Fibroblast', 1],
    ['Gallbladder Cancer', 1],
    ['Gastric Cancer', 6],
    ['Head and Neck Cancer', 19],
    ['Kidney Cancer', 6],
    ['Liver Cancer', 7],
    ['Neuroblastoma', 2],
    ['Ovarian Cancer', 13],
    ['Pancreatic Cancer', 11],
    ['Prostate Cancer', 2],
    ['Sarcoma ', 3],
    ['Skin Cancer ', 16],
    ['Thyroid Cancer ', 4],
  ];
  const [state, setState] = useState({
    chartOptions: {
      chart: {
        style: {
          fontFamily: 'Arial',
          fontSize: '20px',
          fontWeight: 'bold',
        },
        // borderColor: '#92cce1',
        // borderWidth: 2,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        wordcloud: {
          cursor: 'pointer',
          events: {
            click: function (e) {
              // console.log(e.point.name);
              history.push('/subproject/SCP542 ' + e.point.name);
            },
          },
        },
      },
      series: [
        {
          type: 'wordcloud',
          data: data,
          name: 'Cell Type Number',
        },
      ],
      title: {
        text: 'Cancer Cell Line',
        style: { fontSize: '20px', 'font-weight': 'bolder' },
      },
    },
  });
  return (
    <HighchartsReact highcharts={Highcharts} options={state.chartOptions} />
  );
};

export default Index;
