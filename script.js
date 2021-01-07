let streets = [
	'Abchurch Lane',
	"Adam's Court",
	'Addle Hill',
	'Addle Lane',
	'Alban Highwalk',
];

const getLanes = (arr) => {
	return arr.filter((lane) => lane.includes('Lane'));
};

console.log(getLanes(streets));

let data1 = [false, 16, 27, 'array', 35, null, 29];
let data2 = [true, 43, 'age', '...', 34, 'UK'];

const sortAges = (arr) => {
	let res = [];
	arr.forEach((data) => {
		if (typeof data == 'number') {
			res.push(data);
		}
	});
	return res;
};

console.log(sortAges(data1));
