
let isAccepted=false;
let noCount=0;

const phases=[
 {title:"Pliss iyain ajaa yaaa 🥺", gif:"gifs/B.gif"},
 {title:"Jangan gitu dong 😝", gif:"gifs/C.gif"},
 {title:"Aku sedih tau 😢", gif:"gifs/D.gif"},
 {title:"Please YES aja yaa 💕", gif:"gifs/E.gif"}
];

function animateText(el){
    el.classList.remove("pop");
    void el.offsetWidth;
    el.classList.add("pop");
}

const popup=document.getElementById("popup");
const popupText=document.getElementById("popupText");

const popupMessages=[
    "Isi dulu dong 😆",
    "Eitss~ belum lengkap 💕",
    "Tanggal & jamnya jangan lupa yaa 🥺",
    "Diisi dulu biar resmi 💖"
];

function showPopup(){
    popupText.innerText =
        popupMessages[Math.floor(Math.random()*popupMessages.length)];
    popup.classList.remove("hidden");
}

function closePopup(){
    popup.classList.add("hidden");
}

function runAway(){
    if(isAccepted) return;
    const p=phases[noCount%phases.length];
    title.innerText=p.title;
    catImg.src=p.gif;

    animateText(title);
    animateText(text);

    noBtn.style.position="fixed";
    noBtn.style.left=Math.random()*(window.innerWidth-noBtn.offsetWidth-20)+"px";
    noBtn.style.top=Math.random()*(window.innerHeight-noBtn.offsetHeight-20)+"px";

    yesBtn.style.transform=`scale(${1+noCount*0.18})`;
    noCount++;
}

function sayYes(){
    isAccepted=true;
    title.innerText="Aku tau kok 😜💖";
    text.innerText="kamu Sebenernya mau kan ~";

    animateText(title);
    animateText(text);

    buttons.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    for(let i=0;i<20;i++) heart();
}

function showForm(){
    document.body.className="page2";
    nextBtn.classList.add("hidden");
    dateForm.classList.remove("hidden");
    title.innerText="";
    text.innerText="";
}

function submitDate(){
    if(!date.value||!time.value){
          showPopup(); 
        return;
    }
    page1.classList.add("hidden");
    page2.classList.remove("hidden");

    resultText.innerText=
`Deal yaa 💕
Tanggal ${date.value}
Jam ${time.value} 😆`;

    for(let i=0;i<30;i++) heart();
}

/* ❤️ HEART EFFECT (UMUM) */
function heart(){
    const e=document.createElement("div");
    e.className="effect";
    e.innerHTML="💖";
    e.style.left=Math.random()*window.innerWidth+"px";
    e.style.top=Math.random()*window.innerHeight+"px";
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),1400);
}

/* 🌸 FLOWER FALL */
setInterval(()=>{
    const f=document.createElement("div");
    f.className="flower";
    f.innerHTML="🌸";
    f.style.left=Math.random()*window.innerWidth+"px";
    f.style.animationDuration=(Math.random()*3+5)+"s";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),8000);
},800);

/* 💖 MOUSE MOVE LOVE EFFECT */
document.addEventListener("mousemove",e=>{
    const h=document.createElement("div");
    h.className="effect";
    h.innerHTML="💖";
    h.style.left=e.clientX+"px";
    h.style.top=e.clientY+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1200);
});