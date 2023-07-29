// Given: Collection of number and a target number
// O/P: all unique combinations in an array where sum is equal to target number
// Condition: Array must be sorted. Combinations returned must be lexicographical sorted order.Each number can used at once. The solution set must not contain duplicate combinations

var A = [], target = 0, combinatioSumItems = new Set();

// Method 1: 
const combinationSum2 = (index, sum, arr) => {

    if(index === A.length) {
        if(sum === 0) {
            combinatioSumItems.add(JSON.stringify(arr));
        }
        return;
    }

    if(A[index] <= sum) {
      arr.push(A[index]);
      combinationSum2(index +1, sum- A[index], arr)
      arr.pop()
    }
    combinationSum2(index + 1, sum, arr)

}

export function combinationTwo(array, targetSum) {
    A = array, target = targetSum;
    const combinationArray = []
    combinationSum2(0, target, [])
    combinatioSumItems.forEach(e => console.log(e));
    return combinatioSumItems;
}

// function findCombination(index, target, arr, ans) {
//     if (target === 0) {
//         console.log(arr);
//         return;
//     }

//     for(let i = index; i< A.length; i++) {
//         if(i > index && A[i] === A[i-1]) {
//             continue;
//         }
//         if(A[i] > target) {
//             break;
//         };
//         arr.push(A[i])
//         findCombination(i+1, target - A[i], arr, ans);
//         arr.pop()
//     }
// }

// findCombination(0, sum, [], [])