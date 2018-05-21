
var compress = function (chars) {
  let tempNum = 1
  let modifyAt = 0
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === chars[i - 1]) tempNum++
    else {
      //Must modify original array - insert letter value
      chars[modifyAt++] = chars[i - 1]
      //Only log number in array if greater than 1
      if (tempNum > 1) {
        //Number of times letter appeared in array
        tempNum = String(tempNum)
        for (let j = 0; j < tempNum.length; j++) {
          //Must modify original array - insert 'tempNum' value
          chars[modifyAt++] = tempNum[j]
        }
        tempNum = 1
      }
    }
  }
  //Return length of 'chars' that has been modified
  return modifyAt
};
