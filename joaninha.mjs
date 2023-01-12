


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



function contaminate(obj) {
    delete obj.name
    return obj
}
    

const testeObj = {name: "yoyo", age: "23"}
contaminate(testeObj)

console.log(testeObj)