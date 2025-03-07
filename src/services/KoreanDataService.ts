import { KoreanNumber } from '@/types'
import korean from '@/numbers.json'

const actualLimit = 10000

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
  const hundreds: string[] = []
  const thousands: string[] = []
  let cardinalName = ''

  for (let index = 0; index < digits.length; index++) {
    if (index < 2) tens.push(digits[index])
    else if (index < 3) hundreds.push(digits[index])
    else if (index < 4) thousands.push(digits[index])
  }

  if (digits.length > 3) cardinalName += getThousands(thousands)
  if (digits.length > 2) cardinalName += getHundreds(hundreds)
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

function getHundreds(digits: string[]): string {
  const hundred = '백 (baek)' // todo: get from data.json
  if (digits.length === 1) {
    if (+digits[0] === 0) return ''
    if (+digits[0] === 1) return hundred
    else return getCardinalFromNumber(+digits[0]) + hundred
  }

  const tens = getTens(digits)
  if (tens.length === 0) return ''
  return tens
}

function getThousands(digits: string[]): string {
  const thousand = '천 (cheon)' // todo: get from data.json
  if (digits.length === 1) {
    if (+digits[0] === 0) return ''
    if (+digits[0] === 1) return thousand
    else return getCardinalFromNumber(+digits[0]) + thousand
  }

  const hundreds = getHundreds(digits)
  if (hundreds.length === 0) return ''
  return hundreds
}

export function get10RandomNumbers(): KoreanNumber[] {
  const arr: KoreanNumber[] = []
  while (arr.length < 11) {
    const rng = Math.floor(Math.random() * 100) + 1
    const koreanNumber: KoreanNumber = getNumber(rng)
    if (arr.indexOf(koreanNumber) === -1) arr.push(koreanNumber)
  }
  return shuffle(arr)

  function shuffle(array: KoreanNumber[]): KoreanNumber[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
}
