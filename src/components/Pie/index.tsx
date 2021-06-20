import React, { useEffect, useState } from 'react';
import styles from './index.less';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsPie from 'highcharts/modules/variable-pie';
HighchartsPie(Highcharts);
export default function Page(props: any) {
  const [state, setState] = useState({
    chartOptions: {
      credits: {
        enabled: false,
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Cell Fraction',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                'black',
            },
          },
        },
      },
      series: [
        {
          name: 'Cell Number',
          type: 'pie',
          innerSize: '80%',
          colorByPoint: true,
          data: [
            {
              name: 'Cell Line',
              y: 61.41,
              // sliced: true,
              // selected: true,
            },
            {
              name: 'Development',
              y: 11.84,
            },
            {
              name: 'Immu',
              y: 10.85,
            },
            {
              name: 'Edge',
              y: 4.67,
            },
            {
              name: 'Safari',
              y: 4.18,
            },
            {
              name: 'Sogou Explorer',
              y: 1.64,
            },
            {
              name: 'Opera',
              y: 1.6,
            },
            {
              name: 'QQ',
              y: 1.2,
            },
            {
              name: 'Other',
              y: 2.61,
            },
          ],
        },
      ],
    },
    hoverData: null,
  });

  useEffect(() => {
    if (props.data) {
      setState({ chartOptions: { series: { data: props.data } } });
    }
  }, [props]);
  return (
    <HighchartsReact highcharts={Highcharts} options={state.chartOptions} />
  );
}
