function printPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = ' '.repeat(rows - i - 1) + '*'.repeat(2 * i + 1);
        console.log(row);
    }
}

printPyramid(5);
