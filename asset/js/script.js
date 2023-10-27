const nextBtn = document.querySelector('.fa-chevron-right');
const prevBtn = document.querySelector('.fa-chevron-left');
const imgBanner = document.querySelector('.module-product-bottom');
let index = 0;

function redirectProduct() {
    window.location = 'http://127.0.0.1:5500/producpage.html'
}
function redirectHome(){
    window.location = 'http://127.0.0.1:5500/index.html'
}

nextBtn.addEventListener('click',function() {
    index++;
    if(index > imgBanner.length-1){
        index = 0;
    }
    document.querySelector('.module-product-bottom').style.right = index * 100 +'%';    
});
prevBtn.addEventListener('click',function() {
    index --;
    if(index < 0){
        index = imgBanner.length-1;
    }
    document.querySelector('.module-product-bottom').style.right = index * 100 +'%';
});

