// Problem Statement: Given an array of distinct set of integers and target t
// Output: A unique combination of integers array where chosen no. sum to target.
// Condition: User can select numeber any no. of times.

var A = [], target = 0;
var combinatioSumItems = []

const combinationSum1 = (index, sum, arr) => {

    if(index === A.length) {
        if(sum === 0) {
            console.log(arr);
            combinatioSumItems.push([...arr]);
        }
        return;
    }

    if(A[index] <= sum) {
      arr.push(A[index]);
      combinationSum1(index, sum- A[index], arr)
      arr.pop()
    }
    combinationSum1(index + 1, sum, arr)

}

export function combinationOne(array, targetSum) {
    A = array, target = targetSum
    combinationSum1(0, target, [])
    return combinatioSumItems;
}