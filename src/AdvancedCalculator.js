class AdvancedCalculator {

    abs(num1) {
        return Math.abs(num1)
    }

    pow(num1, num2) {
        return Math.pow(num1, num2)
    }

    sqrt(num1) {
        if (num1 < 0) {
            throw 'Indefinido'
        }
        return Math.sqrt(num1)
    }
}

module.exports = AdvancedCalculator