var nadika = 150
var samuel = 140
var alip = 145
if (nadika > samuel) {
    if (nadika > alip) {
        if (samuel > alip) {
            console.log("Urutan yang terbesar Nadika, Samuel, Alip")
        } else console.log("Urutan yang terbesar Nadika, alip, samuel")
    } else console.log("Urutan yang terbesar Alip, nadika, samuel")
} else
if (samuel > alip) {
    if (nadika > alip) {
        console.log("Urutan terbear Samuel,Nadika, Alip ")
    } else console.log("Urutan terbesar Samuel, Alip, Nadika")
} else console.log("Urutan Terbesar Alip, Samuel, NAdika")