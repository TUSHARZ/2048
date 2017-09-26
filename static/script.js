var getrandom = function()
{


	return Math.floor(Math.random()*(2-0+1)+0);




}
function startthis(){
	var v = document.querySelector("#table");

	var randi= Math.floor(Math.random()*(2-0+1)+0);
		var randj= Math.floor(Math.random()*(2-0+1)+0);


	 var tr=v.rows[getrandom()].cells[getrandom()].innerHTML = "2"
     var td=v.rows[getrandom()].cells[getrandom()].innerHTML = "4"
	// for(var i=0;i<3;i++){
	// 	for(var j=0;j<3;j++){
	// 		 v.rows[i].cells[j].innerHTML = i.toString() + j.toString();
			
	// 	}
	// }

	document.addEventListener('keypress', makemove(i,j));




}

var makemove=function(i,j){
var v = document.querySelector("#table");
if(event ==keypress down){
	while(i!=0)
	if(this.innerHTML == v.rows[i--][j]){
		this.innerHTML = this.innerHTML + v.rows[i][j];

	}
	else{
		v.rows[0][j]=this.innerHTML;

	}


}

if(event == keypress_up){
	while(i!=3){
		if(this.innerHTML == v.rows[i++][j]){
		this.innerHTML = this.innerHTML + v.rows[i][j];

	}
	else{
		v.rows[3][j]=this.innerHTML;

	}


	}


}

if(event == keypress_right){
	while(j!=3){
		if(this.innerHTML == v.rows[i][j++]){
		this.innerHTML = this.innerHTML + v.rows[i][j];

	}
	else{
		v.rows[i][3]=this.innerHTML;

	}


	}


}


if(event == keypress_left){
	while(j!=0){
		if(this.innerHTML == v.rows[i][j--]){
		this.innerHTML = this.innerHTML + v.rows[i][j];

	}
	else{
		v.rows[i][0]=this.innerHTML;

	}


	}


}


window.addEventListener('load' , startthis);