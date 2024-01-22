function printSquarePattern(rows){
    for(i=0;i<rows;i++){
        let row=""
        for(j=0;j<rows;j++){
            row +='*'
        }
        console.log(row)
    }
}

printSquarePattern(5)