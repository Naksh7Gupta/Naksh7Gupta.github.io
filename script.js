const projects = [
  {
    name: "Open AI Datasets",
    language: "Machine Learning",
    year: "Ongoing",
    description:
      "Open-source datasets and practical AI work that make experimentation, testing, and continuous improvement accessible in public.",
    link: "https://github.com/Naksh7Gupta",
    focus: "Open-source work",
    stars: 1,
  },
  {
    name: "Computer Vision",
    language: "Vision Systems",
    year: "Ongoing",
    description:
      "Exploring perception-focused systems and visual intelligence as foundations for reliable real-world AI applications.",
    link: "https://github.com/Naksh7Gupta",
    focus: "Applied research",
    stars: 1,
  },
  {
    name: "Generative AI",
    language: "Deep Learning",
    year: "Ongoing",
    description:
      "Technical experiments in generative models, with an emphasis on implementation, testing, and understanding system behavior.",
    link: "https://github.com/Naksh7Gupta",
    focus: "AI experimentation",
    stars: 1,
  },
  {
    name: "Autonomous AI Drone",
    language: "Robotics",
    year: "In development",
    description:
      "Ongoing research toward an AI drone capable of perception, navigation, and responsible real-world mission execution.",
    link: "https://github.com/Naksh7Gupta",
    focus: "Robotics research",
    stars: 1,
  },
  {
    name: "Practical AI Systems",
    language: "AI Engineering",
    year: "Ongoing",
    description:
      "Building and evaluating useful AI systems with a focus on real-world constraints, reliable behavior, and steady iteration.",
    link: "https://github.com/Naksh7Gupta",
    focus: "Systems engineering",
    stars: 1,
  },
  {
    name: "ThinkNet",
    language: "Open AI",
    year: "Ongoing",
    description:
      "Open projects, datasets, and technical work created around a long-term goal of contributing useful AI technologies.",
    link: "https://github.com/Naksh7Gupta",
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
          View ${project.name === "ThinkNet" ? "work" : "focus"}
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
