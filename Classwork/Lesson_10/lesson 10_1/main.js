//10.1 - Podii

// let target = document.getElementById("target");
// // target.onclick = function (event) {
// //     console.log('click')
// //     console.log(event);
// // };
// //
// // // target.onmousemove = function (ev){
// // //     console.log(ev.clientX, ev.clientY);
// // //     let r = ev.clientX;
// // //     let g = ev.clientX;
// // //     let b = ev.clientY;
// // //     this.style.background = `rgb(${r}, ${g}, ${b})`
// // // };
// //
// // // target.onclick = function (event) {
// // //     console.log('cdsvwdvgrefgb')
// // // };
// // //
// // // console.log(target);
// //
// // // target.addEventListener("click", function (event) {
// // //     console.log('event1');
// // // })
// //
// // target.onmouseleave = function () {
// //     console.log('leave');
// // }
//
// // let i1 = document.getElementById('i1');
//
// // i1.oninput = function(){
// //     console.log(this.value);
// //     target.innerText = this.value;
// // };
//
// let f1 = document.forms.f1;
// f1.onsubmit = function(ev) {
//     ev.preventDefault();  //забороняє дефолтні дії.
//     console.log('hello');
//     let user = {name: this.username.value}
//     console.log(user); // local storage, fetch api
// }

window.onload = function(){
    console.log("Load");
};

document.onreadystatechange = function(){
    if(document.readyState === "interactive"){
        document.body.innerText = "loading start...";
    }
    if(document.readyState === "complete"){
        document.body.innerText = "loading complete";
    }
};
