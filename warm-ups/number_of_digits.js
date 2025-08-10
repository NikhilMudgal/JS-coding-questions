export function countDigits(num) {
    let count =0;
    if(num === 0) {
        return 1;
    } else if(num < 0) {
        num = Math.abs(num);  // converting negative numbers to positive
    }
    while(num !==0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}