const BasicCalculator = require('../../src/BasicCalculator')

describe("Teste Calculadora Basica", () => {
    let calc
    beforeEach(() => {
        calc = new BasicCalculator()
    })

    it("Deve calcular o a soma de 60 e 40", () => {
        const result = calc.add(60, 40)
        expect(result).toBe(100)
    })

    it("Deve calcular a subtração de 50 e 25", () => {
        const result = calc.subtract(50, 25)
        expect(result).toEqual(25)
    })

    it("Deve calcular a multiplicação de 15 por 3", () => {
        const result = calc.multiply(15, 3)
        expect(result).toBe(45)
    })

    it("Deve calcular a divisão de 10 por 2", () => {
        const result = calc.divide(10, 2)
        expect(result).toEqual(5)
    })

    it("Deve calcular a divisão de 5 por 3", () => {
        const result = calc.divide(5, 3)
        expect(result).toBeCloseTo(1.67)
    })

    it("Deve retornar um excessão por ser uma divisão por 0", () => {
        expect(() => {
            calc.divide(20, 0)
        }).toThrow()
    })
})



