

// -------------    Cursor Animation    -------------
const bodyE1 = document.querySelector("body");
/*


bodyE1.addEventListener("mousemove", (event)=>{
   
    const cPosX = event.offsetX;
    const cPosY = event.offsetY;
    const strongE1 =  document.createElement("strong");
    strongE1.style.left = cPosX  + "px";
    strongE1.style.right = cPosY + "px";

    const size = Math.random() * 50;
    strongE1.style.width = size + "px";
    strongE1.style.height = size + "px";

    bodyE1.appendChild(strongE1);

    setTimeout(()=>{
        strongE1.remove();
    }, 5000);

})

*/

// --------------  dark-mode  -------

const inputE1  = document.querySelector(".input");

const headerE1 = document.querySelector(".header");
const h1E1 = document.querySelectorAll("h1");
const h2E1 = document.querySelectorAll("h2");
const h3E1 = document.querySelectorAll("h3");



inputE1.checked = JSON.parse(localStorage.getItem("mode"));

updateMode();

function updateMode(){
    if(inputE1.checked){
        bodyE1.style.background = "black";
        headerE1.style.background = "black";
        h1E1.forEach(h1 =>{
            h1.style.color = "white";
        })
        h2E1.forEach(h2 =>{
            h2.style.color = "white";
            
        })
        h3E1.forEach(h3 =>{
            h3.style.color = "white";
        })
        
 
        updateLocalStorage();
        console.log("checked")
    }
    else{
        bodyE1.style.background = "white";
        headerE1.style.background = "white";
        h1E1.forEach(h1 =>{
            h1.style.color = "black";
        })
        h2E1.forEach(h2 =>{
            h2.style.color = "black";
        })
        h3E1.forEach(h3 =>{
            h3.style.color = "black";
        })
        
       
        updateLocalStorage();
        console.log("unchecked")
    }
}
inputE1.addEventListener("input", ()=>{
    updateMode();
})
 function updateLocalStorage()
 {
    localStorage.setItem("mode", JSON.stringify(inputE1.checked));
 }
 //---------x-------x--------x-----------------x

 //--------------   menu bar--------------------

 const menuIconE1 =  document.querySelector(".menu-icon");
 
 const menuListE1 =  document.querySelector(".menu-list");
 
 menuIconE1.addEventListener("click", ()=>{

    
    headerE1.classList.toggle("active");
    menuListE1.classList.toggle("active");

 })


 //-------------------  image slider    -------------------------

 const pervE1 = document.querySelector(".perv");
 const nextE1 = document.querySelector(".next");
 const imageSliderE1 = document.querySelector(".img-slider");
 var imageSliderLength = imageSliderE1.childElementCount;
 var slideCount  = 0;
 
 let timeout ;

 updateSlider()

 nextE1.addEventListener("click", ()=>{

    clearTimeout(timeout);
    slideCount++;
    updateSlider();
    
 })
 pervE1.addEventListener("click", ()=>{

    clearTimeout(timeout);
    slideCount--;
    updateSlider();
    
 })

 function updateSlider()
 {
    if(slideCount > imageSliderLength-1)
    {
        slideCount = 0;
    }
    if(slideCount < 0) 
    {
        slideCount = imageSliderLength-1
        console.log("mode");
        
    }
 

    imageSliderE1.style.transform = 'translateX(-'+ (slideCount) * 100  +'%)';

    timeout = setTimeout(()=>{
        slideCount++;
        updateSlider();
    }, 3000);
 }

 //---------    text effect animation   ----------------

 const  textEffectE1 = document.querySelector(".text-effect"); 
 var careers  = ["Student", "webDevloper", "Freelancer"];
var careersIndex = 0;
var characterIndex = 0;
textEffect()
 
 function textEffect()
 {
    characterIndex++;

    textEffectE1.innerHTML = "<h1 class='text-effect-h1'>I am a "+ careers[careersIndex].slice(0, characterIndex)    +"</h1>";

    if(characterIndex === careers[careersIndex].length)
    {
        careersIndex++;
        characterIndex = 0;
    }
    if(careersIndex === careers.length)
    {
        console.log("hello")
             careersIndex = 0;
            characterIndex = 0;
    }

    

    setTimeout(textEffect, 300);
 }

 //---------------------    digital clock   -----------------

 const hourE1 = document.getElementById("hour");
 const minuteE1 = document.getElementById("minute");
 const secondE1 = document.getElementById("second");
 const ampmE1 = document.getElementById("ampm");
 

