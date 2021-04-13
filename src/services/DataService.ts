import ukrainian_numbers from '../ukrainian_numbers.json'

interface UkrainianNumber {
  number: number
  cardinal: string
}

const actualLimit = 999999999

function getUkrainianNumbers(): UkrainianNumber[] {
  const ukrnumbers = ukrainian_numbers.ukrainian_numbers
  return ukrnumbers
}

function getUkrainianNumber(number: number): UkrainianNumber {
  if (isNaN(number)) return { number: number, cardinal: 'Insert only Numbers' }
  if (number % 1 !== 0) return { number: number, cardinal: 'Only Integers' }
  const notFoundNumber = { number: number, cardinal: 'Not Found' }
  if (number > actualLimit) return notFoundNumber

  const ukrainianNumber: UkrainianNumber =
    getUkrainianNumbers().find(function (i: UkrainianNumber) {
      return i.number == number
    }) || notFoundNumber

  if (ukrainianNumber == notFoundNumber) {
    number = parseInt(number.toString(), 10) // for leading zeroes
    const digits: string[] = getReverseArrayOfCharDigitFromNumber(number)
    ukrainianNumber.cardinal = getCardinalNameFromReverseDigitsArray(digits)
  }

  return ukrainianNumber
}

function getCardinalFromNumber(number: number): string {
  return getUkrainianNumber(number).cardinal
}

function getReverseArrayOfCharDigitFromNumber(x: number): string[] {
  return x.toString().split('').reverse()
}

function getHundreds(digits: string[]): string {
  if (digits.length == 3) {
    if (+digits[2] == 0) digits = digits.slice(0, 2)
  }
  if (digits.length == 2) {
    if (+digits[1] == 0) digits = digits.slice(0, 1)
  }
  if (digits.length == 1) {
    if (+digits[0] == 0) return ''
  }
  const dInWords: string[] = []
  if (digits.length > 2) dInWords.push(getCardinalFromNumber(+digits[2] * 100))
  if (digits.length > 1) {
    if (+(digits[1] + digits[0]) < 20 && +(digits[1] + digits[0]) > 0) {
      dInWords.push(getCardinalFromNumber(+(digits[1] + digits[0])))
      return dInWords.join(' ')
    } else {
      if (+digits[1] != 0) dInWords.push(getCardinalFromNumber(+digits[1] * 10))
    }
  }
  if (digits.length > 0 && +digits[0] != 0)
    dInWords.push(getCardinalFromNumber(+digits[0]))

  return dInWords.join(' ')
}

function getThousands(digits: string[]): string {
  const thousandGreaterThan4 = ' тисяч'
  if (digits.length == 3) {
    if (+digits[2] == 0) digits = digits.slice(0, 2)
  }
  if (digits.length == 2) {
    if (+digits[1] == 0) digits = digits.slice(0, 1)
  }
  if (digits.length == 1) {
    if (+digits[0] == 0) return ''
    if (+digits[0] > 4)
      return getCardinalFromNumber(+digits[0]) + thousandGreaterThan4
    else return getCardinalFromNumber(+digits[0] * 1000)
  }
  const hundreds = getHundreds(digits)
  if (hundreds.length == 0) return ''
  return hundreds + thousandGreaterThan4
}

function getMillions(digits: string[]): string {
  const millionsGreaterThan4 = ' мільйонів'
  if (digits.length == 3) {
    if (+digits[2] == 0) digits = digits.slice(0, 2)
  }
  if (digits.length == 2) {
    if (+digits[1] == 0) digits = digits.slice(0, 1)
  }
  if (digits.length == 1) {
    if (+digits[0] == 0) return ''
    if (+digits[0] > 4)
      return getCardinalFromNumber(+digits[0]) + millionsGreaterThan4
    else return getCardinalFromNumber(+digits[0] * 1000000)
  }
  const hundreds = getHundreds(digits)
  if (hundreds.length == 0) return ''
  return hundreds + millionsGreaterThan4
}

function getCardinalNameFromReverseDigitsArray(digits: string[]): string {
  const hundreds: string[] = []
  const thousands: string[] = []
  const millions: string[] = []
  let cardinalName = ''
  for (let index = 0; index < digits.length; index++) {
    if (index < 3) hundreds.push(digits[index])
    else if (index < 6) thousands.push(digits[index])
    else millions.push(digits[index])
  }
  if (digits.length > 6) cardinalName += getMillions(millions) + ' '
  if (digits.length > 3) cardinalName += getThousands(thousands) + ' '
  if (digits.length > 0) cardinalName += getHundreds(hundreds)
  return cardinalName
}

function shuffle(array: UkrainianNumber[]): UkrainianNumber[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function get100RandomUkrainianNumbers(): UkrainianNumber[] {
  const numsFrom0to100 = 70
  const numsFrom100to1000 = 20
  const numsFrom1000to1000000 = 9
  const numsGreaterThan1000000 = 1

  const arr: UkrainianNumber[] = []
  while (arr.length < numsFrom0to100) {
    const r = Math.floor(Math.random() * 100) + 1
    const ukrnumber: UkrainianNumber = getUkrainianNumber(r)
    if (arr.indexOf(ukrnumber) === -1) arr.push(ukrnumber)
  }
  while (arr.length < numsFrom0to100 + numsFrom100to1000) {
    const r = Math.floor(Math.random() * (1000 - 100 + 1) + 100)
    const ukrnumber: UkrainianNumber = getUkrainianNumber(r)
    if (arr.indexOf(ukrnumber) === -1) arr.push(ukrnumber)
  }
  while (
    arr.length <
    numsFrom0to100 + numsFrom100to1000 + numsFrom1000to1000000
  ) {
    const r = Math.floor(Math.random() * (1000000 - 1000 + 1) + 1000)
    const ukrnumber: UkrainianNumber = getUkrainianNumber(r)
    if (arr.indexOf(ukrnumber) === -1) arr.push(ukrnumber)
  }
  while (
    arr.length <
    numsFrom0to100 +
      numsFrom100to1000 +
      numsFrom1000to1000000 +
      numsGreaterThan1000000
  ) {
    const r = Math.floor(Math.random() * (actualLimit - 1000000 + 1) + 1000000)
    const ukrnumber: UkrainianNumber = getUkrainianNumber(r)
    if (arr.indexOf(ukrnumber) === -1) arr.push(ukrnumber)
  }
  return shuffle(arr)
}

export default {
  getUkrainianNumbers,
  getUkrainianNumber,
  getCardinalFromNumber,
  get100RandomUkrainianNumbers,
}
