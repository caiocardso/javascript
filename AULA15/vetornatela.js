let valores = [8, 1, 7, 4, 2, 9]
/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`o valor está na posição ${pos}`)
}