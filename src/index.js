module.exports = function getZerosCount(number, base) {
  let primaryFactorsArr = [];
  let countedZerosArr = [];
  let flag = true;
  let i = 2;
  while(flag) {
    if(base / i < 1) {
      flag == false;
      break;
    } else if(base % i == 0) {
      primaryFactorsArr.push(i);
      base = base / i;
      continue;
    }
    i += 1;
  }

  function countZerosByPrimaryFactor(num, prFactItem) {
    let zeros = 0;
    for(let i = prFactItem; i <= num; i *= prFactItem) {
      zeros += Math.floor(num / i);
    }
    return zeros;
  }

  for (let k = 0; k < primaryFactorsArr.length; k += 1) {
    countedZerosArr.push(Math.floor(
      countZerosByPrimaryFactor(number, primaryFactorsArr[k]) / primaryFactorsArr.filter(item => item === primaryFactorsArr[k]).length)
    );
  }

  return Math.min.apply(null, countedZerosArr);
}
