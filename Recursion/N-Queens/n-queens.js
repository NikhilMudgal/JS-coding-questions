
function isSafe(row, col, board, n) {
    const duprow = row;
    const dupcol = col;

    while (row >=0 && col >=0) {
        if(board[row][col] === 'Q') {
            return false;
        }
        row--;
        col--;
    }

    col = dupcol;
    row = duprow;
    while (col >= 0) {
        if(board[row][col] === 'Q') {
            return false;
        }
        col--;
    }

    row = duprow;
    col = dupcol;
    while(row < n && col >=0) {
        if(board[row][col] === 'Q') {
            return false;
        }
        row++;
        col--;
    }
    return true;
}

function solve(col, board, ans, n) {

    if(col === n) {
        const boardDuplicate = [];
        // using for loop to avoid call by reference
        for(let i=0;i<n; i++) {
            const rowDuplicate = [];
            for (let j=0; j<n;j++) {
                rowDuplicate.push(board[i][j])
            }
            boardDuplicate.push([...rowDuplicate])
        }
        ans.push(boardDuplicate);
        return;
    }

    for(let row =0; row < n; row++ ) {
        if(isSafe(row, col, board, n)) {
          board[row][col] = 'Q';
          solve(col +1, board, ans, n);
          board[row][col] = '.';
        }
    }

}

export function nQueens(n) {
    let ans = [];
    const s = Array(n).fill('.');
    let board = [];
    // to avoid call by reference, we are using for loop
    for(let i=0; i< n; i++) {
        const dupPositions = [...s];
        board.push(dupPositions)
    }
    // let board = Array(n).fill();
    solve(0, board, ans, n)
    console.log(ans)
    return ans;
}
