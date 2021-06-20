import React, { useEffect, useState } from 'react';
import styles from './index.less';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsWordcloud from 'highcharts/modules/wordcloud';
import { history } from 'umi';
HighchartsWordcloud(Highcharts);
const Index = (props: any) => {
  const data = [
    ['Bile Duct Cancer', 2],
    ['Bladder Cancer', 4],
    ['Bone Cancer', 6],
    ['Brain Cancer', 22],
    ['Colon Colorectal Cancer', 3],
    ['Endometrial Uterine', 10],
    ['Esophageal Cancer', 2],
    ['Fibroblast', 20],
    ['Gallbladder Cancer', 5],
    ['Gastric Cancer', 8],
    ['Head and Neck Cancer', 12],
    ['Kidney Cancer', 3],
    ['Liver Cancer', 4],
    ['Neuroblastoma', 15],
    ['Ovarian Cancer', 18],
    ['Pancreatic Cancer', 1],
    ['Prostate Cancer', 10],
    ['Sarcoma ', 11],
    ['Skin Cancer ', 9],
    ['Thyroid Cancer ', 7],
  ];
  const [state, setState] = useState({
    chartOptions: {
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