upadteDate();

 function upadteDate()
 {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h > 12)
    {
        h = h - 12;
        ampmE1.innerText = "PM";

    }
    

    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;
    

    hourE1.innerHTML = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    setTimeout(upadteDate, 100);
    
    
 }


 // ---------      main button  ----------

 const mainBtnE1 = document.querySelector(".main-btn");
 
 

 mainBtnE1.addEventListener("mouseover", (event)=>{

    
   const y = event.pageY - mainBtnE1.offsetTop;
   const x = event.pageX  - mainBtnE1.offsetLeft;
   
   console.log("pagex: "+ event.pageX )
   console.log("offsetLeft: "+ mainBtnE1.offsetLeft)

   console.log("pagey: "+ event.pageY )
   console.log("offsetTop: "+ mainBtnE1.offsetTop )

    console.log("x: "+x)
    console.log("y: "+y)
   mainBtnE1.style.setProperty("posY", y + "px" );
   mainBtnE1.style.setProperty("posX", x + "px");



 })

//---------  scroll background popup    -------------

const imageContainerE1 = document.querySelector(".image-container");

window.addEventListener("scroll", ()=>{

    imageContainerE1.style.opacity= 1 - window.pageYOffset/900;
  
})
//-------------------   modal   --------------------------

const modalE1 = document.querySelector(".modal");
const closeE1 = document.querySelector(".close-icon");

mainBtnE1.addEventListener("click", ()=>{

    modalE1.style.transform = "translate(-50%, -50%)";  
    
})

closeE1.addEventListener("click", ()=>{
    modalE1.style.transform = "translate(-50%, -500%)";
})

//----------------- random color generator -------------------

const colorContainerE1 = document.querySelector(".color-container");


for (let index = 0; index < 14; index++) {

    const colorE1 = document.createElement("div");
    colorE1.classList.add("color");

    colorContainerE1.appendChild(colorE1);

    
    
}

const colorE1 = document.querySelectorAll(".color");
const randomColorBtn = document.querySelector(".random-color-btn");

generateColor();

randomColorBtn.addEventListener("click", ()=>{

    generateColor();
})

function generateColor()
{
    colorE1.forEach(color  => {
        
        const newColorCode= randomColor();
        color.style.background = "#" + newColorCode;
        color.innerText = "#" + newColorCode;
        color.style.color = "white"
    });
}




function randomColor()
{
    const chars = "0123456789abcdef";
    let colorCode = "";
    const colorCodeLength = 6;

    for (let index = 0; index < colorCodeLength; index++) 
    {
        
        
        let randomNum = Math.floor(Math.random() * chars.length);
        
        colorCode += chars.substring(randomNum, randomNum+1);
       // console.log(colorCode);
        
    }
    return colorCode;
}

//-------------  Multiplication App     ---------------------

const multiplyBtnE1 = document.querySelector(".mutiply-btn");
const inputMultiplyE1 =  document.querySelector(".input-multiply");
const multiplyQusE1 = document.querySelector(".mutiply-qus");
const formE1 = document.querySelector(".form");
const scoreE1 = document.querySelector(".score");
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
let ans = num1 * num2;
let score = JSON.parse(localStorage.getItem("mutiplyScore"));

console.log(num1);
console.log(num2)

multiplyQusE1.innerText = 'What is '+ num1 + ' multiply by '+ num2+ ' ?';

if(!score)
{
    score = 0;
}

scoreE1.innerText = "Score: "+score;
 
formE1.addEventListener("submit", ()=>
{

    const userAns = +inputMultiplyE1.value;

    console.log("user ans "+userAns)

    if(ans === userAns)
    {
        score++;
        updateScoreLocalStorage();
        console.log(score);
    }
    else{
        score--;
        updateScoreLocalStorage();
        console.log(score);
    }
  
})

function updateScoreLocalStorage()
{
    localStorage.setItem("mutiplyScore", JSON.stringify(score));
}

//--------------    Character Counter   -------------

const characterCounterTextareaE1 = document.querySelector(".character-counter-textarea");
const totalCharaterE1 = document.querySelector(".total-character");
const remainingCharaterE1 = document.querySelector(".remaining-character");


