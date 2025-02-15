const image = document.querySelector(".image");
const yesBtn = document.querySelector(".yes");
const yesntBtn = document.querySelector(".yesnt");
const text = document.querySelector(".text");
const h2 = document.querySelector("h2");
const audio = new Audio("./assets/bg.mp3");
const happysfx = new Audio("./assets/sfxyes.mp3");
const sadsfx = new Audio("./assets/sfxyesnt.mp3");

yesntBtn.addEventListener("mouseover", (e)=>{
    image.setAttribute("src", "./assets/sad.jpg")
    yesntBtn.style.scale = ".8";
    yesBtn.style.scale = "1.2";
    text.innerHTML = `will you be <span>my</span> valentine🥺?`
})
yesntBtn.addEventListener("mouseout", (e)=>{
    yesntBtn.style.scale = "1";
    yesBtn.style.scale = "1";
})

yesBtn.addEventListener("mouseover", (e)=>{
    image.setAttribute("src", "./assets/happy.jpg")
    text.innerHTML = `will you be <span>my</span> valentine🤯?`
    yesBtn.style.scale = "1.2";

})
yesBtn.addEventListener("mouseout", (e)=>{
    yesBtn.style.scale = "1";
})

yesntBtn.addEventListener("click", (e)=>{
    h2.innerHTML = `oops! 🤭`
    // yesntBtn.style.transform = "translateX(-100px)"
    // yesBtn.style.transform = "translateX(100px)"
    yesBtn.style.scale = 1;
    yesntBtn.style.scale = 1;
    yesBtn.style.backgroundColor = "#222";
    yesntBtn.style.backgroundColor = "#E30B5C";
    yesBtn.innerHTML = "no 🥀";
    yesntBtn.innerHTML = "yes 💐";
    h2.style.scale = 2
    yesntBtn.style.scale = 1.5;
    setTimeout(() => {
        changeImageToHappy();
    }, 1500);
})



function changeImageToHappy() {
    audio.currentTime = 22;
    audio.play();

    h2.style.display = "none"
    text.innerHTML = "You chose yes, Happy Valentines Day 💐"
    yesntBtn.style.display = "none";
    yesBtn.style.display = "none";
    image.setAttribute("src", "./assets/super.jpg");
        image.style.width = "200px"
}

yesBtn.addEventListener("click", changeImageToHappy)
