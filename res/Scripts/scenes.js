

function MainMenu(cx,cy)            // Scena -1
{  
if(proximity(400,490,cx,cy,200) == 1){
myMusic.stop();
//myMusic = new sound("res/BGM/SWAmbient.mp3");
//myMusic.play();
SceneChng('res/Backgrounds/Objectivy.jpg', 0);
}
} 

function Briefing(cx,cy)            // Scena 0
{  
if(proximity(610,300,cx,cy,proxy) == 1){
myMusic.stop();
myMusic.play();
SceneChng('res/Backgrounds/szybZ.jpg', 1);
}
} 

function SzybZ(cx,cy)                       //scena 1
{
if(proximity(401,287,cx,cy,200) == 1 && activeItemId == 1){
myFX.playStr("res/BGM/blasterA.mp3");   
SceneChng('res/Backgrounds/szybO.jpg', 2);
}
else if(proximity(401,287,cx,cy,200) == 1 && activeItemId == 0){
console.log("krata blokuje dalszą drogę");
TextToSpeech(ctxt,2,"Krata blokuje dalszą drogę") 
}
else if(proximity(401,287,cx,cy,200) == 1 && activeItemId == -1){
console.log("krata blokuje dalszą drogę");
TextToSpeech(ctxt,2,"Krata blokuje dalszą drogę") 
}
else{
what();
}
}

function SzybO(cx,cy)					//Scena 2
{ 
if(proximity(401,287,cx,cy,200) == 1 && activeItemId == -1){
myFX.playStr("res/BGM/Run.mp3");
SceneChng('res/Backgrounds/Szatnia.jpg', 3);
}

else if(proximity(401,287,cx,cy,200) == 1 && activeItemId == 0){
console.log("Droga wolna");
TextToSpeech(ctxt,1,"Droga Wolna")  
}
else{
what();
}
}
 
function Szatnia(cx,cy)  //Scena 3
{
if(proximity(564,225,cx,cy,proxy) == 1 || proximity(564,325,cx,cy,proxy) == 1){  //drzwi do szatni
switch(activeItemId) {
    case -1:
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/SzatniaWejscie.jpg', 4);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Drzwi. Prowadzą na korytarz");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break;
	case 5:
        //code block */
     //   break;
	 default:
		what();
} 
}
else if(proximity(135,200,cx,cy,proxy) == 1 || proximity(135,280,cx,cy,proxy) == 1){     //szafka
switch(activeItemId) {
    case -1:
		if(Animated[0].Stan == 0 ){
		myFX.playStr("res/BGM/Locker.mp3");
        TextToSpeech(ctxt,2,"Strój imperialnego mechanika \nTo przebranie pozwoli mi poruszać się \nbez przeszkód"); 
		Animated[0].Stan = 1;
		Alert = -1;
		}
        break;
    case 0:
        TextToSpeech(ctxt,1,"Szafka na ubrania robocze") ;
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break;
	case 5:
        //code block */
      //  break;
    default:
		what();
} 
}
else if(proximity(614,508,cx,cy,proxy) == 1){											//Panel w podłodze
switch(activeItemId) {
    case -1:
		if(Alert == 1){
		TextToSpeech(ctxt,3,"Schwytają mnie jeśli spróbuje tędy ucieć\n Muszę znaleźć inną drogę... ");
		}
		else if(Alert < 1  && Documents == 1){
		TextToSpeech(ctxt,3,"Pora wiać");
		setTimeout(function(){
		TextActive = 0;
		win();
		},1000)
		}
		else{
		 TextToSpeech(ctxt,2,"Kuszące, ale nie mogę wrócic bez planów\n Już wziąłem zaliczkę... ");
		 }
        break;
    case 0:
        TextToSpeech(ctxt,1,"Szyb,którym dostałem się do bazy\nJeśli nikt mnie nie zauważy, mogę też nim ucieć");
        break;
//	case 1:
  //       TextToSpeech(ctxt,2,"Szkoda amunicji...");
   //     break;
//	case 2:
        //code block
    //    break;
	case 3:
        TextToSpeech(ctxt,1,"Nie po to rozwalałem te kratę, żeby ją\n teraz naprawiać");
        break;
/*	case 4:
        //code block
        break;
	case 5:
        //code block 
      //  break; */
    default:
		what(); 
} 
}
else{
what();
}
}

