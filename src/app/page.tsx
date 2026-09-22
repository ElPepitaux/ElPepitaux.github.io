"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Menu, Network, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const skills = [
  { fr: "Langages", en: "Languages", items: "C / C++ · Python · JavaScript / TypeScript · Haskell" },
  { fr: "Web", en: "Web", items: "Next.js · React.js · Node.js" },
  { fr: "Données", en: "Data", items: "MongoDB · MySQL" },
  { fr: "Outils & DevOps", en: "Tools & DevOps", items: "Docker · Ansible · Git · GitHub Actions" },
  { fr: "Graphisme", en: "Graphics", items: "Qt (C++) · Vulkan · OpenXR" },
];

type LocalizedText = { fr: string; en: string };

type Experience = {
  period: string;
  role: LocalizedText;
  company: string;
  detail: LocalizedText;
  technologies?: LocalizedText;
};

const experience: Experience[] = [
  {
    period: "Juin 2025 — aujourd’hui",
    role: { fr: "Associé Fondateur", en: "Founding Associate" },
    company: "Preskater",
    detail: { fr: "Co-création d’une startup spécialisée dans le développement de solutions numériques sur-mesure, de la conception à la mise en production.", en: "Co-creating a startup focused on custom digital solutions, from design through to production." },
    technologies: { fr: "Applications web · Transformation digitale", en: "Web applications · Digital transformation" },
  },
  {
    period: "Avril 2025 — août 2025",
    role: { fr: "Stage Ingénieur Logiciel", en: "Software Engineering Intern" },
    company: "Exail",
    detail: { fr: "Développement et optimisation d’un logiciel de contrôle pour un bras robotique industriel, avec interfaces de supervision et contraintes temps réel.", en: "Development and optimization of control software for an industrial robotic arm, including monitoring interfaces and real-time constraints." },
    technologies: { fr: "C++ · Qt", en: "C++ · Qt" },
  },
  {
    period: "Septembre 2024 — mars 2025",
    role: { fr: "Assistant Pédagogique", en: "Teaching Assistant" },
    company: "Epitech",
    detail: { fr: "Encadrement de projets étudiants, suivi pédagogique personnalisé et animation d’ateliers techniques.", en: "Mentoring student projects, providing personalized guidance and leading technical workshops." },
  },
  {
    period: "Août 2023 — décembre 2023",
    role: { fr: "Stage Développeur Full-Stack", en: "Full-Stack Developer Intern" },
    company: "Austral Energie",
    detail: { fr: "Création d’un logiciel de comptabilité et développement d’un portail client et d’un chatbot pour la prise de rendez-vous.", en: "Built accounting software and developed a customer portal and chatbot for appointment scheduling." },
    technologies: { fr: "Next.js · MongoDB · Node.js", en: "Next.js · MongoDB · Node.js" },
  },
];

type Project = {
  number: string;
  name: string;
  type: LocalizedText;
  description: LocalizedText;
  tags: { fr: string[]; en: string[] };
  href?: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "DraftMode",
    type: { fr: "Plateforme de tournois de programmation", en: "Programming tournament platform" },
    description: { fr: "Une interface Next.js pour découvrir des tournois, gérer des compétitions et préparer un draft de langages.", en: "A Next.js interface for discovering tournaments, managing competitions and preparing a language draft." },
    tags: { fr: ["Next.js", "TypeScript", "Prisma"], en: ["Next.js", "TypeScript", "Prisma"] },
    href: "https://github.com/ElPepitaux/DraftMode",
  },
  {
    number: "02",
    name: "FusionNet",
    type: { fr: "Bibliothèque réseau C++", en: "C++ networking library" },
    description: { fr: "Une bibliothèque réseau TCP moderne basée sur le pattern Reactor, avec boucle événementielle et routage de paquets.", en: "A modern TCP networking library built around the Reactor pattern, with an event loop and packet routing." },
    tags: { fr: ["C++20", "CMake", "TCP"], en: ["C++20", "CMake", "TCP"] },
    href: "https://github.com/ElPepitaux/fusionNet",
  },
  {
    number: "03",
    name: "Visualisation de Dijkstra",
    type: { fr: "Algorithme · C / CSFML", en: "Algorithm · C / CSFML" },
    description: { fr: "Une visualisation en temps réel de l’algorithme de Dijkstra sur une grille 10 × 10, avec chemin final mis en évidence.", en: "A real-time visualization of Dijkstra’s algorithm on a 10 × 10 grid, with the final path highlighted." },
    tags: { fr: ["C", "CSFML", "Makefile"], en: ["C", "CSFML", "Makefile"] },
    href: "https://github.com/ElPepitaux/dijkstrAlgorithm",
  },
];

