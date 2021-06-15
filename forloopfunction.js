
//check even or odd number using for-loop

for(var i= 0; i<=10;i++){
    if(i === 0){
        console.log(i +  " is even");
    }
    else if(i % 2 === 0){
        console.log(i +  " is even");
    }
    else{
        console.log(i +  " is odd");
    }
}

//calculate grad using for-loop

var studentsName = [['Anik',60],['Fatema',100],['Abishek',70],['HimelVai',80]];

var averageNumber = 0;
var average;

for(var i=0; i < studentsName.length; i++){
    averageNumber = averageNumber  + studentsName [i] [1];
    average = (averageNumber/studentsName.length);
}
console.log("Grad : " + (averageNumber)/studentsName.length);

if(average < 60){
    console.log("Grad is : B");
}
else if(average < 70){
    console.log("Grad is : A-");
}
else if(average < 80){
    console.log("Grad is : A");
}
else if(average < 100){
    console.log("Grad is : A+");
}

//using nested for loop

var i,j,star;

for(i=1; i<=5; i++){
    for(j=1; j < i; j++){ 
        star = star + ('*');
    }
    console.log(star);
}

//convert upper case using function

function upperCase(text){
    var text = text.toUpperCase();
    var result = text;
    console.log(result);
    return result;
}
upperCase('anik');


//counts vowels using foorloop and function

function vowelCount(text1){
    var vowels = 'aeiouAEIOU';
    var count = 0;

    for(var i = 0; i < text1.length; i++){
        if(vowels.indexOf(text1[i]) !== -1){
            count = count + 1;
        }
    }
    var result = count;
    console.log(result);
    return result;
}
vowelCount("Paragon programmer Academy");