characterCounterTextareaE1.addEventListener("keyup", ()=>{
    
    updateCharaterCounter();
})

function updateCharaterCounter()
{
    totalCharaterE1.innerText = characterCounterTextareaE1.value.length;
   
    remainingCharaterE1.innerText = characterCounterTextareaE1.getAttribute("maxlength") - characterCounterTextareaE1.value.length;
   
}

//----------------  Movie trailer    ----------------

const lifes = ["wildlife", "animallife", "birdlife"];
const cardContainerE1 = document.querySelector(".card-container");
const videoE1 = document.querySelector("video");
const movieVideoE1 = document.querySelector(".movie-video");
const closeIconE1 = document.querySelector("#close-icon");

lifes.forEach((life)=>{

    //create card
    const cardE1 = document.createElement("div");
    cardE1.classList.add("card");
    cardContainerE1.appendChild(cardE1);

    //add img in card
    const cardImgE1 = document.createElement("div");
    cardImgE1.classList.add("card-img");
    cardImgE1.style.backgroundImage = "url(./img/"+life+".jpg)";
    cardE1.appendChild(cardImgE1);
    

    //add header in card
    const h2E2 = document.createElement("h2");
    cardE1.appendChild(h2E2);
    h2E2.innerText = life;

    //add paragraph in card
    const pE1 = document.createElement("p");
    cardE1.appendChild(pE1);
    pE1.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio illo alias cumque, maxime explicabo dolores ad in similique quis magni";

    //add button in card
    const cardBtnE1 = document.createElement("button");
    cardBtnE1.classList.add("color-btn");
    cardBtnE1.classList.add("movie-btn");
    cardBtnE1.innerText = life;
    cardE1.appendChild(cardBtnE1);

    //---------------add video for each card---------------

    
    
   // movieVideoE1.appendChild(videoE1);


    cardBtnE1.addEventListener("click", ()=>{
        movieVideoE1.classList.remove("active");
        videoE1.src = "./video/"+life+".mp4";
        videoE1.play();
    })

    closeIconE1.addEventListener("click", ()=>{
        movieVideoE1.classList.add("active");
        videoE1.pause();
        videoE1.currentTime = 0;
    })




})
/* const movieBtnE1 = document.querySelector(".movie-btn");
const movieVideoE1 = document.querySelector(".movie-video");
const closeIconE1 = document.querySelector("#close-icon");
const videoE1 = document.querySelector("video");

movieBtnE1.addEventListener("click", ()=>{

    movieVideoE1.classList.remove("active");
    videoE1.play();

})

closeIconE1.addEventListener("click", ()=>{

    movieVideoE1.classList.add("active");
    videoE1.pause();
    videoE1.currentTime = 0;

})

*/

//------------------- music instruments ----------------

const instrumentsE1 = document.querySelector(".instruments");


const instruments = ["guitar", "flute", "piano", "drum"];

instruments.forEach((instrument)=>{

    const buttonE1 = document.createElement("button");
    const audioE1 = document.createElement("audio");
    buttonE1.classList.add("instrument-btn");

    instrumentsE1.appendChild(buttonE1);
    instrumentsE1.appendChild(audioE1);

    buttonE1.innerText = instrument;
    buttonE1.style.backgroundImage = "url(./instruments-img/"+instrument+".jpg)";
    audioE1.src =  "./audio/"+ instrument + ".wav";

    buttonE1.addEventListener("click", ()=>{
        audioE1.play();
    })
   
})

//------------- tabs    ------------------------

const tabContainerE1 = document.querySelector(".tab-container");
const tabBntE1 = document.querySelectorAll(".tab-btn");
const tabContentE1 = document.querySelectorAll(".content");

tabContainerE1.addEventListener("click", (event)=>{
    
    const dataSetId = event.target.dataset.id;
    console.log(dataSetId)
    if(dataSetId)
    {
        console.log("inside")
        tabBntE1.forEach((btn)=>{
            btn.classList.remove("tab-btn-live");
        })

        event.target.classList.add("tab-btn-live");
       
        tabContentE1.forEach((content)=>{
            content.classList.remove("content-live");
        })
        const contentLiveE1 = document.getElementById(dataSetId);
        contentLiveE1.classList.add("content-live");

    }
    else{
        console.log("outside")
    }


})
console.log(JSON.parse(localStorage.getItem("mode")) == "true")
