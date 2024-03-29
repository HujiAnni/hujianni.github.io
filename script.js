//jshint esversion:6

// const express = require("express");
// const bodyParser = require("body-parser");
// // const ejs = require("ejs");
// // // const _ = require("lodash");

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// app.get("/portfolio/eyes",function(req, res){
//     res.render("eyes", {projectName: portfolios.name[2],
//     projectDesc: portfolios.desc[2],
//     projectImg: portfolios.img_src[2],
//     projectGit: portfolios.project_link[2],
//     projectDemo: portfolios.demo_link[2]})
// });

const skills = {
  name: ["Data Science", "Web Development", "CRM & CDP", "Email Marketing"],
  id: ["data-science", "web-development", "crm", "email-marketing"],
  desc: [
    "Generate data-driven business insights and action plans by exploratory and predictive analysis and data visualization.",
    "Build and design front-end and back-end of interactive and engaging web apps with personalized treatment.",
    "Manage multiple projects on omnichannel clienteling and multimedia customer journey building covering acquisition, retention, and reactivation.",
    "Execute creative content and digital strategy on multiple digital channels, paid and generic, to drive relevant traffic and conversion.",
  ],
  img_src: [
    "https://media4.giphy.com/media/SvEUbsayyUlcPm41Tl/200w.webp?cid=ecf05e47iaq4b3jab1tydb1pwh48jz8pxyp1hd8j67rrvr5s&rid=200w.webp&ct=s",
    "https://media4.giphy.com/media/juua9i2c2fA0AIp2iq/200w.webp?cid=ecf05e47339jebyt5rl5bqs2fpbzublve6xv1pn729rpxxev&rid=200w.webp&ct=s",
    "https://media0.giphy.com/media/BoC8P5mobclKtxGgPk/200.webp?cid=ecf05e47go9n40aox0w9skrnym9e1yiup4gbvticcoz8gucf&rid=200.webp&ct=s",
    "https://media2.giphy.com/media/gxr0SeRNwNr4wZpEz5/200w.webp?cid=ecf05e47nffiil12odaab5elachskol3gq4msk9svwbbujgw&rid=200w.webp&ct=s",
  ],
};

