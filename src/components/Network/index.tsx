import React, { useEffect, useState } from 'react';
import styles from './index.less';
import request from 'umi-request';
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { addEvent } from 'highcharts';
import HighchartNetworkgraph from 'highcharts/modules/networkgraph';
HighchartNetworkgraph(Highcharts);

export default function Page(props: any) {
  const [state, setState] = useState({
    chartOptions: {
      chart: {
        type: 'networkgraph',
        style: {
          fontFamily: 'Arial',
          fontSize: '20px',
          fontWeight: 'bold',
        },
        // height: '400px',
        // borderColor:'#92cce1',
        // borderWidth: 2,
      },
      credits: {
        enabled: false,
      },
      title: {
        text: 'Associations of cell type and drug',
      },
      subtitle: {
        text: 'Cell Type with Drug',
      },
      plotOptions: {
        networkgraph: {
          // keys: ['from', 'to'],
          layoutAlgorithm: {
            enableSimulation: true,
          },
        },
      },
      series: [
        {
          dataLabels: {
            enabled: true,
          },
          allowPointSelect: true,
          data: [
            {
              from: 'Europe',
              to: 'UK',
            },
            {
              from: 'Europe',
              to: 'Poland',
              color: 'red',
              width: 4,
              dashStyle: 'dot',
            },
            {
              from: 'Europe',
              to: 'Italy',
              color: 'green',
              width: 4,
            },
            {
              from: 'UK',
              to: 'London',
            },
            {
              from: 'UK',
              to: 'Bristol',
              color: 'yellow',
            },
            {
              from: 'London',
              to: 'London Centre',
            },
            {
              from: 'Poland',
              to: 'Warsaw',
            },
            {
              from: 'Poland',
              to: 'Krakow',
              color: 'red',
              width: 4,
            },
            {
              from: 'Italy',
              to: 'Roma',
            },
            {
              from: 'Italy',
              to: 'Piza',
            },
          ],
          // nodes: [
          //   {
          //     id: 'Krakow',
          //     color: 'black',
          //     marker: {
          //       lineColor: 'red',
          //       radius: 15,
          //       lineWidth: 3,
          //     },
          //     color: 'grey',
          //   },
          //   {
          //     id: 'Italy',
          //     color: 'black',
          //     mass: 10,
          //   },
          //   {
          //     id: 'Poland',
          //     color: 'black',
          //   },
          //   {
          //     id: 'Europe',
          //     color: 'black',
          //   },
          // ],
        },
      ],
    },
  });

  useEffect(() => {
    // console.log(typeof Highcharts.seriesType('networkgraph'))
    // Highcharts.addEvent(
    //   // Highcharts.seriesType('networkgraph'),
    //   Highcharts.Series,
    //   'afterSetOptions',
    //   ()=>{console.log('addEvent')},
    // );
    const series = [
      {
        dataLabels: {
          enabled: true,
        },
        allowPointSelect: true,
        data: props.network.data,
      },
    ];
    // console.log(props.network);
    // if (props.network.data){
    setState({ chartOptions: { series: series } });
    // }
  }, [props]);

  return (
    <div style={{ height: '400px' }}>
      <HighchartsReact highcharts={Highcharts} options={state.chartOptions} />
    </div>
  );
}
