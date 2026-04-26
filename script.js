const projects = [
  {
    name: "Velosite",
    language: "TypeScript",
    year: "2026",
    description:
      "An AI-powered website and UI generator that turns simple prompts into clean, modern, responsive frontend experiences in seconds.",
    link: "https://github.com/Naksh7Gupta/Velosite",
    focus: "AI UI generation",
    stars: 1,
  },
  {
    name: "Diffusion-Model",
    language: "Python",
    year: "2026",
    description:
      "Implemented DDPM from scratch with U-Net, forward and reverse diffusion, noise scheduling, and a training pipeline that learns to generate MNIST digits.",
    link: "https://github.com/Naksh7Gupta/Diffusion-Model",
    focus: "Research implementation",
    stars: 1,
  },
  {
    name: "Loan-approval-Project",
    language: "JavaScript",
    year: "2026",
    description:
      "An ML loan approval system with over 95 percent accuracy, showing end-to-end model thinking and a practical deployment mindset.",
    link: "https://github.com/Naksh7Gupta/Loan-approval-Project",
    focus: "Applied machine learning",
    stars: 1,
  },
  {
    name: "NeuraNova",
    language: "Python",
    year: "2026",
    description:
      "An AI-powered chatbot project focused on natural conversation, builder experimentation, and practical NLP exploration.",
    link: "https://github.com/Naksh7Gupta/NeuraNova",
    focus: "Conversational AI",
    stars: 1,
  },
  {
    name: "Naksh7Gupta",
    language: "Profile",
    year: "2026",
    description:
      "The public profile README that frames Naksh's identity as an AI Director, deep learning practitioner, and builder growing in public.",
    link: "https://github.com/Naksh7Gupta/Naksh7Gupta",
    focus: "Public identity",
    stars: 1,
  },
];

const projectGrid = document.querySelector("#project-grid");

projectGrid.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card reveal">
        <div class="project-topline">
          <p class="eyebrow">${project.focus}</p>
          <span class="project-language">${project.language}</span>
        </div>
        <div class="project-copy">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </div>
        <div class="project-meta">
          <span>${project.year}</span>
          <span>${project.stars} star</span>
        </div>
        <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">
          View repository
        </a>
      </article>
    `
  )
  .join("");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".section, .quote-shell, .footer, .story-card, .signal-card").forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

document.querySelectorAll(".project-card").forEach((card) => observer.observe(card));
