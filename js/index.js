const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/* Selectors */

const container = document.querySelector('.container')
const anchors = container.firstElementChild.firstElementChild.firstElementChild
const newAnchor = document.createElement('a')

const anchor1 = anchors
anchor1.textContent = "Services"
anchor1.style.color = 'green'

const anchor2 = anchor1.nextElementSibling
anchor2.textContent = "Product"
anchor2.style.color = 'green'

const anchor3 = anchor2.nextElementSibling
anchor3.textContent = "Vision"
anchor3.style.color = 'green'

const anchor4 = anchor3.nextElementSibling
anchor4.textContent = "Features"
anchor4.style.color = 'green'

const anchor5 = anchor4.nextElementSibling
anchor5.textContent = "About"
anchor5.style.color = 'green'

const anchor6 = anchor5.nextElementSibling
anchor6.textContent = "Contact"
anchor6.style.color = 'green'

/*const nav = document.querySelector('nav')
nav.prependChild(newAnchor)
anchor0 = nav.firstElementChild
anchor0.textContent = "First"
anchor0.style.color = 'green'

nav.appendChild(newAnchor)
const anchor7 = nav.lastElementChild
anchor7.textContent = "Last"
anchor7.style.color = 'green'*/

const h1Class = document.querySelector('.cta-text')

const h1Text = h1Class.firstElementChild
h1Text.textContent = "DOM is Awesome"

const h1button = h1Class.lastElementChild
h1button.textContent = "Get Started"

let bodyImage = document.getElementById("cta-img").src = 'img/header-img.png'

const topContent = document.querySelector('.top-content')
const para1 = topContent.firstElementChild
const para2 = topContent.lastElementChild

const firstHeader = para1.firstElementChild
firstHeader.textContent = "Features"

const firstPara = para1.lastElementChild
firstPara.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const secondHeader = para2.firstElementChild
secondHeader.textContent = "About"

const secondPara = para2.lastElementChild
secondPara.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let lastImage = document.getElementById("middle-img").src = 'img/mid-page-accent.jpg'

const bottomContent = document.querySelector(".bottom-content")
const para3 = bottomContent.firstElementChild
const para4 = para3.nextElementSibling
const para5 = para4.nextElementSibling

const thirdHeader = para3.firstElementChild
thirdHeader.textContent = "Services"

const thirdPara = para3.lastElementChild
thirdPara.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const fourthHeader = para4.firstElementChild
fourthHeader.textContent = "Product"

const fourthPara = para4.lastElementChild
fourthPara.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const fifthHeader = para5.firstElementChild
fifthHeader.textContent = "Vision"

const fifthPara = para5.lastElementChild
fifthPara.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



const contactInfo = document.querySelector('.contact')

const cont1 = contactInfo.firstElementChild
cont1.textContent = "Contact"

const cont2 = cont1.nextElementSibling
cont2.textContent = "123 Way 456 Street Somewhere, USA"

const cont3 = cont2.nextElementSibling
cont3.textContent = "1 (888) 888-8888"

const cont4 = cont3.nextElementSibling
cont4.textContent = "sales@greatidea.io"



const footerInfo = container.lastElementChild.firstElementChild
footerInfo.textContent = "Copyright Great Idea! 2018"