const portfolios = {
  name: [
    "NYC Crime Map",
    "Restaurant App",
    "Protect the Larva",
    "Game of Life",
    "Real Time Bus Tracker",
    "Horse Race Simulation",
    "EYEs On You",
    "Science Of Deduction",
  ],
  id: [
    "map",
    "restaurant",
    "protect-the-larva",
    "game-of-life",
    "bus",
    "horse-race",
    "eye",
    "deduction",
  ],
  desc: [
    `<p>This Project is a map featuring all shooting incidents reported to the New York City Police Department (NYPD) from 2006 to the end of 2022. All records were fetched. </p>
    <p>The map is built and customized with Mapbox API. The data is shown in two forms: Heat Map and by Cluster.</p> `,
    `<p>This Project is a full-stack web app built with next.js as frontend and Strapi with PostgreSQL as backend and database.</p>
    <p>The frontend was deployed with Vercel, while the backend was deployed with Render, using Cloudinary hosting all images and media used on the web app</p> `,
    `
    <p>This project is a 2D game mimicing 3D physical interactions. When the page is loaded, the game starts. Click within the frame to move your charater around. Push the eggs or the hatched larvas towards the bushes above and they're be safe.</p>
    <p>Push away the enemies to protect the larva.</p>`,
    `<p>This Project is based on Conway's Game of Life.</p>
    <p>The play can start with creating the cells create random symbosis by either click on the "GENERATE RANDOM SYMBOSIS" button or click on the cells directly. Click "START GAME" to start.</p>`,
    `<p>This Project is a map showing bus stops between MIT and Harvard. </p>
    <p>The map is built and customized using Mapbox API. </p>
    `,
    `
    <p>This Project is all about randomness.</p>
    <p>Before starting the game, pick a horse you bet will win and press any key to start the race. Once you press the key, the race will start in 3 seconds countdown and the horses will move at random speeds. The result will be shown after the match finished.</p>`,
    `<p>Say hi to Frankenstein -- his eyes follow you when your mouse moves!</p>
    <p>This Project is an reactive webpage build around Halloween. Whenever you move, the eyes of Frankenstein will follow your mouse movements.</p>`,
    `<p>This Project is an Evidence Factory, which mimic the three steps of detective work and Science of Deduction:</p>
    <ol>
    <li>Gather Evidence</li>
    <li>Observe and deducing</li>
    <li>Eliminate the impossible and conclusion</li>
    </ol>
    `,
  ],
  img_src: [
    "images/portfolios/crime-map.jpg",
    "images/portfolios/restaurant.png",
    "images/portfolios/demo.png",
    "images/portfolios/Animated_gameoflife.gif",
    "images/portfolios/BusTracker.jpg",
    "https://media.istockphoto.com/id/511801274/vector/jockey-on-horse.jpg?s=612x612&w=0&k=20&c=8okiQUOClXm1kRFr16IFsxzm7VPZM8QYwoFH0_e9C9Y=",
    "https://pyxis.nymag.com/v1/imgs/91e/001/973cb64ce94251d70694bcc566c39fb172-24-frankenstein.2x.rsocial.w600.jpg",
    "images/portfolios/sherlock.jpg",
  ],
  project_link: [
    "https://github.com/HujiAnni/Crime-Map",
    "https://github.com/HujiAnni/Restaurant-App-Frontend",
    "https://github.com/HujiAnni/Protect-the-Larva",
    "https://github.com/HujiAnni/Game-Of-Life",
    "https://github.com/HujiAnni/Real-Time-Bus-Tracker",
    "https://github.com/HujiAnni/Horse-Racing-Simulation",
    "https://github.com/HujiAnni/eyes",
    "https://github.com/HujiAnni/The-Science-Of-Deduction",
  ],
  demo_link: [
    "https://hujianni.github.io/Crime-Map",
    "https://hu-jianni-full-stack-restaurant-application.vercel.app/",
    "https://hujianni.github.io/Protect-the-Larva/",
    "https://hujianni.github.io/Game-Of-Life/",
    "https://hujianni.github.io/Real-Time-Bus-Tracker",
    "https://hujianni.github.io/Horse-Racing-Simulation",
    "https://hujianni.github.io/eyes",
    "https://hujianni.github.io/The-Science-Of-Deduction",
  ],
  landing_page: [
    "/portfolios/crime.html",
    "/portfolios/restaurant.html",
    "/portfolios/protect-the-larva.html",
    "/portfolios/game-of-life.html",
    "/portfolios/bus.html",
    "/portfolios/horse-race.html",
    "/portfolios/eyes.html",
    "/portfolios/deduction.html",
  ],
};

const dropDown = document.querySelector(".dropdown-menu");

// Dynamic Nav Bar - Portfolios
let dropdownItem0 = document.createElement("a");
dropdownItem0.classList.add(
  "dropdown-item",
  "dropdown-item-custom",
  "dropdown-item0-custom"
);
dropdownItem0.href = `../index.html#portfolios`;
dropdownItem0.innerHTML = "Show All";

dropDown.appendChild(dropdownItem0);
for (let i = 0; i < portfolios.name.length; i++) {
  let dropDownItem = document.createElement("li");
  let dropDownItemLink = document.createElement("a");
  dropDownItemLink.classList.add("dropdown-item", "dropdown-item-custom");
  dropDownItemLink.href = `${portfolios.landing_page[i]}`;
  // dropDownItemLink.target="_blank";
  dropDownItemLink.innerHTML = portfolios.name[i];
  dropDownItem.appendChild(dropDownItemLink);
  dropDown.appendChild(dropDownItem);
}

// // Profile image & video
// let profileImg = document.querySelector(".profile-img");
// let video = document.querySelector("iframe");

// profileImg.addEventListener('mouseover', () => {
//     video.style.display = "block";
//     // video.style.opacity = "1";
//     profileImg.style.display = "none";
//     // profileImg.style.opacity = "0";

// });

// video.addEventListener("mouseleave", () => {
//     video.style.display = "none";
//     // video.style.opacity = "0";
//     profileImg.style.display = "block";
//     // profileImg.style.opacity = "1";
//   });

