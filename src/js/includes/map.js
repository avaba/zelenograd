var icoMapSizeX = 35;
var icoMapSizeY = 46;

var health_in = [];
var schools_in = [];
var kinders_in = [];
var caffe_in = [];
var shops_in = [];
var sport_in = [];
// var hospital_in = [];
// var tc_in = [];
// var street_in = [];
health = [{
	iconImageHref: './img/health.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.095221, 39.013487],
	balloonContent: "пер. Топольковый",
}, {
	iconImageHref: './img/health.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.087248, 39.014061],
	balloonContent: "ТЦ 'Лента'",
}]
schools = [{
	iconImageHref: './img/schools.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.100826, 38.986855],
	balloonContent: "Школа № 98",
}, {
	iconImageHref: './img/schools.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.111717, 39.016272],
	balloonContent: "Начальная школа № 94",
}]
kinders = [{
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.091666, 39.008821],
	balloonContent: "Грецкий орех, фитнес-центр",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.088100, 39.009683],
	balloonContent: "kinderss Life",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.088600, 39.005330],
	balloonContent: "Red shark, фитнес-клуб",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.087894, 38.998795],
	balloonContent: "LIGHT FIT, фитнес-центр",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.072527, 38.993881],
	balloonContent: "Детский Сад № 219",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.073447, 39.013462],
	balloonContent: "Детский сад 'Город детства'",
}]
caffe = [{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.090656, 38.988066],
	balloonContent: "Детский сад № 220",
}, {
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.098272, 38.986214],
	balloonContent: "Детский сад № 100",
}, {
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.099217, 38.977435],
	balloonContent: "Детский сад № 107 'Русалочка'",
}, {
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.100523, 39.001301],
	balloonContent: "Детский сад № 107 'Русалочка'",
}]
shops = [{
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.071624, 39.014676],
	balloonContent: "Лукойл-Югнефтепродукт",
}, {
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.079297, 39.000669],
	balloonContent: "Роснефть",
}, {
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.075353, 39.001345],
	balloonContent: "Роснефть",
}, {
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.091137, 39.013753],
	balloonContent: "Газпром",
}, {
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.097984, 38.998244],
	balloonContent: "Лукойл",
}, {
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.091636, 38.992059],
	balloonContent: "АЗС 233 'Роснефть-Кубаньнефтепродукт'",
}]
sport = [{
	iconImageHref: './img/sport.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.087186, 39.012217],
	balloonContent: "Лента",
}, {
	iconImageHref: './img/sport.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.093989, 39.009142],
	balloonContent: "Магнит",
}, {
	iconImageHref: './img/sport.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.093560, 39.003156],
	balloonContent: "Магнит",
}, {
	iconImageHref: './img/sport.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.091694, 39.008817],
	balloonContent: "Магнит",
}, {
	iconImageHref: './img/sport.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.094970, 39.016650],
	balloonContent: "Магнит",
}]


$('.map__head__list_item').click(function () {
	$('.map__head__list_item').removeClass('active');
	$(this).addClass('active');
});

$('.map__head__list_item_all').click(function () {
	$(health_in).each(function () {
		this.options.set('visible', true);
	});
	$(kinders_in).each(function () {
		this.options.set('visible', true);
	});
	$(caffe_in).each(function () {
		this.options.set('visible', true);
	});
	$(shops_in).each(function () {
		this.options.set('visible', true);
	});
	$(schools_in).each(function () {
		this.options.set('visible', true);
	});
	$(sport_in).each(function () {
		this.options.set('visible', true);
	});
});

$('.map__head__list_item_health').click(function () {
	$(health_in).each(function () {
		this.options.set('visible', true);
	});
	$(kinders_in).each(function () {
		this.options.set('visible', false);
	});
	$(caffe_in).each(function () {
		this.options.set('visible', false);
	});
	$(shops_in).each(function () {
		this.options.set('visible', false);
	});
	$(schools_in).each(function () {
		this.options.set('visible', false);
	});
	$(sport_in).each(function () {
		this.options.set('visible', false);
	});
});

