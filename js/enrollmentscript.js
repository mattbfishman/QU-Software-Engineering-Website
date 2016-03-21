$(function () {
    $('#enrollment-chart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Student Enrollment'
        },
        xAxis: {
            categories: [
                '2015 - 16',
                '2014 - 15',
                '2013 - 14',
                '2012 - 13'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Students'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Freshman',
            data: [25, 0, 0, 0]

        }, {
            name: 'Sophomore',
            data: [23, 23, 0, 0]

        }, {
            name: 'Junior',
            data: [16, 16, 16, 0]

        }, {
            name: 'Senior',
            data: [4, 4, 4, 4]

        }]
    });
});