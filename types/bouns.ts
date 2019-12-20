let testCards: number[] = [1, 2, 5]

console.log(calc(testCards))


function calc(cards: number[]): number{
  let res = 0, dp: Array<number>[] = []


  for (let i = 1; i < cards.length; i++) {
    dp[i][0] = Math.max(
      dp[i-1][0] + cards[0] * 2 ** i,
      dp[i-1][1] + cards[cards.length - 1] * 2 ** i
    )
  }
  return res
  // return recur(1, cards)
}

// function recur (i: number, cards: number[]): number {
//   if (cards.length === 1) return cards[0] * 2 ** i
//   let numb1 = 2 ** i * cards[0] + recur(i+1, cards.slice(1))
//   let numb2 = 2 ** i * cards[cards.length - 1] + recur(i+1, cards.slice(0, -1))
//   return Math.max(numb1, numb2
//   )
// }