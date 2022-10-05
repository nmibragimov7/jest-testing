const square = require('./square');

describe('square', () => {
    let mockValue;
    // перед каждым
    beforeEach(() => {});

    // один раз перед всеми тестами
    beforeAll(() => {});

    test('Корректное значение', () => {
        // expect(square(2)).toEqual(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        square(3);
        expect(spyMathPow).toBeCalledTimes(2); //Math.pow в square() вызвался 2 раза, так как сам square() вызвался 2 раза
    });
    test('Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });

    // после каждым
    afterEach(() => {
        // Удалить из БД
        jest.clearAllMocks();
    });

    // один раз после всех тестов
    afterAll(() => {});
})
