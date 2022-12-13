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