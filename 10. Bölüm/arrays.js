const menu = ["hamburger", 5, true]

menu[2] = 'elma'
console.log(menu[2])

let malzemeler = ["domates", "salatalık", "soğan", "biber"]

malzemeler = ["muz"]

console.log(malzemeler)

const ornek = ["deger1", "deger2", 5, 7, true, false]

console.log(ornek.length)
ornek.push('kemer', 'kilit')
ornek.pop()

console.log(ornek)

const bina = ["halı", "avize", "koltuk", "televizyon"]

function degistir(tadilat){
    tadilat.pop()
}

degistir(bina)

console.log(bina)

const cokluDeger = [[3, 5], [4, 8], ["merhaba", "selam"]]

console.log(cokluDeger[2][0])