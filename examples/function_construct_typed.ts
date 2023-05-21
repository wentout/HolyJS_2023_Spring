function OtherConstruct(this: { field: number }) { }
OtherConstruct.prototype = {
	otherField: true
}

type Proto<P, T> = Pick<P, Exclude<keyof P, keyof T>> & T;

const define = function <P extends object, T>(Cstr: { (this: T): void }, proto: P) {
	const MyConstructor = function (): Proto<P, T> {
		return new Cstr;
	};
	Object.setPrototypeOf(MyConstructor, proto);
	return MyConstructor;
};

const myConstruct = define(OtherConstruct, { otherField: true });

const myConstructedItem = myConstruct();

console.log(myConstructedItem);