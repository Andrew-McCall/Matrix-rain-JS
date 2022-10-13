const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const rainDrops = [];

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.1)';
	context.fillRect(0, 0, canvas.width, canvas.height);

	for(let i = 0; i < rainDrops.length; i++)
	{

        context.fillStyle = '#FFF';
		context.font = rainDrops[i].size + 'px monospace';

        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, rainDrops[i].x, rainDrops[i].y*rainDrops[i].size);
        
        if (rainDrops[i].prev){
            context.fillStyle = '#0F0';
            context.fillText(rainDrops[i].prev, rainDrops[i].x, rainDrops[i].y*rainDrops[i].size - rainDrops[i].size);
        }
        rainDrops[i].prev = text;
        

		rainDrops[i].y++;
        if (rainDrops[i].y * rainDrops[i].size > canvas.height){
            rainDrops.splice(i, 1);
            i++;
        }
	}

    for (let i = 0; i < canvas.width; i+= 100) {
        if(Math.random() > 0.98){
            Spawn()
        } 
    }
    
};

const Spawn = ()=>{
    console.log("Spawn")
    const x = Math.floor(canvas.width*Math.random());

    for (let i = 0; i < rainDrops.length; i++) {
        if (rainDrops[i].y < 20 && rainDrops[i].x - 15 < x && rainDrops[i].x + 15 > x){
            Spawn();
            return;
        }
    }
    rainDrops.push({x:Math.floor(canvas.width*Math.random()), y:0, size:Math.floor(5*Math.random()+5*Math.random()+5*Math.random()+5*Math.random()+5*Math.random()+5*Math.random()+5*Math.random()+5*Math.random()+5*Math.random())});
}

setInterval(draw, 50);