type Language = "fr" | "en";

const ui = {
  fr: {
    navigation: ["à propos", "compétences", "expérience", "projets", "contact"],
    available: "Disponible pour des opportunités",
    hero: "Développeur logiciel qui construit des outils utiles",
    heroSecondLine: "pour les systèmes, le web et la robotique.",
    projectsCta: "Voir mes projets",
    contactCta: "Me contacter",
    basedIn: "Basé en France",
    explore: "Explorer ↓",
    aboutLabel: "01 — À propos",
    aboutTitle: ["Curieux par nature.", "Précis par pratique."],
    aboutLead: "Je suis développeur logiciel, avec une expérience dans les logiciels de comptabilité, les plateformes client, les outils pour développeurs et la robotique autonome.",
    aboutBody: "Mon travail se situe entre la construction de systèmes fiables et leur mise en pratique pour les personnes qui les utilisent. Je suis également co-fondateur de Preskater, un projet né d’un intérêt de longue date pour le skateboard.",
    cv: "Voir mon CV",
    cvCpp: "CV — C++ / Systèmes",
    cvFullstack: "CV — Full-Stack",
    skillsLabel: "02 — Compétences",
    skillsTitle: ["Des outils pour des", "logiciels réfléchis."],
    experienceLabel: "03 — Expérience",
    experienceTitle: ["Apprendre sur des", "problèmes réels."],
    projectsLabel: "04 — Projets sélectionnés",
    projectsTitle: ["Construits avec", "intention."],
    projectLink: "Voir sur GitHub",
    contactLabel: "05 — Contact",
    contactTitle: ["Construisons quelque chose", "d’utile."],
    contactBody: "Ouvert aux échanges autour du logiciel, d’outils ambitieux et d’opportunités où les détails comptent.",
    backToTop: "Retour en haut ↑",
    builtWith: "Construit avec intention.",
  },
  en: {
    navigation: ["about", "skills", "experience", "projects", "contact"],
    available: "Available for opportunities",
    hero: "Software developer building useful tools",
    heroSecondLine: "across systems, web and robotics.",
    projectsCta: "View my projects",
    contactCta: "Contact me",
    basedIn: "Based in France",
    explore: "Scroll to explore ↓",
    aboutLabel: "01 — About",
    aboutTitle: ["Curious by nature.", "Precise by practice."],
    aboutLead: "I am a software developer with experience across accounting software, customer platforms, developer tooling and autonomous robotics.",
    aboutBody: "My work moves between building reliable systems and making them useful to the people who depend on them. I am currently co-founder of Preskater, a project born from a long-standing interest in skateboarding.",
    cv: "View my CV",
    cvCpp: "CV — C++ / Systems",
    cvFullstack: "CV — Full-Stack",
    skillsLabel: "02 — Skills",
    skillsTitle: ["Tools for thoughtful", "software."],
    experienceLabel: "03 — Experience",
    experienceTitle: ["Learning through", "real problems."],
    projectsLabel: "04 — Selected projects",
    projectsTitle: ["Built with", "intention."],
    projectLink: "View on GitHub",
    contactLabel: "05 — Contact",
    contactTitle: ["Let’s build something", "useful."],
    contactBody: "Open to conversations about software, ambitious tools and opportunities where the details matter.",
    backToTop: "Back to top ↑",
    builtWith: "Built with intention.",
  },
} as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("fr");
  const copy = ui[language];
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "fr" ? "Léo Sautron — Développeur logiciel" : "Léo Sautron — Software Developer";
  }, [language]);

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" onClick={closeMenu}>LS<span>.</span></a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navigation principale">
          {copy.navigation.map((item, index) => (
            <a key={item} href={`#${["about", "skills", "experience", "projects", "contact"][index]}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <div className="language-switcher" aria-label={language === "fr" ? "Choisir la langue" : "Choose language"}>
          {(["fr", "en"] as const).map((option) => (
            <button key={option} className={language === option ? "language-button is-active" : "language-button"} type="button" onClick={() => setLanguage(option)} aria-pressed={language === option}>{option.toUpperCase()}</button>
          ))}
        </div>
        <button className="menu-button" type="button" aria-label={menuOpen ? (language === "fr" ? "Fermer le menu" : "Close menu") : (language === "fr" ? "Ouvrir le menu" : "Open menu")} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section id="top" className="hero page-width">
        <div className="hero-kicker"><span className="status-dot" /> {copy.available}</div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>Léo Sautron<span>.</span></motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>{copy.hero}<br className="desktop-only" /> {copy.heroSecondLine}</motion.p>
        <div className="hero-actions"><a className="button button-dark" href="#projects">{copy.projectsCta} <ArrowUpRight size={16} /></a><a className="button button-light" href="#contact">{copy.contactCta}</a></div>
        <div className="hero-meta"><span>01 / 05</span><span>{copy.basedIn}</span><span>{copy.explore}</span></div>
      </section>

      <section id="about" className="section page-width split-section">
        <Reveal><p className="eyebrow">{copy.aboutLabel}</p></Reveal>
        <Reveal delay={0.1} className="section-content"><h2>{copy.aboutTitle[0]}<br /><em>{copy.aboutTitle[1]}</em></h2><p className="lead">{copy.aboutLead}</p><p>{copy.aboutBody}</p><div style={{ display: "flex", flexWrap: "wrap", gap: "0 26px" }}><a className="text-link" href={`/cv/CV_Leo_Sautron_Cpp_${language === "fr" ? "FR" : "EN"}.pdf`} target="_blank" rel="noreferrer">{copy.cvCpp} <ArrowUpRight size={15} /></a><a className="text-link" href={`/cv/CV_Leo_Sautron_FullStack_${language === "fr" ? "FR" : "EN"}.pdf`} target="_blank" rel="noreferrer">{copy.cvFullstack} <ArrowUpRight size={15} /></a></div></Reveal>
      </section>

      <section id="skills" className="section section-grey"><div className="page-width split-section"><Reveal><p className="eyebrow">{copy.skillsLabel}</p></Reveal><Reveal delay={0.1} className="section-content"><h2>{copy.skillsTitle[0]}<br /><em>{copy.skillsTitle[1]}</em></h2><div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill.fr}><span>0{index + 1}</span><div><h3>{skill[language]}</h3><p>{skill.items}</p></div></div>)}</div></Reveal></div></section>

      <section id="experience" className="section page-width split-section"><Reveal><p className="eyebrow">{copy.experienceLabel}</p></Reveal><Reveal delay={0.1} className="section-content"><h2>{copy.experienceTitle[0]}<br /><em>{copy.experienceTitle[1]}</em></h2><div className="timeline">{experience.map((item) => <article className="timeline-item" key={`${item.company}-${item.period}`}><p className="timeline-period">{item.period}</p><div><h3>{item.role[language]}</h3><p className="company">{item.company}</p><p>{item.detail[language]}</p>{item.technologies && <p className="experience-tech">{item.technologies[language]}</p>}</div></article>)}</div></Reveal></section>

      <section id="projects" className="section section-grey"><div className="page-width"><Reveal><div className="section-heading"><p className="eyebrow">{copy.projectsLabel}</p><h2>{copy.projectsTitle[0]}<br /><em>{copy.projectsTitle[1]}</em></h2></div></Reveal><div className="project-grid">{projects.map((project, index) => <Reveal key={project.name} delay={index * 0.08} className="project-card">{project.href ? <a className="project-top" href={project.href} target="_blank" rel="noreferrer" aria-label={`${copy.projectLink} : ${project.name}`}><span>{project.number}</span><ArrowUpRight size={18} /></a> : <div className="project-top"><span>{project.number}</span></div>}<div><p className="project-type">{project.type[language]}</p><h3>{project.name}</h3><p>{project.description[language]}</p></div><div className="tags">{project.tags[language].map((tag) => <span key={tag}>{tag}</span>)}</div></Reveal>)}</div></div></section>

      <section id="contact" className="contact-section page-width"><Reveal><p className="eyebrow">{copy.contactLabel}</p><h2>{copy.contactTitle[0]}<br /><em>{copy.contactTitle[1]}</em></h2><p className="contact-copy">{copy.contactBody}</p><a className="contact-email" href="mailto:leo.sautron@epitech.eu">leo.sautron@epitech.eu <ArrowUpRight size={18} /></a><div className="social-links"><a href="https://github.com/ElPepitaux" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a><a href="https://www.linkedin.com/in/leo-sautron/" target="_blank" rel="noreferrer"><Network size={17} /> LinkedIn</a></div></Reveal></section>

      <footer className="footer page-width"><span>© 2026 Léo Sautron</span><span>{copy.builtWith}</span><a href="#top">{copy.backToTop}</a></footer>
    </main>
  );
}
