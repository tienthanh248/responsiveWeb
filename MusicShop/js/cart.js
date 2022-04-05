// tăng giảm số luong
document.getElementById('plus').addEventListener('click',()=> {
    var t = document.getElementById('text-box').value ;
    document.getElementById('text-box').value=parseInt(t)+1;
})

document.getElementById('minus').addEventListener('click',()=> {
    var t = document.getElementById('text-box').value ;
    if(parseInt(t)>1)
    {       
        document.getElementById('text-box').value=parseInt(t)-1;
    }
})