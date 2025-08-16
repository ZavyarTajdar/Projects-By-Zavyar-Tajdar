const dares = [
  "Do 10 push-ups right now!",
  "Sing a song loudly for 30 seconds!",
  "Dance without music for 1 minute!",
  "Act like your favorite celebrity!",
  "Speak in a funny accent until your next turn!",
  "Show us the last photo in your gallery!",
  "Do 20 jumping jacks!",
  "Pretend to be a waiter and serve drinks!",
  "Do your best evil laugh for 20 seconds!",
  "Walk around the room like a model on a runway!",
  "Talk like a robot until your next turn!",
  "Balance a book on your head for 1 minute!",
  "Spin around 15 times and try to walk straight!",
  "Eat something without using your hands!",
  "Do your best impression of a teacher!",
  "Pretend to be a monkey for 30 seconds!",
  "Act like a superhero until your next turn!",
  "Make a funny face and hold it for 1 minute!",
  "Sing everything you say for the next 2 minutes!",
  "Do a silly dance for 20 seconds!",
  "Act like your favorite cartoon character!",
];
 
// Pick one random dare
const randomDare = dares[Math.floor(Math.random() * dares.length)];
console.log(randomDare);
const displayDares = document.querySelector('.dare-btn')
const displayCard = document.querySelector('.card')
displayDares.addEventListener('click', () => {
    displayCard.innerHTML = `☠️${randomDare}☠️`;
})

const truths = [
  "What is your biggest fear?",
  "What is your most embarrassing moment?",
  "Who was your first crush?",
  "What is the most childish thing you still do?",
  "What secret have you never told anyone?",
  "What is the weirdest dream you've ever had?",
  "Who do you text the most?",
  "What lie have you told your parents?",
  "What's the most trouble you've been in?",
  "Have you ever cheated on a test?",
  "Who is your celebrity crush?",
  "What's the weirdest food you've ever eaten?",
  "What's the most useless talent you have?",
  "What's the meanest thing you've ever said?",
  "What is your guilty pleasure?",
  "Who would you want to switch lives with for a day?",
  "What's your biggest insecurity?",
  "What's a secret you kept from your best friend?",
  "Have you ever lied to your best friend?",
  "What is your biggest regret?",
  "Have you ever stolen something?",
];


const randomtruth = truths[Math.floor(Math.random() * truths.length)];
console.log(randomtruth);
const displaytruth = document.querySelector('.truth-btn')
displaytruth.addEventListener('click', () => {
    displayCard.innerHTML = `☠️${randomtruth}☠️`;
})

const reset_btn = document.querySelector('.reset-btn')
reset_btn.addEventListener('click', () => {
    location.reload();
})