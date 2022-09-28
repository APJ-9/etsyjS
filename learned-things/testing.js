//Header Section
const headerSection = document.querySelector("header");
headerSection.style.display = "block";
headerSection.style.padding = "1px 12px 4px 7px";
// headerSection.style.backgroundColor='red'
// Etsy-LOGO - SECTION
const headerTop = document.createElement("div");
headerTop.classList.add("headertop");
headerTop.style.display = "flex";
headerTop.style.justifyContent = "space-between";
headerTop.style.padding = "5px 0 0 2px";

const headerBottom = document.createElement("div");
headerBottom.style.display = "flex";
headerBottom.style.alignItems = "center";
headerBottom.style.padding = "3px 0 3px 0";
// headerBottom.style.paddingBottom = '12px'
// headerBottom.style.backgroundColor='yellow'

const etsyLogoSVG = "images/estylogo.svg";
const heartSVG = "images/heart.svg";
const basketSVG = "images/basket.svg";
const testImageLink = "images/thumb-2.jpg";
const loginData = "Sign in";
const navBtnSVG = "images/basket.svg";
// const imageLink = 'images/estylogo.svg'
// const imageLink = 'images/estylogo.svg'

const etsyLogo = document.createElement("div");
etsyLogo.classList.add("etsylogo");
etsyLogo.innerHTML = `<img src="${etsyLogoSVG}" alt='image'>
 `;
//The Color is given inside the SVG file
//Logo Styling
etsyLogo.style.width = "60px";
etsyLogo.style.cursor = "pointer";
etsyLogo.style.marginTop = "1px";

//Right-side of the logo
const rightSideLogo = document.createElement("div");
rightSideLogo.classList.add("rightsidelogo");
rightSideLogo.style.display = "flex";
rightSideLogo.style.alignItems = "center";

//Header Top Right Side Elements
const signIn = document.createElement("a");
const textLink = document.createElement("span");
textLink.innerHTML = `Sign in`;
textLink.style.fontSize = "13px";
addElement(signIn, textLink);
signIn.href = "https://www.etsy.com/in-en/about?ref=ftr";

signIn.style.marginRight = "6px";

signIn.style.marginBottom = "4px";
signIn.style.color = "#000";
signIn.style.fontWeight = "bold";

const headerHeart = document.createElement("a");
headerHeart.innerHTML = `<img src="${heartSVG}" alt="heart">`;
headerHeart.href = "https://www.etsy.com/in-en/guest/favorites?ref=hdr-fav";

headerHeart.style.marginRight = "2px";

const basket = document.createElement("a");
basket.innerHTML = `<img src="${basketSVG}" alt="heart">`;
basket.href = "https://www.etsy.com/in-en/cart?ref=hdr-cart";

basket.style.marginRight = "2px";

signIn.style.padding = "8px 15px";
headerHeart.style.padding = "5px 10px";
basket.style.padding = "5px 10px";

signIn.style.borderRadius = "50px";
headerHeart.style.borderRadius = "50px";
basket.style.borderRadius = "50px";

//Giving the hower effect to the buttons
signIn.addEventListener("mouseover", showBtnStyle);
signIn.addEventListener("mouseout", removeBtnStyle);

headerHeart.addEventListener("mouseover", showBtnStyle);
headerHeart.addEventListener("mouseout", removeBtnStyle);

basket.addEventListener("mouseover", showBtnStyle);
basket.addEventListener("mouseout", removeBtnStyle);

//Header Bottom
const navBtn = document.createElement("a");
navBtn.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="#000" width="24">
  <path d="M20 7H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm-4.8 6H4c-.6 0-1-.4-1-1s.4-1 1-1h11.2c.6 0 1 .4 1 1s-.4 1-1 1zm4.8 6H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
