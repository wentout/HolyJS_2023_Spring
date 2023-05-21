
let augmentation = false;
let store = 0;

class OptionalField {
	get field () {
		if (augmentation) {
			return new Error('wrong augmentation');
		}
		return store;
	}
	set assignation (value: unknown) {
		store = value;
		if (typeof value !== 'number') {
			augmentation = true;
		}
	}
}

const optionalField = new OptionalField;

optionalField.assignation = 'My String';

console.log(optionalField.field)