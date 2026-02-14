const BASE_PATH = new URL(".", document.currentScript.src).pathname.replace(/js\/$/, "");

const WB_FOCUS_COLOR = "#000";
const WB_BLUR_COLOR = "#777";
const X_START = 5;
const X_END = 45;

const windowCfg = [
  { name: "about", title: "About me" },
  { name: "now", title: "What I'm doing now" },
  { name: "uses", title: "Things I use" },
  { name: "quotes", title: "Quotes and snippets" },
  { name: "links", title: "Links to cool stuff" },
];

const isMobile = window.innerWidth <= 768;
const xStep =
  windowCfg.length > 1 ? (X_END - X_START) / (windowCfg.length - 1) : 0;
const instances = new Map();

async function loadContent(section) {
  try {
    const response = await fetch(`${BASE_PATH}content/${section}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load ${section}.md`);
    }
    return marked.parse(await response.text());
  } catch (error) {
    console.error(`Error loading content for ${section}:`, error);
    return `<h2>Error loading content</h2><p>Could not load ${section} content.</p>`;
  }
}

windowCfg.forEach((cfg, index) => {
  const id = `winbox-${cfg.name}`;
  const x = `${X_START + index * xStep}%`;

  document.querySelector(`#${cfg.name}`).addEventListener("click", async () => {
    const existing = instances.get(cfg.name);

    if (existing) {
      if (existing.min) {
        existing.restore();
      }
      existing.focus();
      return;
    }

    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = await loadContent(cfg.name);
    contentDiv.className = "wb-body";

    const layout = isMobile
      ? { width: "95%", height: "80%", x: "center", y: "center" }
      : { width: "40%", height: "80%", x, y: "20%", top: 50, right: 50, bottom: 50, left: 50 };

    const instance = new WinBox({
      id,
      title: cfg.title,
      mount: contentDiv,
      ...layout,
      onfocus: function () {
        this.setBackground(WB_FOCUS_COLOR);
      },
      onblur: function () {
        this.setBackground(WB_BLUR_COLOR);
      },
      onclose: function () {
        instances.delete(cfg.name);
      },
    });

    instances.set(cfg.name, instance);
    instance.focus();
  });
});

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark-theme");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
  });
}

document.addEventListener("DOMContentLoaded", initThemeToggle);
