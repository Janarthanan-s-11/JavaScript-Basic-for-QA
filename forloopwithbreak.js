//we will find the number between 1 to 50 which is divided by both 2 and 5 but we need only first 3 numbers.

/*for(let a = 1; a <= 50; a++){

    if(a%2 == 0 && a%5 == 0){

        console.log(a);

    }

}*/ // without break, we have output 10 20 30 40 50, but we need only 10 20 30, so we can call another variable and stop loop by first 3 output values

let n = 0; //using this variable only we going to implement the break
for(let a = 1; a<=50; a++){
// if we give n++ here, then output will be 3, because n= 1, a =1, both if fails, once n=3, a also 3, if 1 fail but if 2 pass n=3 so output is 3.

    if(a%2 == 0 && a%5 == 0){
        n++  //value of n become 1, 2, 3
        console.log(a);
    }
    if(n==3){
        console.log("value of n is "+n)
        break;
    }

}