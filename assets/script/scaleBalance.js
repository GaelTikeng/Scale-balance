const leftWeight = document.getElementById("leftside")
const rightWeight = document.getElementById('rightside')
const arr = document.getElementById('scale')
const calculate = document.querySelector('.balance')

calculate.addEventListener('click', () => {
  if ((leftWeight.value === '') | (rightWeight.value === '') | (arr === '')) {
    console.log('Please fill all fields')
    document.querySelector(".displaynum").innerHTML = 'Please fill all fields'
  } else {
    let myArr = String(arr.value)
      .split(',')
      .map((num) => {
        return Number(num)
      })
    console.log(typeof myArr)
    console.log(myArr)
    let sortedArr = myArr.sort(function (a, b) {
      return a - b
    })
    console.log(typeof sortedArr)
    console.log(sortedArr)
    for (let i = 0; i <= sortedArr.length; i++) {
      for (let j = 0; j <= sortedArr.length; j++) {
        if (
          +leftWeight.value + sortedArr[i] ===
          +rightWeight.value + sortedArr[j]
        ) {
          document.querySelector(
            '.displaynum'
          ).innerHTML = `${sortedArr[i]} and ${sortedArr[j]} are needed to balance ${leftWeight.value} and ${rightWeight.value} respectively`
          return;
        } else if (i === sortedArr.length - 1) {
          document.querySelector('.displaynum').innerHTML = 'Cannot Balance'
        }
      }
    }
  }
});
