let familia = {
    receitas: [1200, 2000, 490.90, 350.70],
    despesas: [455.90, 221.73,98.87,200,332.64,1275.98]
}

function soma(array){
    let total= 0;

    for(let value of array){
        total += value
    }
    return total;
}

function total(){
    const calculoReceitas = soma(familia.receitas)
    const calculoDespesas = soma(familia.despesas)

    const total = calculoReceitas - calculoDespesas
    
    const ok = total >= 0

    let totalFinal = "negativo"
    if(ok){
        totalFinal = "positivo"
    }

    console.log(`Seu saldo é ${totalFinal}:R$ ${total.toFixed(2)}`)

}

total()