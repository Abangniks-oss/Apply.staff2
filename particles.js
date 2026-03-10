const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.6

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="red";

particles.forEach(p=>{

p.y+=p.speed;

if(p.y>canvas.height)p.y=0;

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();