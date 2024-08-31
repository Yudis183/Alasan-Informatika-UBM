let _string: string = "      ini string WOYYYYYYYYYYYYY";
console.log(_string);

let _tempString = _string.slice(5, 8);
console.log(_tempString);
console.log(_string.toUpperCase());
console.log(_string.trim());
console.log(_string + "5");
console.log(_string.concat("5"));
console.log(_string.replace("Y", "*"));

console.log(_string.replace(/Y/g, "*"));
// ditambahkan "/g" biar semua huruf yg diminta jd kena

console.log(_string.replace(/[Y,i]/g, "*"));
// pakee [] biar bisa masukin 2 huruf atau lebih

// template literals
console.log(`variable ${_string}`);

//multiline string
let _Fungsiconcat = `Dari contoh di atas, kita bisa melihat bahwa metode concat mengembalikan array baru yang berisi elemen-elemen 
    dari array fruits, array vegetables, dan array numbers. Karena ada tipe data yang berbeda, maka array merged juga harus 
    memiliki tipe data any.Metode concat juga bisa menerima parameter yang bukan array, misalnya`;
console.log(_Fungsiconcat);

let _number: number = 5.12345;
console.log(_number.toString());
console.log(_number.toExponential(3));
console.log(_number.toFixed(2));
//toFixed bisa memuncul berapa banyak anga di belakang koma sesuai jumlah yg dimasukan

//global built-in method
// guna untuk mengubah jenis data
let _stringAngka: string = "3.45";
console.log(Number(_stringAngka)); //ngubah data string jd number
console.log(parseInt(_stringAngka));
console.log(parseFloat(_stringAngka));
console.log(String(3));

//new date type
let _now: Date = new Date();
console.log(_now);
console.log(_now.toLocaleDateString("in-Id"));
console.log(_now.toLocaleDateString("2024-01-01"));
let _d: Date = new Date("2024-01-01");
console.log(_d.toLocaleDateString());

let _angka: number = 10;
console.log(_angka);

let _boolean: boolean = true;
console.log(_boolean);

//operand
let x: number = 5;
let y: number = 10;

//binary
// memiliki atau pakai atau punya 2 operand yaitu x dan y
const _addition = x + y;
console.log(_addition);
const _multiplication = x * y;
console.log(_multiplication);

//unary
//hanya memiliki 1 operand yaitu x atau y saja
const _minus = -x;
console.log(_minus);
const _minus1 = -y;
console.log(_minus1);

//modify in place
console.log(x);
x += x; //x = x+x //x = 5 + 5
console.log(x);
console.log(y);
y -= 3; // y = y - 3 // y = 10 + 3
console.log(y);
console.log(y);
y += y; // y = y +y // y = 10 + 10
console.log(y);
y -= 3; // y = y - 3 // y = 10 - 3
console.log(y);

//increment & decrement
let _counter: number = 1;
_counter++; // _counter += 1; // _counter = _counter + 1 // _counter = 1 + 1;
console.log(_counter);
_counter--; // _counter = 1; // counter = counter 1 //_counter = 2 - 1;
console.log(_counter);

//comparison operators
let _buah1: string = "manggo";
let _buah2: string = "banana";
let _angka1: number = 17;
let _angka2: number = 177;
let _angka3: number = 177;
let _angka4: string = "177";
let _angka5: string = "177";

//comparison == akan mengecek 2 buah value tanpa melihat tipe data
console.log(_buah1 == _buah2);
console.log(_angka1 == _angka2);
console.log(_buah1 == _angka4);

//comparison === akan mengecek 2 buah value dengan melihat tipe data
console.log(_buah2 === _angka4);

/*klo di javascript diperbolehkan untuk menggunakan 2 data yang memiliki tipe data berbeda sehingga dapat menghasilkan output
tp klo di typescript tidak boleh sehingga tidak dpt menghasilkan output dan akan error*/

// comparison != dan !== memiliki arti "tidak sama dengan"
//comparison != akan mengecek 2 buah value tanpa melihat tipe data
console.log(_buah1 != _buah2);

//comparison !== akan mengecek 2 buah value dengan melihat tipe data
console.log(_angka5 !== _angka4);

// comparison >
console.log(_angka1 > _angka2);

//comparison >=
console.log(_angka1 >= _angka2);

//comparison <
console.log(_angka1 < _angka2);

//comparison <=
console.log(_angka1 <= _angka2);

//tanda sama dengan harus selalu di kanan nya < ataupun >
