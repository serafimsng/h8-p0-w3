function groupAnimals(animals) {
	var a = []
	for(var i = 0; i < animals.length; i++){
		a.push(animals[i][0])
	}
	a.sort()
	var b = []
	for(var j = 0; j < a.length; j++){
		if (a[j] !== a[j+1]) {
			b.push(a[j])
		}
	}
	var newarr=[]
	for(var k = 0; k<b.length; k++ ){
		var group=[]
		for(var l = 0; l < animals.length; l++){
			if(b[k] === animals[l][0]){
				group.push(animals[l])
			}
		}
		newarr.push(group)

	}
	return newarr;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak','cuci']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak','cuci','kelabang','anjing']));