function SzatniaWejscie(cx,cy)  //Scena 4
{
if(proximity(200,300,cx,cy,proxy) == 1 || proximity(200,400,cx,cy,proxy) == 1){ //drzwi
switch(activeItemId) {
    case -1:
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/Szatnia.jpg', 3);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Drzwi. Prowadzą do szatni");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
     TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej \ndrogi ucieczki to dobry pomysł");
        break;
		
	 default:
		what();
}
}
else if(proximity(680,305,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/BiuroWejscie.jpg', 5);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz. Prowadzi do Biura");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(cy >=470){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/WejscieKantyna.jpg', 6);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Korytarz. Prowadzi do Kantyny");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
      //  break;
		
	 default:
		what();
}
}
else{
what();
}
}

function BiuroWejscie(cx,cy)  //Scena 5
{
if(proximity(175,280,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/Biuro.jpg', 8);
		if(Alert >-1)
		setTimeout(function(){
		if(Animated[1].Stan != 1){
		myPCVoice = new sound("res/BGM/OficerFutile.mp3");
		myPCVoice.play(); 
		Alarm();
		}
		},3000)
        break;
    case 0:
        TextToSpeech(ctxt,2,"Drzwi. Prowadzą do Biura");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
      Termo(1);
        break;
		
	 default:
		what();
}
}
else if(proximity(40,350,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/WorkshopWejscie.jpg', 9);
        break;
    case 0:
        TextToSpeech(ctxt,3,"Korytarz?");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(proximity(666,380,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/SzatniaWejscie.jpg', 4);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz. Prowadzi do Szatni");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
      //  break;
		
	 default:
		what();
}
}
else{
what();
}
}

function KatynaWejscie(cx,cy)  //Scena 6
{
if(proximity(630,240,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		if(Alert == 0 && Animated[2].Stan != 3){
		Defend(2);
		}
		if(Alert==1){
		TextToSpeech(ctxt,1,"Nie mam na to czasu!");
		}
		else{
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/Kantyna.jpg', 7);
		if(CantinaBand>0){
		myMusic.stop();
		//myMusic = new sound("res/BGM/CantinaBand.mp3");
		//myMusic.play();
		//myMusic.playStr("res/BGM/CantinaBand.mp3");
			}
			}
        break;
    case 0:
        TextToSpeech(ctxt,2,"Drzwi. Prowadzą do Kantyny");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
	 Termo(2);
        break;	
	 default:
		what();
}
}
else if(proximity(150,360,cx,cy,100) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/SzatniaWejscie.jpg', 4);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Korytarz, Prowadzi do Szatni ");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(proximity(750,295,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/S3.jpg', 10);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz. Prowadzi do Rozwidlenia");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
      //  break;
		
	 default:
		what();
}
}
else{
what();
}
}

