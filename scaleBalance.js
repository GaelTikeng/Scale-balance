const l = document.getElementById('leftside');
const r = document.getElementById('rightside');
const arr = document.getElementById('scale');
const calculate = document.querySelector('.balance');


calculate.addEventListener('click', () => {
  const newArr = JSON.parse(arr.value);

  for (let i = 0; i <= newArr.length; i++) {
    for (let j = 0; j <= newArr.length; j++) {
      if ((+l.value + newArr[i]) === (+r.value + newArr[j])) {
        document.querySelector('.displaynum').innerHTML = `${newArr[i]} and ${newArr[j]} are needed to balance ${l.value} and ${r.value} respectively`
        return;
      }
      else if (i === newArr.length - 1) {
        document.querySelector('.display').innerHTML = "Cannot Balance"
      }
    }
  }

  console.log('done');
});





  


  