var idade = 67
console.log(` você tem ${idade}`)
if (idade < 16) {
    console.log('não vota')    
} else if (idade < 18) {
    console.log('voto opcional')
} else if (idade > 65){
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}