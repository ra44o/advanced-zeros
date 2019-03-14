module.exports = function getZerosCount(number, base) {
  
  //? for decimnal base system
  // let zeros = 0;
  // for(let i = 5; i <= number; i*=5) {
  //   zeros += Math.floor(number / i);
  // }
  // return zeros;

  let arrOfSipmleNumbersOfBase = [];
  let flag = true;
  let i = 2;
  while(flag) {
    if(base / i < 1) {
      flag == false;
      break;
    } else if(base % i == 0) {
      arrOfSipmleNumbersOfBase.push(i);
      base = base / i;
      continue;
    }
    i += 1;
  }

  let p = arrOfSipmleNumbersOfBase.pop();
  function z (number) {
    let zeros = 0;
    for(let i = p; i <= number; i *= p) {
      zeros += Math.floor(number / i);
    }
    return zeros;
  }
  return z(number);
}
