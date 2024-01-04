config = [
  {
    id: "winbox-about",
    selector: document.querySelector("#about"),
    title: "About Me",
    y: "5%",
    mount: document.querySelector("#about-content"),
  },
  {
    id: "winbox-now",
    selector: document.querySelector("#now"),
    title: "Now",
    y: "10%",
    mount: document.querySelector("#now-content"),
  },
  {
    id: "winbox-work",
    selector: document.querySelector("#work"),
    title: "Working with me",
    y: "15%",
    mount: document.querySelector("#work-content"),
  },
  {
    id: "winbox-quotes",
    selector: document.querySelector("#quotes"),
    title: "Quotes",
    y: "20%",
    mount: document.querySelector("#quotes-content"),
  },
  {
    id: "winbox-cool-stuff",
    selector: document.querySelector("#cool-stuff"),
    title: "Cool stuff",
    y: "25%",
    mount: document.querySelector("#cool-stuff-content"),
  },
  {
    id: "winbox-topics",
    selector: document.querySelector("#topics"),
    title: "Topics",
    y: "30%",
    mount: document.querySelector("#topics-content"),
  },
  {
    id: "winbox-contact",
    selector: document.querySelector("#contact"),
    title: "Contact",
    y: "35%",
    mount: document.querySelector("#contact-content"),
  },
];

config.forEach((e) => {
  e["selector"].addEventListener("click", () => {
    if (document.getElementById(e["id"])) {
      document.getElementById(e["id"]).remove();
    }

    const box = new WinBox({
      id: e["id"],
      title: e["title"],
      width: "400px",
      height: "400px",
      x: "5%",
      y: e["y"],
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: e["mount"],
      onfocus: function () {
        this.setBackground("#000");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  });
});
