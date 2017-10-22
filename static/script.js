var getrandom = function() {
	return Math.floor(Math.random()*(3-0+1)+0);
}

var assign = function(){
	var v = document.querySelector("#table");
	var randii=getrandom();
	var randjj=getrandom();
	if(v.rows[randii].cells[randjj].innerHTML==" ")  {
		v.rows[randii].cells[randjj].innerHTML="2";
	} else if (!isGameOver()){
		assign();
	} else {
		alert("GAME OVER!");
		showGameOver();
		return;
	}
	//switching colors
	for(var i=0 ; i<=3 ; i++){
		for(var j=0 ; j<=3 ; j++){
			if(v.rows[i].cells[j].innerHTML!=" "){
				var mycolor=v.rows[i].cells[j].innerHTML;
				switch(mycolor){
					case "2": 
						v.rows[i].cells[j].style.backgroundColor="#EEE4DA";
						break;
					case "4":
						v.rows[i].cells[j].style.backgroundColor="#EDE0C8";
						break;
					case "8":
						v.rows[i].cells[j].style.backgroundColor="#F2B179";
						break;
					case "16":
						v.rows[i].cells[j].style.backgroundColor="#F59563";
						break;
					case "32":
						v.rows[i].cells[j].style.backgroundColor="#F67C5F";
						break;
					case "64":
						v.rows[i].cells[j].style.backgroundColor="#F65E3B";
						break;
					default:
						v.rows[i].cells[j].style.backgroundColor="#CDC1B4";
				} 
			} else {
				v.rows[i].cells[j].style.backgroundColor="#CDC1B4";
			}
		}
	}
}

var newg=function(){
	console.log("in");
	window.location.reload(false);
}

var seperate = function(i){
	myrand=getrandom();
	if(myrand==i){
		seperate();
	}
	console.log("myrand = ",myrand );
	console.log("given = ",i );
	return myrand;
}
//called first

function startthis(){
	var v = document.querySelector("#table");
	var s = document.querySelector("#score");
	var r = document.querySelector('#reload');
	var k=document.getElementById("keys")
	var up=k.getElementsByTagName("td")[1];
	var left=k.getElementsByTagName("td")[3];
	var right=k.getElementsByTagName("td")[5];
	var down=k.getElementsByTagName("td")[7];


	s.innerHTML=0;

	var randi= getrandom();
	var randj= getrandom();
	var randi2= seperate(randi);
	var randj2= seperate(randj);
	for(var i=0;i<=3;i++){
		for(var j=0;j<=3;j++){
			 v.rows[i].cells[j].innerHTML = " ";
		}
	}

	var tr=v.rows[randi].cells[randj].innerHTML="2";
	v.rows[randi].cells[randj].style.backgroundColor="#EEE4DA";
  var td=v.rows[randi2].cells[randj2].innerHTML="4";
  v.rows[randi2].cells[randj2].style.backgroundColor="#EDE0C8";

	r.addEventListener('click' ,newg);
	up.addEventListener('click' ,function(){
		makemove(randi,randj,"up")
	});
		down.addEventListener('click' ,function(){
		makemove(randi,randj,"down")
	});
		left.addEventListener('click' ,function(){
		makemove(randi,randj,"left")
	});
			right.addEventListener('click' ,function(){
		makemove(randi,randj,"right")
	});
	document.addEventListener("keydown", function(){
		makemove(randi,randj);
	});
}

var print = function(){
	console.log("Its printed");
}

var makemove = function(i,j,k){
	var v = document.querySelector("#table");
	var s = document.querySelector("#score");


	console.log(event)
	
	if(event.keyCode === 40 || k==="down"){
		console.log("in down");
		console.log("i = ", i);
		console.log("j = ", j);
		console.log(v.rows[i].cells[j].innerHTML);
		console.log("this, innerHTML = ", this.innerHTML);

		for(var l=3 ; l>=0 ; l--){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
			for(var k=3 ; k>=0 ; k--){
				if(v.rows[l].cells[k].innerHTML!=" "){
					movedown(l,k,v,s);
				}
			}
		}
		assign(v);
	 } else if(event.keyCode == 38 || k==="up"){
		console.log("in up");
		for(var l=0 ; l<=3 ; l++){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
			for(var k=0 ; k<=3 ; k++){
				if(v.rows[l].cells[k].innerHTML!=" "){
					console.log("CALLED IT ");
					console.log("here l" , l);
					console.log("here k" , k);

					moveup(l,k,v,s);
				}
			}
		}
		assign(v);
	} else if(event.keyCode == 39 || k==="right"){
		console.log("in right");
		for(var l=3 ; l>=0 ; l--){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
			for(var k=3 ; k>=0 ; k--){
				if(v.rows[l].cells[k].innerHTML!=" "){
					moveright(l,k,v,s);
				}
			}
		}
		assign(v);
	} else if(event.keyCode == 37 || k==="left"){
		console.log("in left");
		for(var l=0 ; l<=3 ; l++){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
			for(var k=0 ; k<=3 ; k++){
				if(v.rows[l].cells[k].innerHTML!=" "){
					moveleft(l,k,v,s);
				}
			}
		}
		assign(v);
	}
}

