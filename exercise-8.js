

function pasanganTerbesar(num) {
  var str = String(num).split('')
  var pair =''
  for(var i=0; i<str.length-1;i++){
  	pair = str[i]+str[i+1]+','+pair
  }
  var sorted = pair.split(',').sort(function(a,b){return b-a})
  return sorted[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99