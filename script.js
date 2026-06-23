let questions=[
{
q:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Language",
"None"
],
answer:0
},

{
q:"CSS is used for?",
options:[
"Database",
"Design",
"Server",
"Programming"
],
answer:1
},

{
q:"JavaScript is a?",
options:[
"Language",
"Browser",
"Database",
"OS"
],
answer:0
}
];


let index=0;
let score=0;
let time=30;


function loadQuestion(){

document.getElementById("question").innerHTML=
questions[index].q;

let data="";

questions[index].options.forEach((x,i)=>{

data+=`
<div class="option" onclick="check(${i})">
${x}
</div>
`;

});

document.getElementById("options").innerHTML=data;

}


function check(i){

if(i==questions[index].answer){
score++;
alert("Correct");
}
else{
alert("Wrong");
}

}


function nextQuestion(){

index++;

if(index<questions.length){
loadQuestion();
}

else{

document.getElementById("result").innerHTML=
"Your Score: "+score+"/"+questions.length;

document.getElementById("question").innerHTML="";
document.getElementById("options").innerHTML="";

}

}


setInterval(()=>{

time--;

document.getElementById("time").innerHTML=time;

if(time==0){
alert("Time Over");
}

},1000);


loadQuestion();