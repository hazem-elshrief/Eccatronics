const LINKS = {
  instagram: "https://www.instagram.com/eccatronics_scu?stkn=OGRwem9tZm9lb2s2",
  facebook: "https://www.facebook.com/share/19U7Czfsxu/",
  linkedin: "https://www.linkedin.com/company/eccatronics/",
  tiktok: "https://www.tiktok.com/@eccatronics.team?_r=1&_t=ZS-9AFOQA1r9DZ",

  mechanical: "mechanical.html",
  electronics: "electronics.html",
  automation: "automation.html",
  ai: "ai.html",
  hr: "hr.html",
  pr: "pr.html",
  social: "social.html"
};

document.querySelectorAll("[data-link]").forEach(el => {
  const key = el.dataset.link;
  const url = LINKS[key];

  if (url && url !== "#") {
    el.href = url;
    if (url.startsWith("http")) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  }
});
