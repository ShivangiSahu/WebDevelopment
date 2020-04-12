const pi = 3.14;
console.log(pi);

let name = 'harry potter';
console.log(name);
let age = '23';
typeof age; 
let option = true;
let height; 
console.log(height);
console.log(option);
let eyecolor = null;

let shopping = [];
shopping = ['paint','pencil','brush','eraser'];
console.log(shopping);
 let number = [1,2, 9,7];
 console.log(number[0]+number[3]);
 console.log(number.sort());
 number.push(6);
 console.log(number.sort());
 let mixArray = ['hello', 1, 'harry', 0.2];
 console.log(mixArray);
 let pen = {
 	color: 'blue',
 	type: 'ballpoint',
 	cost : 20 
 };
 console.log(pen);
 console.log(pen.color);
 let shivangi = {
 	age: '27',
 	company:'wipro',
 	skills: ['appium', 'selenium','java', 'javascript']
 };

 console.log(shivangi.skills[3]);

 function addition() {
 	let sum = number[2]+number[1];
 	console.log(sum);
 }

 addition();

 function product(a , b) {
 	return a*b;
 }

 console.log(product(number[0],number[2]));

 if (number[1] == 4 ) {
 	console.log('number is correct');
 }
 else{
 	console.log('wrong');
 }
 let i = 0;
while(i<5) {
console.log(i);
i++; 
}

do{
	console.log(i);
i++;
}
while(i<5);

 for (let i = 0; i<shopping.length ; i++) {
 	console.log(shopping[i]);
 }
