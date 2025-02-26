const closestToZero = require('../closestToZero');

describe('closestToZero', () => {
    test('should return 0 when no temperatures are provided', () => {
        expect(closestToZero([])).toBe(0);
    });

    test('should return the temperature closest to zero', () => {
        expect(closestToZero([1, -2, -8, 4, 5])).toBe(1);
        expect(closestToZero([10, -10])).toBe(10);
        expect(closestToZero([-1, -2, 2, 1])).toBe(1);
        expect(closestToZero([-273, 5526, 0])).toBe(0);
    });

    test('should handle single temperature input', () => {
        expect(closestToZero([5])).toBe(5);
        expect(closestToZero([-3])).toBe(-3);
    });

    test('should handle multiple temperatures equally close to zero', () => {
        expect(closestToZero([-5, 5])).toBe(5);
        expect(closestToZero([-1, 1])).toBe(1);
    });

    test('should handle temperatures at the extreme range', () => {
        expect(closestToZero([-273, 5526, -5526, 273])).toBe(273);
        expect(closestToZero([-273, 5526])).toBe(-273);
    });

    test('should handle mixed positive and negative temperatures', () => {
        expect(closestToZero([-15, -7, 10, 3, -3])).toBe(3);
    });

    test('should handle all negative temperatures', () => {
        expect(closestToZero([-20, -15, -5, -1])).toBe(-1);
    });

    test('should handle all positive temperatures', () => {
        expect(closestToZero([20, 15, 5, 1])).toBe(1);
    });

    test('should handle temperatures with zero', () => {
        expect(closestToZero([0, -1, 1, -2, 2])).toBe(0);
    });

    test('Should handle temperatures as zero when no temperature is provided', () => {
        expect(closestToZero([])).toBe(0);
    });
});