function Construct () {};
Construct.prototype = { field: 123 }
Construct.prototype.constuctor = Construct;
const item = new Construct;
console.log(item);
function ExtendedConstruct () {};

Object.setPrototypeOf(
	ExtendedConstruct.prototype, item);

Construct.prototype.field = 321;
const extendedItem = new ExtendedConstruct;

console.log(extendedItem);

type extendedItemField = 
				typeof extendedItem.field;
