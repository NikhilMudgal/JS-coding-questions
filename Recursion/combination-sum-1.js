// Problem Statement: Given an array of distinct set of integers and target t
// Output: A unique combination of integers array where chosen no. sum to target.
// Condition: User can select numeber any no. of times.

// const A = [2,3,6,7];
// const target = 7;

// const combinationSum1 = (index, sum, arr) => {

//     if(index === A.length) {
//         if(sum === 0) {
//             console.log(arr);
//         }
//         return;
//     }

//     if(A[index] <= target) {
//       arr.push(A[index]);
//       combinationSum1(index, target- A[index], arr)
//       arr.pop()
//     }
//     combinationSum1(index + 1, sum, arr)

// }

export function test() {
    console.log('Test Import');
}