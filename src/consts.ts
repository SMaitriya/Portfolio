import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Mon Portfolio",
  DESCRIPTION: "Bienvenue dans mon portfolio",
  AUTHOR: "Mark Horn",
}


// Degree Page
export const FORMATION: Page = {
  TITLE: "Education",
  DESCRIPTION: "mes formations",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work experiences",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Technological monitoring ",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Stage Page
export const STAGE: Page = {
  TITLE: "Internships",
  DESCRIPTION: "mes stages",
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
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Education",
    HREF: "/formation",
  },
  {
    TEXT: "Experiences",
    HREF: "/work",
  },
  {
    TEXT: "Internships",
    HREF: "/stage",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Tech\u00A0monitoring",
    HREF: "/blog",
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

