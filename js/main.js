const about = document.querySelector('#about');
const now = document.querySelector('#now');
const quotes = document.querySelector('#quotes');
const vitality = document.querySelector('#vitality');
const ideas = document.querySelector('#ideas');
// TODO: Handle CV download portion
const cv = document.querySelector('#CV');
const contact = document.querySelector('#contact');


const aboutContent = document.querySelector('#about-content');
const nowContent = document.querySelector('#now-content');
const quotesContent = document.querySelector('#quotes-content');
const vitalityContent = document.querySelector('#vitality-content');
const ideasContent = document.querySelector('#ideas-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    x: 50,
    y: 50,
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

now.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Now',
    width: '400px',
    height: '400px',
    x: 150,
    y: 100,
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: nowContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

quotes.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Quotes',
    width: '400px',
    height: '400px',
    x: 250,
    y: 150,
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: quotesContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

vitality.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Vitality',
    width: '400px',
    height: '400px',
    x: 350,
    y: 200,
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: vitalityContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

ideas.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Ideas',
    width: '400px',
    height: '400px',
    x: 450,
    y: 250,
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: ideasContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    x: 550,
    y: 300,
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

