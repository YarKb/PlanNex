$(function(){
    marketShareDemo('#market-share-table');
});


function marketShareDemo(container){
    data = {
        xAxis:['一月','二月','三月','四月','五月'],
        series:{
            '行业A':[29,3,7,21,9],
            '行业B':[16,11,32,42,6],
            '行业C':[16,11,32,42,6],
        },
    };
    c = $(container);
    idPrefix = 'donutDemo';
    id = 0;
    makes = [];
    for(name in data.series){
        row = $('<div>');
        $('<div>').addClass('name col-md-2').text(name).css({'line-height':'80px','text-align':'center'}).appendTo(row);
        d = data.series[name];
        for(i in d){
            percentage = d[i];
            id++;
            makes.push({id:id,percentage:percentage});
            $('<div>').addClass('col-md-2').css({'height':80,'padding':0}).attr('id',idPrefix+id).appendTo(row);
        }
        row.appendTo(c);
    }
    row = $('<div>').append($('<div>').addClass('col-md-2'));
    for(i in data.xAxis){
        row.append($('<div>').addClass('col-md-2 text-center').text(data.xAxis[i]));
    }
    row.appendTo(c)
    for(i in makes){
        makeDonut('#'+idPrefix+makes[i].id,makes[i].percentage);
    }
}

function makeDonut(container,percentage){
    var gaugeOptions = {

        exporting: { enabled: false },
        chart: {
            backgroundColor: 'transparent',
            type: 'solidgauge'
        },
        colors: ['#fff', '#6a5a59', '#9b877b', '#e8ac6c'],
        title: null,
        credits: {
            enabled: false
        },
        pane: {
            center: ['50%', '50%'], 
            // size: '40%',
            background: {
                backgroundColor: '#959094',
                innerRadius: '90%',
                outerRadius: '100%',
                borderWidth: 0
            },
        },

        tooltip: {
            enabled: false
        },

        xAxis: {
            plotLines: [{
                width: 100
            }]
        },
        // the value axis
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            // title: {
            //     y: 120
            // },
            labels: {
                enabled: false
            }
        },

        plotOptions: {
            solidgauge: {
                // animation: true,
                dataLabels: {
                    y: 4,
                    borderWidth: 0,
                    useHTML: true
                }
                
            },
            bar: {
                borderWidth: 0
            }
        }
    };

    $(container).highcharts(Highcharts.merge(gaugeOptions, {
        exporting: { enabled: false },

        pane: {
            startAngle: 0,
            endAngle:   360 ,
        },

        series: [{
            name: null,
            innerRadius: '90%',
            outerRadius: '100%',
            data: [{y:percentage,
            color:'#e6aa6d',}],
            dataLabels: {
                y: -12,
                format: '<div style="text-align:center;line-height:20px"><span style="font-size:20px;color: #FFF;font-weight:normal;">{y}</span>' +'<span style="font-size:12px;color:#fff">%</span></div>'
            }
        }]

    }));
}

