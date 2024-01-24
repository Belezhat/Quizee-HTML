import inquirer from 'inquirer';

console.log("Welcome to the HTML Quiz!");

inquirer
.prompt([
   
    {   type: 'input',
        name: 'userName',
        message: 'Please enter your first name (or press Enter for Guest):',
        default: 'Guest'

    },
    {   type: 'confirm',
        name: 'confirmQuiz',
        message: (answers) => `${answers.userName}! Do you want to start the quiz?`,
        
    },
    
    {
       type: 'list',
       name:'step1',
       message: 'The role of HTML is to ?',
       choices: ['Format text','Order content','Create e-commerce sites'],
       when: (answers) => answers.confirmQuiz,
    },
    {
        type: 'list',
        name:'step2',
        message: 'To define a title in an HTML page, we use ?',
        choices: ['The title element','The head element','An element h1, h2, ...h6'],
        when: (answers) => answers.confirmQuiz,
     },
     {
        type: 'list',
        name:'step3',
        message: 'To create a link to the Wikipedia home page, we would write ?',
        choices: ['<a target="http://wikipedia.org">Wikipedia</a>','<a href="http://wikipedia.org">','<a href="http://wikipedia.org">Wikipedia</a> '],
        when: (answers) => answers.confirmQuiz,
     },
     {
        type: 'list',
        name:'step4',
        message: 'Why should we always try to have valid HTML code ?',
        choices: ['To minimize the number of potential bugs', 'To optimize your SEO', 'To avoid future display problems'],
        when: (answers) => answers.confirmQuiz,
     },
     {
        type: 'list',
        name:'step5',
        message: 'When you use the element a, you must specify ?',
        choices: ['Two attributes href and target', 'An href attribute'],
        when: (answers) => answers.confirmQuiz,
     },
  ])
  .then((answers) => {
    console.log(answers.confirmQuiz);
  });