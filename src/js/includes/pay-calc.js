import noUiSlider from "nouislider";
import wNumb from "wnumb";

// Стоимость квартиры

let price = document.getElementById('calc-price');

noUiSlider.create(price, {
	start: [0],
	step: 1000,
	connect: 'lower',
	range: {
		'min': [0],
		'max': [10000000]
	},
	format: wNumb({
		decimals: 0,
		thousand: ' '
	})
});

let priceValueElement = document.getElementById('calc-price-value');
let priceInput = document.getElementById('price-input');

price.noUiSlider.on('update', function (values, handle) {
	priceValueElement.innerHTML = values[handle];
	priceInput.value = values[handle];
});

// Первоночальный взнос

let initial = document.getElementById('calc-initial');

noUiSlider.create(initial, {
	start: [0],
	step: 1000,
	connect: 'lower',
	range: {
		'min': [0],
		'max': [10000000]
	},
	format: wNumb({
		decimals: 0,
		thousand: ' '
	})
});

let initialValueElement = document.getElementById('calc-initial-value');
let initialInput = document.getElementById('initial-input');

initial.noUiSlider.on('update', function (values, handle) {
	initialValueElement.innerHTML = values[handle];
	initialInput.value = values[handle];
});

// Срок кредита

let year = document.getElementById('calc-year');

noUiSlider.create(year, {
	start: [0],
	step: 1,
	connect: 'lower',
	range: {
		'min': [0],
		'max': [25]
	},
	format: wNumb({
		decimals: 0,
		thousand: ' '
	})
});

let yearValueElement = document.getElementById('calc-year-value');
let yearInput = document.getElementById('year-input');

year.noUiSlider.on('update', function (values, handle) {
	yearValueElement.innerHTML = values[handle];
	yearInput.value = values[handle];
});