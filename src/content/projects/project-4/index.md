---
title: "HTauto"
summary: "Catalogue de voitures"
date: "Oct 20 2023"
draft: false
tags:
- PHP
- CSS
- HTML
---

Ce projet vise à créer une application web de gestion de catalogue de voitures en utilisant la méthode MVC (Modèle-Vue-Contrôleur) en PHP. L'application permet aux utilisateurs de se connecter, de rechercher des voitures par type et par marque, et d'effectuer diverses opérations telles que l'ajout de nouveaux types/marques, la modification des voitures, et le changement de mot de passe. La gestion des erreurs est également intégrée pour assurer une expérience utilisateur fluide.

- Méthode MVC
- Recherche par Type et Marque 
- Ajout d'un Nouveau Type/Marque de Voiture
- Modification CSS
- Changement de Mot de Passe
- Gestion des Erreurs

Fonctionnalités Détaillées :


- Le projet est structuré selon le modèle MVC, ce qui le rend facilement maintenable et extensible. La structure des répertoires est la suivante :


- Ajout d'un Menu pour l'Ajout d'un Type/Marque et le Changement de Mot de Passe
Un menu de navigation a été ajouté pour permettre aux utilisateurs d'accéder facilement aux fonctionnalités d'ajout de type/marque et de changement de mot de passe.


- Cas d'Utilisation dans le Contrôleur Principal
Le contrôleur principal gère les différentes actions possibles en utilisant des case pour chaque fonctionnalité, comme la liste des voitures, l'ajout d'un type/marque, et le changement de mot de passe.



- Modification de Mot de Passe
Une fonction a été ajoutée dans le contrôleur utilisateur pour gérer la modification du mot de passe. Elle traite le formulaire de changement de mot de passe et met à jour le mot de passe dans la base de données si toutes les conditions sont remplies.