function mostWanted(str){
    let res = str.replace(/[^a-z]/gi,'').toLowerCase();
    let letters =  {};
    res.split('').forEach(letter => {letters[letter] ? letters[letter]++ : letters[letter] = 1;
        
        /*
        if(leters[leter])
            letters[letter]++;
        else
        letters[letter]=1 */ 
        
    });
    //for (const key in letters) {
    //  console.log(key);
    //}  

    return Object.keys(letters).map(i => {
        return {key:i, value: letters[i]}
    })
    .sort((left,right) => {return right.value - left.value;})[0].key;

}

console.log(mostWanted("j,ccgvch hhHH"))