function balikKata(str){
var kebalik='';
	for(var i=str.length-1;i >= 0;i-- ){

		kebalik += str[i]
	}
	return kebalik
}
console.log(balikKata('hello world'));
console.log(balikKata('Siapa yang jadi presiden setelah Jokowi??'));