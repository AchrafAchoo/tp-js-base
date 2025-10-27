# TP JavaScript - Exercices de Base

## 📚 Objectif

Apprendre les bases pratiques du langage JavaScript moderne à travers des exercices guidés : variables, fonctions, objets, tableaux, callbacks, promesses, async/await, etc.

## 🚀 Installation et Exécution

### 1. Installation des dépendances

```bash
npm install
```

### 2. Exécution du projet

```bash
npm start
```

ou

```bash
node index.js
```

## 📝 Contenu du TP

### Partie 1 : Variables et Portée

-   **Exercice 1** : Différences entre `var`, `let`, et `const`
-   **Exercice 2** : Portée (scope) de bloc vs fonction

### Partie 2 : Fonctions Classiques et Fléchées

-   **Exercice 3** : Comparaison fonction classique vs fonction fléchée
-   **Exercice 4** : Comportement de `this` dans les fonctions

### Partie 3 : Import / Export de Modules (ES6)

-   Utilisation de `export` et `import`
-   Export par défaut et exports nommés
-   Module `mathUtils.js` avec fonctions utilitaires

### Partie 4 : Tableaux et Méthodes Modernes

-   **Exercice 5** : Manipulation de base (`push`, `pop`)
-   **Exercice 6** : Méthodes avancées (`map`, `filter`, `reduce`)
-   **Exercice 7** : Recherche et tests (`find`, `some`, `every`)

### Partie 5 : Objets et Déstructuration

-   **Exercice 8** : Déstructuration d'objets
-   Renommage de propriétés
-   Valeurs par défaut

## 📂 Structure du Projet

```
tp-js-base/
├── index.js          # Fichier principal avec tous les exercices
├── mathUtils.js      # Module avec fonctions mathématiques
├── package.json      # Configuration npm
└── README.md         # Ce fichier
```

## 💡 Points Clés à Retenir

### Variables

-   `var` : portée de fonction, peut être réassigné
-   `let` : portée de bloc, peut être réassigné
-   `const` : portée de bloc, ne peut PAS être réassigné

### Fonctions

-   Fonction classique : a son propre `this`
-   Fonction fléchée : hérite `this` du contexte parent

### Modules ES6

-   Ajouter `"type": "module"` dans `package.json`
-   Utiliser `.js` dans les chemins d'import

### Méthodes de Tableaux

-   `map()` : transforme chaque élément
-   `filter()` : filtre les éléments
-   `reduce()` : réduit à une seule valeur
-   `find()` : trouve le premier élément correspondant
-   `some()` : vérifie si au moins un élément correspond
-   `every()` : vérifie si tous les éléments correspondent

## ✅ Résultat Attendu

Lorsque vous exécutez le projet, vous verrez tous les exercices s'exécuter dans l'ordre avec des explications et des résultats commentés.

## 🎓 Auteur

TP réalisé dans le cadre du cours de développement mobile - JavaScript moderne
