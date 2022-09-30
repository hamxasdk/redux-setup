import isNull from './null-checking'

export const Mask = (number, command = 'generatemask') => {
  if (command === 'generatemask') {
    if (isNull(number)) return number
    var x = number.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
    number = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    return number
  } else {
    let purenumber = number.replace(/[^\d]/g, '').slice(0, 10)
    return purenumber
  }
}
