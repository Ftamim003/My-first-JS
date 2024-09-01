var myMarks= 71;
var friendMarks=55;

if(myMarks>80){
    if(friendMarks>80){
        console.log("Go for Lunch");
    }
    else if(friendMarks>=60 && friendMarks<80){
        console.log("Good luck next time");
    }
    else if(friendMarks>=40 && friendMarks<60){
        console.log("Unseen message");
    }
    else{
        console.log('Block');
    }
}
else{
    console.log('Go To Home');
}
