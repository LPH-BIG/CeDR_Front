import React, { useEffect, useState } from 'react';
import styles from './index.less';
import request from 'umi-request';
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { addEvent } from 'highcharts';
import HighchartNetworkgraph from 'highcharts/modules/networkgraph';
HighchartNetworkgraph(Highcharts);

export default function Page() {
  const [state, setState] = useState({
    chartOptions: {
      credits: {
        enabled: false,
      },
      chart: {
        type: 'networkgraph',
        height: '100%',
      },
      title: {
        text: 'The Indo-European Laungauge Tree',
      },
      subtitle: {
        text: 'A Force-Directed Network Graph in Highcharts',
      },
      plotOptions: {
        networkgraph: {
          keys: ['from', 'to'],
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
          nodes: [
            {
              id: 'Krakow',
              color: 'black',
              marker: {
                lineColor: 'red',
                radius: 15,
                lineWidth: 3,
              },
              color: 'grey',
            },
            {
              id: 'Italy',
              color: 'black',
              mass: 10,
            },
            {
              id: 'Poland',
              color: 'black',
            },
            {
              id: 'Europe',
              color: 'black',
            },
          ],
        },
      ],
    },
  });

  useEffect(() => {
    // console.log(typeof Highcharts.seriesType('networkgraph'))
    Highcharts.addEvent(
      // Highcharts.seriesType('networkgraph'),
      Highcharts.Series,
      'afterSetOptions',
      handleAfterSetOptions,
    );
  }, [state]);
  const handleAfterSetOptions = (e) => {
    console.log('kkk');
    // setState({chartOptions:{plotOptions:}})
  };

  // useEffect(async () => {
  //   console.log(chart);
  //   //  请求数据
  //   const data = await request('/api/charts');
  //   // console.log(data.result);
  //   setState({
  //     chartOptions: {
  //       series: [{ data: data.result }],
  //     },
  //   });
  // }, [chart]);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={state.chartOptions} />
    </div>
  );
}
