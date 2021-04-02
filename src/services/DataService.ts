import numbers from '../ukrnumbers.json'

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getNumbers() {
    return numbers.numbers
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getNumber(original: string) {
    const number = numbers.numbers.find(function (i) {
      return i.original == original
    })
    return number
  },
}
