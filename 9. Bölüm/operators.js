let ev = true

if(ev) {
    console.log("Zenginsin")
} else {
    console.log("Fakirsin")
}

var para = 4

if(para === 5) {
    console.log("Alabilirsin")
} else {
    console.log("Alamazsın")
}

/*
&& -> ve
! -> tersi
|| -> ya da
*/

let durum = "fakir"
var para = 8

if(durum !== "fakir" || para < 7) {
    console.log("Çalışmaya git")
} else {
    console.log("Eve git uyu")
}

let operator = 5 // 0, null, "", undefined, NaN = bunlar da false olur

if(operator) {
    console.log("Operator true")
} else {
    console.log("Operator true değil")
}

let malzeme = "çelik"

let bina = malzeme || "halat"

if(bina) {
    console.log(`Bina ${bina} ile yapılacak.`)
} else {
    console.log(`Bina ${bina} ile yapılacak.`)
}

let menu = true

menu ?
 console.log("menü var") 
 : 
 console.log("menü yok")

 let hayvan = "kedi"

hayvan === "kedi" ?
 console.log("hayvan kedi") 
 : 
 console.log("kedi değil")

 let ışık = "sarı"

 if(ışık === "kırmızı") {
     console.log("DUR")
 } else if(ışık === "sarı") {
     console.log("Hazırlan")
 } else if(ışık === "yeşil") {
     console.log("GEÇ")
 } else {
     console.log("Belli belirsiz")
 }

 let sıralama = "birinci"

 switch(sıralama){
     case 'birinci':
         console.log("birincisin")
         break;
    case 'ikinci':
        console.log("ikincisin")
        break;
    case 'üçüncü':
        console.log("üçüncüsün")
        break;
    default:
        console.log("kaçıncısın olum")
        break;
 }