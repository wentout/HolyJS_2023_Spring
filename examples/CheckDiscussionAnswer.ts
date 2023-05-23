
const proto = {
	str: '123',
};
const MyFn = function () { };

MyFn.prototype = proto;
MyFn.prototype.constructor = MyFn;

// MyFn.prototype.str = 'proto';

const myItem = new MyFn;
const { str } = myItem;

console.log(str);