let n = 5;
for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n - 1 - i; j++) {
        line += " ";
    }
    line += "*";
    if (i > 0) {
        for (let j = 0; j < 2 * i - 1; j++) {
            line += " ";
        }
        line += "*";
    }
    console.log(line);
}
for (let i = n - 2; i >= 0; i--) {
    let line = "";
    for (let j = 0; j < n - 1 - i; j++) {
        line += " ";
    }
    line += "*";
    if (i > 0) {
        for (let j = 0; j < 2 * i - 1; j++) {
            line += " ";
        }
        line += "*";
    }
    console.log(line);
}