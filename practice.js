var marks = 75;

if(marks>90){
    console.log('A+');
}
else if(marks>80){
 console.log('A');
}

else if(marks>60){
    console.log('B');
}

else if(marks>70){
    console.log('A-');
}



else if(marks>50){
    console.log('C')
}


else{
    console.log('fail')
}




// Ternary operator

let price=500;
let isLeader= false;

isLeader===true ? console.log(price):console.log(price+100);