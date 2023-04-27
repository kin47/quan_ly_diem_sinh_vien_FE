const errorMessage = document.querySelectorAll(".tb-loi-nhap")
const closeButton = document.getElementById("dong-form-btn")

closeButton.addEventListener("click", function() {
    for(var i=0; i<errorMessage.length; i++) {
        errorMessage[i].style.display="none"
    }
})

function validateForm() {
    var maGvInput = document.getElementById("ma-gv")
    var maGvError = document.getElementById("ma-gv-error")
    var tenGvInput = document.getElementById("ten-gv")
    var tenGvError = document.getElementById("ten-gv-error")
    var emailGvInput = document.getElementById("email-gv")
    var emailGvError = document.getElementById("email-gv-error")
    var gioiTinhGvInput = document.getElementById("gioi-tinh-gv")
    var gioiTinhGvError = document.getElementById("gioi-tinh-gv-error")
    var sdtGvInput = document.getElementById("sdt-gv")
    var sdtGvError = document.getElementById("sdt-gv-error")
    var khoaGvInput = document.getElementById("ma-khoa-gv")
    var khoaGvError = document.getElementById("ma-khoa-gv-error")



    if (maGvInput.value === "") {
        maGvError.style.display = "block";
    } else {
        maGvError.style.display = "none";
    }

    if (tenGvInput.value === "") {
        tenGvError.style.display = "block";
    } else {
        tenGvError.style.display = "none";
    }

    if (emailGvInput.value === "") {
        emailGvError.style.display = "block";
    } else {
        emailGvError.style.display = "none";
    }

    if (gioiTinhGvInput.value === "") {
        gioiTinhGvError.style.display = "block";
    } else {
        gioiTinhGvError.style.display = "none";
    }

    if (sdtGvInput.value === "") {
        sdtGvError.style.display = "block";
    } else {
        sdtGvError.style.display = "none";
    }
    if (khoaGvInput.value === "") {
        khoaGvError.style.display = "block";

    } else {
        khoaGvError.style.display = "none";
    }






    maGvInput.addEventListener("input", function() {
        maGvError.style.display = "none"
    })

    tenGvInput.addEventListener("input", function() {
        tenGvError.style.display = "none"
    })


    emailGvInput.addEventListener("input", function() {
        emailGvError.style.display = "none"
    })

    sdtGvInput.addEventListener("input", function() {
        sdtGvError.style.display = "none"
    })

    gioiTinhGvInput.addEventListener("input", function() {
        gioiTinhGvError.style.display = "none"
    })

    khoaGvInput.addEventListener("input", function() {
        khoaGvError.style.display = "none"
    })
}