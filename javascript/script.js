function palindrom() { /*https://www.includehelp.com/code-snippets/check-number-is-palindrome-or-not-in-javascript.aspx*/
	var rem, temp, final = 0; /*declare variable reminder temporary final*/
	var number = Number(getElementById('pInput').value); /*Assigns the value given by user to variable number*/

	temp = number; /*Assigns the original value of number to temporary variable*/

	while(number>0)
	{
		rem = number%10; /*the '%' if number = 356 rem = 356/10 = 35.6 = 6*/
		number = parseInt(number/10); /*the '/' if number = 356 number = 356/10 = 35.6 = 35 || parseInt changes the value to integer*/ 
		final = final*10+rem;
	}
	if (final=temp) {
		windows.alert("Palindrom number!!!!");
	}
	else{
		windows.alert("NOT Palindrom number!!!");
	}

}

function convert() {

}

function factorial() {

}

function fibonacciSequence() {
	console.log(f);
	console.log(s);
	var fn = 0;
	while(fn <=100){
		fn = f+s;
		f=s;
		s=fn;
		console.log(fn);
	}
}
function myLoadFunction() {
	var button = document.getElementById('pButton');
	button.addEventListener('click',palindrom);

	// var button = document.getElementById('cButton');
	// button.addEventListener('click',convert);

	// var button = document.getElementById('fButton');
	// button.addEventListener('click',factorial);

	// var button = document.getElementById('sButton');
	// button.addEventListener('click',fibonacciSequence);
}

document.addEventListener('DOMContentLoaded',myLoadFunction)