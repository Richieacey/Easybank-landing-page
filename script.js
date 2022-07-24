let facebookButton = document.querySelector(".facebook-btn");
let youtubeButton = document.querySelector(".youtube-btn");
let twitterButton = document.querySelector(".twitter-btn");
let pinterestButton = document.querySelector(".pinterest-btn");
let instagramButton = document.querySelector(".instagram-btn");
let hamburgerButton = document.querySelector(".hamburger-menu")
let mobileNavClose = document.querySelector(".mobile-nav-close")
let mobileNavMenu = document.querySelector(".nav-bar-mobile")
let main = document.querySelector("main");
let logoContainer = document.querySelector(".logo-container")
let backgroundMockup = document.querySelector(".bg-mockup")

facebookButton.addEventListener("mouseover", () => {
    facebookButton.src = "images/icon-facebook2.svg"
})

facebookButton.addEventListener("mouseleave", () => {
    facebookButton.src = "images/icon-facebook.svg"
})


youtubeButton.addEventListener("mouseover", () => {
    youtubeButton.src = "images/icon-youtube2.svg"
})

youtubeButton.addEventListener("mouseleave", () => {
    youtubeButton.src = "images/icon-youtube.svg"
})


twitterButton.addEventListener("mouseover", () => {
    twitterButton.src = "images/icon-twitter2.svg"
})

twitterButton.addEventListener("mouseleave", () => {
    twitterButton.src = "images/icon-twitter.svg"
})


pinterestButton.addEventListener("mouseover", () => {
    pinterestButton.src = "images/icon-pinterest2.svg"
})

pinterestButton.addEventListener("mouseleave", () => {
    pinterestButton.src = "images/icon-pinterest.svg"
})


instagramButton.addEventListener("mouseover", () => {
    instagramButton.src = "images/icon-instagram2.svg"
})

instagramButton.addEventListener("mouseleave", () => {
    instagramButton.src = "images/icon-instagram.svg"
})

mobileNavClose.addEventListener("click", () => {
    mobileNavMenu.style.display = "none";
    mobileNavClose.style.display = "none";
    hamburgerButton.style.display = "block";
    main.style.filter = "brightness(100%)"
    logoContainer.style.marginRight = "0px";
    backgroundMockup.setAttribute("style","width: 90%; top: -3%; left: 3%; overflow: visible;")
})
 


hamburgerButton.addEventListener("click", () => {
    mobileNavMenu.style.display = "flex";
    mobileNavClose.style.display = "block";
    hamburgerButton.style.display = "none";
    main.style.filter = "brightness(50%)"
    logoContainer.style.marginRight = "220px";
    backgroundMockup.style.display = "none";
})



