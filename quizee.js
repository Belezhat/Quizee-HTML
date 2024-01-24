import inquirer from 'inquirer';

console.log("Welcome to the HTML Quiz!");

const questions = [
    
    {
       
        type: 'rawlist',
        name: 'step1',
        message: 'The role of HTML is to ?',
        choices: ['Format text', 'Order content', 'Create e-commerce sites', 'SEO'],
        default: 'Order content',
       
    },
    {
        type: 'rawlist',
        name:'step2',
        message: 'To define a title in an HTML page, we use ?',
        choices: ['The title element','The head element','An element h1, h2, ...h6', '!DOCTYPE html5'],
        default: 'An element h1, h2, ...h6',
       
     },
     {
        type: 'rawlist',
        name:'step3',
        message: 'What can the <sub> tag do ?',
        choices: ['Short quote', 'Strikethrough text', 'Horizontal bar]', 'Text in indicator'],
        default: 'Text in indicator',
        
     },
     {
        type: 'rawlist',
        name:'step4',
        message: 'What is the correct syntax for inserting an image in HTML ?',
        choices: ['<img alt="Mon Image">image.png</img>', '<img src="image.png" alt="Mon Image" />', '<image src="image.png" alt="Mon Image" />', '<img href="image.png" alt="Mon Image" />'],
        default: '<img src="image.png" alt="Mon Image" />',
        
     },
     {
        type: 'rawlist',
        name:'step5',
        message: 'Who is considered the inventor of HTML?',
        choices: ['Linus Torvalds', 'Tim Berners-Lee', 'Richard Stallman', 'Bill Gates'],
        default: 'Tim Berners-Lee',
       
     },
  ];

  async function quiz() {
    const candidate = await inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'What is your name ?',
            default: 'Guest'     
        },

    ]);

    const userName = candidate.userName;

    const startQuiz = await inquirer.prompt({
        type: 'confirm',
        name: 'confirmQuiz',
        message: `${userName}!  Do you want to start the quiz ?`,
    });

    if (startQuiz.confirmQuiz) {
        let countCorrectAnswers= 0;

        for (let i = 0; i < questions.length; i++){
            const response = await inquirer.prompt({
                
                type: 'rawlist',
                name: `questions${i + 1}`,
                message: questions[i].message,
                choices: questions[i].choices,
                default: questions[i].choices,
        });

        if (response[`questions${i + 1}`] === questions[i].default) {
            countCorrectAnswers++;
        }
   }
   const percentCorrectAnswers = Math.round((countCorrectAnswers / questions.length) * 100);
   const percentBadAnswers = Math.round(100 - percentCorrectAnswers);
   
   console.log(`\nQuiz Statistics`);
   console.log(`Name: ${userName}`);
   console.log(`Number of questions: ${questions.length}`);
   console.log(`Number of correct answers: ${countCorrectAnswers}`);
   console.log(`Percentage of correct answers: ${percentCorrectAnswers}%`);
   console.log(`Number of incorrect answers: ${questions.length - countCorrectAnswers}`);
   console.log(`Percentage of incorrect answers: ${percentBadAnswers}%`);
}
}

quiz();