</svg>
`;
navBtn.style.marginTop = "2px";
// navBtn.style.marginRight='1px'
// navBtn.style.background='yellow'
navBtn.style.padding = "5px";
navBtn.style.borderRadius = "50px";
navBtn.addEventListener("mouseover", showBtnStyle);
navBtn.addEventListener("mouseout", removeBtnStyle);

const searchBarDiv = document.createElement("div");
searchBarDiv.style.display = "flex";
searchBarDiv.style.alignItems = "center";
searchBarDiv.style.justifyContent = "space-between";
searchBarDiv.style.width = "100%";
searchBarDiv.style.backgroundColor = "#f4f4f4";
searchBarDiv.style.border = "2px solid black";
searchBarDiv.style.borderRadius = "50px";
// searchBarDiv.style.
// searchBarDiv.style.padding = '6px 0px 6px 12px'
// searchBarDiv.style.paddingBottom = '6px'
// searchBarDiv.style.backgroundColor='red'
searchBarDiv.style.marginLeft = "7px";

const searchBar = document.createElement("input");
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search for anything");

searchBar.style.border = "none";
searchBar.style.width = "100%";
searchBar.style.margin = "0 0 0 19px";
searchBar.style.fontSize = "16px";
searchBar.style.backgroundColor = "#F4F4F4";

// FUNCTION FOR SEARCH BAR WHITE COLOR
searchBarDiv.addEventListener("focusin", () => {
  searchBarDiv.style.backgroundColor = "white";
  searchBar.style.backgroundColor = "white";
});

searchBarDiv.addEventListener("focusout", () => {
  searchBarDiv.style.backgroundColor = "#f4f4f4";
  searchBar.style.backgroundColor = "#f4f4f4";
});

const searchIcon = document.createElement("div");
searchIcon.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path></svg>
`;

searchIcon.style.padding = "10px 22px 5px 10px";
// searchIcon.style.paddingRight = '22px'
// searchIcon.style.paddingLeft = '10px'
// searchIcon.style.paddingBottom = '5px'
// searchIcon.style.backgroundColor = 'yellow'
searchIcon.style.borderTopRightRadius = "20px";
searchIcon.style.borderBottomRightRadius = "20px";
searchIcon.style.cursor = "pointer";

searchIcon.addEventListener("mouseover", () => {
  searchIcon.style.backgroundColor = "#ddd";
});
searchIcon.addEventListener("mouseout", removeBtnStyle);

addElement(rightSideLogo, signIn);
addElement(rightSideLogo, headerHeart);
addElement(rightSideLogo, basket);
addElement(searchBarDiv, searchBar);
addElement(searchBarDiv, searchIcon);
//Adding Elements to the DOM
addElement(headerTop, etsyLogo);
addElement(headerTop, rightSideLogo);
addElement(headerBottom, navBtn);
addElement(headerBottom, searchBarDiv);
addElement(headerSection, headerTop);
addElement(headerSection, headerBottom);

function showBtnStyle(color) {
  // console.log('  mouseIN')
  this.style.backgroundColor = "#eee";
  // this.style.padding = '5px 10px'
  // this.style.borderRadius = '50px'
}

function removeBtnStyle() {
  // console.log('mouseout')
  this.style.backgroundColor = "transparent";
}

//HEADER SECTION COMPLETED

//MAIN SECTION
// Div discover

