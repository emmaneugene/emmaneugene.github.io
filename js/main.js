const about = document.querySelector("#about");
const now = document.querySelector("#now");
const work = document.querySelector("#work");
const quotes = document.querySelector("#quotes");
const coolStuff = document.querySelector("#cool-stuff");
const ideas = document.querySelector("#ideas");
const contact = document.querySelector("#contact");

const aboutContent = document.querySelector("#about-content");
const nowContent = document.querySelector("#now-content");
const workContent = document.querySelector("#work-content");
const quotesContent = document.querySelector("#quotes-content");
const coolStuffContent = document.querySelector("#cool-stuff-content");
const ideasContent = document.querySelector("#ideas-content");
const contactContent = document.querySelector("#contact-content");

const activeBgColor = "#000";
const inactiveBgColor = "#777";

config = [
  {
    id: "winbox-about",
    selector: about,
    title: "About Me",
    y: "5%",
    mount: aboutContent,
  },
  {
    id: "winbox-now",
    selector: now,
    title: "Now",
    y: "10%",
    mount: nowContent,
  },
  {
    id: "winbox-work",
    selector: work,
    title: "Working with me",
    y: "15%",
    mount: workContent,
  },
  {
    id: "winbox-quotes",
    selector: quotes,
    title: "Quotes",
    y: "20%",
    mount: quotesContent,
  },
  {
    id: "winbox-cool-stuff",
    selector: coolStuff,
    title: "Cool stuff",
    y: "25%",
    mount: coolStuffContent,
  },
  {
    id: "winbox-ideas",
    selector: ideas,
    title: "Ideas",
    y: "30%",
    mount: ideasContent,
  },
  {
    id: "winbox-contact",
    selector: contact,
    title: "Contact",
    y: "35%",
    mount: contactContent,
  },
];

config.forEach((element) => {
  element["selector"].addEventListener("click", () => {
    if (document.getElementById(element["id"])) {
      document.getElementById(element["id"]).remove();
    }

    const box = new WinBox({
      id: element["id"],
      title: element["title"],
      width: "400px",
      height: "400px",
      x: "5%",
      y: element["y"],
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: element["mount"],
      onfocus: function () {
        this.setBackground(activeBgColor);
      },
      onblur: function () {
        this.setBackground(inactiveBgColor);
      },
    });
  });
});
