const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

let n = Number(input[0]);
let k = Number(input[1]);

for (let i = 0; i < k; i++) {
    if (n % 10 === 0) {
        n = Math.floor(n / 10);
    } else {
        n--;
    }
}

console.log(n);
