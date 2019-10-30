function tentukanDeretGeometri(arr) {

var beda=[]
	for(var i=arr.length-1; i > 0 ;i--){
		beda.push(arr[i]/arr[i-1])
	}
	for(var j=0; j<beda.length;j++){
		if(beda[i]===beda[i+1]){
			return true
		}else{
			return false
		}
	}
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false