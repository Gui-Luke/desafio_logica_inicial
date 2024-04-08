let nomeDoHeroi = "Kratos"
let nivelDoHeroi = "15000"

switch(true) {
    case nivelDoHeroi < 1000:
        console.log("Ferro")
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
        break
    
    case nivelDoHeroi > 1001 && nivelDoHeroi <2000:
        console.log("Bronze")
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
        break

    case nivelDoHeroi > 2001 && nivelDoHeroi <5000:
        console.log("Prata")
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
        break
    
    case nivelDoHeroi >5001 && nivelDoHeroi <7000:
        console.log("Ouro")
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
        break

    case nivelDoHeroi >7001 && nivelDoHeroi <8000:
        console.log("Platina")
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
        break

    case nivelDoHeroi >8001 && nivelDoHeroi <9000:
        console.log("Ascendente")
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
        break

    case nivelDoHeroi >9001 && nivelDoHeroi <10000:
        console.log("Imortal")
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
        break

    default:
        console.log("Radiante")
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
}

