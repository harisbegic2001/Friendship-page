// local reviews data
const reviews = [
  {
    id: 1,
    name: "Ajdin Mulalić",
    job: "Inžinjer Mašinstva",
    img: "./person-2.jpg",
    text: "Rođen u Tešnju 2001. godine, žestoki navijač Željezničara od ranije poznat organima gonjenja",
  },
  {
    id: 2,
    name: "Bakir Mečkić",
    job: "Pravnik/Kafanski Pjevač",
    img: "./person-4.jpg",
    text: "Priča po gradu da studira pravo zapravo je to jedna velika laž. U slobodno vrijeme je kafanski pjevač",
  },
  {
    id: 3,
    name: "Irman Muratović",
    job: "Software Engineer",
    img: "person-3.jpg",
    text: "Rođen 2001. navodno u Sarajevu. Budući Softverski inžinjer.Pravi se da mu je stalo do Želje, ali je zapravo potajno PITAR!",
  },
  {
    id: 4,
    name: "Haris Begić",
    job: "Šef",
    img: "./person-5.jpg",
    text: "Jednostavno i lider i šef. Postoje tvrdnje da kada je rođen da mu je na čelu pisalo pobjednik.",
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item(user)
window.addEventListener('DOMContentLoaded', function(){
  getUserData(currentItem);

});

//show person based on item person je ovdje samo obični broj koji predstavlja jednu osobu iz našeg dictionary-a
function getUserData(person ){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
function randomGenerator() {
  return Math.floor(Math.random() * reviews.length);
}
console.log(randomGenerator());
//show next person

nextBtn.addEventListener('click', function(){
currentItem++;
if(currentItem > reviews.length - 1) {
  currentItem = 0;
}
getUserData(currentItem);

});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  getUserData(currentItem);
});

randomBtn.addEventListener('click', function(){
  currentItem = randomGenerator();
  getUserData(currentItem);
})