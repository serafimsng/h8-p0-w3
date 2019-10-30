
function dataHandling(arg){
	for(var i=0; i<arg.length;i++){
		var id=arg[i][0]
		var nama=arg[i][1]
		var kota=arg[i][2]
		var tl=arg[i][3]
		var hobi=arg[i][4]

		var listIdentitas =  listIdentitas+`Nomor ID: ${id} \nNama Lengkap: ${nama} \nTTL: ${kota} ${tl} \nHobi: ${hobi} \n\n`
	}
return listIdentitas	
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
   console.log(dataHandling(input))