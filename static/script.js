var getrandom = function()
{


	return Math.floor(Math.random()*(2-0+1)+0);




}
function startthis(){
	var v = document.querySelector("#table");

	var randi= Math.floor(Math.random()*(2-0+1)+0);
		var randj= Math.floor(Math.random()*(2-0+1)+0);
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			 v.rows[i].cells[j].innerHTML = "\n";
			
		}
	}

	 var tr=v.rows[getrandom()].cells[getrandom()];
     var td=v.rows[getrandom()].cells[getrandom()];

    
	document.addEventListener("keydown", function(){
		makemove(randi,randj);
	});




}

var print = function(){
	console.log("Its printed");
}

var makemove = function(i,j){

	console.log(event)
	
var v = document.querySelector("#table");

if(event.keyCode === 40){
	console.log("in down");
	while(i!=2){
		if(v.rows[i][j].innerHTML != "\n"){
	if(this.innerHTML == v.rows[i++][j].innerHTML){
		this.innerHTML = this.innerHTML + v.rows[i][j];
		i++;

	}
	else{
		v.rows[i][j]=this.innerHTML;

	}}

}
	

}

if(event.keycode == 38){
	console.log("in down");
	while(i!=3){
		if(this.innerHTML == v.rows[i++][j]){
		this.innerHTML = this.innerHTML + v.rows[i][j];

	}
	else{
		v.rows[3][j]=this.innerHTML;

	}


	}


}

if(event.keycode == 39){
	console.log("in down");
	while(j!=3){
		if(this.innerHTML == v.rows[i][j++]){
		this.innerHTML = this.innerHTML + v.rows[i][j];

	}
	else{
		v.rows[i][3]=this.innerHTML;

	}


	}


}


if(event.keycode == 37){
	console.log("in down");
	while(j!=0){
		if(this.innerHTML == v.rows[i][j--]){
		this.innerHTML = this.innerHTML + v.rows[i][j];

	}
	else{
		v.rows[i][0]=this.innerHTML;

	}


	}


}}


window.addEventListener('load' , startthis);