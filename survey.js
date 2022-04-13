const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name?', (name) => {
  
  rl.question('What is an activity you like doing?', (activity) => {
  
    rl.question('What do you listen to while doing that?', (music) => {
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (meal) => {
        
        rl.question('What is your favourite thing to eat for that meal?', (food) => {
         
          rl.question('Which sport is your absolute favourite?', (sport) => {
           
            rl.question('What is your superpower? In a few words, tell us what you are amazing at:', (superpower) => {
              console.log(`${name} loves ${activity}. While engaging in ${activity}, ${name} likes to listen to ${music}. ${name}'s favourite meal of the day is ${meal} and favourite thing to eat during ${meal} is ${food}. ${name} also loves playing ${sport} during their free time. And last but not least, ${name}'s superpower is ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