var movedown=function(i,j,v,s){
	while(i!=3){
		console.log("I" , i);
		console.log("J", j);
		
		if(v.rows[i].cells[j].innerHTML == v.rows[i+1].cells[j].innerHTML){
			console.log("in if");
			v.rows[i+1].cells[j].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i+1].cells[j].innerHTML);
			v.rows[i].cells[j].innerHTML=" ";
			s.innerHTML=parseInt(s.innerHTML) + Number(v.rows[i+1].cells[j].innerHTML) ;
			break;
			console.log("moved");

		}
		else if(v.rows[i+1].cells[j].innerHTML == " "){
			v.rows[i+1].cells[j].innerHTML=v.rows[i].cells[j].innerHTML ;
			v.rows[i].cells[j].innerHTML=" ";
			console.log("replaced");
		}
		i++;
	}
}

var moveup = function(i , j, v,s){
	while(i!=0){
		console.log("I" , i);
		
		if (v.rows[i].cells[j].innerHTML == v.rows[i-1].cells[j].innerHTML) {
			console.log("in if");
			v.rows[i-1].cells[j].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i-1].cells[j].innerHTML);
			v.rows[i].cells[j].innerHTML=" ";
			s.innerHTML=parseInt(s.innerHTML) + Number(v.rows[i-1].cells[j].innerHTML);
			break;
			console.log("moved");

		} else {
			if (v.rows[i-1].cells[j].innerHTML==" ") {
				v.rows[i-1].cells[j].innerHTML=v.rows[i].cells[j].innerHTML ;
				v.rows[i].cells[j].innerHTML=" ";
			} else {
				v.rows[i].cells[j].innerHTML = v.rows[i].cells[j].innerHTML;
			}
			console.log("replaced");
		}
		i--;
	}
}

var moveright = function(i ,j,v,s){
	while(j!=3){
		console.log("I" , i);
		
		if(v.rows[i].cells[j].innerHTML == v.rows[i].cells[j+1].innerHTML){
			console.log("in if");
			v.rows[i].cells[j+1].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i].cells[j+1].innerHTML);
			v.rows[i].cells[j].innerHTML=" ";
			s.innerHTML=parseInt(s.innerHTML) + Number(v.rows[i].cells[j+1].innerHTML);
			break;
			console.log("moved");

		} else if(v.rows[i].cells[j+1].innerHTML == " ") {
			v.rows[i].cells[j+1].innerHTML=v.rows[i].cells[j].innerHTML ;
			v.rows[i].cells[j].innerHTML=" ";
			console.log("replaced");
		}
		j++;
	}
}

var moveleft = function(i , j , v,s){
	while(j!=0){
		console.log("I" , i);
		
		if (v.rows[i].cells[j].innerHTML == v.rows[i].cells[j-1].innerHTML) {
			console.log("in if");
			v.rows[i].cells[j-1].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i].cells[j-1].innerHTML);
			v.rows[i].cells[j].innerHTML=" ";
			s.innerHTML=parseInt(s.innerHTML) + Number(v.rows[i].cells[j-1].innerHTML);
			break;
			console.log("moved");
		} else if (v.rows[i].cells[j-1].innerHTML == " ") {
			v.rows[i].cells[j-1].innerHTML=v.rows[i].cells[j].innerHTML ;
			v.rows[i].cells[j].innerHTML=" ";
			console.log("replaced");
		}
		j--;
	}
}

var isGameOver = function(){
	// get all the cells
	var cells = document.querySelectorAll("#table td");
	// run through all the cells
	for(var i = 0; i < cells.length; i++){
		cell = cells[i]; // get the specific cell
		if (cell.innerText === "") { // check if the cell is blank
			return false; // blank cell means that the game is not over
		}
		// check cell on top
		else if ( i > 3 && cells[i - 4].innerText === cell.innerText ) { // all cells less then 4 are on the first row and do not have a row above them
			return false; // cell on top (index - 4) is the same then they can be merged so game is not over
		}
		// check cell on bottom
		else if ( i < 12 && cells[i + 4].innerText === cell.innerText ) { // all indexes above 11 are on the bottom row with no row below them
			return false; // cell on bottom is the same (index + 4) then they can be merged and the game is not over
		}
		// check cell on left
		else if ( ( i != 0 && i != 4 && i == 8 && i == 12) && cells[i - 1].innerText === cell.innerText) { // index 0, 4, 8 and 12 are on the left edge so do not run this check if that is the index
			return false; // cell on the left is the same then they can be merged and game is not over
		}
		// check cell on right
		else if ( (i != 3 && i != 7 && i != 11 && i != 15) && cells[i + 1].innerText === cell.innerText ) { // index 3, 7, 11 and 15 are on the right edge so if it is one of thouse do not run this check 
			return false; // cell on the right is the same so they can be merged and the game is not over
		}
	}
	return true;
}

var showGameOver = function() {
	document.getElementById("show-game-over").style.display = "block";
}

// set onload event listenter to the startthis function
window.addEventListener('load' , startthis);