$('.map__head__list_item_schools').click(function () {
	$(health_in).each(function () {
		this.options.set('visible', false);
	});
	$(kinders_in).each(function () {
		this.options.set('visible', false);
	});
	$(caffe_in).each(function () {
		this.options.set('visible', false);
	});
	$(shops_in).each(function () {
		this.options.set('visible', false);
	});
	$(schools_in).each(function () {
		this.options.set('visible', true);
	});
	$(sport_in).each(function () {
		this.options.set('visible', false);
	});
});

$('.map__head__list_item_kinders').click(function () {
	$(health_in).each(function () {
		this.options.set('visible', false);
	});
	$(kinders_in).each(function () {
		this.options.set('visible', true);
	});
	$(caffe_in).each(function () {
		this.options.set('visible', false);
	});
	$(shops_in).each(function () {
		this.options.set('visible', false);
	});
	$(schools_in).each(function () {
		this.options.set('visible', false);
	});
	$(sport_in).each(function () {
		this.options.set('visible', false);
	});
});

$('.map__head__list_item_caffe').click(function () {
	$(health_in).each(function () {
		this.options.set('visible', false);
	});
	$(kinders_in).each(function () {
		this.options.set('visible', false);
	});
	$(caffe_in).each(function () {
		this.options.set('visible', true);
	});
	$(shops_in).each(function () {
		this.options.set('visible', false);
	});
	$(schools_in).each(function () {
		this.options.set('visible', false);
	});
	$(sport_in).each(function () {
		this.options.set('visible', false);
	});
});

$('.map__head__list_item_shops').click(function () {
	$(health_in).each(function () {
		this.options.set('visible', false);
	});
	$(kinders_in).each(function () {
		this.options.set('visible', false);
	});
	$(caffe_in).each(function () {
		this.options.set('visible', false);
	});
	$(shops_in).each(function () {
		this.options.set('visible', true);
	});
	$(schools_in).each(function () {
		this.options.set('visible', false);
	});
	$(sport_in).each(function () {
		this.options.set('visible', false);
	});
});

$('.map__head__list_item_sport').click(function () {
	$(health_in).each(function () {
		this.options.set('visible', false);
	});
	$(kinders_in).each(function () {
		this.options.set('visible', false);
	});
	$(caffe_in).each(function () {
		this.options.set('visible', false);
	});
	$(shops_in).each(function () {
		this.options.set('visible', false);
	});
	$(schools_in).each(function () {
		this.options.set('visible', false);
	});
	$(sport_in).each(function () {
		this.options.set('visible', true);
	});
});


ymaps.ready(initMap);



function initMap() {

	var myMap = new ymaps.Map(
		"map", {
			center: [45.132246, 38.976617],
			zoom: 15,
			height: 520,
			controls: []
		}
		);

	var mapContacts = new ymaps.Map(
		"contacts-map", {
			center: [45.132246, 38.976617],
			zoom: 16,
			height: 520,
			controls: []
		}
		);


	var markerMap = true;

	addMarkers(myMap, health, health_in);
	addMarkers(myMap, kinders, kinders_in);
	addMarkers(myMap, caffe, caffe_in);
	addMarkers(myMap, shops, shops_in);
	addMarkers(myMap, schools, schools_in);
	addMarkers(myMap, sport, sport_in);

	myMap.geoObjects.add(
		new ymaps.Placemark(
			[45.132246, 38.976617], {
				balloonContent: '',
			}, {
				iconLayout: 'default#image',
				iconImageHref: './img/marker.svg',
				iconImageSize: [57, 77],
				iconImageOffset: [-28,-77],
				zIndex: 2
			}
			)
		);

	mapContacts.geoObjects.add(
		new ymaps.Placemark(
			[45.132246, 38.976617], {
				balloonContent: '',
			}, {
				iconLayout: 'default#image',
				iconImageHref: './img/marker.svg',
				iconImageSize: [57, 77],
				iconImageOffset: [-28,-77],
				zIndex: 2
			}
			)
		);

	function addMarkers(map, arr, arr2) {
		for (var i = 0; i < arr.length; i++) {
			var marker = new ymaps.Placemark(
				arr[i].position, {}, {
					iconLayout: 'default#image',
					iconImageHref: arr[i].iconImageHref,
            iconImageSize: arr[i].iconImageSize, // размер иконки
            zIndex: arr[i].zIndex
           }
           );
			map.geoObjects.add(marker);
			arr2.push(marker);
		}
	}
};