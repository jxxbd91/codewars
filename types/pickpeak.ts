function pickPeaks(arr: number[]): res {

  let r = {
    pos: [],
    peaks: []
  }


  for (let i:number = 1, j:number = i + 1; i < arr.length - 1;) {

    if (arr[i] > arr[i - 1] && arr[i] > arr[j]) {

      r.pos.push(i)
      r.peaks.push(arr[i])

      i++
      j++
    } else if (arr[i] > arr[i - 1] && arr[i] === arr[j]) {

      j++
      continue
    }
    i = j
    j++
  }


  return r;
}

interface res {
  pos: number[];
  peaks: number[];
}

console.log(pickPeaks([ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3 ]))
// 5 6 5
// [ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3 ] --> 
// [ 2, 1, 3, 1, 2, 2, 2, 2 ]
// [ 3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1 ]
// [ 2, 1, 3, 1, 2, 2, 2, 2, 1 ]