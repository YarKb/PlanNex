$(function(){
	$('#tab-prov').on('click',mapShowProv);
	$('#tab-city').on('click',mapShowCity);
});

var makeMapLegends = function(data, elemId){
    features = Highcharts.maps["countries/cn/custom/cn-all-sar"].features;
    provinceName = {};
    for(i in features){
    	provinceName[features[i].properties['hc-key']] = features[i].properties.name;
    }
   
    ul = $(elemId).empty();
    for(i in data){
        ul.append(
            $('<li>').attr('id','prov-'+data[i]['hc-key']).append($('<span>').addClass('name').text(data[i].rank+'. '+provinceName[data[i]['hc-key']]))
                .append($('<div>').addClass('barWrapper').append(
                	$('<span>').addClass('bar').css('width',data[i].value+'%'))
                )
        );
    }
};

function makeMapCityLegends(data,elemId){
	ul = $(elemId).empty();
    for(i in data){
        ul.append(
            $('<li>').attr('id','city-'+data[i].id).append($('<span>').addClass('name').text(data[i].rank+'. '+data[i].city))
                .append($('<div>').addClass('barWrapper').append(
                	$('<span>').addClass('bar').css('width',data[i].value+'%'))
                )
        );
    }
}

mouseOnProv = '';
//add listener to highcharts's map.js calling this function
var mapAreaMouseOver = null;

function mapMouseOverProv(e,t){
	mouseOnProv = t['hc-key'];
	setTimeout(function(){
		if(mouseOnProv != t['hc-key']) return;
		$('#world-map-legend li.active').removeClass('active');
		$('#prov-'+t['hc-key']).addClass('active');

		var container = $('#world-map-legend'),
		    scrollTo = $('#prov-'+t['hc-key']);

		container.animate({
		    scrollTop: -25+scrollTo.offset().top - container.offset().top + container.scrollTop()
		});
	},200);
	
}


function mapMouseOverCity(e){
	t = this;
	$('#world-map-legend li.active').removeClass('active');
	console.log(t,e);
	$('#city-'+t.id).addClass('active');

	var container = $('#world-map-legend'),
	    scrollTo = $('#city-'+t.id);

	container.animate({
	    scrollTop: -25+scrollTo.offset().top - container.offset().top + container.scrollTop()
	});
	
}
function mapShowCity(){
	$('#tab-prov').removeClass('active');
	$('#tab-city').addClass('active');
	mapAreaMouseOver=null;
	mapCityInit();
}

function mapShowProv(){
	$('#tab-city').removeClass('active');
	$('#tab-prov').addClass('active');
	mapAreaMouseOver = mapMouseOverProv;
	mapProvInit();
}

