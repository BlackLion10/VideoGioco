var OMINO="omino";
var distanzaOmino;
var newX;
var newY;

var contatoreNemicoDx=1;
var contatoreNemicoSx=10;
var contatoreNemicoGiu=0;
var contatoreNemicoSu=0;

function Cacciatore(x,y,nome){
	this.x=x;
	this.y=x;
	this.nome=nome;
}

c= new Cacciatore(8,17,NEMICO);
setInterval("c.controllaDintorni()",50);

setInterval("c.spostaNemico()",800);
	
Cacciatore.prototype.spostaNemico= function(){
 
		var rand= Math.round(5*Math.random());
		var precX = this.x;
		var precY = this.y;
		if (rand==0) { this.x=(this.x -1 + R)%R;
			contatoreNemicoSu++;
			posizioneCorrente="ninja"+contatoreNemicoSu;
			disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
			if(contatoreNemicoSu==10){
				contatoreNemicoSu=0;
			}} 
		if (rand==1) { this.x=(this.x -1 + R)%R;
			contatoreNemicoSu++;
			posizioneCorrente="ninja"+contatoreNemicoSu;
			disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
			if(contatoreNemicoSu==10){
				contatoreNemicoSu=0;
			}}		
		if (rand==2) {this.x=(this.x +1 + R)%R;
			contatoreNemicoGiu++;
			posizioneCorrente="ninja"+contatoreNemicoGiu;
			disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
			if(contatoreNemicoGiu==10){
				contatoreNemicoGiu=0;
			}}

		if (rand==3) { this.y=(this.y -1 + C)%C;
			contatoreNemicoSx++;
			posizioneCorrente="ninja"+contatoreNemicoSx;
			disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
			if(contatoreNemicoSx==20){
				contatoreNemicoSx=10;
			}} 
		if (rand==4) { this.y=(this.y +1 + C)%C;	
			contatoreNemicoDx++;
			posizioneCorrente="ninja"+contatoreNemicoDx;
			disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
			if(contatoreNemicoDx==10){
				contatoreNemicoDx=0;
			}} 
		if (rand==5) {  this.y=(this.y +1 + C)%C;
			contatoreNemicoDx++;
			posizioneCorrente="ninja"+contatoreNemicoDx;
			disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
			if(contatoreNemicoDx==10){
				contatoreNemicoDx=0;
			}} 
		
		newX=this.x;
		newY=this.y;
		
		distanzaX=ominoX-this.x;
	    distanzaY=this.y-ominoY;

		
		document.getElementById("c"+precX+"_"+precY).src   = pathImg +  piano[precX][precY ] + ".jpg"; 
		
			if(Math.sqrt(Math.pow(distanzaX, 2) + Math.pow(distanzaY, 2))<5){

				var precX = this.x;
				var precY = this.y;
				
				var dir = Math.round(Math.random());

				if (this.y < ominoY && dir) { this.y ++;
					contatoreNemicoDx++;
					posizioneCorrente="ninja"+contatoreNemicoDx;
					disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
					if(contatoreNemicoDx==10){
						contatoreNemicoDx=0;
					}} 
				else 
				if (this.y > ominoY && dir) { this.y --; 
					contatoreNemicoSx++;
					posizioneCorrente="ninja"+contatoreNemicoSx;
					disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
					if(contatoreNemicoSx==20){
						contatoreNemicoSx=10;
					}} 
				else

				if (this.x < ominoX && !dir) { this.x ++;
					contatoreNemicoGiu++;
					posizioneCorrente="ninja"+contatoreNemicoGiu;
					disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
					if(contatoreNemicoGiu==10){
						contatoreNemicoGiu=0;
					}}
				else
				if (this.x > ominoX && !dir) { this.x --;
					contatoreNemicoSu++;
					posizioneCorrente="ninja"+contatoreNemicoSu;
					disegnaCellaSpecialePng(this.x,this.y,posizioneCorrente);
					if(contatoreNemicoSu==10){
						contatoreNemicoSu=0;
					}} 


				newX=this.x;
				newY=this.y;
				
				document.getElementById("c"+precX+"_"+precY).src   = pathImg +  piano[precX][precY ]  + ".jpg";
				document.getElementById("c"+newX+"_"+newY).src    = pathImg + this.nome + ".png";
				
				if(disponibilitaArma && this.x == ominoX && this.y == ominoY){
					win();
				}	

				if (this.x == ominoX && this.y == ominoY ){
					gameOver();
				}
				console.log(ostacolo);
				if (piano[newX][newY]!=ostacolo){
					this.x = newX; 
					this.y = newY;
				}
			}

		if (piano[this.x][this.y]!=ostacolo){
			this.x = newX; 
			this.y = newY;
		}
		else{
			spostaNemico();
		}
		if (this.x == ominoX && this.y == ominoY ){
				gameOver();
		}	
}

Cacciatore.prototype.controllaDintorni=function(){

	switch(piano[this.x][this.y]){

		case FUNGO:
			piano[this.x][this.y]=FUNGO;
	}
}

	



