


function cumprimentar() {
    const base = "Oi, "

    function bom() {
        return base + "boa noite"
    }

    function mal() {
        return base + "Vai tomar no cu"
    }

    return {
        bom,
        mal
    }
}


const Cumprimentar = cumprimentar();

console.log(cumprimentar().mal())

console.log(cumprimentar2().mal())