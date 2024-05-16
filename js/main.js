const buttonCopy = document.querySelector("#btn");
const containerBtnIdioms = document.querySelector("#var-leng");
const textsToChange = document.querySelectorAll("[data-section]");
let  btnColorMode = document.querySelector(".switches");
let body = document.querySelector("body");

/*CHANGE LANGUAGE*/

const changeLanguage = async language => {
    localStorage.setItem('selectedLanguage', language);

    const requestJson = await fetch(`./languages/${language}.json`)
    const text = await requestJson.json();
    
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = text[section][value];
    }
}

const selectedLanguage = localStorage.getItem('selectedLanguage');
if (selectedLanguage) {
    changeLanguage(selectedLanguage);
}

containerBtnIdioms.addEventListener("click",(e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
})

/*COLOR MODE*/

function toggleColorMode() {
    body.classList.toggle("active");
    document.querySelector(".moon").classList.toggle("disabled");
    document.querySelector(".sun").classList.toggle("disabled");
    document.querySelector("#changeToEN").classList.toggle("active");
    document.querySelector("#changeToES").classList.toggle("active");
    document.querySelector("#lengua").classList.toggle("active");
    document.querySelector(".name").classList.toggle("active");
    document.querySelector(".github").classList.toggle("active");
    document.querySelector(".linkedin").classList.toggle("active");
    document.querySelector(".img-dark").classList.toggle("disabled");
    document.querySelector(".img-sun").classList.toggle("disabled");
    document.querySelector(".aboutTitle2").classList.toggle("active");
    document.querySelector(".text-description").classList.toggle("active");
    document.querySelector(".titleSkills").classList.toggle("active");
    document.querySelector(".title-learning").classList.toggle("active");
    document.querySelector(".card-title").classList.toggle("active");
    document.querySelector(".text-description-project").classList.toggle("active");
    document.querySelector(".card-link").classList.toggle("active");
    document.querySelector(".icon-link").classList.toggle("active");
    document.querySelector(".card-title-two").classList.toggle("active");
    document.querySelector(".text-description-project-two").classList.toggle("active");
    document.querySelector(".card-link-two").classList.toggle("active");
    document.querySelector(".card-link-code").classList.toggle("active");
    document.querySelector(".card-link-code-two").classList.toggle("active");
    document.querySelector(".icon-link-two").classList.toggle("active");
    document.querySelector(".email-title").classList.toggle("active");
    document.querySelector(".icon-email").classList.toggle("active");
    document.querySelector(".link-foot").classList.toggle("active");
    document.querySelector(".link-foot-two").classList.toggle("active");

    localStorage.setItem("colorModeActive", body.classList.contains("active"));
}

btnColorMode.addEventListener("click", toggleColorMode);

window.addEventListener("load", function() {
    const colorModeActive = localStorage.getItem("colorModeActive");
    if (colorModeActive === "true") {
        toggleColorMode();
    }
});

/*COPY EMAIL*/

buttonCopy.addEventListener("click",copiarTexto);

function copiarTexto(){
    const textCopy = document.querySelector("#text-copy").value;
    navigator.clipboard.writeText(textCopy);

    Toastify({
        text: "Copied!",
        duration: 1000,
        gravity: "top",
        position: "right", 
        style: {
            background: "#1c4b77",
        }
    }).showToast();
}
