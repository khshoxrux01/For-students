a = +prompt('Enter the first number')
b = +prompt('Enter the second number')
opr = prompt('Enter the operation')
switch(opr) {
    case '+':
        result = a + b
        break
    case '-':
        result = a - b
        break
    case '*':
        result = a * b
        break
    case '/':
        result = a / b
        break
    default:
        alert('Error')
}
alert(result)