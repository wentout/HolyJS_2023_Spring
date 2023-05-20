class BaseClass {
	field: number
	constructor () {
		this.field = 321;
	}
};
class ExtendedClass extends BaseClass {
	constructor () {
		super();
		this.field = 123;
	}
};


const item = new ExtendedClass;
console.log(item);

// number
type itemField = typeof item.field;

