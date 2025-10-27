console.log("=".repeat(60));
console.log("GESTION DES PRODUITS");
console.log("=".repeat(60));

const produits = [
    { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
    { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
    { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
    { nom: "Fromage", prix: 25, expireLe: "2025-11-20" },
    { nom: "Pain", prix: 3, expireLe: "2024-10-15" },
    { nom: "Beurre", prix: 15, expireLe: "2026-03-01" },
];

console.log("\nListe complète des produits :");
console.table(produits);

const aujourdHui = new Date();
console.log("\nDate d'aujourd'hui :", aujourdHui.toLocaleDateString());

const valides = produits.filter((p) => new Date(p.expireLe) > aujourdHui);

console.log("\nProduits valides (non expirés) :");
console.table(valides);
console.log(`Nombre de produits valides : ${valides.length}`);

const expires = produits.filter((p) => new Date(p.expireLe) <= aujourdHui);
console.log("\nProduits expirés :");
console.table(expires);
console.log(`Nombre de produits expirés : ${expires.length}`);

const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("\nCalcul du total :");
console.log(`Total des produits valides : ${total} DH`);

const moyennePrix = total / valides.length;
console.log(`Prix moyen : ${moyennePrix.toFixed(2)} DH`);

const produitLePlusCher = valides.reduce((max, p) =>
    p.prix > max.prix ? p : max
);
console.log(
    `Produit le plus cher : ${produitLePlusCher.nom} (${produitLePlusCher.prix} DH)`
);

const produitLeMoinsCher = valides.reduce((min, p) =>
    p.prix < min.prix ? p : min
);
console.log(
    `Produit le moins cher : ${produitLeMoinsCher.nom} (${produitLeMoinsCher.prix} DH)`
);

console.log("\n" + "=".repeat(60));
console.log("Gestion des produits terminée !");
console.log("=".repeat(60));
