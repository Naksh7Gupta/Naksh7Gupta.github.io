const projects = [
  {
    name: "Open AI Work",
    language: "Datasets + Projects",
    year: "Ongoing",
    description:
      "Open-source datasets, projects, and technical experiments that turn AI ideas into work that can be inspected, tested, and improved.",
    link: "https://github.com/Naksh7Gupta",
    focus: "Public engineering",
  },
  {
    name: "Autonomous AI Drone",
    language: "Robotics + Vision",
    year: "In development",
    description:
      "Ongoing research and development toward an autonomous AI drone capable of perception, navigation, and real-world mission execution.",
    link: "https://github.com/Naksh7Gupta",
    focus: "Research direction",
  },
  {
    name: "ThinkNet",
    language: "Open AI",
    year: "Ongoing",
    description:
      "A growing body of AI datasets and projects built around open technical work, experimentation, and continuous improvement.",
    link: "https://github.com/Naksh7Gupta",
    focus: "Open-source work",
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
          <span>Open work</span>
        </div>
        <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">
          Explore on GitHub
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

document.querySelectorAll(".section, .footer, .story-card, .signal-card").forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

document.querySelectorAll(".project-card").forEach((card) => observer.observe(card));
