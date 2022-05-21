/*
let sayi = 0

for(sayi; sayi < 5; sayi++) {
    console.log(sayi)
}

for(let sayi2 = 0; sayi2 >= -5; sayi2--) {
    console.log(sayi2)
}
*/

/*
const sehir = ["Ankara", "İstanbul", "İzmir"]

for(let i = 0; i < sehir.length; i++) {
    console.log(sehir[i])
}
*/
let benimTakipcim = ["Mert", "Sevda", "Süleyman", "Eri"]
let onunTakipci = ["Ece", "Süleyman", "Eri"]
let ortak = []

for(let i = 0; i < benimTakipcim.length; i++) {
    for(let j = 0; j < onunTakipci.length; j++) {
        if(benimTakipcim[i] === onunTakipci[j])
        ortak.push(benimTakipcim[i])
    }
}

console.log(ortak)

let sayi = 1

while(sayi < 4) {
    console.log(sayi)
    sayi++
}

/*
let gerekenSeker = 3
let eklenen = 0

do {
    eklenen++
    console.log(eklenen + ' Tane Eklendi')
} while (eklenen < gerekenSeker)
*/

const sarkici = ["Hadise", "Murat Boz", "Çakal", "LVBEL C5", "Ceza"]

for(let i = 0; i < sarkici.length; i++) {
    console.log(sarkici[i]);
    if(sarkici[i] === 'Çakal') {
        break;
    }
}