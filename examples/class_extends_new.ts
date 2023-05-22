class BaseClass {
	field: number
	constructor () {
		this.field = 321;
	}
};
class ExtendedClass extends BaseClass {
	constructor (value) {
		super();
		this.field = value;
	}
};

const first = new ExtendedClass(123);
const second = new ExtendedClass(345);




