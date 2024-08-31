//global scope (di luar if)
const _cuaca: string = "hujan";

//local scope (di dalam if)
if (_cuaca === "hujan") {
  const _aksi: string = "tidak pergi jalan";
  console.log(_aksi);
} else {
  const _aksi: string = "kita jalan";
  console.log(_aksi);

  //ternary operator (pake "?" buat menggantikan if dan ":" buat menggantikan else)
  console.log(
    _cuaca == "hujan" ? "kita tidak pergi jalan" : "kita pergi jalan"
  );
}

// else gk perlu bikin const lagi dan baru bisa dibikin klo ada if
//klo if kondisinya terpenuhi, else gk jalan
//klo if kondisinya gk terpenuhi, else jalan

// nama variable nya sama tidak menjadi error karena kurung kurawal membuatnya menjadi terpisah dan memiliki kepemilikan yg berbeda (tdk saling terikat)
//global scope = yg ada di luar if (bisa diakses dari local scope)
//local scope = yg ada di dalam if (gk bisa diakses dr global scope)
//Kesimpulan = yg di dalam gk bisa diakses dr luar tp yg di luar bisa diakses dr dalam

// value primitif sifatnya immutable (mau pake let atau const sama aja)

const _umur: number = 19;
if (_umur > 17) {
  const _aksi = "bisa bikin KTP";
  console.log(_aksi);
} else if (_umur > 20) {
  const _aksi = "udah punya KTP";
  console.log(_aksi);
}

const _umur1: number = 0;
if (_umur1 > 17 && _umur1 < 21) {
  const _aksi = "bisa bikin KTP";
  console.log(_aksi);
} else if (_umur1 > 20 || _umur1 < 17) {
  const _aksi = "tidak punya KTP";
  console.log(_aksi);
} else if (_umur1 < 17 && _umur1 > 0) {
  const _aksi = "blm cukup umur";
  console.log(_aksi);
} else {
  const _aksi = "blm lahir";
  console.log(_aksi);
}
// && artinya "dan"
// || artinya "atau"
// ! artinya "no"
// if dan else hanya bisa dipake 1x dlm satu syntax tp else if bisa dipake lebih dr 1x
//else cuma bisa ditaruh di terakhir karena itu plihan terakhir buat javascript yg baca code dr atas ke bawah berurutan

const _buah: string = "pir";

// switch case digunakan untuk comparison === saja
switch (_buah) {
  case "apel":
    console.log("Harga buah apel = 5000");
    break;
  case "jeruk":
    console.log("Harga buah jeruk = 8000");
    break;
  default:
    console.log("Harga buah = 2000");
}
//mksd code di atas itu artinya buah selain apel & jeruk harganya 2000

if (true) {
  console.log("jalan");
}

//falsy
if (false) {
  console.log("jalan");
}
if ("") {
  console.log("jalan");
}
if (0) {
  console.log("jalan");
}
// false, "", dan 0 dianggap falsy
// " " tidak dianggap falsy

//for loop = code dijalankan berulang kali
for (let i: number = 1; i <= 10; i++) {
  console.log(i);
}
for (let i: number = 10; i >= 0; i--) {
  console.log(i);
}

//while loop (akan dijalankan hanya jika kondisinya terpenuhi)
// while loop (di cek dulu baru dijalanin)
let _countdown: number = 10;
while (_countdown > 0) {
  console.log(_countdown);
  if (_countdown === 8) break;
  _countdown--;
}

// do while loop (akan dijalankan apapun kondisi mau kondisinya itu terpenuhi atau tidak)
// do while loop (dijalanin dulu baru di cek)
_countdown = 0;
do {
  console.log(_countdown);
  if (_countdown === 6) break;
  _countdown--;
} while (_countdown > 0);

//for loop
for (let i: number = 10; i > 0; i--) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
