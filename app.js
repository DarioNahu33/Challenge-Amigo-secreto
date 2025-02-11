// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.let
let amigos = []
function agregarAmigo(){
    let entradaDeTextos = document.getElementById("amigo")
    let nombreDeAmigo = entradaDeTextos.value
    if (amigos.includes(nombreDeAmigo)){
        console.info(`${nombreDeAmigo} ya fue añadido`)
        return;
    }
    console.log(nombreDeAmigo)
    amigos.push(nombreDeAmigo)
}  


function sortearAmigo(){}