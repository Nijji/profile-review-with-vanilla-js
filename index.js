const items = [
  {
    img: "./pic/1 (12).jpg",
    name: "sharad rao",
    title: "CEO",
    age: 47,
    education: "bsc comp sci,MBA",
  },
  {
    img: "./pic/1 (13).jpg",
    name: "pravad oti",
    title: "finance",
    age: 45,
    education: "bsc econ,MBA",
  },
  {
    img: "./pic/1 (14).jpg",
    name: "lucy lando",
    title: "technology",
    age: 34,
    education: "bsc IT,MBA",
  },
  {
    img: "./pic/1 (15).jpg",
    name: "kevin kegan",
    title: "HR",
    age: 57,
    education: "BA HR,MBA",
  },
  {
    img: "./pic/1 (16).jpg",
    name: "tom nandi",
    title: "legal",
    age: 47,
    education: "LLB,MBA",
  },
  {
    img: "./pic/1 (23).jpg",
    name: "mercy masika",
    title: "PR",
    age: 37,
    education: "bsc mass comm,MBA",
  },
  {
    img: "./pic/1 (25).jpg",
    name: "fanata moja",
    title: "security",
    age: 45,
    education: "bsc criminology,MBA",
  },
  {
    img: "./pic/1 (26).jpg",
    name: "irene otieno",
    title: "sales",
    age: 42,
    education: "BBA,MBA",
  },
  {
    img: "./pic/1 (27).jpg",
    name: "lavin marwa",
    title: "internal audit",
    age: 40,
    education: "bsc econ,MBA",
  },
];

const myImage = document.getElementById("pic");
const myName = document.getElementById("name");
const myTitle = document.getElementById("title");
const myAge = document.getElementById("age");
const myEd = document.getElementById("education");
let currentProfile=0

window.addEventListener("DOMContentLoaded", () => {
  myLoader(currentProfile);
});
myLoader = () => {
  const item =()=>Math.floor(Math.random() * items.length);
  const profile=items[item()]
  
  myImage.src = profile.img;
  myName.textContent =`Name:${profile.name}`
  myTitle.textContent = `Title:${profile.title}`
  myAge.textContent = `Age:${profile.age}`
  myEd.textContent = `Education:${profile.education}`

 
  }
  const btns = document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const myView = e.target.classList;
      if (myView.contains(".left")) {
        profile--;
        myLoader(profile)
       }
     else if (myView.contains(".right")) {
        profile++;
        myLoader(profile)
      }
    })
  })