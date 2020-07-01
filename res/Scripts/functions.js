function TextToSpeech(ctxt,nr,Str,myVoice){
//nr = 1;
TextActive = 1;
textString = Str;
ctxt.font = "18pt Calibri";
ctxt.fillStyle = "White";
ctxt.fillStyle = "White";
// wyśrodkowanie tekstu w poziomie
ctxt.textAlign = "left";
// wyśrodkowanie tekstu w pionie
ctxt.textBaseline = "middle";
//ctxt.fillText(str, canvas.width / 2, 20);
if(nr == 1){
//myPCVoice.playStr("res/BGM/PCvoice1.mp3");
}
else if(nr == 2){
//myPCVoice.playStr("res/BGM/PCvoice2.mp3");
} 
else if(nr == 3){
//myPCVoice.playStr("res/BGM/PCvoiceQ.mp3");
} 
}
function SceneChng(BackImg, SceneNmbr){
scene = SceneNmbr;
img[0].src = BackImg;
}
function AddToEquipment(index){
if(Items.lenght <=5){
Equipment.push(Items[index]);
}
} 
function RemoveFromEquipment(item){
for(i = 0; i<Equipment.length;i++){
if(Equipment[i].id == item){
Equipment.splice(i,1);
}
}
} 
//Window setTimeout() Method  do użycia przy animacjach
function proximity(x, y, x2, y2, r){
var a = Math.abs(x-x2);
var b = Math.abs(y-y2);
a *= a;
b *= b; 
var lng = Math.sqrt(a+b);
if( r >= lng)
return 1;
else
return 0; 
} 
function sound(src) {

    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        if(g_music == 1){
		this.sound.play();
		}
    }
    this.stop = function(){
        this.sound.pause();
    }
	  this.playStr = function(str){
        if(g_music == 1){
		this.sound = new sound(str);
		this.sound.play();
		}
    }
	} 
function drawMenu(image,context){
var loc = 500;
img[3].src = 'res/Interactables/c.jpg';
ctx[3].drawImage(img[3], 0, 550);
for(i = 0; i<Equipment.length;i++){
if(Equipment[i].Stan >= 0){ 
image[i+4] = new Image;
context[i+4] = document.getElementById('myCanvas').getContext('2d');
if(Equipment[i].nr == activeItemId){ 
image[i+4].src =Equipment[i].ActiveUrl;
context[i+4].drawImage(image[i+4], loc, 555);
}
else{
image[i+4].src = Equipment[i].InactiveUrl;
context[i+4].drawImage(image[i+4], loc, 555);
}
console.log(image[i+4].src);
loc += 50;}
}
}
function Alarm(){
if(SecComputer== 0 && Alert != 1){
myMusic.stop(); 
//myMusic = new sound("res/BGM/SW_Siren.mp3");	//SWMenu 
setTimeout(function(){
TextActive = 0;
myMusic.play(); 
},2000)
Alert = 1;
}
} 
function what(){
if(activeItemId != -1){
var str
switch(time){
	case 0:
        str = "Nie sądze..."
        break;
	case 1:
         str = "Bo ja wiem?"
        break;
	case 2:
        str = "Słucham?"
        break;
	case 3:
        str = "Niby jak?"
        break;
	case 4:
        str = "Ehhhh?"
        break;
	}
TextToSpeech(ctxt,3,str)
} 
}
function Death(){
myMusic.stop(); 
//myMusic = new sound("res/BGM/SWAmbient.mp3");	//SWMenu
//myMusic.play(); 
//myPCVoice = new sound("res/BGM/PCDeath.mp3");
//myPCVoice.play(); 
setTimeout(function(){
myPCVoice = new sound("res/BGM/Gameover.mp3");
myPCVoice.play(); 	
		},2000) 

}
function win(){
myMusic.stop(); 
myMusic = new sound("res/BGM/0917.mp3");
myMusic.play(); 
SceneChng('res/Backgrounds/Completed.png', 21);
Alert= 0;
Outro = 1;
}
function Termo(x){
myFX.playStr("res/BGM/termo.mp3");
if(x == 1){
Animated[x].Stan = 1;
}
else{
Animated[x].Stan = 3;
}
RemoveFromEquipment(item)
}
function Defend(x)
{

myFX = new sound("res/BGM/StormTrooperHey.mp3");	//SWMenu
myFX.play();
 var interval1 = setInterval(function(){
if(Animated[x].Stan ==2){
myFX = new sound("res/BGM/blasterB.mp3");
myFX.play();
SceneChng('res/Backgrounds/GG.jpg', 21);
Death();
clearInterval(interval1);
}
Animated[x].Stan+=1;
if(Animated[x].Stan >=3){
Animated[x].Stan = 3;
clearInterval(interval1);
}
},900)

}