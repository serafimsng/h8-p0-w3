
function dataHandling2() {
	// return arr.splice(1,6,"0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
	input.splice(0, 5,"0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
	var x = input[3].split("/")
	var tampung=''
	console.log(input);
	switch (x[1]){
		case '01':
		console.log('Januari')
		break;
		case '02':
		console.log('Februari')
		break;
		case '03':
		console.log('Maret')
		break;
		case '04':
		console.log('April')
		break;
		case '05':
		console.log('Mei')
		break;
		case '06':
		console.log('Juni')
		break;
		case '07':
		console.log('Juli')
		break;
		case '08':
		console.log('Agustus')
		break;
		case '09':
		console.log('September')
		break;
		case '10':
		console.log('Oktober')
		break;
		case '11':
		console.log('November')
		break;
		case '12':
		console.log('Desember')
		break;
	}
	var sorted = x.sort(function(value1,value2){ return value2 - value1})
	console.log(sorted)
	var tanggal = input[3].split("/").join('-')
	console.log(tanggal);
	var nama = input[1].slice(0,14)
	console.log(nama);

	
}
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

dataHandling2(input)