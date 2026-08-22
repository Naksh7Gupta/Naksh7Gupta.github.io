const projects = [
  {
    name: "Frontier LLM Systems",
    language: "Transformers",
    year: "2026",
    description:
      "Deep study track focused on transformer architecture, attention mechanisms, tokenizer design, and the engineering choices behind frontier language models.",
    link: "#",
    focus: "Core research direction",
    stars: 1,
  },
  {
    name: "Medical AI Workspace",
    language: "Applied AI",
    year: "2026",
    description:
      "Specialized AI workspace engineered to accelerate medical students' learning and streamline complex medical knowledge synthesis through intelligent tools.",
    link: "#",
    focus: "Healthcare AI education",
    stars: 1,
  },
  {
    name: "Efficient AI Inference",
    language: "Systems",
    year: "2026",
    description:
      "Focused on KV cache, inference optimization, and practical scaling strategies required to make advanced AI systems fast and resource-efficient.",
    link: "#",
    focus: "Performance engineering",
    stars: 1,
  },
  {
    name: "Distributed Training",
    language: "AI Infrastructure",
    year: "2026",
    description:
      "Learning data/model parallel methods, systems trade-offs, and tooling needed to train large models effectively under real-world resource constraints.",
    link: "#",
    focus: "Scale engineering",
    stars: 1,
  },
  {
    name: "Multimodal AI",
    language: "Vision + Audio + Video",
    year: "2026",
    description:
      "Exploring diffusion and transformer pathways for image, video, and speech intelligence, including multimodal reasoning and generation trajectories toward AGI.",
    link: "#",
    focus: "Future-facing research",
    stars: 1,
  },
  {
    name: "ThinkNet Open Mission",
    language: "Education + Community",
    year: "2026",
    description:
      "Building a long-term path from YouTube AI education to an open-source AI organization contributing world-class projects and research.",
    link: "https://youtube.com/@NakshGuptaOfficial",
    focus: "Long-term vision",
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
          View ${project.name === "ThinkNet Open Mission" ? "channel" : "focus"}
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
