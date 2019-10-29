function tentukanDeretGeometri(arr) {
	var q = selisih(arr).split(',')
	
  for(var i = 0; i <= q.length-1; i++ ){
  	if(q[i] === q[i+1]){
  		return true
  	}else{
  		return false
  	}
  }
}

function selisih(arr) {
	var x = 0
	var y= []
	for(var i = 0; i < arr.length-1; i++){
		x = arr[i+1]/arr[i] + ','+ x
	}
		
	return x
}

// console.log(selisih([1, 3, 9, 27, 81]))
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false