let userName = "";

const clickSound=document.getElementById("clickSound");
const yesSound=document.getElementById("yesSound");
const fireSound=document.getElementById("fireSound");

const title=document.getElementById("title");
const text=document.getElementById("text");
const catImg=document.getElementById("catImg");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const nextBtn=document.getElementById("nextBtn");
const buttons=document.getElementById("buttons");
const dateForm=document.getElementById("dateForm");
const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const resultText=document.getElementById("resultText");
const popup=document.getElementById("popup");
const popupText=document.getElementById("popupText");
const page0 = document.getElementById("page0");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");


function play(sound,vol=0.7){
    sound.currentTime = 0;
    sound.volume=vol;
    sound.play().catch(()=>{});
}

let isAccepted=false,noCount=0;

const phases=[
 {title:"Pliss iyain ajaa yaaa 🥺",gif:"gifs/B.gif"},
 {title:"Jangan gitu dong 😝",gif:"gifs/C.gif"},
 {title:"Aku sedih tau 😢",gif:"gifs/D.gif"},
 {title:"Please YES aja yaa 💕",gif:"gifs/E.gif"}
];

yesBtn.onclick=()=>{
    play(yesSound,0.8);
    play(fireSound,0.5);
    sayYes();
};

noBtn.onclick = (e) => {
    e.preventDefault();
    runAway();
};

nextBtn.onclick = showForm;
document.getElementById("submitBtn").onclick = submitDate;

function runAway(){
    if(isAccepted) return;
    play(clickSound,0.3);
    const p=phases[noCount%phases.length];
    title.innerText=p.title;
    catImg.src=p.gif;

    noBtn.style.position="fixed";
    noBtn.style.left=Math.random()*(innerWidth-noBtn.offsetWidth)+"px";
    noBtn.style.top=Math.random()*(innerHeight-noBtn.offsetHeight)+"px";

    yesBtn.style.transform=`scale(${1+noCount*0.15})`;
    noCount++;
}

function sayYes(){
    isAccepted = true;

    noBtn.style.position = "static";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";

title.innerText = `Aku tau kok ${userName} 😜💖`;
text.innerText = `${userName} sebenernya mau kan~`;


    nextBtn.classList.remove("hidden");

    for(let i=0;i<25;i++) heart();
}



function showForm(){
    // SEMBUNYIKAN BUTTON
    buttons.style.display = "none";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.position = "static";

    // 🔥 SEMBUNYIKAN TEKS ATAS (INI KUNCI)
    title.classList.add("hidden");
    text.classList.add("hidden");

    document.body.className = "page2";
    nextBtn.classList.add("hidden");
    dateForm.classList.remove("hidden");
}




function submitDate(){
    if(!date.value||!time.value){
        popupText.innerText="Tanggal & jamnya diisi dulu yaa 💕";
        popup.classList.remove("hidden");
        return;
    }
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    play(fireSound,0.7);

resultText.innerText=`Deal yaa ${userName} 💕
Tanggal ${date.value}
Jam ${time.value} 😆`;


    for(let i=0;i<40;i++) heart();
}

function heart(){
    const e=document.createElement("div");
    e.className="effect";
    e.innerHTML="💖";
    e.style.left=Math.random()*innerWidth+"px";
    e.style.top=Math.random()*innerHeight+"px";
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),1400);
}

function closePopup(){
    popup.classList.add("hidden");
}

setInterval(()=>{
    const f=document.createElement("div");
    f.className="flower";
    f.innerHTML="🌸";
    f.style.left=Math.random()*innerWidth+"px";
    f.style.animationDuration=(Math.random()*3+5)+"s";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),8000);
},900);

startBtn.onclick = () => {
if(!nameInput.value.trim()){
    popupText.innerHTML = `🥺💖<br>Aku belum tau nama kamu…`;
    popup.classList.remove("hidden");
    return;
}


    userName = nameInput.value.trim();

    page0.classList.add("hidden");
    page1.classList.remove("hidden");

    title.innerText = `Ehh ${userName}, aku mau nanya sesuatu 😳`;
};


popup.addEventListener("click",(e)=>{
    if(e.target === popup){
        closePopup();
    }
});

