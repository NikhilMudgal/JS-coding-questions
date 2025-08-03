export function secondLargest(arr) {
    if(arr.length < 2) {
        return "Array length must be at least 2";
    }
    let firstLargest = -Infinity, secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] != firstLargest) { // arr[i] != firstLargest condition is added to handle duplicates
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}