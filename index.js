const quiz = [{

    Q:"Who is the founder of the Javascript?",
    A: "Bjarne Stroustrup",
    B: "Bredan Eich",
    C: "Chris Beard",
    D:"Mitchell Baker",
    image:"assests/19362653.jpg",
    ans:"ans2"
},
{
    Q:`Which is correct syntax to output "Hello World" in Javascript?`,
    A:`print("Hello World")`,
    B:`cout<<"Hello World"`,
    C:`console.log("Hello World")`,
    D:`System.out.println("Hello World")`,
    image:"assests/19362653.jpg",
    ans:"ans3"
},


{
    Q:`Which operator is used to compare both value and type  in Javascript?`,
    A:"==",
    B:"!=",
    C:"c=",
    D:"===",
    image:"assests/19362653.jpg",
    ans:"ans4"
},
{
    Q:`Which language is built on Javascript?`,
    A:"CoffeeScript",
    B:"Ruby",
    C:"Swift",
    D:"TypeScript",
    image:"assests/19362653.jpg",
    ans:"ans4"
},
];

const questionH = document.getElementById('question');
const img = document.getElementById('images');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const answers = document.querySelectorAll('.quiz1');
const alert = document.getElementById('alert');
const playAgain = document.getElementById('playAgain');
const alert2 = document.getElementById('alert2');
const questions_left = document.getElementById('questions_left')
const nextBtn = document.getElementById('nextBtn');
const prvsBtn = document.getElementById('prvsBtn')




let questionIndex =0;
let score = 0;


const loadQuestions = ()=>{
    const question = quiz[questionIndex];
    questionH.innerText = question.Q
    img.setAttribute('src', question.image);
    option1.innerText = question.A;
    option2.innerText = question.B;
    option3.innerText = question.C;
    option4.innerText = question.D;
    if(questionIndex==0){
        prvsBtn.style.display='none';
    }
    questions_left.innerText=`${quiz.length}/${quiz.length}`
}



loadQuestions();

const checkAnswer = ()=>{
    let answer;
    answers.forEach((item)=>{
        if(item.checked){
           answer = item.id;
        }
    })

    return answer;
}

const deselect = ()=>{
    answers.forEach((item)=>{
        item.checked = false;
})
}



nextBtn.addEventListener('click', ()=>{
    const getAnswer = checkAnswer();

    if(!getAnswer){
        alert2.innerText='Please Select an option 😞';
        alert2.style.display = 'block';
        setTimeout(()=>{
            alert2.style.display = 'none';
        }, 1000);
    }   
    else{
        if(getAnswer == quiz[questionIndex].ans){
            score += 1;
        }
        if(questionIndex === quiz.length-1){
            alert.style.display='block';
             alert.innerText = `Yipee 🔥 !You Scored ${score} out of ${quiz.length} ✌️`;  
             questionIndex =0;
             loadQuestions();
             deselect();
             score = 0;
     
             setTimeout(()=>{
                 alert.style.display = 'none'
             },1500)
         }
         else{
        prvsBtn.style.display='block'
         questionIndex++;
         deselect();
         loadQuestions();
        questions_left.innerText=`${quiz.length-questionIndex}/${quiz.length}`

         }
    }
})

prvsBtn.addEventListener('click', ()=>{
    questionIndex = questionIndex-1;
    if(questionIndex==0){
        prvsBtn.style.display='none';
    }
    loadQuestions();
    questions_left.innerText=`${quiz.length}/${quiz.length}`


})


