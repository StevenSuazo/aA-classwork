
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const liGenerator = (dogName, dogInfo) => {
  const aTag = document.createElement("a");
  aTag.innerHTML = dogName;
  aTag.setAttribute("href", dogInfo);
  
  const liTag = document.createElement("li");
  liTag.setAttribute("class", "dog-link");
  liTag.appendChild(aTag);

  return liTag;
}

function dogLinkCreator () {
  const dogNames = Object.keys(dogs);
  const dogInfo = Object.values(dogs);
  const liArr = [];

  for(let i = 0; i < dogNames.length; i++) {
    liArr.push(liGenerator(dogNames[i], dogInfo[i]))
  }

  return liArr;
}

function attachDogLinks () {
  const dogLinks = dogLinkCreator();
  const dropDownUl = document.querySelector(".drop-down-dog-list")
  dogLinks.forEach(dog => {
    dropDownUl.append(dog);
  });
}

function handleEnter() { //class = hovered
  const dropDown = document.querySelector(".drop-down-dog-nav");
  
  dropDown.addEventListener("mouseenter", (event) => {
    const dogList = document.querySelectorAll(".dog-link")
    for(let i = 0; i < dogList.length; i++) {
      dogList[i].className = "hovered"
    }
  });
}

function handleLeave() {
  const dropDown = document.querySelector(".drop-down-dog-nav");
  
  dropDown.addEventListener("mouseleave", (event) => {
    const dogList = document.querySelectorAll(".hovered")
    for (let i = 0; i < dogList.length; i++) {
      dogList[i].className = "dog-link"
    }
  });
}

attachDogLinks();
handleEnter();
handleLeave();