// All permutations method using the swapping reswapping technique
const combinations = []

function getPermutations(index, arr) {
    if(index === arr.length) {
        combinations.push([...arr]);
    }   
    for(let i = index; i< arr.length; i++) {
        swap(index, i, arr)
        getPermutations(index + 1, arr);
        swap(index, i, arr);
    }
    
}

function swap(i,j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j]=temp;
}


export function getAllPermutationsTwo(array) {
    getPermutations(0, array);
    console.log(combinations)
    return combinations
}