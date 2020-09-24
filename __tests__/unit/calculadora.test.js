const Calculadora = require('../../src/Calculadora')

describe("Teste calculadora", () => {
  it("Deve retornar uma soma", () => { 
    const calc = new Calculadora()
    const result = calc.soma(60, 40)
    expect(result).toBe(100)
  })

  it("Deve retornar uma subtração", () => {
    const calc = new Calculadora()
    const result = calc.subtrair(50, 25)
    expect(result).toBe(25)
  })

  it("Deve retornar uma multiplicação", () => {
    const calc = new Calculadora()
    const result = calc.multiplicar(15, 3)
    expect(result).toBe(45)
  })

  it("Deve retornar uma divisao", () => {
    const calc = new Calculadora()
    const result = calc.dividir(10, 2)
    expect(result).toBe(5)
  })
})