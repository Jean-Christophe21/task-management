import type {Task} from "../types/task";
import {taskPriority, taskStatus} from "../types/task";

// génération de données de test de tâches
export const tasks: Task[] = [
    {
        id: 1,
        title: "Faire les courses",
        description: "Faire les courses du jour",
        status: taskStatus.todo,
        priority: taskPriority.low,
        dueDate: new Date("2023-04-01"),
        createdAt: new Date("2023-03-20")
    },
    {
        id: 2,
        title: "Aller au service",
        description: "Je dois aller au service",
        status: taskStatus.todo,
        priority: taskPriority.low,
        dueDate: new Date("2023-04-01"),
        createdAt: new Date("2023-03-20")
    },
    {
        id: 3,
        title: "Refactorisation du backend API",
        description: "Appliquer le pattern Repository et structurer les DTOs",
        status: taskStatus.in_progress,
        priority: taskPriority.high,
        dueDate: new Date("2026-10-18"),
        createdAt: new Date("2026-10-10")
    },
    {
        id: 4,
        title: "Correction des bugs d'authentification",
        description: "Résoudre le problème d'expiration du token JWT",
        status: taskStatus.todo,
        priority: taskPriority.high,
        dueDate: new Date("2026-10-17"),
        createdAt: new Date("2026-10-14")
    },
    {
        id: 5,
        title: "Mise en place du pipeline CI/CD",
        description: "Configurer les scripts Terraform et Ansible pour le déploiement",
        status: taskStatus.in_progress,
        priority: taskPriority.medium,
        dueDate: new Date("2026-10-25"),
        createdAt: new Date("2026-10-12")
    },
    {
        id: 6,
        title: "Conception du modèle Merise",
        description: "Valider le MCD et le MLD pour la base de données PostgreSQL",
        status: taskStatus.done,
        priority: taskPriority.medium,
        dueDate: new Date("2026-10-10"),
        createdAt: new Date("2026-10-05")
    },
    {
        id: 7,
        title: "Rédaction de la documentation technique",
        description: "Documenter les endpoints de l'API REST avec Postman",
        status: taskStatus.todo,
        priority: taskPriority.low,
        dueDate: new Date("2026-10-30"),
        createdAt: new Date("2026-10-15")
    },
    {
        id: 8,
        title: "Optimisation des requêtes SQL",
        description: "Analyser les index sur les tables de transactions et de logs",
        status: taskStatus.todo,
        priority: taskPriority.medium,
        dueDate: new Date("2026-10-22"),
        createdAt: new Date("2026-10-13")
    },
    {
        id: 9,
        title: "Intégration de Tailwind CSS",
        description: "Styliser les vues Blade pour le module de gestion des utilisateurs",
        status: taskStatus.done,
        priority: taskPriority.medium,
        dueDate: new Date("2026-10-12"),
        createdAt: new Date("2026-10-08")
    },
    {
        id: 10,
        title: "Mise à jour des conteneurs Docker",
        description: "Passer à la dernière version stable d'image pour Nginx et PHP",
        status: taskStatus.in_progress,
        priority: taskPriority.low,
        dueDate: new Date("2026-10-19"),
        createdAt: new Date("2026-10-14")
    },
    {
        id: 11,
        title: "Préparation de la soutenance",
        description: "Créer les diapositives de présentation du projet de fin de module",
        status: taskStatus.todo,
        priority: taskPriority.high,
        dueDate: new Date("2026-11-05"),
        createdAt: new Date("2026-10-15")
    },
    {
        id: 12,
        title: "Tests unitaires et fonctionnels",
        description: "Écrire les tests PHPUnit pour les services métiers",
        status: taskStatus.todo,
        priority: taskPriority.high,
        dueDate: new Date("2026-10-21"),
        createdAt: new Date("2026-10-11")
    },
    {
        id: 13,
        title: "Veille technologique",
        description: "Explorer l'utilisation des modèles locaux avec Ollama",
        status: taskStatus.done,
        priority: taskPriority.low,
        dueDate: new Date("2026-10-09"),
        createdAt: new Date("2026-10-01")
    },
    {
        id: 14,
        title: "Configuration du VPN FortiGate",
        description: "Vérifier les règles de routage et les accès distants",
        status: taskStatus.in_progress,
        priority: taskPriority.medium,
        dueDate: new Date("2026-10-24"),
        createdAt: new Date("2026-10-12")
    },
    {
        id: 15,
        title: "Séance de sport",
        description: "Aller courir pour maintenir la forme physique",
        status: taskStatus.todo,
        priority: taskPriority.low,
        dueDate: new Date("2026-10-16"),
        createdAt: new Date("2026-10-15")
    }
];