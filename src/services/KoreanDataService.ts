import { KoreanNumber } from '@/types'
import korean from '@/numbers.json'

const actualLimit = 999999999

export function getAllKoreanNumbers(): KoreanNumber[] {
  return korean.numbers
}

export function getNumber(number: number): KoreanNumber {
  if (isNaN(number) || number.toString() === '')
    return {
      number: number,
      cardinal: 'Only numbers!',
    }
  if (number % 1 !== 0) return { number: number, cardinal: 'Only Integers' }

  const notFoundNumber = { number: number, cardinal: 'Not Found' }
  if (number > actualLimit || number < 0) return notFoundNumber

  const koreanNumber: KoreanNumber =
    getAllKoreanNumbers().find((i: KoreanNumber) => {
      return i.number == number
    }) || notFoundNumber

  if (koreanNumber === notFoundNumber) {
    number = parseInt(number.toString(), 10) // for leading zeros
    const digits: string[] = getRevertedArray(number)
    koreanNumber.cardinal = getCardinalName(digits)
  }
  return koreanNumber
}

export function getCardinalFromNumber(number: number): string {
  return getNumber(number).cardinal
}

function getRevertedArray(number: number): string[] {
  return number.toString().split('').reverse()
}

function getCardinalName(digits: string[]): string {
  const tens: string[] = []
  let cardinalName = ''

  for (let index = 0; index < digits.length; index++) {
    if (index < 2) {
      tens.push(digits[index])
    }
  }
  cardinalName += getTens(tens) + ' '
  return cardinalName
}

function getTens(digits: string[]): string {
  if (digits.length === 1 && +digits[0] === 0) return ''

  const dInWords: string[] = []
  if (digits.length > 1) {
    if (+(digits[1] + digits[0]) < 10 && +(digits[1] + digits[0]) > 0) {
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
