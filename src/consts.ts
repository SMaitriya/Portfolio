import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Mon Portfolio",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}


// Degree Page
export const FORMATION: Page = {
  TITLE: "Mes formations",
  DESCRIPTION: "mes formations",
}



// Work Page
export const WORK: Page = {
  TITLE: "Expérience professionnelle",
  DESCRIPTION: "Places I have worked.",
}

// Stage Page
export const STAGE: Page = {
  TITLE: "Stage",
  DESCRIPTION: "mes stages",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Accueil",
    HREF: "/",
  },
  {
    TEXT: "Formations",
    HREF: "/formation",
  },
  {
    TEXT: "Experience",
    HREF: "/work",
  },
  {
    TEXT: "Stages",
    HREF: "/stage",
  },

  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projets",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "maitriya@outlook.fr",
    HREF: "mailto:maitriya@outlook.fr",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "SMaitriya",
    HREF: "https://github.com/SMaitriya"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "maitriya-sramaner",
    HREF: "https://www.linkedin.com/in/maitriya-sramaner/",
  }

]