function Kantyna(cx,cy)  //Scena 7
{
if(cx < 100){
switch(activeItemId) {
    case -1:
		myMusic.stop();
		//myMusic = new sound("res/BGM/SWAmbient.mp3");
		//myMusic.play();
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/WejscieKantyna.jpg', 6);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Droga do wyjścia");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
     TextToSpeech(ctxt,3,"Szkoda thermy");
        break;	
	 default:
		what();
}
}
else if(proximity(430,240,cx,cy,proxy) == 1 && Animated[2].Stan != 3){
switch(activeItemId) {
    case -1:
	if(CantinaBand == 0 ){
		//myFX.playStr("res/BGM/StormTrooperGoAway.mp3");
		TextToSpeech(ctxt,0,"Trooper:  Daj mi spokój...");
		}
		else{
		//myFX.playStr("res/BGM/StormTrooperYeah.mp3"); 
		TextToSpeech(ctxt,0,"Trooper: Stary, uwielbiam ten kawałek. Dzięki");
		CantinaBand = 2;
		}
        break;
    case 0:
		if(CantinaBand == 0){
		TextToSpeech(ctxt,1,"Żołnierz Imperium. Chyba jest w kiepskim nastroju");
		}
		else{
		TextToSpeech(ctxt,0,"Nastrój wyraźnie mu się poprawił");
		CantinaBand = 2;
		}
        break;
	case 1:
		myFX.playStr("res/BGM/blasterA.mp3"); 
		myPCVoice.playStr("res/BGM/StormTrooperDeath.mp3"); 
		Animated[2].Stan = 3;
        break;
	case 2:
		myFX.playStr("res/BGM/blasterB.mp3"); 
        myPCVoice.playStr("res/BGM/StormTrooperDeath.mp3"); 
		Animated[2].Stan = 3;
        break;
	 default:
		what();
}
}
else if(proximity(330,250,cx,cy,proxy) == 1 && Items[2].Stan == 0){  //E11
switch(activeItemId) {
    case -1:
		if(CantinaBand == 2 || Animated[2].Stan == 3){
		Equipment.push(Items[2]);
		Items[2].Stan = 1;
		}
		else{
		//myPCVoice.playStr("res/BGM/StormTrooperHey.mp3"); 
		TextToSpeech(ctxt,0,"Trooper: Zostaw, to moje...");
		}
        break;
    case 0:
	myFX.playStr("res/BGM/PickUp.wav"); 
	if(Items[2].Stan == 0 ){	
	TextToSpeech(ctxt,1,"KArabin E11");
	}
        break;
	 default:
		what();
}
}
else if(proximity(575,240,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		if(CantinaBand==0){
		 TextToSpeech(ctxt,3,"Guziki nie działają");
		}
        break;
    case 0:
        TextToSpeech(ctxt,2,"Szafa Grająca. Raczej w kiepskim stanie");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	*/case 3:
		//myMusic.stop();
		myFX.playStr("res/BGM/Locker.mp3");
        TextToSpeech(ctxt,2,"Tu dokręcic, tu poluzować");
		myMusic.stop();
		myMusic = new sound("res/BGM/CantinaBand.mp3");
		myMusic.play();
		CantinaBand = 1;
        break;
	/*case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
      //  break;
		
	 default:
		what();
}
}
else{
what();
}
}

function Biuro(cx,cy)  //Scena 8
{
if(cy>500){
switch(activeItemId) {
    case -1:
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/BiuroWejscie.jpg', 5);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Wyjście?");
        break;
}
}
else if(proximity(500,300,cx,cy,100) == 1 && Animated[1].Stan != 1){
switch(activeItemId) {
    case -1:
	if(Alert == -1 ){
		if(Items[4].Stan == 0 ){
		//myPCVoice.playStr("res/BGM/OficerFail.mp3"); 
		TextToSpeech(ctxt,0,"Oficer: Znowu zostawiłes swój klucz kodowy w kantynie!\nNastepnym razem trafisz do raportu!" );
		Equipment.push(Items[4]);
		Items[4].Stan = 1;
		setTimeout(function(){
		TextActive = 0; 
		TextToSpeech(ctxt,0,"Oficer: Teraz precz mi z oczu!");
		},2000)
		}
		else{
		//myPCVoice.playStr("res/BGM/OficerFutile.mp3"); 
		TextToSpeech(ctxt,0,"Oficer:Czego tu jeszcze szukasz?\nGuza?" );
		}
		}
		else{
		//myPCVoice.playStr("res/BGM/OficerFail.mp3"); 
		TextToSpeech(ctxt,3,"Oficer: Kim jesteś i czego tu szukasz?");
		setTimeout(function(){
		TextActive = 0; 
		TextToSpeech(ctxt,0,"Oficer: ALARM!");
		},1000)
		setTimeout(function(){
		Alarm();
		},1000)
		}
        break;
    case 0:
		TextToSpeech(ctxt,3,"Oficer Imperialny. Ciekawe,czy ktoś byza nim tęskinił");
        break;
	case 1:
		myFX.playStr("res/BGM/blasterA.mp3"); 
		myPCVoice.playStr("res/BGM/OficerDeath.mp3"); 
		Animated[1].Stan = 1;
        break;
	case 2:
		myFX.playStr("res/BGM/blasterB.mp3"); 
		myPCVoice.playStr("res/BGM/OficerDeath.mp3"); 
        Animated[1].Stan = 1;
        break;
	case 4:
     TextToSpeech(ctxt,3,"Oficer: Tak, geniuszu. To jest Cylinder Kodowy");
	 setTimeout(function(){
		TextActive = 0; 
		//myPCVoice.playStr("res/BGM/OficerJob.mp3"); 
		TextToSpeech(ctxt,0,"Oficer: A TERAZ ZAJMIJ SIĘ ROBOTĄ!");
		},2000)
        break;
	 default:
	 if(Alert == -1){
		TextToSpeech(ctxt,0,"Oficer: Widzę, że dawno nie byłeś w karcerze?");
		}
	else{
	what();
	}
	}
}
else if(proximity(320,420,cx,cy,proxy) == 1 && Animated[1].Stan == 1 && Items[4].Stan == 0 ){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/PickUp.wav"); 
		Equipment.push(Items[4]);
		Items[4].Stan = 1;
    case 0:
		TextToSpeech(ctxt,2,"Klucz Kodowy. Może się przydać" );
        break;
	default:
		what();
	}
	}
else if(proximity(213,275,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		TextToSpeech(ctxt,1,"Nic ciekawego");
        break;
    case 0:
        TextToSpeech(ctxt,2,"Zdjęcie jakiegoś cyborga w czarnej masce.Wygląda groźnie.");
        break;
}
}
else{
what();
}
}

function WorkshopWejscie(cx,cy)  //Scena 9
{
if(proximity(75,240,cx,cy,proxy) == 1 || proximity(75,340,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/Workshop.jpg', 14);
		break;
    case 0:
        TextToSpeech(ctxt,2,"Drzwi. Prowadzą do Warsztatu");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
	 myFX.playStr("res/BGM/termo.mp3");
     TextToSpeech(ctxt,3,"Nara...");
        break;	
	 default:
		what();
}
}
else if(proximity(390,310,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/LabWejscie.jpg', 11);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Korytarz, prowadzi do wschodniej części kompleksu ");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(500<cy){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/BiuroWejscie.jpg', 5);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz, Prowadzi do biura ");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(proximity(750,360,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/ArmoryWejscie.jpg', 15);
        if(Alert > -1 && Animated[3].Stan != 3){
		Defend(3);
		}
		break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz. Prowadzi do Stanowiska Ochrony");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
		Termo(3);
        break;
		
	 default:
		what();
}
}
else{
what();
}
}

function S3(cx,cy)  //Scena 10
{
if(proximity(525,350,cx,cy,100) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/LabWejscie.jpg', 11);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Korytarz, prowadzi do wschodniej części kompleksu ");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(cy>470){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/WejscieKantyna.jpg', 6);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz, Prowadzi do Kantyny ");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(proximity(170,373,cx,cy,100) == 1){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/ArmoryWejscie.jpg', 15);
		if(Alert > -1 && Animated[3].Stan != 3){
		Defend(3);
		}
        break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz. Prowadzi do Stanowiska Ochrony");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
    Termo(3);
       break;
		
	 default:
		what();
}
}
else{
what();
}
}

function LabWejscie(cx,cy)  //Scena 11
{
if(proximity(400,300,cx,cy,90) == 1 ){  //Drzwi
switch(activeItemId) {
    case -1:
        if(LabDoors > 0){
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/Lab.jpg', 12);
		}
		else{
		TextToSpeech(ctxt,2,"Zamknięte. Trzeba otworzyć panelem");
		}
		break;
    case 0:
        TextToSpeech(ctxt,2,"Drzwi. Prowadzą do Laboratorium");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
	 myFX.playStr("res/BGM/termo.mp3");
     TextToSpeech(ctxt,3,"Nara...");
        break;	
	 default:
		what();
}
}
else if(60>cx){ //droga do S3
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/S3.jpg', 10);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Korytarz, prowadzi do Rozwidlenia ");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(proximity(620,350,cx,cy,proxy) == 1){  //Panel
switch(activeItemId) {
    case -1:
	if(LabDoors == 0){
		TextToSpeech(ctxt,2,"Przydałby się Cylinder Kodowy");
		}
	if(LabDoors == 1){
		TextToSpeech(ctxt,2,"Otwarte");
		}
        break;
    case 0:
        TextToSpeech(ctxt,2,"Panel otwierajacy drzwi.\nPotrzeba Cylindra Kodowego,aby go otworzyć");
        break;
	case 1:
        myFX.playStr("res/BGM/BlasterA.mp3");
		setTimeout(TextToSpeech(ctxt,1,"... i otwarte"), 1000)
		LabDoors = 2; 
		Alarm();
        break;
	case 2:
        myFX.playStr("res/BGM/BlasterA.mp3");
		setTimeout(TextToSpeech(ctxt,1,"... i otwarte"), 1000)
		LabDoors = 2; 
		Alarm();
        break;
	case 3:
		if(LabDoors == 0){
        myFX.playStr("res/BGM/Locker.mp3");
		TextToSpeech(ctxt,2,"... i otwarte");
		LabDoors = 1; 
		Alarm();
		}
        break;
	case 4:
		if(LabDoors == 0){
		myFX.playStr("res/BGM/BlipBloop.mp3");
		setTimeout(TextToSpeech(ctxt,1,"... i otwarte"), 1000)
        LabDoors = 1; 
		}
        break; 
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break; 	
	 default:
		what(); 
}
}
else if(710<cx){  // Droga do workshopu
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/WorkshopWejscie.jpg', 9);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz. Prowadzi do Hangaru");
        break;
	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; 
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
      //  break;
		
	 default:
		what();
}
} 
else{
what();
}
}

function ArmoryWejscie(cx,cy)  //Scena 15
{
if(proximity(430,270,cx,cy,proxy) == 1 || proximity(430,340,cx,cy,proxy) == 1){  //Drzwi
switch(activeItemId) {
    case -1:
		if(ArmoryDoors > 0){
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/Security.jpg', 13);
		}
		else{
		TextToSpeech(ctxt,2,"Zamknięte. Trzeba otworzyć panelem");
		}
		break;
    case 0:
        TextToSpeech(ctxt,2,"Drzwi. Prowadzą do Centrali Ochrony");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	case 5:
	 myFX.playStr("res/BGM/termo.mp3");
     TextToSpeech(ctxt,3,"Nara...");
        break;	
	 default:
		what();
}
}
else if(proximity(640,332,cx,cy,proxy) == 1){ //droga do S3
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/S3.jpg', 10);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Korytarz, prowadzi do Rozwidlenia ");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break;
		
	 default:
		what();
}
}
else if(cx>300 && cy>500){  //Droga spowrotem do WorkshopWejscie
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/Run.mp3");
		SceneChng('res/Backgrounds/WorkshopWejscie.jpg', 9);
        break;
    case 0:
        TextToSpeech(ctxt,2,"Korytarz, Prowadzi do Warsztatu");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; 
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break; */
		
	 default:
		what(); 
}
}
else if(proximity(500,332,cx,cy,20) == 1){
switch(activeItemId) {
     case -1:
	if(LabDoors == 0){
		TextToSpeech(ctxt,2,"Przydałby się Cylinder Kodowy");
		}
	if(LabDoors == 1){
		TextToSpeech(ctxt,2,"Otwarte");
		}
        break;
    case 0:
        TextToSpeech(ctxt,2,"Panel otwierajacy drzwi.\nPotrzeba Cylindra Kodowego,aby go otworzyć");
        break;
	case 1:
        myFX.playStr("res/BGM/BlasterA.mp3");
		setTimeout(TextToSpeech(ctxt,1,"... i otwarte"), 1000)
		ArmoryDoors= 2; 
		Alarm();
        break;
	case 2:
        myFX.playStr("res/BGM/BlasterA.mp3");
		setTimeout(TextToSpeech(ctxt,1,"... i otwarte"), 1000)
		ArmoryDoors = 2; 
		Alarm();
        break;
	case 3:
		if(LabDoors == 0){
        myFX.playStr("res/BGM/Locker.mp3");
		TextToSpeech(ctxt,2,"... i otwarte");
		ArmoryDoors = 1; 
		Alarm();
		}
        break;
	case 4:
		if(LabDoors == 0){
		myFX.playStr("res/BGM/BlipBloop.mp3");
		setTimeout(TextToSpeech(ctxt,1,"... i otwarte"), 1000)
        ArmoryDoors = 1; 
        break; 
		}
	//case 5:
    // TextToSpeech(ctxt,3,"Nie wiem, czy podpalenie potencjalnej drogi ucieczki to dobry pomysł");
     //   break; 	
	 default:
		what(); 
}
}
else if(proximity(250,320,cx,cy,100) == 1 && Animated[3].Stan != 3){
switch(activeItemId) {
    case -1:
	if(Alert == -1){
		//myFX.playStr("res/BGM/StormTrooperHalt.mp3");
		TextToSpeech(ctxt,0,"Trooper: Dowódca narzekał, że znowuz gubiłeś swój klucz\nNa twoim miejscu poszedł bym do biura i\nto wyjaśnił" );
		}
        break;
    case 0:
		TextToSpeech(ctxt,1,"Żołnierz Imperium na warcie");
        break;
	case 1:
		myFX.playStr("res/BGM/blasterA.mp3"); 
		Animated[3].Stan = 3;
		myPCVoice.playStr("res/BGM/StormTrooperDeath.mp3"); 
        break;
	case 2:
		myFX.playStr("res/BGM/blasterB.mp3"); 
        Animated[3].Stan = 3;
		myPCVoice.playStr("res/BGM/StormTrooperDeath.mp3"); 
        break;
	 default:
	 if(Alert == -1){
		myFX.playStr("res/BGM/StormTrooperHuh.mp3");
		TextToSpeech(ctxt,0,"Trooper:Co ja mam z tym zrobić?");
		}
	else{
	what();
	}
	}
}
else{
what();
}
}

