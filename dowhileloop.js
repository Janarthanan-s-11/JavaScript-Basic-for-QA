/*different between while and dowhile is
while will execute only if condition true
do will will execute for 1st time without condition check then only it will check for the condition*/

let a = 0
while(a>0)
{
a++
console.log(a)
} //while over, 0>0 is false so while loop get fail


do
{
a++
console.log("value of a inside loop"+ a)
}while(a<5); //until a value become 5 will not go outside loop so execute 5 time and log a as 5.
console.log("value of a outside loop"+ a)
// do while alone end with semicolon.
/*✅ What this does:

a = 0

The while(a > 0) loop never runs because a is 0.

The do...while loop runs at least once, increments a from 0 to 5.
1, 1<5, pass then will again go to do loop, will not got to while loop.

Final console.log(a) prints 5.*/
