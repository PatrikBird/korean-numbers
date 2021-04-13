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
  const notFoundNumber = { number: number, cardinal: 'Not Found' }
  if (number > actualLimit) return notFoundNumber

  const ukrainianNumber: UkrainianNumber =
    getUkrainianNumbers().find(function (i: UkrainianNumber) {
      return i.number == number
    }) || notFoundNumber

  if (ukrainianNumber == notFoundNumber) {
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
  const dInWords: string[] = []
  if (digits.length > 2) dInWords.push(getCardinalFromNumber(+digits[2] * 100))
  if (digits.length > 1) {
    if (+(digits[1] + digits[0]) < 20) {
      dInWords.push(getCardinalFromNumber(+(digits[1] + digits[0])))
      return dInWords.join(' ')
    } else {
      dInWords.push(getCardinalFromNumber(+digits[1] * 10))
    }
  }
  if (digits.length > 0) dInWords.push(getCardinalFromNumber(+digits[0]))

  return dInWords.join(' ')
}

function getThousands(digits: string[]): string {
  const thousandGreaterThan4 = ' тисяч'

  if (digits.length == 1) {
    if (+digits[0] > 4)
      return getCardinalFromNumber(+digits[0]) + thousandGreaterThan4
    else return getCardinalFromNumber(+digits[0] * 1000)
  }
  return getHundreds(digits) + thousandGreaterThan4
}

function getMillions(digits: string[]): string {
  const millionsGreaterThan4 = ' мільйонів'

  if (digits.length == 1) {
    if (+digits[0] > 4)
      return getCardinalFromNumber(+digits[0]) + millionsGreaterThan4
    else return getCardinalFromNumber(+digits[0] * 1000000)
  }
  return getHundreds(digits) + millionsGreaterThan4
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

export default {
  getUkrainianNumbers,
  getUkrainianNumber,
  getCardinalFromNumber,
  getXRandomUkrainianNumbers(x: number): UkrainianNumber[] {
    const arr: UkrainianNumber[] = []
    while (arr.length < 20) {
      const r = Math.floor(Math.random() * x) + 1
      const ukrnumber: UkrainianNumber = this.getUkrainianNumber(r)
      if (arr.indexOf(ukrnumber) === -1) arr.push(ukrnumber)
    }
    return arr
  },
}
