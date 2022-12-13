const skills = {
    name: ["Data Science","Web Development","CRM & CDP", "Digital Marketing"],
    id: ["data-science","web-development","crm","digital-marketing"],
    desc: ["Generate data-driven visual business insights and action plans by exploratory and predictive analysis with SQL, Python, and R, and data visualization using Tableau, PowerBI, and matplotlib/seaborn.",
    "Build and design front-end and back-end of interactive and engaging web apps with personalized treatment.",
    "Manage multiple projects on omnichannel clienteling and multimedia customer journey building covering acquisition, retention, and reactivation.",
    "Execute creative content and digital strategy on multiple digital channels, paid and generic, to drive relevant traffic and conversion."],
    img_src: ["https://media4.giphy.com/media/SvEUbsayyUlcPm41Tl/200w.webp?cid=ecf05e47iaq4b3jab1tydb1pwh48jz8pxyp1hd8j67rrvr5s&rid=200w.webp&ct=s",
    "https://media4.giphy.com/media/juua9i2c2fA0AIp2iq/200w.webp?cid=ecf05e47339jebyt5rl5bqs2fpbzublve6xv1pn729rpxxev&rid=200w.webp&ct=s",
    "https://media0.giphy.com/media/BoC8P5mobclKtxGgPk/200.webp?cid=ecf05e47go9n40aox0w9skrnym9e1yiup4gbvticcoz8gucf&rid=200.webp&ct=s",
    "https://media2.giphy.com/media/gxr0SeRNwNr4wZpEz5/200w.webp?cid=ecf05e47nffiil12odaab5elachskol3gq4msk9svwbbujgw&rid=200w.webp&ct=s"]
}

const portfolios = {
    name: ["NYC Crime Map","I Have My EYE On You","PacMan Factory", "Horse Race Simulation"],
    id: ["map","eye","facotry","horse-race"],
    desc: ["NYC Crime Map description",
    "EYE description",
    "Factory description",
    "Horse Race Simulation description"],
    img_src: ["https://planetwings.com/wp-content/uploads/2016/05/sample-img.jpg",
    "https://planetwings.com/wp-content/uploads/2016/05/sample-img.jpg",
    "https://planetwings.com/wp-content/uploads/2016/05/sample-img.jpg",
    "https://planetwings.com/wp-content/uploads/2016/05/sample-img.jpg"],
    project_link: ["", "", "", ""],
    demo_link: ["", "", "", ""]
}


// Dynamic Nav Bar - Portfolios


// Add skills to html by DOM
let middleContainer = document.querySelector(".middle-container");

let skillContainer = document.createElement("div");
let idBreak = document.createElement('br');
idBreak.setAttribute("id","skills");
skillContainer.appendChild(idBreak);
let skillDiv = document.createElement("div");
skillDiv.classList.add("skills");
let skillTitle = document.createElement("h2");
skillTitle.classList.add("sub-title");
skillTitle.innerHTML = "My skills";

let skillBootstrapGridContainer = document.createElement("div");
skillBootstrapGridContainer.classList.add("container", "text-center")
let skillBootstrapGrid = document.createElement("div");
skillBootstrapGrid.classList.add("row", "row-cols-1", "row-cols-sm-2", "row-cols-md-4")

for (let i = 0; i < skills.name.length; i++) {
    let skill = document.createElement("div");
    skill.classList.add("skill-row","col");
    let skillImg = document.createElement("img");
    skillImg.classList.add("technical-img");
    skillImg.src = skills.img_src[i];
    skillImg.alt = skills.name[i];
    let skillDescSect = document.createElement("div");
    skillDescSect.classList.add("technical-desc");
    skillDescSect.setAttribute("id",`${skills.id[i]}`);
    let skillDescSub = document.createElement("h3");
    skillDescSub.innerHTML = skills.name[i];
    let skillDesc = document.createElement("p");
    skillDesc.classList.add("desc");
    skillDesc.textContent = skills.desc[i];
    skillDescSect.append(skillDescSub,skillDesc);
    skill.append(skillImg,skillDescSect);
    skillBootstrapGrid.appendChild(skill);
} 
skillBootstrapGridContainer.appendChild(skillBootstrapGrid);
skillDiv.append(skillTitle,skillBootstrapGridContainer);
skillContainer.append(idBreak,skillDiv);

middleContainer.prepend(skillContainer);


