const windowCfg = [
  { name: "about", title: "About me" },
  { name: "now", title: "What I'm doing now" },
  { name: "uses", title: "Things I use" },
  { name: "work", title: "Working with me" },
  { name: "quotes", title: "Quotes and snippets" },
  { name: "links", title: "Links to cool stuff" },
  { name: "themes", title: "Themes that interest me" },
  { name: "contact", title: "Contact me" },
];
let yPos = 5;

async function loadContent(section) {
  try {
    const response = await fetch(`/content/${section}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load ${section}.md`);
    }
    const markdown = await response.text();
    return marked.parse(markdown);
  } catch (error) {
    console.error(`Error loading content for ${section}:`, error);
    return `<h2>Error loading content</h2><p>Could not load ${section} content.</p>`;
  }
}

windowCfg.forEach((cfg) => {
  cfg.id = `winbox-${cfg.name}`;
  cfg.selector = document.querySelector(`#${cfg.name}`);
  cfg.y = `${yPos}%`;

  cfg.selector.addEventListener("click", async () => {
    if (document.getElementById(cfg.id)) {
      document.getElementById(cfg.id).remove();
    }

    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = await loadContent(cfg.name);
    contentDiv.className = "wb-body";

    const box = new WinBox({
      id: cfg.id,
      title: cfg.title,
      width: "400px",
      height: "400px",
      x: "5%",
      y: cfg.y,
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: contentDiv,
      onfocus: function () {
        this.setBackground("#000");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  });

  yPos += 5;
});
