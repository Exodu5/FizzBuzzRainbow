const isModuloZero = function (numberToTest, divisor) {
  return ((numberToTest % divisor) === 0)
}

const log = (inputValue) => {
  const colors = ['\x1b[30m', '\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m', '\x1b[36m', '\x1b[37m']
  const randomColor = Math.floor(Math.random() * colors.length - 1) + 1

  console.log(colors[randomColor], inputValue)
}

const fizzBuzzLogic = (sizeFizzBuzz) => {
  const fizzBuzzValues = []
  for (let i = 1; i < sizeFizzBuzz; i++) {
    if (isModuloZero(i, 15)) {
      log('FizzBuzz')
      fizzBuzzValues.push('FizzBuzz')
    } else if (isModuloZero(i, 3)) {
      log('Fizz')
      fizzBuzzValues.push('Fizz')
    } else if (isModuloZero(i, 5)) {
      log('Buzz')
      fizzBuzzValues.push('Buzz')
    } else {
      log(i)
      fizzBuzzValues.push(i)
    }
  }
  return fizzBuzzValues
}

export { 
  isModuloZero,
  fizzBuzzLogic
}