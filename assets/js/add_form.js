function showModal(elementId){
    const el = document.getElementById(elementId);
    console.log(el);
    el.classList.add('hien-thi-modal')
}

function hideModal(elementId){
    const el = document.getElementById(elementId);
    el.classList.remove('hien-thi-modal')
}
