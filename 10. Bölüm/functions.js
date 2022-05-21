function makine(){
    console.log("Para olmuş 5 tl")
}

makine()

function alisveris(isim){
    console.log(isim + ", Alışveriş yaptığınız için teşekkür ederiz.")
}

alisveris("Deniz")

function menu(yemek, icecek, tatli){
    console.log("Yemek olarak:", yemek)
    console.log("İçecek olarak:", icecek)
    console.log("Tatlı olarak:", tatli)
}

menu("Hamburger", "Kola", "Baklava")

function carpma(sayi1, sayi2){
    return sayi1 * sayi2
}

const sonuc = carpma(2, 3)
console.log(sonuc)

function toplama(sayi1, sayi2){
    return sayi1 + sayi2
}

function hata(sayi3, sayi4){
    return sayi3 + sayi4 + toplama(2, 3)
}

const total = hata(5,6)
console.log(total)

const açım = function(tokluk){
    if(tokluk === 'Tokum'){
        console.log("Yemeğe gerek yok")
    } else {
        console.log("Yemek ver")
    }
}

açım("AÇ")