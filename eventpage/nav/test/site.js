$(function(){
	var DATA = [];

	DATA.push({
		label: 'Home ',
		url: 'Home'
	});
	DATA.push({
			label: 'Event ',
			url: 'Event'
		});
	DATA.push({
			label: 'Workshop ',
			url: 'Workshop'
		});
	DATA.push({
			label: 'Hello ',
			url: 'Hello'
		});
	DATA.push({
			label: 'HI ',
			url: 'HI'
		});
	var SELECTED = 'Event';


	var OPTIONS = {
		key: 'url',
		pageLoader: {
			target: null,
			key: 'url'
		}
	}

	var FUNC = {
		onInit: function() {
			console.log('INIT');
		},
		onChangeBegin: function() {
			console.log('CHANGE');
		},
		onChangeComplete: function(d) {
			console.log('CHANGE_COMPLETE')
			console.log(d)
		}
	};

	var circleMenu = new CircleMenu($('#my-circle-menu'), DATA, SELECTED, OPTIONS, FUNC);
});