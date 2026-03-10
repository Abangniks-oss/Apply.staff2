const webhook = "https://discord.com/api/webhooks/1480527953812127845/cKRhUyevgeATndir7BsDVKUSxc531KYzMtX0cTEMJ9YqgnjKWpT1ZP4x6b0u_Bv1hy4S";

const form = document.getElementById("form");
const status = document.getElementById("status");

let cooldown=false;

form.addEventListener("submit", async(e)=>{

e.preventDefault();

if(cooldown){

status.innerText="Tunggu beberapa detik sebelum mengirim lagi.";
return;

}

cooldown=true;

setTimeout(()=>cooldown=false,15000);

const data={

embeds:[{

title:"📨 Staff Application",

color:16711680,

fields:[

{name:"Name",value:document.getElementById("name").value},

{name:"Roblox / Discord",value:document.getElementById("username").value},

{name:"Social Media",value:document.getElementById("social").value},

{name:"Mengetahui tugas staff?",value:document.getElementById("task").value},

{name:"Alasan bergabung",value:document.getElementById("reason").value}

],

footer:{text:"Doomniks Paradise Application System"},

timestamp:new Date()

}]

};

status.innerText="Mengirim pengajuan...";

await fetch(webhook,{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify(data)

});

status.innerText="Pengajuan berhasil dikirim!";

form.reset();

});
