
var ominoX = 0; 
var ominoY = 0;
var armaX = 9; 
var armaY = 9;
var ostacoloX=4;
var ostacoloY=4;
var energia =0;
var PORTALE1_X=3;    
var PORTALE1_Y=2;
var PORTALE2_X=7;
var PORTALE2_Y=17;
// costanti e parametri per la configurazione del gioco
var PILLOLA =180;
var BOTTONE="button";
var DELTA_ENERGIA =10;
var PORTALE=500;
var PORTALE1="portal1";       
var PORTALE2="portal2";
var SFONDO =900;
var ARMA="gun";
var FUNGO=2450;
var RECINTO=29;
var PRINCIPESSA=121;
var CHIAVE="key";
var NEMICO="ninja";
var ostacolo="30"; 
var buconero="13";
var omino = "o1";
var ominoConSpada = "16";
var pathImg = "img1/";
// dichiarazione variabili di lavoro
var i=0;
var j=0;
var countPillole = 0;
var randomX=0;
var randomY=0;
// numero di righe e numero di colonne
var R = 10; 
var C = 20;
var BOTTONE_X=0;
var BOTTONE_Y=19; 
var disponibilitaArma=false;
var pillolaAnimazioneX=1;
var pillolaAnimazioneY=1;
var degrees=0;

var piano = new Array();
for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaPiano(){
    for (var i=0; i<R; i++){
        for (var j=0; j<C;j++){
            disegnaCella(i,j);
        }
    }
    disegnaCellaSpecialePng(ominoX,ominoY,omino); 
    disegnaCellaSpeciale(armaX,armaY,ARMA);
	piano[BOTTONE_X][BOTTONE_Y]=BOTTONE;
	disegnaCellaSpecialePng(BOTTONE_X,BOTTONE_Y,BOTTONE);
	piano[armaX][armaY]=ARMA;
	disegnaCellaSpecialePng(armaX,armaY,ARMA);
	piano[PORTALE1_X][PORTALE1_Y]=PORTALE1;
	disegnaCellaSpecialePng(PORTALE1_X,PORTALE1_Y,PORTALE1);
	piano[PORTALE2_X][PORTALE2_Y]=PORTALE2;
	disegnaCellaSpecialePng(PORTALE2_X,PORTALE2_Y,PORTALE2);
} 

function generaFungo(){
	generaOggetto(FUNGO);
}

function generaPillole(){
    countPillole ++; 
	generaOggetto(PILLOLA);
}

function generaOstacolo(){
	generaOggetto(ostacolo);
}

function generaBuconero(){
	generaOggetto(buconero);
}

function generaOggetto(valOggetto){
	do{ 
	rx = Math.round(R*Math.random()); 
	ry = Math.round(C*Math.random());
	}
	while(piano[rx][ry]!=SFONDO);
	pillolaAnimazioneX=rx;
	pillolaAnimazioneY=ry;
	if(piano[rx][ry]==SFONDO){
		piano[rx][ry] = valOggetto; 
		disegnaCellaPng(rx,ry);
	}
	else{
		generaOggetto(valOggetto);
	}
}

function disegnaCella(i,j){
    var id = "c"+i+"_"+j;
    var src = pathImg + piano[i][j] + ".jpg";
    document.getElementById(id).src= src;
} 

function disegnaCellaPng(i,j){
    var id = "c"+i+"_"+j;
    var src = pathImg + piano[i][j] + ".png";
    document.getElementById(id).src= src;
} 

function disegnaCellaSpeciale(i,j,valore) {
    var id = "c"+i+"_"+j;
    var src = pathImg + valore + ".jpg"; 

    document.getElementById(id).src=src;   
} 

function disegnaCellaSpecialePng(i,j,valore) {
    var id = "c"+i+"_"+j;
    var src = pathImg + valore + ".png"; 

    document.getElementById(id).src=src;   
} 

function disegnaOmino() {
    disegnaCellaSpecialePng(ominoX,ominoY,omino);
} 


var width = 100/countPillole;
function barraEnergia() {
   var elem = document.getElementById("energy");   
    if (energia == 1000) { 
	
    }  
	else {
          energia++;  
          elem.style.width = energia+ '%';
    }
}

var width = 90;
setInterval("barraClessidra()",4*120*1000/100);

function barraClessidra() {
  var elem = document.getElementById("clessidra");   
   if (width == 0) {
        gameOver();
        clearInterval(id);
    } else {
        width--; 
        elem.style.width = width + '%'; 
    }
} 

function rotateAnimationPillola(){
    var id = "c"+pillolaAnimazioneX+"_"+pillolaAnimazioneY;
    document.getElementById(id).style.
    degrees++;
    if(degrees > 359){
        degrees = 1;
    }    
}

setInterval("rotateAnimationPillola()",10);



function avviaGioco(){
	disegnaPiano();	
}







