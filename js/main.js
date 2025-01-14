const windowCfg = [
  { name: "about", title: "About me" },
  { name: "now", title: "What I'm doing now" },
  { name: "uses", title: "Things I use" },
  { name: "work", title: "Working with me" },
  { name: "quotes", title: "Quotes and snippets" },
  { name: "links", title: "Links to cool stuff" },
  { name: "themes", title: "Themes that interest me" },
  { name: "contact", title: "Contact me" },
]
let yPos = 5;

windowCfg.forEach(cfg => {
  cfg.id = `winbox-${cfg.name}`;
  cfg.selector = document.querySelector(`#${cfg.name}`);
  cfg.y = `${yPos}%`;
  cfg.mount = document.querySelector(`#${cfg.name}-content`);
  cfg.selector.addEventListener("click", () => {
    if (document.getElementById(cfg.id)) {
      document.getElementById(cfg.id).remove();
    }

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
      mount: cfg.mount,
      onfocus: function () {
        this.setBackground("#000");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  });

  yPos += 5;
})
