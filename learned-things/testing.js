//SECTION YOUR HOME
const yourHomeJSONData = {
  subHead: "Editors' Picks",
  mainHead: "For your home",
  endText: "See more",
  arrow:"images/arrow.svg",
  yourHomeElements: [
    {
      name: "el-1",
      source:
        "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/final_61961a2c1fab160101ccaf7d_471683_b5oji1.mp4",
      link: "https://www.etsy.com/in-en/listing/1146166643/abstract-set-print-set-of-2-instant?click_key=176df5b6944731567781b0d183ca8f9fae936241%3A1146166643&click_sum=41f8cb59&ref=hp_editors_picks_primary-2&sts=1",
      type: "video",
      price: "6473",
      discountPrice: "5825",
    },
    {
      name: "el-2",
      source:
        "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Promotionals_-_DIY_Wall_Trophy_zmxtoc.mp4",
      link: "https://www.etsy.com/in-en/listing/1146111201/assorted-hand-painted-dessert-appetiser?click_key=9290c5a2dd2d3f175972da7ab3db8a7e00549b0d%3A1146111201&click_sum=b138fb24&ref=hp_editors_picks_primary-6",
      type: "video",
      price: "7545",
      discountPrice: "0",
    },
    {
      name: "el-3",
      source:
        "https://i.etsystatic.com/33029693/c/563/447/0/38/il/812218/3617933329/il_680x540.3617933329_agsq.jpg",
      link: "https://www.etsy.com/in-en/listing/712689568/baby-girl-quilt-baby-nursery-quilt-dusty?click_key=5a5c5d45cd9920ee0c302d279bd082a742b9c337%3A712689568&click_sum=db585a96&ref=hp_editors_picks_primary-4",
      type: "image",
      price: "5685",
      discountPrice: "5825",
    },
    {
      name: "el-4",
      source:
        "	https://i.etsystatic.com/21689103/r/il/00433b/3127057561/il_680x540.3127057561_3l4r.jpg",
      link: "https://www.etsy.com/in-en/listing/593288500/brownfolds-diy-paper-wall-trophy-origami?click_key=3dd86906d2cc017faef6b1d2b1ef538a3a77830e%3A593288500&click_sum=5238512a&ref=hp_editors_picks_primary-1&sts=1",
      type: "image",
      price: "4575",
      discountPrice: "3737",
    },
    {
      name: "el-5",
      source:
        "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_8207_mnzhgs.mp4",
      link: "https://www.etsy.com/in-en/listing/1146166643/abstract-set-print-set-of-2-instant?click_key=176df5b6944731567781b0d183ca8f9fae936241%3A1146166643&click_sum=41f8cb59&ref=hp_editors_picks_primary-2&sts=1",
      type: "video",
      price: "6578",
      discountPrice: "5825",
    },
    {
      name: "el-6",
      source:
        "https://i.etsystatic.com/21689103/c/1896/1507/664/…/4aad15/3549482360/il_680x540.3549482360_62rn.jpg",
      link: "https://www.etsy.com/in-en/listing/889291711/leaf-snack-plate-banyan-leaf-plate-leaf?click_key=2cfb1f9766a62825af938817bb5b0fc8910470bc%3A889291711&click_sum=c7e0a4dd&ref=hp_editors_picks_primary-3",
      type: "image",
      price: "4548",
      discountPrice: "0",
    },
  ],
};

const yourHome = document.getElementById("yourhome");
const editorsPick = document.createElement("p");
editorsPick.innerText = yourHomeJSONData.subHead;
editorsPick.classList.add("sub-heading");

const yourHomeHeading = document.createElement("h4");
yourHomeHeading.innerText = yourHomeJSONData.mainHead;

const yourHomeEls = document.createElement("div");
yourHomeEls.classList.add("your-home-container");

const elementToWriteHome = yourHomeJSONData.yourHomeElements
  .map(yourHomeElementCheck)
  .join("");
yourHomeEls.innerHTML = elementToWriteHome;
function yourHomeElementCheck(card) {
  if (card.type === "video") {
    console.log(card.name);
    return `
    <div class="card">
    <a href="${card.link}">
    <video src="${card.source}" alt="" class="video-img"></video>
    <div class="playbtn"></div>
    </a>
    </div>
    `;
  } else if (card.type === "image") {
    return `
    <div class="card">
    <a href="${card.link}">
    <img src="${card.source}" alt="" class="video-img">
    </a>
    </div>
    `;
  }
}

const seeMore = document.createElement('div')
seeMore.classList.add('seemore')
seeMore.innerHTML = `
<span> ${yourHomeJSONData.endText}</span> <span class="arrow"><img src="${yourHomeJSONData.arrow}"></span> 
`

addElement(yourHome, editorsPick);
addElement(yourHome, yourHomeHeading);
addElement(yourHome, yourHomeEls);
addElement(yourHome,seeMore)
console.log(yourHome);

function addElement(section, element) {
  section.append(element);
}
