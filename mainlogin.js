// const inputs = document.querySelectorAll('.input');

// function focusFunc(){
//     let parent = this.parentNode.parentNode;
//     parent.classiList.add('focus');
// }

// function blurFunc(){
//     let parent = this.parentNode.parentNode;
//     if(this.value == ""){
//         parent.classiList.remove('focus');
//     }
// }

// inputs.forEach(input => {
//     input.addEventListener('focus', focusFunc);
//     input.addEventListener('blur', blurFunc);
// });


// var input_Usrnm = document.querySelector('#input_username');
// var input_pw = document.querySelector('#input_password');
// var error_msg = document.querySelector('.error_msg');

// alert("login Successfully")

// $("#loginnn").submit(function (e) {
//     e.preventDefault();
    
//     if (input_Usrnm.value.length < 1) {
//         error_msg.style.display = "inline-block";
//         input_Usrnm.style.border = "1px solid #f74040";
//         return false;
//     }
    
//     error_msg.style.display = "none";
//     alert("Login Successfully")


// })
// const delay = (delayInms) => {
//     return new Promise(resolve => setTimeout(resolve, delayInms));
// } 
// const sample = async () => {
//     console.log('a');
//     console.log('waiting...')
//     let delayres = await delay(3000);
//     console.log('b');
// }
// sample();

function startlog(){
    var log1 =
    document.getElementById('input_username').value;
    
    var log2 =
    document.getElementById('input_password').value;

    if (log1 == 'Yanuar' && log2 == 'asd'){
        var delay = 1000;
        var delay1 = 3000;
        var logakses = 
        document.getElementById('akses').innerHTML = 'Login Berhasil';
        // document.getElementById("loader").innerHTML = ;
        
        setTimeout(function(){
            document.getElementById('akses').innerHTML = '<div id="loader"></div>';
        }, delay);
        
        setTimeout(function(){
            window.location = "index.html";
        }, delay1);
        
        // await sleep(1000);
        // window.location = "index.html";
        // alert("Login Berhasil");
    }
    else {
        var logakses =
        document.getElementById('akses').innerHTML = 'Login Gagal';
        
    };
}

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    var delay = 2000;

    setTimeout(function(){
        loader.style.display = "none";
    }, delay)
})  

// save_btn = document.querySelector(".btn");

// save_btn.onclick = function() {
//     this.innerHTML = "Login Gagal";
// }
