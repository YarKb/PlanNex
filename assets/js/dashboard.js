/*   
Template Name: PlaNex - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.2.0
Version: 1.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.3/
*/

var blue		= '#348fe2',
    blueLight	= '#5da5e8',
    blueDark	= '#1993E4',
    aqua		= '#49b6d6',
    aquaLight	= '#6dc5de',
    aquaDark	= '#3a92ab',
    green		= '#00acac',
    greenLight	= '#33bdbd',
    greenDark	= '#008a8a',
    orange		= '#f59c1a',
    orangeLight	= '#e8ac6c',
    orangeDark	= '#c47d15',
    dark		= '#2d353c',
    grey		= '#c3c6cb',
    purple		= '#727cb6',
    purpleLight	= '#8e96c5',
    purpleDark	= '#5b6392',
    red         = '#ff5b57';


var makeLegends = function(series, elemId){
    var tableHtml = $('<table style="font-size:smaller;color:#545454"><tbody>' + 
                    '</tbody></table>');
    for(var i = 0; i < series.length; i++){
        var se = series[i];
        if(se.userOptions.regression){
            var tr = $('<tr><td class="legendColorBox"><div style="border:1px solid #ccc;padding:1px">' + 
                     '<div style="width:4px;height:0;border:5px solid #fff;overflow:hidden"></div>' +
                     '</div></td><td class="legendLabel" style="color: #fff"></td></tr>');
            tr.find('.legendColorBox > div > div').css("border", "5px solid " + se.color);
            tr.find('.legendLabel').html(se.name);
            tr.appendTo(tableHtml.find("tbody"));
        }
    }
    tableHtml.appendTo(elemId);
};

// 制造数据，demo用
var fakeData = function(a, b, c, type){
    var data = [];
    if(type == "regression"){
        for(var i = 0; i < 350; i++){
            data[i] = [i, a * i * i + b * i + c];
        }
        return data;
    }else{
        for(var i = 0; i < 350; i++){
            data[i] = [i, a * i * i + b * i + c + 15 * (0.5 - Math.random())];
        }
        return data;
    }
};
var handleInteractiveChartHigh = function(){
    "use strict";
    $('#interactive-chart').highcharts({
        exporting: { enabled: false },
        xAxis: {
            title: '',
            min: 0,
            max: 350,
            tickColor: '#7d6f71',
            lineColor: '#7d6f71',
            tickPosition: 'inside',
            labels: {
                style: {
                    color: '#fff'
                }
            },
        },
        yAxis: {
            title: '',
            min: 0,
            max: 100,
            gridLineColor: '#7d6f71',
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },
        title: {
            text: ''
        },
        chart: {
            backgroundColor: 'transparent',
            type: 'scatter',
            events:{
                load: function(events){
                    // alert(this);
                    
                    var _this = this;
                    var series = _this.series;
                    makeLegends(series, "#interactive-chart-legend");
                }
            }
        },
        // labels: {
        //     items: [{
        //         html: '<span class="dt">时间范围   </span><span class="dd"> 1-3月</span>',
        //         style: {
        //             left: '850%',
        //             top: '16px'
        //         }
        //     },{
        //         html: '<span class="dt">地  域   </span><span class="dd"> 南京</span>',
        //         style: {
        //             left: '850%',
        //             top: '45px'
        //         }
        //     },{
        //         html: '<span class="dt">目标人群   </span><span class="dd"> 青少年</span>',
        //         style: {
        //             left: '850%',
        //             top: '70px'
        //         }   
        //     },{
        //         html: '<span class="dt">频 次   </span><span class="dd"> 8</span>',
        //         style: {
        //             left: '850%',
        //             top: '95px'
        //         }
        //     },],
        //     style: {
        //         color: '#fff',
        //         'font-size' : '14'
        //     }                          
        // },
        legend:{
            x: 1000,
            floating: true,
            // backgroundColor: '#fff',
            // layout: 'vertical',
            // width: 140,
            // itemWidth: 100,
            // symbolHeight: 2400,
            // symbolPadding: 15,
            // symbolRadius: 1000,
            // useHTML: true,
            align: 'right'
        },
        series: [{
            color: orange,
            lineWidth: 5,
            name: '品牌A',
            // data: [[0, 12], [25, 12], [50, 25], [75, 30], [100, 35], [125, 42], [150, 55], [175, 67], [200, 72], [225, 82], [250, 80], [275, 95], [300, 85]],
            data: fakeData(-0.001, 0.6, 1, "regression"),
            regression: true,
            marker: {
                enabled: false
            },
            // states: {
            //     hover: {
            //         lineWidth: 0
            //     }
            // },
        }, {
            color: orange,
            // type: 'scatter',
            // lineWidth: 5,
            name: '品牌B',
            // data: [[0, 15], [25, 22], [50, 15], [75, 20], [100, 31], [125, 40], [150, 45], [175, 57], [200, 68], [225, 79], [250, 90], [275, 90], [300, 89]],
            data: fakeData(-0.001, 0.6, 1, "dots"),
            marker: {
                radius: 2,
                symbol: 'circle'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.y}% REACH, <p>{point.x}</p> GRP',
                backgroundColor: "#000",
                shadow: true
            }
        }],
         plotOptions: {
            scatter: {
                marker: {
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            }
        },
    });
};

