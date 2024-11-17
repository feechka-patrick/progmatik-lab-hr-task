function findExpressions(target) {
    const digits = "9876543210";
    const operators = ["+", "-", ""]; 
    const results = [];

    function finder(expression, index) {
        if (index === digits.length) {
            const result = eval(expression);
            if (result === target) {
                results.push(expression);
            }
            return;
        }

        for (let op of operators) {
            finder(expression + op + digits[index], index + 1);
        }
    }

    finder(digits[0], 1);

    return results;
}

const expressions = findExpressions(200);
console.log("Найденные выражения:");
console.log(expressions);
