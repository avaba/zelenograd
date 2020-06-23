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
	position: [45.131117, 38.969568],
	balloonContent: "Городская поликлиника № 8",
}, {
	iconImageHref: './img/health.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.138237, 38.995208],
	balloonContent: "Детская поликлиника №8",
}, {
	iconImageHref: './img/health.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.117081, 	38.997382],
	balloonContent: "Городская поликлиника №13",
}, {
	iconImageHref: './img/health.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [	45.130961, 	38.988927],
	balloonContent: "Медицинский центр МедЭко",
}, {
	iconImageHref: './img/health.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [	45.127071, 	38.969881],
	balloonContent: "Медицинский центр МедЭко",
}]
schools = [{
	iconImageHref: './img/schools.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.147472,39.000437],
	balloonContent: "Школа №50",
},{
	iconImageHref: './img/schools.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.112168,39.0163],
	balloonContent: "Начальная школа №94",
},{
	iconImageHref: './img/schools.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.119612,38.993154],
	balloonContent: "Школа №61",
},{
	iconImageHref: './img/schools.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.120285,38.988541],
	balloonContent: "Парк-школа Лучистая",
},{
	iconImageHref: './img/schools.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.124681,38.982821],
	balloonContent: "Школа №65",
}]
kinders = [{
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.125364, 38.979013],
	balloonContent: "Детский сад HappyBaby",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.135243, 38.991896],
	balloonContent: "Детский сад-ясли Солнышко",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.131454, 	38.975342],
	balloonContent: "Детский сад Мишутка",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.126442, 	38.971384],
	balloonContent: "Детский сад 3/9 царство",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.129035,38.971163],
	balloonContent: "Детский сад Rostok",
}, {
	iconImageHref: './img/kinders.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.131467,38.980266],
	balloonContent: "Детский сад Мишутка",
}]
caffe = [{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.102319,38.980901],
	balloonContent: "Сеть ресторанов быстрого питания Макдональдс",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.132548,38.995167],
	balloonContent: "Бар Pinta Bar",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.123714,38.983355],
	balloonContent: "Семейное Кафе Пончик",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.122459,38.98667],
	balloonContent: "Домашняя кухня",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.143193,38.994639],
	balloonContent: "Кафе Суши Wok",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.136427,38.98566],
	balloonContent: "Кондитерская Карамелька",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.125874,39.009582],
	balloonContent: "Кафе Не горюй",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.11451,38.986033],
	balloonContent: "Ресторан Макароны",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.130169,38.996941],
	balloonContent: "Ресторан, Opera Palace",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.130729,38.972085],
	balloonContent: "Кафе СушиТайм",
},{
	iconImageHref: './img/caffe.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.128793,38.969931],
	balloonContent: "Кафе Гирос",
}]
shops = [{
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.130778, 38.972508],
	balloonContent: "Мясо Есть",
},{
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.133317, 38.985231],
	balloonContent: "На Апрельской",
},{
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.131129, 38.967837],
	balloonContent: "Продукты",
},{
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.130573, 38.970682],
	balloonContent: "Симпатия",
},{
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.129713, 38.970609],
	balloonContent: "Апельсин",
},{
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.128812, 38.970731],
	balloonContent: "Магнит",
},{
	iconImageHref: './img/shops.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.129096, 38.985326],
	balloonContent: "Продукты и хозтовары",
}]
sport = [{
	iconImageHref: './img/sport.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.117525,38.981144],
	balloonContent: "Спортивная арена Баскет-Холл",
},{
	iconImageHref: './img/sport.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.115579,38.978773],
	balloonContent: 'Ледовый дворец "Ice Palace"',
},{
	iconImageHref: './img/sport.svg',
	iconImageSize: [icoMapSizeX, icoMapSizeY],
	position: [45.123107,38.984595],
	balloonContent: "Баскетбольный клуб Локомотив-Кубань",
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