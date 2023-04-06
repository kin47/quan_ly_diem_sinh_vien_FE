const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const muc=$$('.menuMuc')
console.log(muc)
muc.forEach(tab => {
    tab.onclick=function() {
        $('.menuMuc.bamVao').classList.remove('bamVao')
        this.classList.add('bamVao')
    }
});

const thongTin=document.querySelector('.thongTinChung')
console.log(thongTin)
const thongTin_cacMucCon=document.querySelector('.thongTin-cacMucCon')
thongTin.onclick=function(event) {
    if(thongTin_cacMucCon.classList.contains('open')) {
        thongTin_cacMucCon.classList.remove('open')
    } else {
        thongTin_cacMucCon.classList.add('open')
    }
}

const monHoc=document.querySelector('.monHoc')
console.log(monHoc)
const monHoc_cacMucCon=document.querySelector('.monHoc-cacMucCon')
monHoc.onclick=function(event) {
    if(monHoc_cacMucCon.classList.contains('open')) {
        monHoc_cacMucCon.classList.remove('open')
    } else {
        monHoc_cacMucCon.classList.add('open')
    }
}

const khoa=document.querySelector('.khoa')
console.log(khoa)
const khoa_cacMucCon=document.querySelector('.khoa-cacMucCon')
khoa.onclick=function(event) {
    if(khoa_cacMucCon.classList.contains('open')) {
        khoa_cacMucCon.classList.remove('open')
    } else {
        khoa_cacMucCon.classList.add('open')
    }
}

const nguoiDung=document.querySelector('.nguoiDung')
console.log(nguoiDung)
const nguoiDung_cacMucCon=document.querySelector('.nguoiDung-cacMucCon')
nguoiDung.onclick=function(event) {
    if(nguoiDung_cacMucCon.classList.contains('open')) {
        nguoiDung_cacMucCon.classList.remove('open')
    } else {
        nguoiDung_cacMucCon.classList.add('open')
    }
}