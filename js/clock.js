// GREETING

let fullName = prompt("Lütfen Adınızı Giriniz")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} ${fullName}`



// CLOCK

function showTime() {
    let clockTime = new Date();
    let hours = clockTime.getHours().toString().padStart(2,"0")
    let minutes = clockTime.getMinutes().toString().padStart(2, "0");
    let seconds = clockTime.getSeconds().toString().padStart(2, "0");
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let dayName = days[clockTime.getDay()];
    document.getElementById(`myClock`).textContent = `${hours}:${minutes}:${seconds}: ${dayName}`;
    setTimeout(showTime, 1000);
}

console.log(typeof new Date().getHours())

showTime();