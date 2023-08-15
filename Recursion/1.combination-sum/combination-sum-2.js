// Given: Collection of number and a target number
// O/P: all unique combinations in an array where sum is equal to target number
// Condition: Array must be sorted. Combinations returned must be lexicographical sorted order.Each number can used at once. The solution set must not contain duplicate combinations

var A = [], target = 0, combinationSumArrays = [];

// combinatioSumItems = new Set(); // we are using set to avoid unique combinations to be used in method 1

// Method 1: 
// const combinationSum2 = (index, sum, arr) => {

//     if(index === A.length) {
//         if(sum === 0) {
//             combinatioSumItems.add(JSON.stringify(arr));
//         }
//         return;
//     }

//     if(A[index] <= sum) {
//       arr.push(A[index]);
//       combinationSum2(index +1, sum- A[index], arr)
//       arr.pop()
//     }
//     combinationSum2(index + 1, sum, arr)

// }

// Method 2: we are using this method to reduce the time complexity of logn which was occuring due to insertion of data structure inside another data structure

function combinationSum2(index, sum, arr) {
    
    if(sum === 0) {
        combinationSumArrays.push([...arr]);
        return;
    }
    for(let i=index; i< A.length; i++) {
        if(i> index && A[i] === A[i - 1]) {
            continue;
        }
        if (A[i]> sum) {
            break;
        }
        
        arr.push(A[i])
        combinationSum2(i + 1, sum - A[i], arr)
        arr.pop()
    }
}

export function combinationTwo(array, targetSum) {
    A = array, target = targetSum;
    combinationSum2(0, target, [])
    combinationSumArrays.forEach(e => console.log(e));
    return combinationSumArrays;
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