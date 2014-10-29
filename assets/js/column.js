$(function(){
    longColumnDemo('#exposureChart');
    longColumnDemo('#activeChart');
    oneColumnDemo('#oneColumnChart1');
    oneColumnDemo('#oneColumnChart2');
    fourColumnDemo('#fourColumnChart1');
    fourColumnDemo('#fourColumnChart2');
});

function longColumnDemo(container){
    axis = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ];
    data = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
    initColumnChart(container,axis,data);
}

function oneColumnDemo(container){
    axis = [
                'Q1',
            ];
    data = [49.9];
    initColumnChart(container,axis,data);
}

function fourColumnDemo(container){
        axis = [
                'Q1',
                'Q2',
                'Q3',
                'Q4',
            ];
    data = [49.9, 71.5, 106.4, 129.2,];
    initColumnChart(container,axis,data);
}

function initColumnChart(container,axis,data) {
    $(container).highcharts({
        exporting: { enabled: false },
        chart: {
            type: 'column',
            backgroundColor:'transparent',
            plotBackgroundColor:'rgba(255,255,255,0.2)'
        },
        title: {
            text: null
        },
        legend:{
            itemStyle:{
                color:'#FFF',
                fontSize:'18px',
                fontWeight:'normal',
            },
            symbolWidth:0,
        },
        xAxis: {
            categories: axis,
            labels:{
                 y:-315,
                style:{color:'#d7d7d9'},
            },
            tickWidth:0,
            gridLineWidth:1,
            gridLineColor:'#4f464d',
            lineWidth:0,
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            gridLineWidth:0,
            offset:25,
            tickWidth:1,
            lineWidth:1,
            tickPosition:'inside',
            tickColor:'rgba(255,255,255,0.2)',
            labels:{
                style:{color:'#FFF'}
            }
        },
        tooltip: {
           enabled:false
        },
        plotOptions: {
            column: {
                padding:0,
                pointPadding: 0,
                borderColor:'',
                borderWidth: 1,
                edgeWidth:0,
                groupPadding:0,
                dataLabels:{
                    color:'#d7d7d9',
                    enabled:true,
                    hover:function(){alert(1);}
                }
            }
        },
        series: [{
            name: '曝光量',
            color:'#e8ac6c',
            data: data

        }]
    });
}			
