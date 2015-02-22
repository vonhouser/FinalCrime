//Crime Change Highcharts Script//

$(function () {
    $('#crimechange').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Change in Violent Crime Since 2010',
            color: 'rgba(104,1,72,1)',
       
        },
        xAxis: {
            categories: ['Detroit',
                'Memphis',
                'Baltimore',
                'Milwaukee',
                'Nashville',
                'Indianapolis',
                'Washington, DC',
                'Philadelphia',
                'Houston',
                'Oklahoma City']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Change in the number of violent crimes per 100,000 since 2010',
            color: 'rgba(125,180,181,1)',
            data: [-255, 142, -95, 230, 92, 26, -63, -55, -79, 4]
        },
                ]
    });
});

//Script for Top 20 Hicharts//     
$(function () {
    $('#crimechart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top Ten Most Violent Cities',
            style: {
                color: '#7DB4B5',
                font: 'bold 26px "Trebuchet MS", Verdana, sans-serif'
            }
            
        
        },
        xAxis: {
            categories: [
                'Detroit',
                'Memphis',
                'Baltimore',
                'Milwaukee',
                'Nashville',
                'Indianapolis',
                'Washington, DC',
                'Philadelphia',
                'Houston',
                'Oklahoma City'
            
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Violent Crime Rate'
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: '2010',
            color: 'rgba(125,180,181,1)',
            data: [2378, 1608, 1500, 1065, 1124, 1160, 1241, 1215, 1071, 915],
            pointPadding: 0.0,
            pointPlacement: -0.0
        },
                 {
            name: '2012',
            color: 'rgba(224,239,241,.6)',
            data: [2123, 1750, 1405, 1295, 1216, 1186, 1178, 1160, 993, 919],
            pointPadding: 0.2,
            pointPlacement: -0.0
        } ]
    });
});
    
//Scripts for Baltimore Detroit Comparison
$(function () {
    $('#Detroit').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Violent Crimes per 100,000'
        },
        subtitle: {
            text: 'Source: Bureau of Justice Statistics'
        },
        xAxis: {
            categories: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
           
                 labels: {
                style: {
                    color: '#C2CBCE'
        }
        }
        },
        yAxis: {
            labels:{enabled: false},
            title: {
                text: '',
                 labels: {
                style: {
                    color: '#C2CBCE'
        }
                 }
        }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'Detroit',
            data: [2073,2018,1740,2358,2419,2287,1985,
1992,2378,2137,2123],
             color: '#7DB4B5',
            
        }, {
            name: 'Baltimore',
            data: [2055, 1735,1839,1755,1697,1631,1589,1513,1500,1418,1405],
             color: '#680148',
        }]
    });
});