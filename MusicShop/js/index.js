let slide_index =0;
let slide_play= true;
let slides = document.querySelectorAll('.slide');


//let khong the khai bao lai, tranh rui ro 

// ham an cac slide 

hideAllSlide  = () => {   // arow function tra ve vong lap 
    slides.forEach(e => 
        {
            e.classList.remove('active')
        })
}

// show slide 

showslide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
    //slides[i]
}

// toan tu 3 ngoi 
nextslide  = () => slide_index=slide_index+1 === slides.length ? 0 : slide_index + 1 
// dieu kien gan slidex_index trung voi vi tri slides thi tra ve 0 , neu khong thi tra ve 1

prevslide  = () => slide_index=slide_index-1 < 0 ? slides.length-1 : slide_index-1

// dung slide khi hover slide 
document.querySelector('.slider').addEventListener('mouseover',  () => slide_play=false)

// bat slide khi chuot roi khoi slide 
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play=true)

showslide();

// slide controller 
//nut next 
document.querySelector('.slide-next').addEventListener('click',() => {
    nextslide()
    showslide()
})

// nut prev
document.querySelector('.slide-prev').addEventListener('click',() => {
    prevslide()
    showslide()
})



// setInterval(() => {

//     if(!slide_play) return 
//     nextslide()
//     showslide()
    
// }, 3000);


//render product , json gồm tên, image, giá sp 

let products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Horizon',
        image1: './images/JBLHorizon_001_dvHAMaster.png',
        image2: './images/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'UA Project Rock',
        image1: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: './images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list =document.querySelector('#best-product')

products.forEach(e => {
    let prod = `
    <div class="col-3 col-md-6 col-sm-12">
                <div class="product-card"> 
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="product-detail.html" class="btn-flat btn-hover btn-shop-now">
                            Shop now
                            </a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart' ></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                             ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
    </div>
    `

    // insertAdjacentHTML chèn phần tử chỉ định vào html 
    // beforeend chèn vào sau phần tử đầu tiên, là phần tử con cuối cùng 
    //afterbegin chèn vào trước phần tử đầu tiên, là phần tử con đầu tiên 
    //prod thẻ chèn vào 
    product_list.insertAdjacentHTML('beforeend',prod) 
    best_product_list.insertAdjacentHTML('afterbegin',prod) 
    
}) 


// hieu ung fix cung va doi màu menu 
let menutrang =document.querySelector('.bg-second2');
let color=document.querySelector('.main-menu')

var trangthaimenu = true

window.addEventListener('scroll',function()
{
    if(window.pageYOffset>500)
    {
        if(trangthaimenu==true)
        {
            trangthaimenu=false
            menutrang.classList.add('menudo')
            color.classList.add('colortrang')
        }
    }
    else if(window.pageYOffset<500)
    {
        if(trangthaimenu==false)
        {
            trangthaimenu=true
            menutrang.classList.remove('menudo')
            color.classList.remove('colortrang')
        }
    }

})