// let videoEnded = false;
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

//    let myPromise = new Promise(()=>{
//     player.on('ended', function(){
//         videoEnded = true;
//     });
//    })

// myPromise.then(()=>{
//     video.addEventListener('mouseout', () => {
//     video.style.display = "none";
//     profileImg.style.display = "block";})
// });

// Add skills to html by DOM
let middleContainer = document.querySelector(".middle-container");

let skillContainer = document.querySelector(".skill-container");
let idBreak = document.createElement("br");
idBreak.setAttribute("id", "skills");
skillContainer.appendChild(idBreak);
let skillDiv = document.createElement("div");
skillDiv.classList.add("skills");
let skillTitle = document.createElement("h2");
skillTitle.classList.add("sub-title");
skillTitle.innerHTML = "My skills";

let skillBootstrapGridContainer = document.createElement("div");
skillBootstrapGridContainer.classList.add("container", "text-center");
let skillBootstrapGrid = document.createElement("div");
skillBootstrapGrid.classList.add(
  "row",
  "row-cols-lg-4",
  "row-cols-md-2",
  "row-cols-sm-1",
  "row-cols-1"
);

for (let i = 0; i < skills.name.length; i++) {
  let skill = document.createElement("div");
  skill.classList.add("skill-row", "col");
  let wrapper = document.createElement("div");
  wrapper.classList.add("skill__wrap");
  let skillImg = document.createElement("img");
  // skillImg.classList.add("img__wrap");
  skillImg.src = skills.img_src[i];
  skillImg.alt = skills.name[i];
  let skillDescSect = document.createElement("div");
  // skillDescSect.classList.add("technical-desc");
  skillDescSect.setAttribute("id", `${skills.id[i]}`);
  let skillDescSub = document.createElement("h3");
  skillDescSub.innerHTML = skills.name[i];
  skillDescSub.classList.add("skill-title");
  // let skillDesc = document.createElement("p");
  // skillDesc.classList.add("skill__description");
  // skillDesc.textContent = skills.desc[i];

  skillDescSect.append(skillDescSub);
  wrapper.append(skillImg, skillDescSect);
  skill.appendChild(wrapper);
  skillBootstrapGrid.appendChild(skill);
}

skillBootstrapGridContainer.appendChild(skillBootstrapGrid);
skillDiv.append(skillTitle, skillBootstrapGridContainer);
skillContainer.append(idBreak, skillDiv);

middleContainer.prepend(skillContainer);

// Add portfolios to html by DOM
let portfolioContainer = document.querySelector(".portfolio-container");
let portfolioBreak = document.createElement("hr");
portfolioBreak.setAttribute("id", "portfolios");
portfolioContainer.appendChild(portfolioBreak);
let portfolioTitle = document.createElement("h2");
portfolioTitle.classList.add("sub-title");
portfolioTitle.innerHTML = "My Portfolios";
portfolioContainer.appendChild(portfolioTitle);

