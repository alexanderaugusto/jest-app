const BasicCalculator = require('../../src/BasicCalculator')
const AdvancedCalculator = require('../../src/AdvancedCalculator')

describe("Basic Calculator Test", () => {
    let calc
    beforeEach(() => {
        calc = new BasicCalculator();
    })

    it("60 + 40 = 100", () => {
        const result = calc.add(60, 40)
        expect(result).toBe(100)
    })

    it("50 - 25 = 25", () => {
        const result = calc.subtract(50, 25)
        expect(result).toEqual(25)
    })

    it("15 * 3 = 45", () => {
        const result = calc.multiply(15, 3)
        expect(result).toBe(45)
    })

    it("10 / 2 = 5", () => {
        const result = calc.divide(10, 2)
        expect(result).toEqual(5)
    })

    it("5 / 3 = 1.67", () => {
        const result = calc.divide(5, 3)
        expect(result).toBeCloseTo(1.67)
    })

    it("20 / 0 = exception ", () => {
        expect(() => {
            expect(calc.divide(20, 0))
        }).toThrow()
    })
})

describe("Advanced Calculator Test", () => {
    let calc
    beforeEach(() => {
        calc = new AdvancedCalculator();
    })

    it("abs(-25)", () => {
        const result = calc.abs(-25)
        expect(result).toBe(25)
    })

    it("2^8 = 256", () => {
        const result = calc.pow(2, 8)
        expect(result).toBe(256)
    })

    it("sqrt(-25) = Undefined", () => {
        const result = () => calc.sqrt(-25)
        expect(result).toThrow("Indefinido")
    })

    it("sqrt(81) = 9", () => {
        const result = calc.sqrt(81)
        expect(result).toEqual(9)
    })

})