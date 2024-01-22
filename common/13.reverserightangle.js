function reverserightangletrianle(rows){
    for(i=0;i<rows;i++){
        let row=""
        for(j=0;j<rows-i;j++){
            row +="*"
        }
        console.log(row)
    }
}

reverserightangletrianle(6)