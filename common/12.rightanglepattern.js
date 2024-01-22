function rightanglepattern(rows){
    for(i=0;i<rows;i++){
        let row=''
        for(j=0;j<i;j++){
            row +='*'
        }
        console.log(row)
    }
}

rightanglepattern(7)