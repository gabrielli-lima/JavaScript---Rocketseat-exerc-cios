function transformaGrau(grau){
    const celciusExiste = grau.toUpperCase().includes('C')
    const fahrenheitExiste = grau.toUpperCase().includes('F')
     
    // fluxo de erro
    if(!celciusExiste && !fahrenheitExiste){
        throw new Error('Grau não identificado')
    }

    // F -> C
    let atualizarGrau = Number(grau.toUpperCase().replace("F",""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9 
    let grauS = 'C'

    
    // C -> F
    if(celciusExiste){
        atualizarGrau = Number(grau.toUpperCase().replace("C",""))
        formula = celcius => celcius * 9/5 + 32 
        grauS = 'F'
    }

    return formula(atualizarGrau) + grauS

}

try{
    console.log(transformaGrau('10C'))
    console.log(transformaGrau('50F'))
    transformaGrau('50Z')
} catch(error){
    console.log(error.message)
}
