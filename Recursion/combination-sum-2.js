//Combination Sum 2 (Array must be sorted)

var A = [1,1,1,2,3,4]
var sum = 4;


function findCombination(index, target, arr, ans) {
    if (target === 0) {
        console.log(arr);
        return;
    }

    for(let i = index; i< A.length; i++) {
        if(i > index && A[i] === A[i-1]) {
            continue;
        }
        if(A[i] > target) {
            break;
        };
        arr.push(A[i])
        findCombination(i+1, target - A[i], arr, ans);
        arr.pop()
    }
}

findCombination(0, sum, [], [])