function Lab(cx,cy)  //Scena 12
{
if(proximity(390,300,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
		if(Documents == 0){
	 //  myFX.playStr("res/BGM/termo.mp3");	
		myFX.playStr("res/BGM/Success.wav"); 
		TextToSpeech(ctxt,0,"Znalazłeś Plany");
		Documents = 1;
		}
        break;
    case 0:
        TextToSpeech(ctxt,2,"Komputer. Wyświetla plany");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;
	case 3:
        //code block
        break;
	case 4:
        //code block
        break; */
	//case 5:
    // TextToSpeech(ctxt,3,"Szkoda thermy");
    //    break;	
	// default:
	//	what();
}
}
else if(cy>500){
switch(activeItemId) {
    case -1:
      case -1:
        myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/LabWejscie.jpg', 11);
        break;
    case 0:
        TextToSpeech(ctxt,1,"Droga na zewnątrz");
        break;
	case 5:
      break;	
	 default:
		what();
}
}
else{
what();
}
}

function SecArm(cx,cy)  //Scena 13
{
if(cy > 500){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/ArmoryWejscie.jpg', 15);	
        break;
    case 0:
        TextToSpeech(ctxt,2,"Droga na zewnątrz");
        break;	
	 default:
		what();
}
}
else if(proximity(170,310,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
      TextToSpeech(ctxt,2,"Bez Klucza Kodowego nic nie zrobię");
        break;
    case 0:
        TextToSpeech(ctxt,1,"Panel Ochrony, kontroluje alarmy");
        break;
/*	case 1:
        //code block
        break;
	case 2:
        //code block
        break;  */
	case 3:
		myFX.playStr("res/BGM/Locker.mp3");
		setTimeout(function(){
		TextToSpeech(ctxt,1,"Nic z tego, za dobre zabezpiecznia");
		},2000)
        break;
	case 4:
        myFX.playStr("res/BGM/BlipBloop.mp3");
		setTimeout(function(){
		TextToSpeech(ctxt,2,"I tyle, żadnych wiecej alarmów");
		},2000)
		SecComputer= 1;
		if(Alert == 1){
		myMusic.stop(); 
		//myMusic = new sound("res/BGM/SWAmbient.mp3");	//SWMenu
		myMusic.play(); 
		Alert= 0;
		}
        break; 
	//case 5:
    // TextToSpeech(ctxt,3,"Szkoda thermy");
    //    break;	
	 default:
		what();
}
}
else if(proximity(600,310,cx,cy,proxy) == 1 && Items[5].Stan == 0){  //E11
switch(activeItemId) {
    case -1:
		if(Items[5].Stan == 0 ){
		myFX.playStr("res/BGM/PickUp.wav"); 
		Equipment.push(Items[5]);
		Items[5].Stan = 1;
		}
        break;
    case 0:
	if(Items[5].Stan == 0 ){	
	TextToSpeech(ctxt,1,"Termodetor");
	setTimeout(function(){
		TextActive = 0;
		TextToSpeech(ctxt,2,"Niezbyt finezyjny, ale może się przydać");
		},2000)
	}
        break;
	 default:
		what();
}
}
else{
what();
}
}

