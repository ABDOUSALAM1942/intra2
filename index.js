const jokeElement = document.querySelector('.joke p');
const getJokeButton = document.getElementById('get_joke');

const jokes = [
    "Pourquoi les scientifiques ne font-ils pas confiance aux atomes ? Parce qu'ils inventent tout !!",
    "Les lignes parallèles ont tellement de choses en commun. C'est dommage qu'ils ne se rencontrent jamais.",
    "Qu'est-ce qui est orange et qui ressemble à un perroquet ? Une carotte!", 
    "Ministan touwo mboul mboul yaké !"
    // Ajoutez d'autres blagues ici
];

const icons = ["🤣", "😂", "😄", "😜",];

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const middleIndex = Math.floor(randomJoke.length / 2);
    const modifiedJoke = randomJoke.slice(0, middleIndex) + `<span class="icon">${randomIcon}</span>` + randomJoke.slice(middleIndex);
    return modifiedJoke;
}

// Afficher une blague aléatoire au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const randomJoke = getRandomJoke();
    jokeElement.innerHTML = randomJoke;
});

getJokeButton.addEventListener('click', () => {
    const randomJoke = getRandomJoke();
    jokeElement.innerHTML = randomJoke;
});

const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
const footerContent = document.createElement('p');
footerContent.textContent = "Quotes taken from Les crodiciles de BOSTWANGA Education Purpos only - Copyright Président BOBO ©2023";
footer.appendChild(footerContent);
document.body.appendChild(footer);
