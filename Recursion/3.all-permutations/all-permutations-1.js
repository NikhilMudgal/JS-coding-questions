// Give: An array with n distinct numbers
// O/P: All Permutations of a string/Array
// Condition: Answer in any order

var A = [], combinations = [];

function getPermutations(arr, freq) {
    if(arr.length === A.length) {
        combinations.push([...arr])
    }
    for (let i = 0; i< A.length; i++) {
        if(!freq[i]) {
            freq[i] = 1;
            arr.push(A[i]);
            getPermutations(arr, freq)
            arr.pop()
            freq[i] = 0;
        }
    }
}

export function permutationOne(array) {
    A = array;
    const itemsFreq = Array(array.length).fill(0);
    getPermutations([], itemsFreq)
    console.log(combinations);
    return combinations
}