let portfolioFlipCardContainer = document.createElement("div");
portfolioFlipCardContainer.classList.add(
  "row",
  "portfolio",
  "mb-5",
  "row-cols-md-2"
);
// ,"row-cols-1", "row-cols-md-2"
// portfolioFlipCardContainer.setAttribute("data-masonry",JSON.stringify({"percentPosition": true }));
for (let i = 0; i < portfolios.name.length; i++) {
  let portfolioFlipCardGrid = document.createElement("div");
  portfolioFlipCardGrid.classList.add(
    "col",
    "col-lg-4",
    "col-md-6",
    // "mb-4",
    "col-sm-12",
    "m-auto"
  );

  portfolioFlipCardGrid.setAttribute("id", `${portfolios.id[i]}`);
  let portfolioFlipCard = document.createElement("div");
  // portfolioFlipCard.classList.add("card", "flip-card");
  portfolioFlipCard.classList.add("card", "card-custom");

  let portfolioFlipCardInner = document.createElement("div");
  portfolioFlipCardInner.classList.add("portfolio__wrap");
  // portfolioFlipCardInner.classList.add("flip-card-inner");

  let portfolioFlipCardFront = document.createElement("div");
  // portfolioFlipCardFront.classList.add("card-body", "flip-card-front")
  portfolioFlipCardFront.classList.add("card-body");
  let portfolioImg = document.createElement("img");
  portfolioImg.src = portfolios.img_src[i];
  portfolioImg.classList.add("portfolio-img");
  portfolioImg.alt = `${portfolios.name[i]} image`;
  let portfolioFlipCardFrontTitle = document.createElement("h5");
  portfolioFlipCardFrontTitle.innerHTML = portfolios.name[i];

  // portfolioFlipCardFrontTitle.classList.add("card-title");
  portfolioFlipCardFront.append(portfolioImg);

  let portfolioFlipCardBack = document.createElement("div");
  // portfolioFlipCardBack.classList.add("card-body", "flip-card-back");
  portfolioFlipCardBack.classList.add(
    "card-body",
    "portfolio__description",
    "align-self-center",
    "align-middle"
  );
  let portfolioFlipCardBackTitle = document.createElement("h5");
  portfolioFlipCardBackTitle.innerHTML = portfolios.name[i];
  portfolioFlipCardBackTitle.classList.add("card-title");
  let portfolioFlipCardBackText = document.createElement("p");
  portfolioFlipCardBackText.innerHTML = portfolios.desc[i];
  portfolioFlipCardBackText.classList.add(
    "portfolio-desc",
    "card-text",
    "align-self-center",
    "align-middle"
  );
  // portfolioFlipCardBackText.classList.add();
  let linkProject = document.createElement("a");
  linkProject.href = portfolios.landing_page[i];
  linkProject.classList.add("card-link", "card-link-custom");
  linkProject.innerHTML = "View Project";
  // linkProject.target="_blank";
  let gitRepo = document.createElement("a");
  gitRepo.href = portfolios.project_link[i];
  gitRepo.classList.add("card-link", "card-link-custom");
  gitRepo.innerHTML = "Git Repo";
  gitRepo.target = "_blank";
  let linkDemo = document.createElement("a");
  linkDemo.href = portfolios.demo_link[i];
  linkDemo.classList.add("card-link", "card-link-custom");
  linkDemo.target = "_blank";
  linkDemo.innerHTML = "Get Demo";
  portfolioFlipCardBack.append(
    portfolioFlipCardBackTitle,
    portfolioFlipCardBackText,
    linkProject,
    gitRepo,
    linkDemo
  );

  // portfolioFlipCardInner.append(portfolioFlipCardFront,portfolioFlipCardBack);
  portfolioFlipCardInner.append(portfolioFlipCardFront, portfolioFlipCardBack);

  portfolioFlipCard.appendChild(portfolioFlipCardInner);

  portfolioFlipCardGrid.appendChild(portfolioFlipCard);

  portfolioFlipCardContainer.appendChild(portfolioFlipCardGrid);
}
portfolioContainer.appendChild(portfolioFlipCardContainer);
middleContainer.append(portfolioContainer);

// Get in Touch section to html by DOM
let contactId = document.createElement("hr");
contactId.setAttribute("id", "contact");

let contactContainer = document.querySelector(".contact-container");
contactContainer.classList.add("contact-me");

let contactTitle = document.createElement("h2");
contactTitle.innerHTML = "Get In Touch";
let contactConversation = document.createElement("h3");
contactConversation.classList.add("persuade");
contactConversation.innerHTML =
  "If you like challenges and continual growth as much as I do...";
let contactText = document.createElement("p");
contactText.classList.add("invite");
contactText.innerHTML =
  "Let's connect and chat about where we were at and where we are heading to! It's always good to have more people on our support teams to chase whatever dreams we have!";
let contactBtn = document.createElement("a");
contactBtn.classList.add("btn");
contactBtn.href = "mailto:jh2585@cornell.edu";
contactBtn.innerHTML = "CONTACT ME";

contactContainer.append(
  contactTitle,
  contactConversation,
  contactText,
  contactBtn
);

middleContainer.append(contactId, contactContainer);
