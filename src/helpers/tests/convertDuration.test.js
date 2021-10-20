import { convertDuration } from '../convertDuration';

const mocks = [
	{ duration: 120, expexted: '02:00 hours' },
	{ duration: 180, expexted: '03:00 hours' },
];

describe('Test convertDuration helper function', () => {
	it('convertDuration should return correct duration format', () => {
		expect(convertDuration(mocks[0].duration)).toBe(mocks[0].expexted);
		expect(convertDuration(mocks[1].duration)).toBe(mocks[1].expexted);
	});
});
