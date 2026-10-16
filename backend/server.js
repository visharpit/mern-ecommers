const fs = require('fs');
const readline = require('readline');

const data = JSON.parse(fs.readFileSync('./quiz.json'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
})
let score=0;
let index=0;

console.log("Welcome to the Quiz");
console.log(data)

function askQuiz(){
    if(index < data.questions.length){
        const q = data.questions[index];
        console.log(`Q${index+1}: ${q.question} `)
        q.options.forEach((option, i)=>{
            console.log(`${i+1} ${option}`);
        })

        rl.question('Your Answer: ', (answer)=>{
            if(answer == q.correctAnswer+1){
                console.log("Correct Answer");
                score++;
            }
            else{
                console.log('Wrong Answer');
            }
            index++
            askQuiz();
        })
    }
    else{
        console.log(`Quiz Over ${score}/${data.questions.length}`);
        rl.close();
    }
}
askQuiz();

