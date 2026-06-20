const projects = [
  {
    name: "AI Minecraft Build Battle",
    language: "TypeScript",
    year: "2026",
    description:
      "ThinkNet video series: AI models compete in real-time. GPT-5.5 Pro vs Opus 4.8 vs Fable-5 in a custom HTML/Three.js Minecraft-style game engine. Fable-5 emerges as the surprise winner. Features polished intro sequences, thumbnail design, and spatial sound.",
    link: "https://youtube.com/@NakshGuptaOfficial",
    focus: "YouTube production",
    stars: 1,
  },
  {
    name: "Medical AI Workspace",
    language: "Full-stack",
    year: "2026",
    description:
      "Specialized AI platform designed to accelerate medical students' learning. Synthesizes complex medical knowledge with AI-powered tooling, creating an intelligent workspace for future doctors. Bridges AI and healthcare education at scale.",
    link: "#",
    focus: "Healthcare AI education",
    stars: 1,
  },
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
          View ${project.name === "Medical AI Workspace" ? "details" : "repository"}
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
