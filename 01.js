//資料放物件裡
const profile = {
  name: "Elisa",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJ7aszUPrsuuYnmQs5CW9S_FLt80Zi8yCoQ&s",
  info: "Hi, this is Elsa !",
  experiences: [
    "Project manager",
    "Software Engineer @OOO",
    "Software Engineer @AAA",
  ],
};

//要清空才能完完全全覆蓋掉！
const myCard = document.querySelector(".my-card");
myCard.innerHTML = "";

const template = document.querySelector("#template");
const clone = template.content.cloneNode(true);
clone.querySelector(".my-card__img").src = profile.avatar;
clone.querySelector(".my-card__img").alt = `${profile.name}'s avatar`;
clone.querySelector(".my-name").textContent = profile.name;
clone.querySelector(".info").textContent = profile.info;

const expList = clone.querySelector(".list-unstyled");
profile.experiences.forEach((exp) => {
  const li = document.createElement("li");
  li.textContent = exp;
  expList.appendChild(li);
});

myCard.appendChild(clone);
