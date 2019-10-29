

function pasanganTerbesar(num) {
	var x = String(num).split('')
	var y=''
	for(var i = 0; i <= x.length-2; i++){
		y = y+x[i]+x[i+1]+","
	}
	var q = y.split(',')
	var sorted = q.sort(function(x,y){ return y-x})[0]
	return sorted
	
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99