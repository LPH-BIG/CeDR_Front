import React, { useEffect, useState } from 'react';
import styles from './index.less';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
// import HighchartsTheme from 'highcharts/themes'

export default function Page(props: any) {
  const [state, setState] = useState({
    chartOptions: {
      credits: {
        enabled: false,
      },
      chart: {
        type: 'scatter',
        zoomType: 'xy',
      },
      title: {
        text: 'Title',
      },
      // subtitle: {
      //   text: 'subtitle',
      // },
      xAxis: {
        title: {
          enabled: true,
          text: 'TSNE-1',
        },
        startOnTick: true,
        endOnTick: true,
      },
      yAxis: {
        title: {
          text: 'TSNE-2',
        },
        gridLineWidth: 0,
        // labels:{
        //   enabled:false,
        // }
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 50,
        y: 10,
        floating: true,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 6,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)',
              },
            },
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x}, {point.y}',
          },
        },
      },
      series: [],
    },
  });
  // console.log("title: "+props.title);
  useEffect(() => {
    setState({
      chartOptions: { series: props.data, title: { text: props.title } },
    });
  }, [props]);

  return (
    <HighchartsReact highcharts={Highcharts} options={state.chartOptions} />
  );
}