var handleDonutChartHigh = function(){
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
                innerRadius: '85%',
                outerRadius: '95%',
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

    
    // The pptv gauge
    $('#donut-chart-1').highcharts(Highcharts.merge(gaugeOptions, {
        exporting: { enabled: false },
        yAxis: {
            title: {
                text: 'pptv',
                offset: 10,
                y: 65,
                style: {
                    color:"#fff"
                }
            }
        },

        pane: {
            size: '100%',
            // 计算： startAngle: (0.5 - data) * 360 * 0.5
            //        endAngle: startAngle + 360
            startAngle: (0.5 - 0.1) * 360 * 0.5,
            endAngle:  (0.5 - 0.1) * 360 * 0.5 + 360 ,

        },

        series: [{
            name: 'pptv',
            data: [10],
            innerRadius: '80%',
            dataLabels: {
                y: -30,
                format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        }]

    }));

    // The Youku gauge
    $('#donut-chart-2').highcharts(Highcharts.merge(gaugeOptions, {
        exporting: { enabled: false },
        yAxis: {
            title: {
                text: 'Youku',
                y: 120,
                style: {
                    color:"#fff"
                }
            }
        },
        pane: {
            size: '90%',
            // 计算： startAngle: (0.5 - data) * 360 * 0.5
            //        endAngle: startAngle + 360
            startAngle: (0.5 - 0.82) * 360 * 0.5,
            endAngle:  (0.5 - 0.82) * 360 * 0.5 + 360,
        },
        series: [{
            data: [82, 90, 94, 100],
            color: '#e8ac6c',
            innerRadius: '85%',
            radius: '95%',
            dataLabels: {
                enabled: false
            }
        },{
            data: [82, 90, 94],
            color: '#e8ac6c',
            innerRadius: '85%',
            radius: '95%',
            dataLabels: {
                enabled: false
            }
        },{
            data: [82, 90],
            color: '#e8ac6c',
            innerRadius: '85%',
            radius: '95%',
            dataLabels: {
                enabled: false
            }
        },{
            name: 'Youku',
            data: [82],
            innerRadius: '80%',
            dataLabels: {
                y: -60,
                format: '<div style="text-align:center"><span style="font-size:80px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        },]
    }));

    // The Sohu gauge
    $('#donut-chart-3').highcharts(Highcharts.merge(gaugeOptions, {
        exporting: { enabled: false },
        yAxis: {
            title: {
                text: 'Sohu',
                offset: 10,
                y: 65,
                style: {
                    color:"#fff"
                }
            }
        },

        pane: {
            size: '80%',
            // 计算： startAngle: (0.5 - data) * 360 * 0.5
            //        endAngle: startAngle + 360
            startAngle: (0.5 - 0.1) * 360 * 0.5,
            endAngle:  (0.5 - 0.1) * 360 * 0.5 + 360 ,
        },

        series: [{
            name: 'Sohu',
            data: [10],
            innerRadius: '80%',
            dataLabels: {
                y: -30,
                format: '<div style="text-align:center"><span style="font-size:40px;color: #e8ac6c;">{y}</span>' +'<span style="font-size:14px;color:#fff">%</span></div>'
            }
        }]

    }));

    
}

var handleSideBarToggle = function(){
    $("#sidebar").find(".nav-header").on("click", function(){
        $("#page-container").toggleClass("page-sidebar-fixed-off");
    });
};

var Dashboard = function () {
	"use strict";
    return {
        //main function
        init: function () {
            // handleDashboardGritterNotification();
            handleInteractiveChartHigh();
            // handleInteractiveChart();
            // handleDashboardSparkline();
            // handleDonutChart();
            // handleDashboardTodolist();
            handleDonutChartHigh();
            // handleVectorMap();
            mapShowProv();
            mediaAttentionInit();
            //handleVectorMapHigh();
            // handleDashboardDatepicker();
            handleSideBarToggle();
        }
    };
}();