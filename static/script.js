var getrandom = function()
{
	return Math.floor(Math.random()*(3-0+1)+0);
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
	for(var i=0 ; i<=3 ; i++){
		for(var j=0 ; j<=3 ; j++){
			
			if(v.rows[i].cells[j].innerHTML!=" "){

                 var mycolor=v.rows[i].cells[j].innerHTML;
                 switch(mycolor){
                 case "2": v.rows[i].cells[j].style.backgroundColor="#EEE4DA";
                       break;
                 case "4":v.rows[i].cells[j].style.backgroundColor="#EDE0C8"
                 break;
                 case "8":v.rows[i].cells[j].style.backgroundColor="#F2B179"
                 break;
                 case "16":v.rows[i].cells[j].style.backgroundColor="#F59563"
                 break;
                 case "32":v.rows[i].cells[j].style.backgroundColor="#F67C5F"
                 break;
                 case "64":v.rows[i].cells[j].style.backgroundColor="#F65E3B"
                 break
                 default:
                 v.rows[i].cells[j].style.backgroundColor="#CDC1B4"
                 




} 
				
			}
			else
			{
				v.rows[i].cells[j].style.backgroundColor="#CDC1B4"
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
		


	}}

}


assign(v);
 }

if(event.keyCode == 38 || k==="up"){
	console.log("in up");
for(var l=0 ; l<=3 ; l++){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
	for(var k=0 ; k<=3 ; k++){
		if(v.rows[l].cells[k].innerHTML!=" "){
         console.log("CALLED IT ");
         console.log("here l" , l);
         console.log("here k" , k);

		moveup(l,k,v,s);


	}}

}

assign(v);


	}




if(event.keyCode == 39 || k==="right"){
	console.log("in right");
	for(var l=3 ; l>=0 ; l--){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
	for(var k=3 ; k>=0 ; k--){
		if(v.rows[l].cells[k].innerHTML!=" "){
         

		moveright(l,k,v,s);


	}}

}

assign(v);


}


if(event.keyCode == 37 || k==="left"){
	console.log("in left");
	for(var l=0 ; l<=3 ; l++){  //Just did some work with replacing random variable on only a blank space and down is almost complete..
	for(var k=0 ; k<=3 ; k++){
		if(v.rows[l].cells[k].innerHTML!=" "){
         

		moveleft(l,k,v,s);


	}}

}

assign(v);




}}

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
	console.log("replaced");}
	
		

	
	i++;
}
}

var moveup = function(i , j, v,s){
while(i!=0){
		console.log("I" , i);
		
	if(v.rows[i].cells[j].innerHTML == v.rows[i-1].cells[j].innerHTML){
		console.log("in if");
		v.rows[i-1].cells[j].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i-1].cells[j].innerHTML);
		v.rows[i].cells[j].innerHTML=" ";
		s.innerHTML=parseInt(s.innerHTML) + Number(v.rows[i-1].cells[j].innerHTML);
		break;
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

	}
	else if(v.rows[i].cells[j+1].innerHTML == " "){
		v.rows[i].cells[j+1].innerHTML=v.rows[i].cells[j].innerHTML ;
		v.rows[i].cells[j].innerHTML=" ";
	console.log("replaced");}
	j++;
}

}

var moveleft = function(i , j , v,s){
	while(j!=0){
		console.log("I" , i);
		
	if(v.rows[i].cells[j].innerHTML == v.rows[i].cells[j-1].innerHTML){
		console.log("in if");
		v.rows[i].cells[j-1].innerHTML  = parseInt(v.rows[i].cells[j].innerHTML)  + parseInt(v.rows[i].cells[j-1].innerHTML);
		v.rows[i].cells[j].innerHTML=" ";
		s.innerHTML=parseInt(s.innerHTML) + Number(v.rows[i].cells[j-1].innerHTML);
		break;
		console.log("moved");

	}
	else if(v.rows[i].cells[j-1].innerHTML == " "){
		v.rows[i].cells[j-1].innerHTML=v.rows[i].cells[j].innerHTML ;
		v.rows[i].cells[j].innerHTML=" ";
	console.log("replaced");}

	j--;
}


}

var gameover=function(){
	var k = 0;
	console.log("k = ", k);
	var v = document.querySelector("#table");
	for(var i=0 ; i<=3 ; i++){
       for(var j =0 ; j<=3 ; j++){
       	if(v.rows[i].cells[j].innerHTML!=v.rows[i+1].cells[j].innerHTML && v.rows[i].cells[j].innerHTML!=v.rows[i].cells[j+1].innerHTML
		&& v.rows[i+1].cells[j].innerHTML!=" " && v.rows[i].cells[j+1].innerHTML!=" "){
		k=k+1;
	    console.log("k = ", k);
	}
       }

	}
	if(k==4){
		console.log("GAME OVER");
	}
	
}








window.addEventListener('load' , startthis);
