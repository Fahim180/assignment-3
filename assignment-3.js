//https://github.com/Fahim180/assignment-3
function  kilometerToMeter(d){
    if (d<0){        
        console.log("Distance can't be negative.");  
    }else{
        return d*1000;
    }
}
function budgetCalculator( nW , nM , nL ){
    if ( nW < 0 || nM <0 || nL <0 ){   
        console.log("Number of components can't be nagative.");
    }else{
        return  nW*50 + nM*100 + nL*500;
    }
}
function hotelCost(spendingDays){
    if ( spendingDays < 0){    
        return "Spending spendingDays Can not be nagative."
    }else if(spendingDays >= 0 && spendingDays <= 10){
        return spendingDays*100 ;
    }else if(spendingDays >= 10 && spendingDays <= 20){
        return 10*100 + (spendingDays-10)*80 ;
    }else{
        return 10*100 + 10*80 + (spendingDays-20)*50 ;
    }
}


function megaFriend(name){ 
    var largestNameIndex = 0;          
    var largestLength =name[0].length;   
    for (var i =0 ; i< name.length ; i++){  
        if( largestLength < name[i].length){
            largestNameIndex=i;
            largestLength = name[i].length;
        }
    }
    return name[largestNameIndex];
}

console.log(kilometerToMeter(3))
console.log(budgetCalculator( 2 , 2, 2 ))
console.log(hotelCost(23))
console.log(megaFriend(["robin", "saiful","shahriar","fahim"]))