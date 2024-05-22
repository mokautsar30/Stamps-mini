/**
 * Tolong buat satu array / list dari 1 sampai 100. Print semua angka ini dalam urutan terbalik, tetapi ada beberapa peraturan : 
1. Jangan print angka bilangan prima.
2. Ganti angka yang dapat dibagi dengan angka 3 dengan text "Foo".
3. Ganti angka yang dapat dibagi dengan angka 5 dengan text "Bar".
4. Ganti angka yang dapat dibagi dengan angka 3 dan 5 dengan text "FooBar".
5. Print angka menyamping tidak ke bawah.
 */


//checking prime number
function checkIsPrime(num) {
    if(num <= 1) return false; 
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        // console.log(num[i]);
        if(num % i === 0 || num % (i + 2) === 0 ) return false;

    }
    return true
}
// console.log(checkIsPrime(45));

//kita akan gunakan function checkprime di fungsi berikut

function generateFooBar() {
    let result = []
    for (let i = 100; i >= 1; i--) {
        if(checkIsPrime(i)) continue; // check jika angka prima lanjut ke looping berikutnya
        
        if(i % 3 === 0 && i % 5 === 0) { // unique condition
            result.push('FooBar')
        } else if (i % 3 === 0) {
            result.push('Foo')
        } else if(i % 5 === 0) {
            result.push('Bar')
        } else {
            result.push(i);
        }
    }
    return result

}

console.log(generateFooBar().join(' ')) //kita join agar output menyamping


