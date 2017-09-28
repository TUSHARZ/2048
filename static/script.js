var getrandom = function()
{


	return Math.floor(Math.random()*(2-0+1)+0);




}
var assign = function(){
	var v = document.querySelector("#table");
	var randii=getrandom();
var randjj=getrandom();
if(v.rows[randii].cells[randjj].innerHTML==" ")  {
	v.rows[randii].cells[randjj].innerHTML="2";
}
else{
	assign();

}
	

}
var randi;
var randj;
function startthis(){
	var v = document.querySelector("#table");

	var randi= getrandom();
		randj= getrandom();
		randi2= getrandom();
		var randj2= getrandom();
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			 v.rows[i].cells[j].innerHTML = " ";
			
		}
	}

	 var tr=v.rows[randi].cells[randj].innerHTML="2";
     var td=v.rows[randi2].cells[randj2].innerHTML="4";

    
	document.addEventListener("keydown", function(){
		makemove(randi,randj);
	});




}

var print = function(){
	console.log("Its printed");
}

var makemove = function(i,j){
	var v = document.querySelector("#table");
	


	console.log(event)
	


if(event.keyCode === 40){
	console.log("in down");
	console.log("i = ", i);
	console.log("j = ", j);
console.log(v.rows[i].cells[j].innerHTML);
console.log("this, innerHTML = ", this.innerHTML);

for(var l=2 ; l>=0 ; l--){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
	for(var k=2 ; k>=0 ; k--){
		if(v.rows[l].cells[k].innerHTML!=" "){
         

		movedown(l,k,v);


	}}

}



assign(v);
 }

if(event.keyCode == 38){
	console.log("in up");
for(var l=0 ; l<=2 ; l++){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
	for(var k=0 ; k<=2 ; k++){
		if(v.rows[l].cells[k].innerHTML!=" "){
         console.log("CALLED IT ");
         console.log("here l" , l);
         console.log("here k" , k);

		moveup(l,k,v);

	}}

}

assign(v);

	}




if(event.keyCode == 39){
	console.log("in right");
	for(var l=2 ; l>=0 ; l--){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
	for(var k=2 ; k>=0 ; k--){
		if(v.rows[l].cells[k].innerHTML!=" "){
         

		moveright(l,k,v);


	}}

}

assign(v);


}


if(event.keyCode == 37){
	console.log("in left");
	for(var l=0 ; l<=2 ; l++){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
	for(var k=0 ; k<=2 ; k++){
		if(v.rows[l].cells[k].innerHTML!=" "){
         

		moveleft(l,k,v);


	}}

}

assign(v);




}}

var movedown=function(i,j,v){
	while(i!=2){
		console.log("I" , i);
		console.log("J", j);
		
	if(v.rows[i].cells[j].innerHTML == v.rows[i+1].cells[j].innerHTML){
		console.log("in if");
		v.rows[i+1].cells[j].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i+1].cells[j].innerHTML);
		v.rows[i].cells[j].innerHTML=" ";
		
		console.log("moved");

	}
	else if(v.rows[i+1].cells[j].innerHTML == " "){
		v.rows[i+1].cells[j].innerHTML=v.rows[i].cells[j].innerHTML ;
		v.rows[i].cells[j].innerHTML=" ";
	console.log("replaced");}
	
		

	
	i++;
}
}

var moveup = function(i , j, v){
while(i!=0){
		console.log("I" , i);
		
	if(v.rows[i].cells[j].innerHTML == v.rows[i-1].cells[j].innerHTML){
		console.log("in if");
		v.rows[i-1].cells[j].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i-1].cells[j].innerHTML);
		v.rows[i].cells[j].innerHTML=" ";
		
		console.log("moved");

	}
	else{
		if(v.rows[i-1].cells[j].innerHTML==" "){
		v.rows[i-1].cells[j].innerHTML=v.rows[i].cells[j].innerHTML ;
		v.rows[i].cells[j].innerHTML=" ";}
		else{
			v.rows[i].cells[j].innerHTML = v.rows[i].cells[j].innerHTML;

		}
		console.log("replaced");

	}
	i--;
}





}

var moveright = function(i ,j,v){
	while(j!=2){
		console.log("I" , i);
		
	if(v.rows[i].cells[j].innerHTML == v.rows[i].cells[j+1].innerHTML){
		console.log("in if");
		v.rows[i].cells[j+1].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i].cells[j+1].innerHTML);
		v.rows[i].cells[j].innerHTML=" ";
		
		console.log("moved");

	}
	else if(v.rows[i].cells[j+1].innerHTML == " "){
		v.rows[i].cells[j+1].innerHTML=v.rows[i].cells[j].innerHTML ;
		v.rows[i].cells[j].innerHTML=" ";
	console.log("replaced");}
	j++;
}

}

var moveleft = function(i , j , v){
	while(j!=0){
		console.log("I" , i);
		
	if(v.rows[i].cells[j].innerHTML == v.rows[i].cells[j-1].innerHTML){
		console.log("in if");
		v.rows[i].cells[j-1].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i].cells[j-1].innerHTML);
		v.rows[i].cells[j].innerHTML=" ";
		
		console.log("moved");

	}
	else if(v.rows[i].cells[j-1].innerHTML == " "){
		v.rows[i].cells[j-1].innerHTML=v.rows[i].cells[j].innerHTML ;
		v.rows[i].cells[j].innerHTML=" ";
	console.log("replaced");}
	j--;
}


}




window.addEventListener('load' , startthis);
