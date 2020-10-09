export function checkInsurance(insurance) {
  const arrayInsurace = insurance.replace(/\s/g, '').split('')
  const checkSum = parseInt(arrayInsurace.slice(9).join(''), 10)
  let numForTest = 9

  const sum = arrayInsurace.reduce((acc, currVal, i) => {
    if (i === (arrayInsurace.length - 1)) return acc

    acc += currVal * numForTest
    numForTest--
    
    return acc
  }, 0)

  if (sum < 100 && sum === checkSum) {
      return true
  } else if ((sum === 100 || sum === 101) && checkSum === 0) {
      return true
  } else if (sum > 101 && (sum % 101 === checkSum || (sum % 101 === 100 && checkSum === 0))) {
      return true
  } else {
      return 'Введите корректный СНИЛС'
  }
}

export const getFullName = patient => {
  if (!patient) return ''
  
  const { surname, name, patronymic } = patient
   
  return `${surname} ${name} ${patronymic ? patronymic : ''}`
}

export const parseDate = (timestamp, withTime, withDate) => {
  const d = new Date(timestamp)
  const time = `${String(d.getHours()).padStart(2, 0)}:${String(d.getMinutes()).padStart(2, 0)}`
  const date = `${String(d.getFullYear())}-${String(d.getMonth() + 1).padStart(2, 0)}-${String(d.getDate()).padStart(2, 0)}`

  if (withDate && withTime) {
    return `${date} ${time}`
  } else if (withDate) {
    return `${date}`
  } else {
    return `${time}`
  }
  
}