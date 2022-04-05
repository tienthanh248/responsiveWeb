let hero_slide =document.querySelector('#hero-slide') // slide tong

// chon all slide 
let hero_slide_items = hero_slide.querySelectorAll('.slide')   // cac slide


let hero_slide_index =0;

let hero_slide_play = true;

let hero_slide_control_items = hero_slide.querySelectorAll('.slide-control-item') // cac item control silde
console.log(hero_slide_control_items);
console.log(hero_slide_items);
let slide_prev = hero_slide.querySelector('.slide-prev') // nut prev
let slide_next = hero_slide.querySelector('.slide-next') // nut next


// pause slide when mouse come in slider 
hero_slide.addEventListener('mouseover',()=> hero_slide_play=false);

//resume slide when mouse leave out slider 
hero_slide.addEventListener('mouseleave',()=> hero_slide_play=true );


// 01 setTimeout goi 1 ham sau 1 mili giay dk chi dinh sau do dung ham lai 
setTimeout(() => hero_slide_items[0].classList.add('active'),200);


// 02 auto slide 
/** setInterval goi 1 ham sau 1 khoang mili giay nhung no se chay mai cho den khi 
 * dung ham clearInterval hoac dong cua so 
 */
setInterval(() => {
    if (!hero_slide_play) return
    nextSlide()
}, 5000);


// 03 ham show slide
showSilde = (index) => {
    // truoc khi sang slide khc thi phai xoa het cac slide truoc di 
    hero_slide.querySelector('.slide.active').classList.remove('active')
    hero_slide.querySelector('.slide-control-item.active').classList.remove('active')

    // truyen doi so index, vi tri slide can show
    hero_slide_control_items[index].classList.add('active')
    hero_slide_items[index].classList.add('active')
}

//04 ham next slide
nextSlide = () => {
    /**  toan tu 3 ngoi 
    xet index bang 0 , dieu kien xet index + 1 xem co bang do dai slide khong ,
    neu bang thi tra index ve 0 , neu khong bang thi tra ve  index +1 slide se chay sang index do,
    vong lap 0,  1 , 2, 3->0
    */
    hero_slide_index= hero_slide_index +1 === hero_slide_items.length ? 0 : hero_slide_index + 1
    // return hero_slide_index;
    showSilde(hero_slide_index)  // callback
    console.log(hero_slide_index);
}

//05 ham prev slide
prevSlide = () => {
    /** toan tu 3 ngoi 
     * xet index bang 0, neu index -1 nho hon 0 neu dung thi tra ve do dai items (3) -1 = 2
     * tuc la ve vi tri index = 2 
     * con khong thi giam index di 1 tuc la ve vi tri truoc no 
     */ 
    hero_slide_index= hero_slide_index-1 < 0 ? hero_slide_items.length-1 : hero_slide_index-1
    showSilde(hero_slide_index) 
}

//06 ham su kien click next slide
slide_next.addEventListener('click',()=> nextSlide() )

//07 su kien click prev slide
slide_prev.addEventListener('click',()=>prevSlide())

// 08 add event to slide select 
/** 
 * forEach vong lap duyet qua tung phan tu cua mang , tham so truyen vao la 1 function
 * truyen arow function co tham so item, index
 * vong lap tra ve item la tung phan tu cua mang 
 *  va index la vi tri cua tung phan tu 
 * tung item duoc add su kien click tra ve 
 * arow function voi tham so truyen vao la vi tri index tung phan tu 
 */
hero_slide_control_items.forEach((item, index)=>{
    item.addEventListener('click', ()=> showSilde(index))
})


// 09 change header style when scroll
let header = document.querySelector('header')

window.addEventListener('scroll', ()=> {
    /** 
     * xet phan tu body va scrollTop đặt hoặc trả về số pixel mà nội dung của phần tử được cuộn theo chiều dọc. 
     * xet the HTML documentElement
     * */  
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {
        header.classList.add('shrink')
    }
    else  header.classList.remove('shrink')
})


// 010 add list product 
let products = [
    {
        image : './images/6489548.png',
        name : 'haibike rx',
        price : '$5,900.00'
    },

    {
        image : './images/Polygon Cascade.png',
        name : 'polygon cascade',
        price : '$3,900.00'
    },
    {
        image : './images/MTBROMO_N7_2022.png',
        name : 'norco youth bicycle',
        price : '$5,900.00'
    },
    {
        image : './images/531352.png',
        name : 'task master',
        price : '$6,900.00'
    },
    {
        image : './images/b1.png',
        name : 'xtra bicycle',
        price : '$5,900.00'
    },
    {
        image : './images/6489548.png',
        name : 'super x',
        price : '$3,900.00'
    },
    {
        image : './images/MTBROMO_N7_2022.png',
        name : 'serius fore',
        price : '$2,900.00'
    }
    
]

let product_list = document.querySelector('#popular-product')


    products.forEach(e => {
        let prod = `
        <div class="col-3">
                    <div class="to-top show-on-scroll">
                        <div class="product-card">
                            <a href="">
                                <div class="product-card-img">
                                    <img src="${e.image}" alt="">
                                </div>
                                <h3 class="product-name">
                                    ${e.name}
                                </h3>
                                <span class="product-price">
                                    ${e.price}
                                </span>
                            </a>
                            <button class="btn">add to cart</button>
                        </div> 
                    </div>       
                </div>
        `
        product_list.insertAdjacentHTML('beforeend',prod)
    })


// renderProducts(products)
// renderProducts(products)

// end add list product

/*011 element show on scroll */

/**
 * window.requestAnimationFrame cho trình duyệt biết rằng bạn muốn thực hiện hoạt ảnh và yêu cầu trình duyệt gọi một hàm được chỉ định để cập nhật hoạt ảnh trước lần sơn lại tiếp theo
 * hoac neu khong co san thi su dung ham doi 1/60s truoc khi goi lenh callback 
 * 
 */

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let el_to_show = document.querySelectorAll('.show-on-scroll')

isElInViewPort = (el) => {
    /** Element.getBoundingClientRect() trả về một đối tượng DOMRect cung cấp thông tin về kích thước của một phần tử và vị trí của nó so với khung nhìn.
     * Thuộc tính innerHeight trả về chiều cao của vùng nội dung của cửa sổ.
     * Thuộc tính clientHeight trả về chiều cao có thể xem của một phần tử tính bằng pixel, bao gồm cả phần đệm, nhưng không phải đường viền, thanh cuộn hoặc lề.
     * rect.top  trả về vị trí trên cùng(tính bằng pixel) so với đỉnh của phần tử
     * 
     * tim vi tri cua phan tu, neu nho hon vi tri cuon thi add show 
     */
    let rect = el.getBoundingClientRect()
    let distance = 200
    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop = () => {
    el_to_show.forEach(el => {
        if (isElInViewPort(el)) { el.classList.add('show') } 
        else {el.classList.remove('show')}
    })
    scroll(loop)
}
loop()










