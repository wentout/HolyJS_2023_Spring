function Construct (this: {field: number}) {};
Construct.prototype = { field: 123 }
Construct.prototype.constuctor = Construct;
const item = new Construct;
console.log(item);

function ExtendedConstruct (this: {field: number}) {};
Object.setPrototypeOf(ExtendedConstruct.prototype, item);

// any ...
Construct.prototype.field = 321;


const extendedItem = new ExtendedConstruct;
console.log(extendedItem);

// any ...
type extendedItemField = typeof extendedItem.field;