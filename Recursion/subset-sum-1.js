// Given: Array of N Integers
// O/P: Sum of all subsets. O/P should be in increasng order of sums

var A = [], subsets = [];
function subsetSum(index, sum, arr) {
    if ( index === A.length) {
        subsets.push(sum);
        return;
    }

    sum  = sum + A[index];
    subsetSum(index + 1, sum, arr);
    sum = sum - A[index];
    subsetSum(index + 1, sum, arr)
}

export function subsetSumOne(array) {
    A = array;
    subsetSum(0, 0, [])
    subsets.sort();
    return subsets;
}