var mapProvInit = function(){
    // Initiate the chart
    // Prepare demo data
    var data = [
        {
            "hc-key": "cn-sh",
            "value": 0,
            'rank': 30
        },
        {
            "hc-key": "cn-zj",
            "value": 1,
            'rank': 30
        },
        {
            "hc-key": "tw-ph",
            "value": 2,
            'rank': 30
        },
        {
            "hc-key": "tw-km",
            "value": 3,
            'rank': 30
        },
        {
            "hc-key": "tw-lk",
            "value": 4,
            'rank': 30
        },
        {
            "hc-key": "tw-tw",
            "value": 5,
            'rank': 30
        },
        {
            "hc-key": "tw-cs",
            "value": 6,
            'rank': 30
        },
        {
            "hc-key": "cn-3664",
            "value": 7,
            'rank': 30
        },
        {
            "hc-key": "cn-3681",
            "value": 8,
            'rank': 30
        },
        {
            "hc-key": "tw-tp",
            "value": 9,
            'rank': 30
        },
        {
            "hc-key": "tw-ch",
            "value": 10,
            'rank': 30
        },
        {
            "hc-key": "tw-tt",
            "value": 11
        },
        {
            "hc-key": "tw-pt",
            "value": 12
        },
        {
            "hc-key": "cn-6657",
            "value": 13
        },
        {
            "hc-key": "cn-6663",
            "value": 14
        },
        {
            "hc-key": "cn-6665",
            "value": 15
        },
        {
            "hc-key": "cn-6666",
            "value": 16
        },
        {
            "hc-key": "cn-6667",
            "value": 17
        },
        {
            "hc-key": "cn-gs",
            "value": 18
        },
        {
            "hc-key": "cn-6669",
            "value": 19
        },
        {
            "hc-key": "cn-6670",
            "value": 20
        },
        {
            "hc-key": "cn-6671",
            "value": 21
        },
        {
            "hc-key": "tw-kh",
            "value": 22
        },
        {
            "hc-key": "tw-hs",
            "value": 23
        },
        {
            "hc-key": "tw-hh",
            "value": 24
        },
        {
            "hc-key": "cn-nx",
            "value": 25
        },
        {
            "hc-key": "cn-sa",
            "value": 26
        },
        {
            "hc-key": "tw-cl",
            "value": 27
        },
        {
            "hc-key": "cn-3682",
            "value": 28
        },
        {
            "hc-key": "tw-ml",
            "value": 29
        },
        {
            "hc-key": "cn-6655",
            "value": 30
        },
        {
            "hc-key": "cn-ah",
            "value": 31
        },
        {
            "hc-key": "cn-hu",
            "value": 32
        },
        {
            "hc-key": "tw-ty",
            "value": 33
        },
        {
            "hc-key": "cn-6656",
            "value": 34
        },
        {
            "hc-key": "tw-cg",
            "value": 35
        },
        {
            "hc-key": "cn-6658",
            "value": 36
        },
        {
            "hc-key": "tw-hl",
            "value": 37
        },
        {
            "hc-key": "tw-nt",
            "value": 38
        },
        {
            "hc-key": "tw-th",
            "value": 39
        },
        {
            "hc-key": "cn-6659",
            "value": 40
        },
        {
            "hc-key": "cn-6660",
            "value": 41
        },
        {
            "hc-key": "cn-6661",
            "value": 42
        },
        {
            "hc-key": "tw-yl",
            "value": 43
        },
        {
            "hc-key": "cn-6662",
            "value": 44
        },
        {
            "hc-key": "cn-6664",
            "value": 45
        },
        {
            "hc-key": "cn-6668",
            "value": 46
        },
        {
            "hc-key": "cn-gd",
            "value": 47
        },
        {
            "hc-key": "cn-fj",
            "value": 48
        },
        {
            "hc-key": "cn-bj",
            "value": 49
        },
        {
            "hc-key": "cn-hb",
            "value": 50
        },
        {
            "hc-key": "cn-sd",
            "value": 51
        },
        {
            "hc-key": "tw-tn",
            "value": 52
        },
        {
            "hc-key": "cn-tj",
            "value": 53
        },
        {
            "hc-key": "tw-il",
            "value": 54
        },
        {
            "hc-key": "cn-js",
            "value": 55
        },
        {
            "hc-key": "cn-ha",
            "value": 56
        },
        {
            "hc-key": "cn-qh",
            "value": 57
        },
        {
            "hc-key": "cn-jl",
            "value": 58
        },
        {
            "hc-key": "cn-xz",
            "value": 59
        },
        {
            "hc-key": "cn-xj",
            "value": 60
        },
        {
            "hc-key": "cn-he",
            "value": 61
        },
        {
            "hc-key": "cn-nm",
            "value": 62
        },
        {
            "hc-key": "cn-hl",
            "value": 63
        },
        {
            "hc-key": "cn-yn",
            "value": 64,
            'rank': 1
        },
        {
            "hc-key": "cn-gx",
            "value": 65
        },
        {
            "hc-key": "cn-ln",
            "value": 66
        },
        {
            "hc-key": "cn-sc",
            "value": 67
        },
        {
            "hc-key": "cn-cq",
            "value": 68
        },
        {
            "hc-key": "cn-gz",
            "value": 69
        },
        {
            "hc-key": "cn-hn",
            "value": 70
        },
        {
            "hc-key": "cn-sx",
            "value": 71
        },
        {
            "hc-key": "cn-jx",
            "value": 72
        }
    ];

    data = data.sort(function(a,b){
        if(a.value<b.value) return 1; else return -1;
    });
    for(i in data)
        data[i].rank = parseInt(i)+1;

    // for(var i = 0; i < data.length; i++){
    //     data[i].path = "m 200,250 a 150,30 0 1 0 0,70";
    // }
    // Initiate the chart
    $('#world-map').highcharts('Map', {
        exporting: { enabled: false },
        chart:{

            backgroundColor: 'transparent',
            events:{
                load: function(events){
                    data = this.options.series[0].data;
                    makeMapLegends(data, "#world-map-legend");
                }
            }
        },
        legend: {
            enabled:false,
        },
        title : {
            text : null
        },

        // subtitle : {
        //     text : null
        // },

        mapNavigation: {
            enabled: false,
            // buttonOptions: {
            //     verticalAlign: 'bottom'
            // }
        },
        tooltip:{
            useHTML: true,
            backgroundColor: '#221d1c',
            borderWidth: 0,
            borderRadius:10,
            headerFormat:'',
            pointFormat:'<div style="width:120px;"><div style="float:left;width:45%;"><span style="color:White;font-size:16px;padding:5px;display:block;">{point.name}</span><span style="color:#959393;font-size:13px;padding:2px 5px 5px 7px;">NO. {point.rank}</span></div><div style="float:left;width:55%;"><span style="font-size:40px;color:White;color:#e9ac6d;padding:5px 0 5px 5px;">{point.value}</span><span style="color:White;font-size:16px;padding:5px 5px 5px 0;">%</span></div></div>',
        },
        colors: [ '#625e63', '#8e8b8b','#c5c2ba','#e9e5da'],
        colorAxis: {

                    dataClassColor: 'category',
                    dataClasses: [{
                        to: 25,
                        name: '品牌A'
                    }, {
                        from: 26,
                        to:50,
                        name: '品牌B'
                    }, {
                        from: 51,
                        to:75,
                        name: '行业数据'
                    }, {
                        from: 76,
                        to:100,
                        name: '行业数据'
                    }]
                },
        series : [{
            
        borderColor:'#534d56',
            mapData: Highcharts.maps['countries/cn/custom/cn-all-sar'],
            data : data,
            joinBy: 'hc-key',
            // name: 'Random data',
            states: {
                hover: {
                    color: '#e9ac6d'
                }
            },
            dataLabels: {
                enabled: false
            }
        }]
    });
};

