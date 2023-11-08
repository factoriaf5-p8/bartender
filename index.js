// pedimos bebida
// pedimos edad
// desde 18 beer
// desde 14 coke
// desde 0 milk
// respuestas: aquí tiene su bebida, lo siento no te puedo servir esa bebida.
// en el caso de que no entienda lo que me pide vuelve a ofrecerle una segunda oportunidad

const rules = {
    beer: "18",
    coke:"14",
    milk:"0"
}

// edad >= rules[bebida]?alert("toma tu bebida"):alert("lo siento no te puedo servir ésa bebida");


const questions = [
    "¿Qué quieres beber?",
    "¿Qué edad tienes?"
]
const answers = [
    "toma tu bebida",
    "lo siento no te puedo servir ésa bebida"
]

const bartender = () => {
    const results = questions.map(question => prompt(question));
    return results[1] >= rules[results[0]]?alert(answers[0]):alert(answers[1]);
}

bartender();



/*
    qué quieres--> bebida
    si leche --> se la doy
    si coke --> pregunto la edad --> si edad <14 no se la doy y si no ok
    si beer --> pregunto la edad --> si edad <18 no se la doy y si no ok

 */

// function bartender() {
//     const drink = prompt("Welcome, what are you having today?").toLowerCase();
//     const age = prompt("How old are you?").toLowerCase();

//     //expresiones regulares --> validaciones de la información de los formularios
//     //sanitizar -- sanitize


//     if (age >= 18) {
//         alert("Here is your drink");
//     } else if (age >= 14 && (drink === "coke" || drink === "milk")) {
//         alert("Here is your " + drink);
//     } else if (drink === "beer" || drink === "coke") {
//         alert("Sorry, you can not drink " + drink);
//     } else if (drink === "milk") {
//         alert("Here is your " + drink);
//     }
//     else {
//         alert("Sorry, I can not understand you");
//         // bartender();
//     }
// }
// bartender();


// if (bebida === "milk") {
//     alert("Aquí tienes tu leche");
// } else if (edad >=14 && bebida === "coke") {
//         alert("Aquí tienes tu bebida");
// } else if (edad >= 18 && bebida === "beer"){
//     alert("Aquí tienes tu bebida");
// } else {
//     alert("No puedo servirte esa bebida, ¿Quieres otra cosa?");
// }
// } else if (drink === "beer") {
//     alert("Sorry, you can not drink " + drink);
// } else if (drink === "coke") {
//     alert("Sorry, you can not drink " + drink);

//CLEAN CODE PATTERNS & SMELLS
/*
1. antipattern - Spaghetti code -->
        - POO -clases -- organización y no repetir las cosas //encapsulación, polimorfismo, herencia y la abstracción
2. mantener simple --> KISS
3. reutilizable --> código en funciones
4. antipattern --> hard coding -> hardcodear
5. antipattern overcode --> YAGNI you aren't gotta need it
6. you're code is shit! --> refactorizar
7. código autoexplicativo
8. antipattern redundancia --> DRY

*/