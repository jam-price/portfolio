
// Set adjective
const adjective = document.getElementById('adjective');
const typedSentence = document.getElementById('typedSentence');

const adjectives = ['Rugby', 'Coffee', 'Theatre', 'Guitars', 'Travelling', 'Books', 'IPA', 'Biscuits'];

let currentIndex = 0;
const intervalLength = 3000;
let adj;

const changeSentence = () => {
    typedSentence.innerHTML = '';
    adj = adjectives[(currentIndex++)%adjectives.length];
    let sentence = `I like ${adj}`;
    typedSentence.innerText = sentence;
}

changeSentence();
setInterval(changeSentence, intervalLength);
// End of Set Adjective



    

