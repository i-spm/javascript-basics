let fruits=['banana','orange','apple','pinaapple','orange']



let vegs=['banana','orange','apple','pinaapple','orange']


fruits.forEach((fruit)=>{
    console.log(fruit);
});
console.log(fruits.concat(vegs));

console.log(fruits.concat(vegs).slice(1,4));

console.log(fruits.concat(vegs).reverse());

console.log(fruits.reverse());

console.log(fruits.sort());

let emptyarray=new Array()
for(let num=0; num<10; num++){
    emptyarray.push(num)
}

console.log(emptyarray);

let students={first:'shiv' ,
              last:'mishra',
            age:25,
            height:170,
            studentname: function(){
                return this.first +'\n'+this.last
            } 
            }
console.log(students.first)
console.log(students["last"])

console.log(students.studentname());


//conditonal statements
//18-35 is my demographic
var age=45;
if((age>18)&&(age<30)){
    status='target';
    console.log(status);
} else{
     status='not target'
     console.log(status); 
}

//switch statement
 // weekday vs weekend


 switch(5){

    case 0:
         text='weekend';
         break;

    case 5:
         text='weekend';
         break;
    case 6:
         text='weekend';
         break;

    default:
         text='weekday';
    

 } 
 console.log(text)