function Workshop(cx,cy)  //Scena 14
{
if(cy > 500){
switch(activeItemId) {
    case -1:
		myFX.playStr("res/BGM/BlastDoor.mp3");
		SceneChng('res/Backgrounds/WorkshopWejscie.jpg', 9);	
        break;
    case 0:
        TextToSpeech(ctxt,2,"Droga na zewnątrz");
        break;	
	case 5:
        break;	
	 default:
		what();
}
}
else if(proximity(370,350,cx,cy,proxy) == 1){
switch(activeItemId) {
    case -1:
	if(Documents == 0){
      TextToSpeech(ctxt,2,"Nie odlecę stąd bez tych planów");
	  }
	 else if(Documents == 1){
      TextToSpeech(ctxt,2,"Pora wiać");
	  setTimeout(function(){
		TextActive = 0; 
		win();
		},2000)
	  }
        break;
    case 0:
        TextToSpeech(ctxt,1,"Tie Fighter. Praktycznie gotowy do lotu");
        break;
	case 3:
		myFX.playStr("res/BGM/Locker.mp3");
		TextToSpeech(ctxt,1,"Nie ma tu czego naprawiać");	
        break;	
	 default:
		what();
}
}
else if(proximity(140,370,cx,cy,proxy) == 1 && Items[3].Stan == 0){  //E11
switch(activeItemId) {
    case -1:
		if(Items[3].Stan == 0 ){
		myFX.playStr("res/BGM/PickUp.wav"); 
		Equipment.push(Items[3]);
		Items[3].Stan = 1;
		}
        break;
    case 0:
	if(Items[3].Stan == 0 ){	
	TextToSpeech(ctxt,2,"Hydroklucz. Uniwersalne narzędzie popularne wsród mechaników\ni włamywaczy ");
	}
        break;
	 default:
		what();
}
}
else{
what();
}
}





