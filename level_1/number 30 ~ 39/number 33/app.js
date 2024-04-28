function solution(board, moves) {
  let answer = 0;
  const bascket = [];
  let newBoard = new Array(board.length).fill(0).map(() => new Array(0));

  board.forEach((column) => {
    column.forEach((item, i) => {
      if (item) {
        newBoard[i].push(item);
      }
    });
  });
  newBoard = newBoard.map((column) => {
    return column.reverse();
  });

  moves.forEach((act) => {
    if (newBoard[act - 1]) {
      let top = newBoard[act - 1].pop();
      if (top) {
        bascket.push(top);
      }

      while (true) {
        let indexOfTop = bascket.length - 1;

        if (indexOfTop < 1) break;
        if (bascket[indexOfTop] == bascket[indexOfTop - 1]) {
          bascket.pop();
          bascket.pop();
          answer += 2;
        } else break;
      }
    }
  });

  return answer;
}
