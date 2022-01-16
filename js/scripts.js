let btn_CreateLogin = document.getElementsByClassName('create-login'),
    emailInput = document.getElementsByClassName('input-container')[1],
    formTitle = document.getElementById('form-title'),
    submitBtn = document.getElementById('form-btn'),
    forgetPass = document.getElementById('forget-password'),
    leftPanelTile = document.getElementById('action-title');

function toggleForm() {
    // if login btn has the hide class
    if (btn_CreateLogin[1].className.indexOf('hide') !== -1) {
        show();
    } else {
        hide();
    }
}

function show() {
    addAnim()
    emailInput.classList.add('show');
    emailInput.classList.remove('hide');
    formTitle.innerText = "ثبت نام";
    submitBtn.innerText = "ثبت نام";
    forgetPass.classList.add('hide');
    leftPanelTile.innerText = "ورود به حساب کاربری";
    btn_CreateLogin[0].classList.add('hide');
    btn_CreateLogin[1].classList.add('show');
    btn_CreateLogin[1].classList.remove('hide');
    document.title = "ایجاد حساب کاربری | اپلیکشن کتاب باز";
    removeAnim()
}

function hide() {
    addAnim()
    emailInput.classList.add('hide');
    emailInput.classList.remove('show');
    formTitle.innerText = "ورود";
    submitBtn.innerText = "ورود";
    forgetPass.classList.add('show');
    forgetPass.classList.remove('hide');
    leftPanelTile.innerText = "حساب کاربری ندارید ؟";
    btn_CreateLogin[1].classList.add('hide')
    btn_CreateLogin[0].classList.add('show');
    btn_CreateLogin[0].classList.remove('hide');
    document.title = "ورود | اپلیکشن کتاب باز";
    removeAnim()
}

function addAnim() {
    document.getElementById('main-form').classList.add('animate-form');
}

function removeAnim() {
    setTimeout(
        function() {
            document.getElementById('main-form').classList.remove('animate-form');
        }, 800
    )
}
