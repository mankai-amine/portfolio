/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

// Language translations
const translations = {
  fr: {
    nav_projects: "Projets",
    nav_miniprojects: "Mini-projets",
    nav_about: "À propos",
    nav_contact: "Contact",
    header_name: "Amine Mankai",
    header_desc: "Développeur Full-Stack passionné et bilingue basé à Montréal, QC, Canada.",
    header_contact: "Contactez-moi",
    about_title: "À propos de moi",
    about_text: "Développeur full-stack avec une solide formation en mathématiques et en ingénierie, spécialisé dans la conception et le développement d’applications web évolutives. <br> Compétent en Java, JavaScript, TypeScript, PHP, avec une expérience pratique des frameworks tels que Spring Boot, React.js, Node.js, Express, WPF et ASP.NET Core. <br> Capable de résoudre des problèmes complexes et de produire un code efficace et maintenable.",
    about_resume: "Mon CV",
    projects_title: "Projets",
    savorly_desc: "Une application web pour les passionnés de cuisine. <br/> Les utilisateurs peuvent parcourir, noter, imprimer, partager et commenter des recettes. <br/> Ils peuvent enregistrer leurs favoris et gérer leurs propres recettes. <br/> Un outil de recherche alimenté par l'IA aide à trouver les meilleures recettes selon des mots-clés.",
    nextstop_desc: "Application web pour un système de billetterie de bus. <br/> Les utilisateurs peuvent rechercher des trajets, acheter des billets et consulter leurs commandes.<br/> Les administrateurs peuvent gérer le système en créant et modifiant des bus et des trajets.",
    shoptill_desc: "Application web pour une place de marché. <br/> Les acheteurs peuvent parcourir les produits, finaliser leurs achats et suivre leurs commandes. <br/> Les vendeurs peuvent gérer leurs annonces et suivre leurs ventes.",
    twixer_desc: "Application web inspirée de Twitter/X.<br/> Fonctionnalités : authentification, création, édition et suppression de posts, likes, commentaires, republications et suivi d'autres utilisateurs.",
    miniprojects_title: "Mini-projets",
    youtube_desc: "Outil IA pour résumer et sauvegarder mes vidéos YouTube préférées. <br/> Utilise YoutubeTranscriptApi pour récupérer les sous-titres et GPT d'OpenAI pour générer des résumés.",
    bookfinder_desc: "L'application utilise l'API Google Books pour permettre la recherche de livres par titre. <br/> Affiche la couverture, le titre, l'auteur, l'éditeur et un lien vers plus de détails.",
    game2048_desc: "Jeu de puzzle glissant où l'objectif est de combiner des tuiles numérotées pour atteindre 2048.",
    contact_title: "Contactez-moi",
    contact_text: "Vous recherchez un développeur full-stack bilingue ? <br> Des questions, des conseils ou envie de dire bonjour ? <br> N'hésitez pas à me contacter ! Le meilleur moyen est par email.",
    contact_btn: "medaminemankai@gmail.com",
    visit_website: "Site web",
  },
  en: {
    nav_projects: "Projects",
    nav_miniprojects: "Mini-projects",
    nav_about: "About",
    nav_contact: "Contact",
    header_name: "Amine Mankai",
    header_desc: "A passionate, bilingual Full-Stack Developer based in Montréal, QC, Canada.",
    header_contact: "Get in touch",
    about_title: "About Me",
    about_text: "Full-stack developer with a strong foundation in mathematics and engineering, skilled in designing and building scalable web applications. <br> Proficient in Java, JavaScript, TypeScript, PHP, and C#, with hands-on experience in frameworks such as Spring Boot, React.js, Node.js, Express, WPF, and ASP.NET Core. <br> Adept at logical problem-solving and delivering efficient, maintainable code.",
    about_resume: "My Resume",
    projects_title: "Projects",
    savorly_desc: "A web app for food lovers. <br/> Users can browse, rate, print, share, and comment on recipes. <br/> They can save favorites and manage their own recipes. <br/> An AI-powered search tool helps find the best recipes based on keywords.",
    nextstop_desc: "Web app for a Bus Ticketing System. <br/> Users can search for trips, purchase tickets, and view their orders.<br/> Admins can manage the system by creating and modifying buses and trips.",
    shoptill_desc: "Web app for a marketplace. <br/> Buyers can browse products, complete purchases through a checkout process, and track their orders. <br/> Sellers can manage listings by creating, updating, or deleting products and monitor their sales performance.",
    twixer_desc: "Web app inspired by Twitter/X.<br/> Features include user authentication, the ability to create, edit, and delete posts, as well as like, comment and repost others' posts. Users can also follow other users.",
    miniprojects_title: "Mini-projects",
    youtube_desc: "An AI-powered tool for summarizing and saving my favorite YouTube videos. <br/> It uses Python's YoutubeTranscriptApi library to fetch captions, and OpenAI's GPT to generate concise summaries of the text.",
    bookfinder_desc: "The app uses Google Books API to enable users to search for books by title. <br/> It displays key information including the cover image, title, author(s), publisher, and a link to additional details.",
    game2048_desc: "A sliding puzzle game where the objective is to combine numbered tiles to form a tile with the number 2048.",
    contact_title: "Get in Touch",
    contact_text: "Looking for a skilled, bilingual full-stack developer? <br> Have questions, advice, or just want to say hello? <br> Feel free to reach out! The best way to get in touch is via email.",
    contact_btn: "medaminemankai@gmail.com",
    visit_website: "Visit Website",
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  // Set active button
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  // Switch resume link
  const resumeLink = document.getElementById('resume-link');
  if (resumeLink) {
    if (lang === 'fr') {
      resumeLink.href = 'files/CV Amine Mankai.pdf';
    } else {
      resumeLink.href = 'files/Resume Amine Mankai.pdf';
    }
  }
}

document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('btn-fr').addEventListener('click', () => setLanguage('fr'));
// Optionally, set default language based on browser or preference
setLanguage('en');
