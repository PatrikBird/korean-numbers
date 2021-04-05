import ukrainian_numbers from '../ukrainian_numbers.json'

interface UkrainianNumber {
  number: number
  cardinal: string
}

export default {
  getUkrainianNumbers(): UkrainianNumber[] {
    const ukrnumbers = ukrainian_numbers.ukrainian_numbers
    return ukrnumbers
  },
  getUkrainianNumber(number: number): UkrainianNumber {
    const ukrainian_number: UkrainianNumber = this.getUkrainianNumbers().find(
      function (i: UkrainianNumber) {
        return i.number == number
      }
    ) || { number: -1, cardinal: 'Not Found' }
    return ukrainian_number
  },
  getCardinalFromNumber(number: number): string {
    return this.getUkrainianNumber(number)?.cardinal
  },
  getRandomUkrainianNumbers(): UkrainianNumber[] {
    const arr: UkrainianNumber[] = []
    while (arr.length < 20) {
      const r = Math.floor(Math.random() * 20) + 1
      const ukrnumber: UkrainianNumber = this.getUkrainianNumber(r)
      if (arr.indexOf(ukrnumber) === -1) arr.push(ukrnumber)
    }
    return arr
  },
}
