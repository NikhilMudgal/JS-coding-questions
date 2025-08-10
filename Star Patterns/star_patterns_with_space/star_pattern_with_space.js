for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 5; j >= 1; j--) {
        if (j <= i) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

console.log("Tutorial Method========================");


for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5 - (i + 1); j++) {
        row += " ";
    }
    for (let k = 0; k < i + 1; k++){
        row += "*";
    }
    console.log(row)
}