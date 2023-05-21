const remapKeys = (
	obj: Record<string, number>,
	remapMap: Record<string, string>
) => {
	for (const key in remapMap) {
		obj[remapMap[key]] = obj[key];
		delete obj[key];
	}
	return obj;
};




const remapResult = remapKeys(
	{ age: 1 },
	{ age: "newAge" }
);

remapResult.newAge // 1


remapResult.age // 1

