let i=100
while (i>0){
    console.log(i)
    i-=10
}

//Caso 1
let num=[21,45,100,12,11,78,61,4,39,22]

for (let i=0;i<num.length-1;i++)
console.log(num[i])

//Caso 2
let num=[21,45,100,12,11,78,61,4,39,22]
for (let i=0;i<num.length-1;i++){
    if (num[i]%2==0)
    console.log(num[i])
}

//Caso 3
let num=[21,45,100,12,11,78,61,4,39,22]
for (let i=0;i<num.length-1;i++){
    if (num[i]>10 && num[i]<60)
    console.log(num[i])
}

//tarea 5
let vessel = {
    LATITUD: 40.07288,
    LONGITUD: 154.48535,
    CURSO: 285.6,
    VELOCIDAD: 14.0,
    OMI: 9175717,
    NOMBRE: "MARENO"
}

for (let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
    
}
