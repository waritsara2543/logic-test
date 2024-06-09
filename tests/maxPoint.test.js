const maxPoints = require('../src/maxPoint.js'); // Assuming maxPoints function is defined in a separate file

describe('maxPoints', () => {
    test('it should return the correct maximum number of points on the same line', () => {
        const testCases = [
            { input: [[1,1],[2,2],[3,3],[4,4]], expected: 4 },
            // { input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4],[5,5]], expected: 4 },
            // { input: [], expected: 0 },
            // Add more test cases as needed
        ];

        testCases.forEach(({ input, expected }) => {
            const result = maxPoints(input);
            expect(result).toEqual(expected);
        });
    });
});
