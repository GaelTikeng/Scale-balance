let left = document.getElementById('leftside')
let right = document.getElementById('rightside')
let arr = document.getElementById('scale')

function scaleBalance () {
  for (let i=0; i<=arr.length; i++) {
    for (let j=0; j<= arr.length; j++) {
      if ((left + arr[i]) === (right + arr[j])) {
        document.getElementsByClassName('displaynum').innerHTML = `${arr[i]} and ${arr[j]} are needed to balance ${left} and ${right} respectively`
      }
      else {
        document.getElementsByClassName('display').innerHTML = "Cannot Balance"
      }
    }
  }
  return 

}


  