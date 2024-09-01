var age =25;
var students= true;
var price= 800;
var discount

if(age<10 && students===false){
price=price-price;
console.log('ticket fare for children: '+price+'Tk');
}
else if(age>10 && age<27 && students){
    discount=price * 50/100;
    price=price-discount
    console.log('Student discount '+discount+'Tk');
    console.log('Fare '+price+ 'Tk');
}

else if(age>60){
    discount=price * 15/100;
    price=price-discount
    console.log('Senior citizen discount '+discount+'Tk');
    console.log('Fare '+price+ 'Tk');
}
else{
    console.log('Regular price '+price+'Tk');
}