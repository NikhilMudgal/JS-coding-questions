// toggle value is changed on every iteration rather than reset on every row change
let toggle = 1;
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += toggle + " ";
        toggle = +!toggle;
    }
    console.log(row);
}