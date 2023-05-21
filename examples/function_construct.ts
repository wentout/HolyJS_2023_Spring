function Construct(this: { field: number }) { };

Construct.prototype = { field: 123 }
Construct.prototype.constuctor
	= Construct;

const item = new Construct;

console.log(item);
