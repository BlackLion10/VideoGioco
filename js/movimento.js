//muovere l omino con il pos e la variabile delta in animazione
var contatoreDx=0;
var contatoreSx=10;
var contatoreGiu=0;
var contatoreSu=0;

function checkKeyDown(e) {
    e = e || window.event;
    switch(e.keyCode){
    case 39: setTimeout("destra()",100); break;
    case 40: setTimeout("giu()",100); break;
    case 37:  setTimeout("sinistra()",100);  break;
    case 38: setTimeout("su()",100);  break;    
    }    
}
function checkKeyPress (event){
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
    
    switch(chCode){
        case 100: setTimeout("destra()",100); break;
        case 115: setTimeout("giu()",100); break;
        case 97:  setTimeout("sinistra()",100);  break;
        case 119: setTimeout("su()",100);  break;
    } 
}

function chiaveNonDisponibile(){
    piano[7][1]=SFONDO;
	disegnaCella(7,1);
}
function chiaveDisponibile(){
    piano[7][1]=CHIAVE;
	disegnaCellaSpecialePng(7,1,CHIAVE);
}


function controllaCella(x,y){
	
    switch (piano[x][y]){

    case ARMA:
        var audio=new Audio("pistola.mp3");
        audio.play();
		disponibilitaArma=true;
        //omino = ominoConSpada;
        piano[x][y] = SFONDO; 
		//NOTA: da disegnare l'arma disponibile in basso nello schermo per indicare all utente che è in possesso
		
        return true;
	case BOTTONE:
		chiaveDisponibile();
		setTimeout("chiaveNonDisponibile()",3000);
		return true;    
    case CHIAVE: 
		energia = energia + 500;
		piano[x][y] = SFONDO;
		return true;		
    case ostacolo: 
            return false;
    case RECINTO:
            return false;
    case PILLOLA:
        var audio=new Audio("stella.mp3");
        audio.play();
        energia = energia + DELTA_ENERGIA;
        document.getElementById("energy").innerHTML=energia;
        piano[x][y] = SFONDO;
        countPillole--;
		barraEnergia();
        if (countPillole==0){
            var audio=new Audio("vittoria.mp3");
			audio.play();
            document.getElementById("energy").innerHTML="<img src=\"18.jpg\" >"+"<img src=\"51.jpg\" >"+"<img src=\"18.jpg\" >";
            }
            
            return true;    
    case FUNGO:
        energia = energia - DELTA_ENERGIA;
        document.getElementById("energy").innerHTML=energia;
        piano[x][y] = SFONDO;
		if(energia<=0){
			gameOver();
		}
		var audio=new Audio("fungo.mp3");
		audio.play();
            return true;            
    case buconero:
            gameOver();
            return true;
    case PORTALE1: 
        disegnaCella(ominoX,ominoY);
        ominoX = PORTALE2_X; 
        ominoY = PORTALE2_Y;
        disegnaOmino();
        var audio=new Audio("portale.mp3");
        audio.play();
            return false;  
    case PORTALE2:
            disegnaCella(ominoX,ominoY);
            ominoX = PORTALE1_X; 
            ominoY = PORTALE1_Y; 
            disegnaOmino();
            return false; 
    default: 
            return true; 
    }
}

function sposta (daX,daY, aX,aY){
    if (controllaCella(aX, aY)){  
        var daSrc = "c" +daX+"_"+daY; 
        var aSrc  = "c" + aX+"_"+ aY;
        console.log(daSrc + " " +aSrc);
        document.getElementById(daSrc).src = pathImg +  piano[daX][daY] + ".jpg";
        ominoX= aX;
        ominoY= aY;
        disegnaOmino();
    }
}


function su(){

    var newX = (ominoX -1 + R)%R; 
    sposta (ominoX,ominoY, newX,ominoY);
	contatoreSu++;
	posizioneCorrente="jump"+contatoreSu;
	disegnaCellaSpecialePng(newX,ominoY,posizioneCorrente);
	if(contatoreSu==9){
		contatoreSu=0;
	}	

}

function sinistra(){
    var newY = (ominoY -1 + C)%C; 
    sposta (ominoX,ominoY, ominoX,newY);
	contatoreSx++;
	posizioneCorrente="run"+contatoreSx;
	disegnaCellaSpecialePng(ominoX,newY,posizioneCorrente);
	if(contatoreSx==19){
		contatoreSx=10;
	}	
}

function giu(){

    var newX = (ominoX + 1 + R)%R; 
    sposta (ominoX,ominoY, newX,ominoY);
	contatoreGiu++;
	posizioneCorrente="jump"+contatoreGiu;
	disegnaCellaSpecialePng(newX,ominoY,posizioneCorrente);
	if(contatoreGiu==9){
		contatoreGiu=0;
	}	
}

function destra(){
    var newY = (ominoY + 1 + C)%C;
	sposta (ominoX,ominoY, ominoX,newY);
	contatoreDx++;
	posizioneCorrente="run"+contatoreDx;
	disegnaCellaSpecialePng(ominoX,newY,posizioneCorrente);
	if(contatoreDx==9){
		contatoreDx=0;
	}
}

function gameOver(){
    document.getElementById("energy").innerHTML="<img src=\"22.jpg\" >";
    setTimeout( function refreshPage(){
    window.location.reload();},3000); 
    var audio=new Audio("gameOver.mp3");
    audio.play();            
}

function rotateAnimationPillola(){
    var id = "c"+pillolaAnimazioneX+"_"+pillolaAnimazioneY;
    document.getElementById(id).style.transform = "rotateY("+degrees+"deg)";
    degrees++;      
}



/*
var x = 0;
var y = 0;
var z = 0;
var j = 0;

function myMoveFunction() {
	document.getElementById("demo").innerHTML = z="+10 punti!";  
    document.getElementById("demo1").innerHTML = z=" passaggio da un portale all'altro";
    document.getElementById("demo2").innerHTML = z="-10 punti!";
    document.getElementById("demo3").innerHTML = z="permette di uccidere il nemico";
}
*/
