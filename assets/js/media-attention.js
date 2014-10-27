function mediaAttentionInit(){
	data = [{
		name:'YOUTU',
		series:[
			{
				name:'所有活动',
				percentage: 20
			},
			{
				name:'同行广告主',
				percentage: 30
			},
			{
				name:'你的活动',
				percentage: 80
			}
		]		
	},{
		name:'SOHU',
		series:[
			{
				name:'所有活动',
				percentage: 70
			},
			{
				name:'同行广告主',
				percentage: 15
			},
			{
				name:'你的活动',
				percentage: 60
			}
		]		
	}];
	container = $('#media-attention-graph')


	middle = false;
	for(i in data){
		item = data[i];
		itemContainer = $("<div>").addClass('media-attention-row')
			.append($('<div>').addClass('title col-md-3').append($("<span>").text(item.name)));
		for(j in item.series){
			d = item.series[j];
			$('<div>').addClass('item col-md-3')
				.append(drawVolume(d.percentage))
				.append($("<div>").addClass('name').text(d.name))
				.append($("<div>").addClass('percentage').text(d.percentage).append($('<span>%</span>')))
				.appendTo(itemContainer);
		}
		itemContainer.appendTo(container);
		if(middle==false)
			$("<div>").addClass('middle-row').text('媒体选择').appendTo(container);
		middle = true;
	}
}

	var drawVolume = function(percentage){
		highlighted = Math.ceil(percentage/20);
		_container = $('<div>').addClass('volume');
		for(i=0;i<(5-highlighted);i++){
			$("<div>").appendTo(_container);
		}
		for(i=0;i<highlighted;i++){
			$("<div>").addClass('active').appendTo(_container);
		}
		return _container;
	}