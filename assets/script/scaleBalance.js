const leftWeight = document.getElementById('leftside')
const rightWeight = document.getElementById('rightside')
const arr = document.getElementById('scale')
const calculate = document.querySelector('.balance')

calculate.addEventListener('click', () => {
  const newArr = JSON.parse(arr.value)
  newArr.sort(function (a, b) { return a - b })
  for (let i = 0; i <= newArr.length; i++) {
    for (let j = 0; j <= newArr.length; j++) {
      if ((+leftWeight.value + newArr[i]) === (+rightWeight.value + newArr[j])) {
        document.querySelector('.displaynum').innerHTML = `${newArr[i]} and ${newArr[j]} are needed to balance ${leftWeight.value} and ${rightWeight.value} respectively`
        return
      } else if (i === newArr.length - 1) {
        document.querySelector('.displaynum').innerHTML = 'Cannot Balance'
      }
    }
  }
})