const discoverJSONData = {
  hdr: "Discover one-of-a-kind item from independent creators",
  discoverEl: [
    {
      name: "Diwali",
      source:
        "https://i.etsystatic.com/16676438/c/1954/1954/0/0/il/2054a3/1825350041/il_300x300.1825350041_rvfe.jpg",
      link: "https://www.etsy.com/in-en/search?q=diwali&mosv=sese&moci=1054306299872&mosi=1082643189240&ref=hp_bubbles_in_bau_2022&anchor_listing_id=682567193&locationQuery=1269750&is_merch_library=true",
    },
    {
      name: "Home & Living",
      source:
        "https://i.etsystatic.com/24440180/r/il/cc8bc7/3094624694/il_300x300.3094624694_64up.jpg",
      link: "https://www.etsy.com/in-en/search?q=diwali&mosv=sese&moci=1054306299872&mosi=1082643189240&ref=hp_bubbles_in_bau_2022&anchor_listing_id=682567193&locationQuery=1269750&is_merch_library=true",
    },
    {
      name: "Clothing",
      source:
        "https://i.etsystatic.com/25473399/r/il/6cfb1f/4088005474/il_300x300.4088005474_foea.jpg",
      link: "https://www.etsy.com/in-en/search?q=diwali&mosv=sese&moci=1054306299872&mosi=1082643189240&ref=hp_bubbles_in_bau_2022&anchor_listing_id=682567193&locationQuery=1269750&is_merch_library=true",
    },
    {
      name: "Jewellery",
      source:
        "https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg",
      link: "https://www.etsy.com/in-en/search?q=diwali&mosv=sese&moci=1054306299872&mosi=1082643189240&ref=hp_bubbles_in_bau_2022&anchor_listing_id=682567193&locationQuery=1269750&is_merch_library=true",
    },
    {
      name: "Wall Art",
      source:
        "https://i.etsystatic.com/30213933/c/1510/1510/342/…/ea97e0/3755997843/il_300x300.3755997843_9z68.jpg",
      link: "https://www.etsy.com/in-en/search?q=diwali&mosv=sese&moci=1054306299872&mosi=1082643189240&ref=hp_bubbles_in_bau_2022&anchor_listing_id=682567193&locationQuery=1269750&is_merch_library=true",
    },
    {
      name: "On Sale",
      source:
        "https://i.etsystatic.com/27502657/r/il/34ea55/2915113681/il_300x300.2915113681_jqpd.jpg",
      link: "https://www.etsy.com/in-en/search?q=diwali&mosv=sese&moci=1054306299872&mosi=1082643189240&ref=hp_bubbles_in_bau_2022&anchor_listing_id=682567193&locationQuery=1269750&is_merch_library=true",
    },
    {
      name: "Home & Living",
      source:
        "https://i.etsystatic.com/24440180/r/il/cc8bc7/3094624694/il_300x300.3094624694_64up.jpg",
      link: "https://www.etsy.com/in-en/search?q=diwali&mosv=sese&moci=1054306299872&mosi=1082643189240&ref=hp_bubbles_in_bau_2022&anchor_listing_id=682567193&locationQuery=1269750&is_merch_library=true",
    },
    {
      name: "On Sale",
      source:
        "https://i.etsystatic.com/27502657/r/il/34ea55/2915113681/il_300x300.2915113681_jqpd.jpg",
      link: "https://www.etsy.com/in-en/search?q=diwali&mosv=sese&moci=1054306299872&mosi=1082643189240&ref=hp_bubbles_in_bau_2022&anchor_listing_id=682567193&locationQuery=1269750&is_merch_library=true",
    },
  ],
};

const discoverContainer = document.getElementById("discover");
const discoverHeading = document.createElement("p");
discoverHeading.classList.add("heading");
discoverHeading.innerText = discoverJSONData.hdr;
addElement(discoverContainer, discoverHeading);

const discoverBackground = document.createElement("div");
discoverBackground.classList.add("discover-background");
addElement(discoverContainer, discoverBackground);

const discoverElementContainer = document.createElement("div");
discoverElementContainer.classList.add("elements");
addElement(discoverContainer, discoverElementContainer);

const element = document.createElement("div");
element.classList.add("element");
addElement(discoverElementContainer, element);

//Calling the six elements from JSON Array
let discoverElementCounter = 0;
const elementToWrite = discoverJSONData.discoverEl
  .map(discoverElements)
  .join("");
element.innerHTML = elementToWrite;

function discoverElements(elementDetails) {
  if (discoverElementCounter < 6) {
    discoverElementCounter++;
    return `
  <a href="${elementDetails.link}">
  <img src="${elementDetails.source}" alt="">
  <h4 class="img-title"> ${elementDetails.name}</h4></a>
  `;
  }
}

function addElement(section, element) {
  section.append(element);
}
