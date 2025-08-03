export function secondLargest(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}