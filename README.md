# TaskApp — Gestionnaire de Tâches

Application web de gestion de tâches développée avec React JS dans le cadre du projet frontend HETIC.

## Fonctionnalités

- Ajouter une tâche avec un niveau de priorité (Haute / Moyenne / Basse)
- Marquer une tâche comme terminée
- Supprimer une tâche
- Filtrer les tâches par statut (Toutes / À faire / Terminées)
- Le titre de la page se met à jour en temps réel avec le nombre de tâches restantes

## Technologies utilisées

- React JS
- Vite
- React Router
- CSS Modules

## Pages

- `/Home` — Liste des tâches + formulaire d'ajout
- `/About` — Présentation de l'application + fetch API
- `/Contact` — Formulaire de contact
- `*` — Page 404

## Installation
```bash
npm install
npm run dev
```

## Critères respectés

- Projet créé avec Vite
- 3 composants réutilisables : `TaskCard`, `TaskForm`, `NavBar`
- 3 pages distinctes : `Home`, `About`, `Contact`
- Props et `.map()` avec `key`
- `useState` et `useEffect`
- React Router avec `NavLink`
- Page 404
- CSS Modules
