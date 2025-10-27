console.log("=".repeat(60));
console.log("TP JAVASCRIPT - EXERCICES DE BASE");
console.log("=".repeat(60));

console.log("\nPARTIE 1 : VARIABLES ET PORTÉE\n");

console.log("--- Exercice 1 : var, let, const ---");
var x = 5;
let y = 10;
const z = 15;

console.log("Valeurs initiales : x =", x, ", y =", y, ", z =", z);

x = 6;
y = 11;

console.log("Après réassignation : x =", x, ", y =", y);
console.log(
    "const ne peut pas être réassigné - décommentez la ligne pour voir l'erreur"
);

console.log("\n--- Exercice 2 : Portée (scope) ---");
function testScope() {
    if (true) {
        var a = "var visible partout";
        let b = "let visible ici seulement";
        console.log("Dans le bloc if - a:", a);
        console.log("Dans le bloc if - b:", b);
    }
    console.log("Hors du bloc if - a:", a);
    console.log("'b' n'est pas accessible ici (portée de bloc)");
}
testScope();

console.log("\n\nPARTIE 2 : FONCTIONS CLASSIQUES ET FLÉCHÉES\n");

console.log("--- Exercice 3 : Fonction classique vs fléchée ---");
function sayHello(name) {
    return `Bonjour ${name}`;
}

const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log("Fonction classique :", sayHello("Ali"));
console.log("Fonction fléchée :", sayHelloArrow("Sara"));
console.log("Les deux fonctionnent de la même manière pour cet exemple");

console.log("\n--- Exercice 4 : Portée de 'this' ---");
const person = {
    name: "Sara",
    sayHello: function () {
        console.log("Fonction classique - Bonjour " + this.name);
    },
    sayHelloArrow: () => {
        console.log("Fonction fléchée - Bonjour " + this?.name);
    },
};

person.sayHello();
person.sayHelloArrow();
console.log("La fonction fléchée n'a pas son propre 'this'");
console.log(
    "Dans une arrow function, 'this' vient du contexte parent (ici undefined en mode module)"
);

console.log("\n\nPARTIE 3 : IMPORT / EXPORT DE MODULES\n");

import message, { PI, carre } from "./mathUtils.js";

message();
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));
console.log("Carré de 8 =", carre(8));

console.log("\n\nPARTIE 4 : TABLEAUX ET MÉTHODES MODERNES\n");

console.log("--- Exercice 5 : Manipulation de base ---");
const fruits = ["pomme", "banane", "orange"];
console.log("Fruits initiaux :", fruits);

fruits.push("kiwi");
console.log("Après push('kiwi') :", fruits);

fruits.pop();
console.log("Après pop() :", fruits);

console.log("\n--- Exercice 6 : map, filter, reduce ---");
const nums = [1, 2, 3, 4, 5];
console.log("Nombres :", nums);

const doubled = nums.map((n) => n * 2);
console.log("map (x2) :", doubled);

const evens = nums.filter((n) => n % 2 === 0);
console.log("filter (pairs) :", evens);

const sum = nums.reduce((sum, n) => sum + n, 0);
console.log("reduce (somme) :", sum);

console.log("\n--- Exercice 7 : find, some, every ---");
console.log(
    "find (>3) :",
    nums.find((n) => n > 3)
);
console.log(
    "some (<0) :",
    nums.some((n) => n < 0)
);
console.log(
    "every (>0) :",
    nums.every((n) => n > 0)
);

console.log("\n\nPARTIE 5 : OBJETS ET DÉSTRUCTURATION\n");

console.log("--- Exercice 8 : Déstructuration ---");
const user = { id: 1, name: "Ali", city: "Rabat" };
console.log("Objet user :", user);

const { name, city } = user;
console.log(`${name} habite à ${city}`);

const { name: fullName, ...rest } = user;
console.log("fullName (renommé) :", fullName);
console.log("rest (autres propriétés) :", rest);

const { name: userName, age = 25 } = user;
console.log("userName :", userName, ", age (défaut) :", age);

console.log("\n\nPARTIE 6 : ASYNCHRONISME ET PROMESSES\n");

console.log("--- Exercice 9 : Promise simple ---");
const p = new Promise((resolve) => {
    setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then((result) => console.log(result));

console.log("--- Exercice 10 : async/await ---");
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log("Utilisateurs récupérés :", data.length, "utilisateurs");
        console.log("Premier utilisateur :", data[0].name);
    } catch (e) {
        console.error("Erreur :", e.message);
    }
}
getUsers();

console.log("\n\nPARTIE 7 : FONCTIONS AVANCÉES ET OPÉRATEURS MODERNES\n");

console.log("--- Exercice 11 : Template literals ---");
const userName2 = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${userName2}, il est ${hour}h`);

console.log("\n--- Exercice 12 : Spread / Rest ---");
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("arr1 :", arr1);
console.log("arr2 (avec spread) :", arr2);

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log("sum(1, 2, 3, 4) =", sum(1, 2, 3, 4));

console.log("\n--- Exercice 13 : Optional chaining et Nullish coalescing ---");
const settings = { theme: null };
console.log("theme ?? 'light' =", settings.theme ?? "light");

const user2 = { profile: { email: "x@y.com" } };
console.log("user2.profile?.email =", user2.profile?.email);
console.log("user2.address?.city =", user2.address?.city);

console.log("\n" + "=".repeat(60));
console.log("TP TERMINÉ ! Tous les exercices ont été exécutés.");
console.log("=".repeat(60));
