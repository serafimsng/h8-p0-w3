/*Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter 
berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar k
arakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], 
maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
	var listO=[]
	var listX=[]
  for(var i=0; i<arr.length; i++){
  	if(arr[i]=='o'){
  		listO.push(i)
  	}
  	if(arr[i]=='x'){
  		listX.push(i)
  	}
  }
  var arrSelisih=[]
  for(var j=0;j<listO.length;j++){
  	for(var k=0; k<listX.length;k++){
  		arrSelisih.push(Math.abs(listO[j]-listX[k]))
  	}
  }
  if(arrSelisih.length == 0){
  	return 0
  }
  var terkecil = arrSelisih.sort()

  return terkecil[0];

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2