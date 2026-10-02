
export const profile = {
  name: 'Hugo Samray',
  role: 'Développeur Full-Stack',
  tagline: "Je m'occupe de concevoir et de développer des produits webs et natifs soignés, du prototype à la mise en production.",
  location: 'Namur & Liège, Belgique',
  availability: 'Disponible pour de nouvelles missions',
  email: 'hugo.samray@icloud.com',
  cvUrl: '/cv.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hugo-samray/' },
  ],
}

export const about = {
  paragraphs: [
    "Fraichement diplomé de l'Henallux, je suis actuellement à la recherche d'un emploi en développement " +
      "d'application.",
    "J'aime particulièrement suivre un projet du début à la fin, en posant des questions sur ce que le client " +
      "souhaite. Je crée des projets adaptés pour pc et mobile, avec une interface responsive et cohérente.",
    "Cependant, je suis tout à fait ouvert à travailler sur un projet déjà existant, à le corriger ou y ajouter de " +
      "nouvelles fonctionnalités.",
    "En dehors du code, "
  ],
}

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { category: 'Langages', items: ['JavaScript','Java', 'C', 'C#', 'SQL'] },
  { category: 'Frontend', items: ['React','Node.js', 'Vite', 'React Native', 'AureliaJS'] },
  { category: 'Backend', items: ['Express', 'PostgreSQL', 'MongoDB', 'SQLServer'] },
  { category: 'Outils', items: ['Git', 'Docker', 'VSCode', 'WebStorm', 'Claude Code'] },
]

export type ExperienceItem = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: "Etudiant en Bachelier informatique orientation développement d'application",
    company: 'Henallux',
    period: 'Sept 2022 — Août 2026',
    bullets: [
      'Frontend', 'Backend', 'Mobile', 'Algorithmes', 'Analyse'
    ],
  },
  {
    role: 'Stagiaire',
    company: 'De Buck Technologies',
    period: 'Sept 2025 - Déc 2025',
    bullets: [
      "Porter le site Web Myanka sur les stores d'applications mobiles",
    ],
  },
]

export type Project = {
  title: string
  description: string
  tags?: string[]
  demoUrl?: string
  repoUrl?: string
  subProjects?: Project[]
}

export const projects: Project[] = [
  {
    title: 'Smart city',
    description:
    "Dans le cadre de mes cours de 3ème, nous avons travaillé sur un projet smart city. Notre groupe a choisi de " +
      "travailler sur une application permettant de regrouper sur une carte divers vehicules à partager, comme des " +
      "vélos élecrtiques, trottinettes, voiture, etc. CE projet se divise en 3 sous projets. :",
    subProjects: [
      {
        title: 'Application ReactNative',
        description:
          "Un prototype d'application frontend, avec une carte des différents vehicules, lancement de courses, " +
          "la possibilité de modifier ses propres informations. L'application était adaptée pour iOS et Android et avec " +
          "des thèmes clair/sombre",
        tags: ['ReactNative', 'ExpoGo', 'Android Studio', 'Apple Simulator'],
      },
      {
        title: 'Back Office',
        description:
          'Application frontend admin permettant la gestion des différents véhicules et utilisateurs.',
        tags: ['React', 'Vite'],
      },{
        title: 'API',
        description:
          'API complète reliant le tout',
        tags: ['NodeJS', 'Express', 'PostgreSQL'],
      },
    ]
  },
  {
    title: "TinyHome",
    description: "Projet réalisé dans le cadre du cours de Java. l'objectif était de réaliser un site de vente en " +
      "ligne, avec connexion, historique de commande, filtrer les articles par catégories, gestion du panier, " +
      "responsive, etc.",
    tags: ['Java', 'Spring', 'PayPal Sandbox', 'MySQL'],
  },
  {
    title: "BillBoard Manager",
    description: "Projet vibe codé à la demande de la Jeunesse de magnée. L'app regroupe différents panneaux " +
      "d'affichages, ou les membres peuvent dire quand ils ont collé une affiche sur ce panneau. les admin peuvent " +
      "aussi ajouter des panneaux et gérer les utilisateurs.",
    tags : ['React', 'Vite', 'MongoDB'],
    demoUrl : "https://hugosam28.github.io/billboard-manager/",
    repoUrl : "https://github.com/HugoSam28/billboard-manager",
  },
  {
    title: "4h Cuistax",
    description: "À la demande de la Jeunesse de Magnée, cette application vibe codée dans l'urgence permet de créer " +
      "les équipes du cuistax, de lancer les qualifications, lancer la course, avec différents écrans en simultanés " +
      "pour afficher les résultats en temps réel ou encore avoir un écran pour le comptage des tours type stream deck.",
    tags : ['JS'],
    repoUrl : "https://github.com/HugoSam28/JDM-4hCuistax",
  }
]

export const nav = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
