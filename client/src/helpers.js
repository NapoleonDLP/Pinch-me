const options = function(num) {
  let x = 1;
  if (num > 12) {
    x = 0;
  }
  let result = [];
  while(x <= num) {
    if (x < 10) {
      result.push('0' + x);
    } else {
      result.push(x.toString());
    }
    x++;
  }
  return result;
}

module.exports = options;
