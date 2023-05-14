const asterikPattern=(n)=> {
    for (i=n; i>=1;i--){
        let line=" "; // it initializes an empty string to create the asterik
        for (j=1;j<=i;j++){
            line+="* ";
        }
        
        console.log(line);
    }
}
