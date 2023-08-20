function solve(col, board, ans, leftRow, upperDiagonal, lowerDiagonal, n) {

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
        if(leftRow[row] === 0 && lowerDiagonal[row + col] === 0 && upperDiagonal[n-1 + col-row] === 0) {
            board[row][col] = 'Q';
            leftRow[row] = 1;
            lowerDiagonal[row+col] = 1;
            upperDiagonal[n-1 + col-row] = 1;
            solve(col +1, board, ans, leftRow, upperDiagonal, lowerDiagonal, n);
            board[row][col] = '.';
            leftRow[row] = 0;
            lowerDiagonal[row+col] = 0;
            upperDiagonal[n-1 + col-row] = 0;
        }
    }

}

export function nQueensTwo(n) {
    let ans = [];
    const s = Array(n).fill('.');
    let board = [];
    let leftRow = Array(n).fill(0); // for checking queens at rows
    let upperDiagonal = Array(2*n - 1).fill(0); // for checking queens at upperDiagonal
    let lowerDiagonal = Array(2*n - 1).fill(0); // for checking queens at lowerDiagonal

    // to avoid call by reference, we are using for loop
    for(let i=0; i< n; i++) {
        const dupPositions = [...s];
        board.push(dupPositions)
    }
    solve(0, board, ans, leftRow, upperDiagonal, lowerDiagonal, n)
    console.log(ans)
    return ans;
}