function tentukanDeretAritmatika(arr) {
	var q = selisih(arr)
  for(var i = 0;i <= q.length-1; i++){
  	if(q[i] === q[i+1]){
  		return true
  	}else{
  		return false
  	}
  }
}

function selisih(arr){
var newarr=[]
var x = 0
	for(var i = 0; i < arr.length-1; i++){
		x = arr[i+1]-arr[i] + ',' +x
	}
	 var y = x.split(',')
	 return y
}
// console.log(selisih([1, 2, 3, 4, 5, 6]))

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false