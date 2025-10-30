const textDiv = document.querySelector('#maDiv');
const Button = document.querySelector('#monBouton');
textDiv.textContent = "Texte Changer";

const Paragraph = document.createElement('p');
Paragraph.textContent = "paragraphe";
textDiv.appendChild(Paragraph);

const newButton = document.createElement('button');
newButton.textContent = 'Cliquez moi';
document.body.appendChild(newButton);

newButton.addEventListener('click', function() {
    console.log('Bouton cliqué');
});

const styleButton = document.createElement('button');
styleButton.textContent = 'Changer le style';
document.body.appendChild(styleButton);

styleButton.addEventListener('click', function() {
    textDiv.style.backgroundColor = 'lightblue';
    textDiv.style.fontSize = '20px';
    textDiv.style.padding = '10px';
});

const secondButton = document.createElement('button');
secondButton.textContent = "Changer le texte";
document.body.appendChild(secondButton);
secondButton.addEventListener('click', function() {
    textDiv.textContent = "Texte changé !";
});