function isPalindrom(num) {
  var str = String(num)
  var baru = ''
  for(var i = String(num).length-1; i >= 0; i--){
    baru += String(num)[i]
  }if (baru === str) {
    return true
  }else{
    return false
  }
}


function angkaPalindrome(num) {
  num++
  while(isPalindrom(num) === false){
    num++
  }
  return num
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001