var mapCityInit = function(){
    // Initiate the chart
    // Prepare demo data
    var data = [{
            "city": "拉萨",
            "x": 333.4,
            "y": -1059.52,
            value: 50
        }, {
            "city": "上海",
            "x": 1413.19,
            "y": -967.96,
            value: 95
        }, {
            "city": "长沙",
            "x": 1102.76,
            "y": -828,
            value: 60
        }, {
            "city": "南京",
            "x": 1346.88,
            "y": -1049.77,
            value: 80
        }, {
            "city": "合肥",
            "x": 1274.56,
            "y": -980.31,
            value: 50
        }, {
            "city": "杭州",
            "x": 1374.76,
            "y": -893.16,
            value: 99
        }, {
            "city": "北京",
            "x": 1252.4,
            "y": -1299.79,
            value: 90
        }]

    data = data.sort(function(a,b){
        if(a.value<b.value) return 1; else return -1;
    });
    for(i in data){
        data[i].rank = parseInt(i)+1;
        data[i].id = i;
        data[i].events = {mouseOver:mapMouseOverCity};
    }
    //data preparation ends

    $('#world-map').highcharts('Map', {
        exporting: { enabled: false },
        chart:{

            backgroundColor: 'transparent',
            events:{
                load: function(events){
                    data = this.options.series[1].data;
                    makeMapCityLegends(data, "#world-map-legend");
                }
            }
        },
        legend: {
            enabled:false,
        },
        title : {
            text : null
        },
        mapNavigation: {
            enabled: false,
        },
        tooltip:{
            useHTML: true,
            backgroundColor: '#221d1c',
            borderWidth: 0,
            borderRadius:10,
            //fix tooltip flying begins
            hideDelay:0,
            followPointer: false,
            //fix ends
            headerFormat:'',
            pointFormat:'<div style="width:120px;"><div style="float:left;width:45%;"><span style="color:White;font-size:16px;padding:5px;display:block;">{point.city}</span><span style="color:#959393;font-size:13px;padding:2px 5px 5px 7px;">NO. {point.rank}</span></div><div style="float:left;width:55%;"><span style="font-size:40px;color:White;color:#e9ac6d;padding:5px 0 5px 5px;">{point.value}</span><span style="color:White;font-size:16px;padding:5px 5px 5px 0;">%</span></div></div>',
        },
        series : [{
            
        borderColor:'#534d56',
            mapData: Highcharts.maps['countries/cn/custom/cn-all-sar'],
            //data : data,
            joinBy: 'hc-key',
            // name: 'Random data',
            states: {
            },
            dataLabels: {
                enabled: false
            }
        },
         {
        "type": "mappoint",
        "name": "Cities",
        "marker": {
            "fillColor": "#e9ac6d",
            "radius": 3
        },
        "data": data
    }]
    });
};