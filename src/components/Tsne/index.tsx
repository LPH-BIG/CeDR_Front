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
        style: {
          fontFamily: 'Arial',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
      title: {
        text: 'Title',
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'UMAP-1',
        },
        startOnTick: true,
        endOnTick: true,
      },
      yAxis: {
        title: {
          text: 'UMAP-2',
        },
        gridLineWidth: 0,
        labels: {
          enabled: true,
        },
      },
      legend: {
        enabled: false,
        // layout: 'horizontal',
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 50,
        y: 10,
        floating: true,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        symbolWidth: 10,
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 3,
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
    if (props.data) {
      setState({
        chartOptions: { series: props.data, title: { text: props.title } },
      });
    }
  }, [props]);

  return (
    <HighchartsReact highcharts={Highcharts} options={state.chartOptions} />
  );
}
