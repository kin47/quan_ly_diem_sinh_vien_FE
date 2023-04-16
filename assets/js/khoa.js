
const buyBtns = document.querySelectorAll('.js-xemthem')
const phanlop =document.querySelector('.js-phanlop')
const phanlopContainer = document.querySelector('.js-phanlop-container')
const phanlopClose = document.querySelector('.js-phanlop-close')
//hàm hiển thị phanlop mua vé
function showBuyTickets(){
    phanlop.classList.add('open')
}
//hàm ẩn phanlop mua vé(gỡ bỏ class)
function hideBuyTickets(){
    phanlop.classList.remove('open')
}
//lặp qua từng thẻ button và nghe hành vi click
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
//nghe hành vi click vào button
phanlopClose.addEventListener('click', hideBuyTickets)

phanlop.addEventListener('click',hideBuyTickets)
phanlopContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})




// add lop
function showModal(elementId){
    const el = document.getElementById(elementId);
    console.log(el);
    el.classList.add('hien-thi-modal')
}

function hideModal(elementId){
    const el = document.getElementById(elementId);
    el.classList.remove('hien-thi-modal')
}
