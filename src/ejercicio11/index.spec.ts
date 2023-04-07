import getCompleted from './index';

describe('getCompleted', () => {
    it('should return the correct fraction for a time period of 2 hours', () => {
        const result = getCompleted('01:00:00', '03:00:00');
        expect(result).toBe('1/3');
    });

    it('should return the correct fraction for a time period of 2 hours', () => {
        const result = getCompleted('02:00:00', '04:00:00');
        expect(result).toBe('1/2');
    });

    it('should return the correct fraction for a time period of 0 hours', () => {
        const result = getCompleted('01:00:00', '01:00:00');
        expect(result).toBe('1/1');
    });

    it('should return the correct fraction for a time period of 50 minutes', () => {
        const result = getCompleted('00:10:00', '01:00:00');
        expect(result).toBe('1/6');
    });

    it('should return the correct fraction for a time period of 2 hours 20 minutes 20 seconds', () => {
        const result = getCompleted('01:10:10', '03:30:30');
        expect(result).toBe('1/3');
    });

    it('should return the correct fraction for a time period of 2 hours 20 minutes 20 seconds', () => {
        const result = getCompleted('03:30:30', '05:50:50');
        expect(result).toBe('3/5');
    });
});