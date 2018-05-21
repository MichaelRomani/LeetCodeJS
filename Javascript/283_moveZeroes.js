var moveZeroes = function(arr) {
  if (!arr.length) return
  let rIdx = wIdx = 0
  while(rIdx < arr.length) {
      if (arr[rIdx]) arr[wIdx++] = arr[rIdx]
      rIdx++
  }
  while(wIdx < arr.length) arr[wIdx++] = 0
};
