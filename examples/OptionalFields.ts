
let augmentation = false;
let store: string | number = 0;

class OptionalField {
	get field () {
		if (augmentation) {
			return new Error('wrong augmentation');
		}
		return store;
	}
	set assignation (value: string | number) {
		store = value;
		if (typeof value !== 'number') {
			augmentation = true;
		}
	}
}

const optionalField = new OptionalField;

optionalField.assignation = 'My String';

console.log(optionalField.field)