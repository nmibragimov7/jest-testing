const mapArrToString = require('./mapArrToString');

//toBe - сравнивает ссылки в объекте, не подходит для сравнения объектов, массивов obj1 !== obj2
//toEqual - сравнивает содержимое, подходит для сравнения объектов, массивов obj1 === obj2

describe('mapArrToString', () => {
    test('Корректное значение', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    });
    test('Каша', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 'qwerty'])).toEqual(['1', '2', '3']);
    });
    test('Отрицание', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 'qwerty'])).not.toEqual(['1', '2']);
    });
    test('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([]);
    });
})
