for (let i = 1; i <= 6; i++) {
    let toggle = 1, row = "";
    for (let j = 1; j <= i; j++) {
        row += toggle + " ";
        toggle = +!toggle;
    }
    console.log(row);
}