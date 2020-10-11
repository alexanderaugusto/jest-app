const AdvancedCalculator = require('../../src/AdvancedCalculator')

describe("Teste Calculadora Avançada", () => {
  let calc
  beforeEach(() => {
      calc = new AdvancedCalculator();
  })

  it("Deve calcular o modulo de -25", () => {
      const result = calc.abs(-25)
      expect(result).toBe(25)
  })

  it("Deve calcular o valor de 2 elevado a 8ª potencia", () => {
      const result = calc.pow(2, 8)
      expect(result).toBe(256)
  })

  it("Deve retornar Indefinido, pois não existe a raiz quadrada de -25", () => {
      const result = () => calc.sqrt(-25)
      expect(result).toThrow("Indefinido")
  })

  it("Deve calcular a raiz quadrada de 81", () => {
      const result = calc.sqrt(81)
      expect(result).toEqual(9)
  })
})



