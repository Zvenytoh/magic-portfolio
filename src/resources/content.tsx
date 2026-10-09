import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mehdi",
  lastName: "Ennajeh",
  name: "Mehdi Ennajeh",
  role: "Développeur Full Stack",
  avatar: "/images/mehdi.jpg?v=1",
  email: "mehdiennajehfr@gmail.com",
  location: "Europe/Paris",
  languages: ["Français", "Anglais (B2)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Abonnez-vous à la newsletter de {person.firstName}</>,
  description: <>Actualités sur le développement et l'entrepreneuriat</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Zvenytoh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mehdi-ennajeh-8294272b6/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `${person.name} | Développeur Full Stack`,
  description: `Portfolio de ${person.name} - Développeur Full Stack & Entrepreneur basé à Arras, France`,
  headline: <>Des applications utiles, du code au déploiement</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Budget</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projet phare
        </Text>
      </Row>
    ),
    href: "/work/budget",
  },
  subline: (
    <>
      Je conçois des applications web et mobile, j'héberge mes services et je déploie mes projets.
      <br />
      Titulaire du{" "}
      <Text as="span" size="xl" weight="strong">
        Bachelor DevOps Fullstack – Développeur IA
      </Text>{" "}
      de{" "}
      <Text as="span" size="xl" weight="strong">
        l'EPSI
      </Text>
      .
      <br />
      En parallèle, je co-pilote{" "}
      <Text as="span" size="xl" weight="strong">
        VTC ARRAS HDF
      </Text>{" "}
      en tant que Directeur Associé.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Découvrez ${person.name}, ${person.role} de 20 ans basé à Arras, France`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Développeur et jeune entrepreneur de 20 ans basé à Arras, je conçois des applications web et
        mobile, de l'interface à leur déploiement. Diplômé du Bachelor DevOps Fullstack de l'EPSI,
        avec une spécialisation Développeur IA, j'ai réalisé une alternance chez Kiho Dev :
        développement web avec Angular et Spring Boot, applications mobiles avec Flutter, et
        pratique avancée de SQL Server. Ma formation m'a également permis de travailler sur des
        architectures microservices, Oracle, Next.js et le développement de modèles d'IA. J'aime
        construire des outils robustes qui répondent à de vrais besoins.
        <br />
        <br />
        J'héberge également mes services et déploie les sites de mes projets avec Docker, Dokploy et
        Coolify. Je gère les domaines avec le DNS Cloudflare et le stockage de fichiers avec
        Cloudflare R2.
        <br />
        <br />
        Cette double casquette est ma force : je comprends les enjeux de rentabilité d'une
        entreprise tout en ayant les compétences techniques pour les résoudre.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences",
    experiences: [
      {
        company: "Kiho Dev",
        timeframe: "Sept. 2025 - Sept. 2026",
        role: "Développeur Full Stack (Alternance)",
        achievements: [
          <>Développement d'interfaces web avec Angular pour des applications professionnelles.</>,
          <>Développement de services back-end avec Java et Spring Boot.</>,
          <>Développement d'applications mobiles multiplateformes avec Flutter et Dart.</>,
          <>Pratique avancée de SQL Server pour la gestion des données applicatives.</>,
          <>Travail en mode hybride à Liévin, Hauts-de-France.</>,
        ],
        images: [],
      },
      {
        company: "Medev - Solutions web et mobile",
        timeframe: "Juil. 2025 - Présent",
        role: "Freelance",
        achievements: [
          <>Création de sites et applications web sur mesure.</>,
          <>Développement mobile multiplateforme avec Flutter.</>,
          <>Conseil, optimisation et accompagnement technique.</>,
        ],
        images: [],
      },
      {
        company: "VTC ARRAS HDF",
        timeframe: "Juin 2023 - Présent",
        role: "Directeur Associé",
        achievements: [
          <>
            <strong>Transformation Digitale :</strong> Modernisation des processus et implantation
            de nouveaux systèmes de gestion et de facturation.
          </>,
          <>
            <strong>Stratégie Opérationnelle :</strong> Gestion des investissements (flotte de
            véhicules) et appui aux décisions de direction.
          </>,
          <>
            <strong>Marketing :</strong> Définition de l'identité visuelle et des supports de
            communication.
          </>,
        ],
        images: [],
      },
      {
        company: "Cordonnerie François Fernez",
        timeframe: "Janv. 2025 - Fév. 2025",
        role: "Stagiaire Développeur Web",
        achievements: [
          <>Développement de site vitrine avec Symfony et JavaScript.</>,
          <>Intégration de fonctionnalités interactives pour améliorer l'expérience utilisateur.</>,
          <>
            Mise en place du back-end sous Symfony, gestion des données et optimisation des
            performances.
          </>,
        ],
        images: [],
      },
      {
        company: "VTC ARRAS HDF",
        timeframe: "Mai 2024 - Juil. 2024",
        role: "Stagiaire Développeur Web",
        achievements: [
          <>
            Création d'une plateforme web sur WordPress avec intégration d'un système de
            réservation.
          </>,
          <>Installation et configuration d'un environnement d'hébergement dédié pour le site.</>,
          <>
            Optimisation des performances du site via la personnalisation de plugins et la gestion
            du cache.
          </>,
        ],
        images: [],
      },
      {
        company: "Nausicaà",
        timeframe: "Nov. 2021 - Déc. 2021",
        role: "Technicien Réparation Informatique",
        achievements: [
          <>
            Déploiement de solutions logicielles et matérielles pour assurer la fiabilité des
            systèmes.
          </>,
          <>
            Maintenance préventive et corrective avec analyses précises et interventions ciblées.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "EPSI - L'école d'ingénierie informatique (Arras)",
        description: (
          <>
            Bachelor DevOps Fullstack – Spécialisation Développeur IA
            <br />
            <Text onBackground="neutral-weak" variant="body-default-s">
              Diplôme obtenu
            </Text>
            <br />
            <br />
            <Text as="span" onBackground="neutral-medium" variant="body-default-m">
              Une formation associant développement web, architecture applicative, bases de données
              et intelligence artificielle, à travers des projets pédagogiques.
              <br />
              <br />
              <strong>Architecture microservices :</strong> conception d'applications organisées en
              services distincts, avec une attention portée à la séparation des responsabilités et
              aux échanges entre services.
              <br />
              <br />
              <strong>Développement web :</strong> réalisation d'applications avec Next.js, en
              associant interfaces et logique applicative.
              <br />
              <br />
              <strong>Bases de données :</strong> utilisation d'Oracle et de SQL dans les projets de
              formation, pour travailler sur les données des applications.
              <br />
              <br />
              <strong>Intelligence artificielle :</strong> conception et développement de modèles
              d'IA dans le cadre de la spécialisation Développeur IA.
            </Text>
          </>
        ),
      },
      {
        name: "Lycée Guy Mollet (Arras)",
        description: (
          <>
            BTS Services Informatiques aux Organisations (SIO SLAM)
            <br />
            <Text onBackground="neutral-weak" variant="body-default-s">
              Sept. 2023 - Juin 2025
            </Text>
            <br />
            <Text onBackground="neutral-weak" variant="body-default-xs">
              Développement web, Bases de données, Développement mobile, Cybersécurité
            </Text>
          </>
        ),
      },
      {
        name: "Lycée Édouard Branly (Boulogne-sur-Mer)",
        description: (
          <>
            Baccalauréat professionnel Systèmes Numériques — <strong>Mention Bien</strong>
            <br />
            <Text onBackground="neutral-weak" variant="body-default-s">
              Sept. 2020 - Juin 2023
            </Text>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Développement Web",
        description: (
          <>
            <strong>Front-end :</strong> HTML, CSS, JavaScript, React, Next.js, Angular
            <br />
            <strong>Back-end :</strong> PHP, Symfony, Node.js, Java, Spring Boot, Doctrine ORM
            <br />
            <strong>Architecture :</strong> Microservices, séparation des responsabilités, échanges
            entre services
            <br />
            <strong>API & BDD :</strong> API Platform, API REST, SQL, SQL Server (niveau avancé),
            Oracle, PostgreSQL, phpMyAdmin
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Angular", icon: "angular" },
          { name: "Spring Boot" },
          { name: "SQL Server" },
          { name: "Oracle" },
        ],
        images: [],
      },
      {
        title: "Développement Mobile",
        description: (
          <>
            <strong>Applications :</strong> React Native, Expo, Flutter, Dart — iOS & Android
            <br />
            <strong>Navigation & interface :</strong> Expo Router, NativeWind
            <br />
            <strong>Données locales :</strong> SQLite, Drizzle ORM, TanStack Query
          </>
        ),
        tags: [
          { name: "Flutter", icon: "flutter" },
          { name: "React Native" },
          { name: "Expo" },
          { name: "SQLite" },
        ],
        images: [],
      },
      {
        title: "Intelligence artificielle",
        description: (
          <>
            Conception et développement de modèles d'intelligence artificielle dans le cadre des
            projets pédagogiques de ma spécialisation Développeur IA à l'EPSI.
          </>
        ),
        tags: [{ name: "Modèles d'IA" }],
        images: [],
      },
      {
        title: "DevOps & Infrastructure",
        description: (
          <>
            <strong>Hébergement :</strong> Gestion de VPS, Docker, services auto-hébergés
            <br />
            <strong>Déploiement :</strong> Dokploy, Coolify, mise en ligne des sites de mes projets
            <br />
            <strong>Domaines & stockage :</strong> DNS Cloudflare, stockage objet Cloudflare R2
            <br />
            <strong>CI/CD :</strong> GitHub Actions, GitHub Apps, Pipelines automatisés
            <br />
            <strong>Automatisation :</strong> N8N, scripts Bash
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Dokploy" },
          { name: "Coolify" },
          { name: "Cloudflare R2" },
        ],
        images: [],
      },
      {
        title: "Systèmes & Réseaux Linux",
        description: (
          <>
            <strong>Administration :</strong> Arch, openSUSE, Fedora, Ubuntu, Debian, Manjaro
            <br />
            <strong>Réseaux :</strong> Configuration IP, iptables, SSH
            <br />
            <strong>Paquets :</strong> pacman, zypper, apt, dnf
          </>
        ),
        tags: [{ name: "Linux", icon: "linux" }],
        images: [],
      },
      {
        title: "Outils & Méthodologie",
        description: (
          <>
            <strong>Versioning :</strong> Git, GitHub
            <br />
            <strong>Gestion de paquets :</strong> npm, Yarn
            <br />
            <strong>Méthodologie :</strong> Agile, Scrum
          </>
        ),
        tags: [{ name: "Git", icon: "git" }],
        images: [],
      },
      {
        title: "Soft Skills",
        description: (
          <>
            <strong>Organisation :</strong> Gestion du temps et priorisation des tâches
            <br />
            <strong>Esprit d'équipe :</strong> Collaboration et soutien des collègues
            <br />
            <strong>Communication :</strong> Expression claire des idées
            <br />
            <strong>Adaptabilité :</strong> Ajustement rapide aux changements
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Articles & Réflexions",
  description: `Découvrez les articles de ${person.name} sur le développement et l'entrepreneuriat`,
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets de développement réalisés par ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `Collection de photos par ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