// Add portfolios to html by DOM
let portfolioContainer = document.createElement("div");
let portfolioBreak = document.createElement("hr");
portfolioBreak.setAttribute("id","portfolios");
portfolioContainer.appendChild(portfolioBreak);
let portfolioTitle = document.createElement("h2");
portfolioTitle.classList.add("sub-title");
portfolioTitle.innerHTML = "My Portfolios";
portfolioContainer.appendChild(portfolioTitle);

let portfolioFlipCardContainer = document.createElement("div");
portfolioFlipCardContainer.classList.add("row", "portfolio")

for (let i = 0; i < portfolios.name.length; i++){
    let portfolioFlipCardGrid = document.createElement("div");
    portfolioFlipCardGrid.classList.add("col-lg-3", "col-md-6", "col-sm-12");
    portfolioFlipCardGrid.setAttribute("id",`${portfolios.id[i]}`)

    let portfolioFlipCard = document.createElement("div");
    portfolioFlipCard.classList.add("card","flip-card");

    let portfolioFlipCardInner = document.createElement("div");
    portfolioFlipCardInner.classList.add("flip-card-inner");

    let portfolioFlipCardFront = document.createElement("div");
    portfolioFlipCardFront.classList.add("card-body", "flip-card-front")
    let portfolioImg = document.createElement("img");
    portfolioImg.src = portfolios.img_src[i];
    portfolioImg.classList.add("card-img-top");
    portfolioImg.alt = `${portfolios.name[i]} imaage`;
    let portfolioFlipCardFrontTitle = document.createElement("h5");
    portfolioFlipCardFrontTitle.innerHTML = portfolios.name[i];
    portfolioFlipCardFrontTitle.classList.add("card-title");
    portfolioFlipCardFront.append(portfolioImg,portfolioFlipCardFrontTitle)

    let portfolioFlipCardBack = document.createElement("div");
    portfolioFlipCardBack.classList.add("card-body", "flip-card-back");
    let portfolioFlipCardBackTitle = document.createElement("h5");
    portfolioFlipCardBackTitle.innerHTML = portfolios.name[i];
    portfolioFlipCardBackTitle.classList.add("card-title")
    let portfolioFlipCardBackText = document.createElement("p");
    portfolioFlipCardBackText.innerHTML = portfolios.desc[i];
    portfolioFlipCardBackText.classList.add("card-text");
    let linkProject = document.createElement("a");
    linkProject.href = portfolios.project_link[i];
    linkProject.classList.add("card-link");
    linkProject.innerHTML = "View Project";
    let linkDemo = document.createElement("a");
    linkDemo.href = portfolios.demo_link[i];
    linkDemo.classList.add("card-link");
    linkDemo.innerHTML = "Get Demo";
    portfolioFlipCardBack.append(portfolioFlipCardBackTitle,portfolioFlipCardBackText,linkProject,linkDemo);

    portfolioFlipCardInner.append(portfolioFlipCardFront,portfolioFlipCardBack);

    portfolioFlipCard.appendChild(portfolioFlipCardInner);

    portfolioFlipCardGrid.appendChild(portfolioFlipCard);

    portfolioFlipCardContainer.appendChild(portfolioFlipCardGrid);
}
portfolioContainer.appendChild(portfolioFlipCardContainer);
middleContainer.append(portfolioContainer);


// Get in Touch section to html by DOM
let contactId = document.createElement("hr");
contactId.setAttribute("id","contact");

let contactContainer = document.createElement("div");
contactContainer.classList.add("contact-me");

let contactTitle = document.createElement("h2");
contactTitle.innerHTML = "Get In Touch";
let contactConversation = document.createElement("h3");
contactConversation.classList.add("persuade");
contactConversation.innerHTML = "If you like challenges and continual growth as much as I do..."
let contactText = document.createElement("p");
contactText.classList.add("invite");
contactText.innerHTML = "Let's connect and chat about where we were at and where we are heading to! It's always good to have more people on our support teams to chase whatever dreams we have!";
let contactBtn = document.createElement("a");
contactBtn.classList.add("btn");
contactBtn.href = "mailto:jh2585@cornell.edu";
contactBtn.innerHTML = "CONTACT ME";

contactContainer.append(contactTitle, contactConversation, contactText, contactBtn)

middleContainer.append(contactId, contactContainer)
