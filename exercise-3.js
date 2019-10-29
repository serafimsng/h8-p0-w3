

function dataHandling(arr) {
	var data ='';
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			switch(j){
				case 0:
					data = data + 'Nomor: ' + arr[i][j] + '\n'
					break;
				case 1:
					data = data + 'Nama: ' + arr[i][j] + '\n'
					break;
				case 2:
					data = data + 'Alamat: ' + arr[i][j] + '\n'
					break;
				case 3:
					data = data + 'Tanggal Lahir: ' + arr[i][j] + '\n'
					break;
				case 4:
					data = data + 'Hobby: ' + arr[i][j] + '\n\n'
					break;
			}
		}
	}
	return data
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
   console.log(dataHandling(input))