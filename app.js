// 0 - 4
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const message = [
    "สวัสดีตอนเช้า",
    "Hello World",
    "Good Moring",
    "ราตรีสวัสดิ์",
    "Good Night",
    "KongRuksiam",
    "สบายดีไหม"
]

btn.addEventListener("click", ()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText = randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

// function randomNumber(min, max) {
//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
//   }
  
function randomMessage(){
    return message[Math.floor(Math.random()*message.length)]
    // console.log(message[randomNumber(0,message.length)]);
}



