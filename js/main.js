const BASE_PATH = new URL(".", document.currentScript.src).pathname.replace(/js\/$/, "");

const windowCfg = [
  { name: "about", title: "About me" },
  { name: "now", title: "What I'm doing now" },
  { name: "uses", title: "Things I use" },
  { name: "quotes", title: "Quotes and snippets" },
  { name: "links", title: "Links to cool stuff" },
];
let xPos = 5;
const isMobile = window.innerWidth <= 768;

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

windowCfg.forEach((cfg) => {
  cfg.id = `winbox-${cfg.name}`;
  cfg.selector = document.querySelector(`#${cfg.name}`);
  cfg.x = `${xPos}%`;

  cfg.instance = null;

  cfg.selector.addEventListener("click", async () => {
    // If the window already exists, restore if minimized and bring to front
    if (cfg.instance) {
      if (cfg.instance.min) {
        cfg.instance.restore();
      }
      cfg.instance.focus();
      return;
    }

    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = await loadContent(cfg.name);
    contentDiv.className = "wb-body";

    // Set position based on device type
    const windowConfig = {
      id: cfg.id,
      index: 1000,
      title: cfg.title,
      mount: contentDiv,
      onfocus: function () {
        this.setBackground("#000");
      },
      onblur: function () {
        this.setBackground("#777");
      },
      onclose: function () {
        cfg.instance = null;
      },
    };

    if (isMobile) {
      windowConfig.width = "95%";
      windowConfig.height = "80%";
      windowConfig.x = "center";
      windowConfig.y = "center";
    } else {
      windowConfig.width = "40%";
      windowConfig.height = "80%";
      windowConfig.x = cfg.x;
      windowConfig.y = "20%";
      windowConfig.top = 50;
      windowConfig.right = 50;
      windowConfig.bottom = 50;
      windowConfig.left = 50;
    }

    cfg.instance = new WinBox(windowConfig);
  });

  xPos += 8;
});

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark-theme");
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
    }
  });
}

document.addEventListener("DOMContentLoaded", initThemeToggle);
