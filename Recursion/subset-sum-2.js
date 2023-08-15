// Given: Integer Array Num that may contain duplicates
// O/P: All possible Subsets
// Condition: No duplicate subsets. Return the solution in any order

var A = [], subsets = [];

function subSetSum(index, arr) {
    subsets.push([...arr])
    for(let i = index; i< A.length; i++) {
        if(i !== index && A[i] === A[i-1]) {
            continue;
        }
        arr.push(A[i]);
        subSetSum(i + 1, arr);
        arr.pop();
    }
}


export function subSetSumTwo(array) {
    A = array.sort();
    subSetSum(0,[]);
    console.log(subsets)
    return subsets;
}