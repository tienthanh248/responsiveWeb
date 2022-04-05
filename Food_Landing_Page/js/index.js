//01 back to top 
/** gan su kien cuon cho window
 * document.body tra ve phan body cua document 
 * scrollTop đặt hoặc trả về số pixel mà nội dung của phần tử được cuộn theo chiều dọc.
 * document.documentElement tra ve doi tuong Html
 */
let backtoTopBtn = document.querySelector('.back-to-top');

window.onscroll = ()=> {
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        backtoTopBtn.style.display = 'flex'
    }
    else {
        backtoTopBtn.style.display ='none'
    }
}


// 02 top nav menu 

let menuItem = document.querySelectorAll('.menu-item');

/** Array.from() Phương thức from () trả về một đối tượng Mảng từ bất kỳ đối tượng nào có thuộc tính chiều dài hoặc bất kỳ đối tượng nào có thể lặp lại.
 * forEach( function()) phuong thuc goi 1 callback function-bat buoc , va 1 thisvalue - khong bat buoc
 * trong callback function tren co 3 doi so : 
 * gia tri phan tu - bat buoc 
 * chi so mang cua phan tu - k bat buoc
 * mang hien tai - k bat buoc
 */
Array.from(menuItem).forEach((item,index) => {
    item.onclick = (e)=> {

        let currMenu =document.querySelector('.menu-item.active');

        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})


// 03 food category 

let foodMenuList =document.querySelector('.food-item-wrap')

/** button filter */
let foodCategory = document.querySelector('.food-category')

let categories = foodCategory.querySelectorAll('button')

Array.from(categories).forEach((item,index)=>{
    item.onclick = (e)=>{
        let currCat = foodCategory.querySelector('button.active')
        /** xoa het khong cho button nao active*/
        currCat.classList.remove('active')

        /**e.target tra ve phan tu da kick hoat xu kien */
        e.target.classList.add('active')

        /** add list food tuong ung cho tung nut 
         * gan cho class chuỗi nối của food-item-wrap va gia tri lay tu data-food-type cua nut tuong ung   
         */

        foodMenuList.classList = 'food-item-wrap '+ e.target.getAttribute('data-food-type')
    }
})


// 04 on scroll animation

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback,1000/60)}

let eltoShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el)=>{
    let rect = el.getBoundingClientRect();

    return (
        (rect.top <= 0 && rect.bottom >=0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top>=0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = ()=> {
    eltoShow.forEach((item,index)=>{
        if(isElInViewPort(item))
        {
            item.classList.add('start')
        }
        else {
            item.classList.remove('start')
        }
    })
    scroll(loop)
}

loop()

//06 mobile nav 

let bottomNavItems = document.querySelectorAll('.mb-nav-item')

let bottomMove = document.querySelector('.mb-move-item')

bottomNavItems.forEach((item,index)=>{
    item.onclick = (e)=>{
        let crrItem =document.querySelector('.mb-nav-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')

        bottomMove.style.left = index * 25 +"%"
    }
})


