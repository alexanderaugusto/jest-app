class AdvancedCalculator {

    abs(num) {
        return Math.abs(num)
    }

    pow(num1, num2) {
        return Math.pow(num1, num2)
    }

    sqrt(num) {
        if (num < 0) {
            throw 'Indefinido'
        }
        return Math.sqrt(num)
    }
}

module.exports = AdvancedCalculator