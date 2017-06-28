const activeModules = [
	{ name: 'module 1' },
	{ name: 'module 2' },
	{ name: 'module 11' },
	{ name: 'module 3' },
	{ name: 'module 10' }
];

const customModuleRe = /\d+/;

let getCustomModuleNumber = reg => {
	let max = 0;
	for (let i = 0; i < activeModules.length; i++) {
		let current = reg.exec(activeModules[i].name);

		if (current != null) {
			let num = parseInt(current[0]);

			if (num > max) max = num;
		}
	}
	return max;
};

describe('myTest', () =>  {

	let func = getCustomModuleNumber(customModuleRe);

	it('Check if property name contains at least one number', () => {
		let message = "module 9";
		let secondMessage = 'module nine';

		expect(message).toMatch(customModuleRe);
		expect(secondMessage).not.toMatch(customModuleRe);
	});

	it('Function returns highest number',() => {
		expect(func).toEqual(11);
	});
});