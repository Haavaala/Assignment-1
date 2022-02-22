console.log('yeet');


const arrayOfFacts = [
    { 
     'fact': 'There are 32 muscles in a cat’s ear.'
    },
    {
     'fact': 'Sudan has more pyramids than any country in the world'
    },
    {
     'fact': 'Space smells like seared steak.'
    },
    {
     'fact': 'Bees sometimes sting other bees.'
    },
    { 
     'fact': 'Dinosaurs lived on every continent.'
    },
    { 
     'fact': 'Cows kill more Americans each year than sharks do.'
    },
];


function generateFact(){
    const random = Number.parseInt(Math.random()*arrayOfFacts.length + 1);
    document.querySelector('#factOutput').textContent = `\"${arrayOfFacts[random].fact}\"`;
    
}
    
