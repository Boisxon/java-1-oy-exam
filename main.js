// const num1 = +prompt("1-raqam kiriting");
// const anwer = +prompt("Iltimos tanlang: \n 1) + \n 2) - \n 3) * \n 4) /")
// const num2 = +prompt("2-raqam kiriting");
// const birinchiRaqam = document.querySelector("#text-1")
// const plus = document.querySelector("#text-2")
// const ikinichiRaqam = document.querySelector("#text-3")


// if(anwer == 1){
//     alert(`Javob: ${num1 + num2}`)
// }else if(anwer == 2){
//     alert(`Javob: ${num1 - num2}`)
// }else if(anwer == 3){
//     alert(`Javob: ${num1 * num2}`)
// }else if(anwer == 4){
//     alert(`Javob: ${num1 / num2}`)
// }else if(num1 == 0 && num2 == 0){
//     alert("Iltimos qiymat kiriting")
// }else if(num1 == 0){
//     alert("Iltimos qiymat kiriting")
// }
// else{
//     alert("Qiymat kiriting")
// }
// num1.texContent=birinchiRaqam
// anwer.texContent=plus
// num2.texContent=ikinichiRaqam
// document.body.append(num1,plus,ikinichiRaqam)

const birRaqam = +prompt("1-raqamni kiriting");
const tanlang = +prompt("Tanlang \n1) + \n2) - \n3) * \n4) / ");
const ikiRaqam = +prompt("2-raqamni kiriting");


const birSon = document.querySelector(".text-1");
const Spn = document.querySelector(".text-2");
const ikiSon = document.querySelector(".text-3");
const checkButton = document.querySelector(".button");


birSon.textContent = birRaqam;
ikiSon.textContent = ikiRaqam;

checkButton.addEventListener("click", function () {
    let result;

    if (tanlang === 1) {
        Spn.textContent = "+";
        result = birRaqam + ikiRaqam;
    } else if (tanlang === 2) {
        Spn.textContent = "-";
        result = birRaqam - ikiRaqam;
    } else if (tanlang === 3) {
        Spn.textContent = "*";
        result = birRaqam * ikiRaqam;
    } else if (tanlang === 4) {
        Spn.textContent = "/";
        result = ikiRaqam !== 0 ? birRaqam / ikiRaqam : "Nolga bo'lib bo'lmaydi!";
    } else {
        result = "Noto'g'ri amal tanlandi";
    }

    checkButton.textContent = result; 
});