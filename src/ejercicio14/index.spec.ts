import getOptimalPath from './index';
test('Should return the optimal path for [[0], [2, 3]]', () => {
    const piramide = [[0], [2, 3]]

    const optimalPath = getOptimalPath(piramide)

    expect(optimalPath).toBe(2);
});

test('Should return the optimal path for [[0], [3, 4], [9, 8, 1]]', () => {
    const piramide = [
        [0],
        [7, 4],
        [2, 4, 6]
    ]

    const optimalPath = getOptimalPath(piramide)

    expect(optimalPath).toBe(8);
});

test('Should return the optimal path for [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]', () => {
    const piramide = [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]

    const optimalPath = getOptimalPath(piramide)

    expect(optimalPath).toBe(8);
});