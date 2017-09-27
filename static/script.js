var getrandom = function()
{


	return Math.floor(Math.random()*(2-0+1)+0);




}
function startthis(){
	var v = document.querySelector("#table");

	var randi= getrandom();
		var randj= getrandom();
		var randi2= getrandom();
		var randj2= getrandom();
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			 v.rows[i].cells[j].innerHTML = "dud";
			
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
	var randi=getrandom();
	var randj=getrandom();
	v.rows[randi].cells[randj].innerHTML="2";


	console.log(event)
	


if(event.keyCode === 40){
	console.log("in down");
	console.log("i = ", i);
	console.log("j = ", j);
console.log(v.rows[i].cells[j].innerHTML);
console.log("this, innerHTML = ", this.innerHTML);

	while(i!=2){
		console.log("in while");
		if(v.rows[i].cells[j].innerHTML != "dud"){
	if(v.rows[i].cells[j].innerHTML == v.rows[i+1].cells[j].innerHTML){
		console.log("in if");
		v.rows[i+1].cells[j].innerHTML  = eval(v.rows[i].cells[j].innerHTML  + v.rows[i+1].cells[j].innerHTML);
		v.rows[i].cells[j].innerHTML="";

	}
	else{
		v.rows[i].cells[j]=v.rows[i].cells[j].innerHTML ;

	}}
	i++;

}
	

}

if(event.keycode == 38){
	console.log("in down");
	while(i!=0){
		if(this.innerHTML == v.rows[i--].cells[j]){
		this.innerHTML = this.innerHTML + v.rows[i--].cells[j];
                i--;}


	
	else{
		v.rows[i].cells[j]=this.innerHTML;

	}
}

	}




if(event.keycode == 39){
	console.log("in down");
	while(j!=2){
		if(this.innerHTML == v.rows[i].cells[j++]){
		this.innerHTML = this.innerHTML + v.rows[i].cells[j++];
		j++;

	}
	else{
		v.rows[i].cells[j]=this.innerHTML;

	}


	}


}


if(event.keycode == 37){
	console.log("in down");
	while(j!=0){
		if(this.innerHTML == v.rows[i].cells[j--]){
		this.innerHTML = this.innerHTML + v.rows[i].cells[j--];
		j--;

	}
	else{
		v.rows[i].cells[j]=this.innerHTML;

	}


	}


}}


window.addEventListener('load' , startthis);
