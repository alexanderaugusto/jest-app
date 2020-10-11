class BasicCalculator {
    add(num1, num2) {
        return num1 + num2
    }

    subtract(num1, num2) {
        return num1 - num2
    }

    multiply(num1, num2) {
        return num1 * num2
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw Error("Divisão por zero :x")
        }

        return num1 / num2
    }   
}

module.exports = BasicCalculator

