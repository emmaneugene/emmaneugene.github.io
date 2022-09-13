const about = document.querySelector('#about');
const now = document.querySelector('#now');
const quotes = document.querySelector('#quotes');
const vitality = document.querySelector('#vitality');
const ideas = document.querySelector('#ideas');
const contact = document.querySelector('#contact');


const aboutContent = document.querySelector('#about-content');
const nowContent = document.querySelector('#now-content');
const quotesContent = document.querySelector('#quotes-content');
const vitalityContent = document.querySelector('#vitality-content');
const ideasContent = document.querySelector('#ideas-content');
const contactContent = document.querySelector('#contact-content');

const activeBgColor = '#c28a11';
const inactiveBgColor = '#777'

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    x: '5%',
    y: '5%',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground(activeBgColor)
    },
    onblur: function () {
      this.setBackground(inactiveBgColor)
    },
  })
})

now.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Now',
    width: '400px',
    height: '400px',
    x: '5%',
    y: '10%',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: nowContent,
    onfocus: function () {
      this.setBackground(activeBgColor)
    },
    onblur: function () {
      this.setBackground(inactiveBgColor)
    },
  })
})

quotes.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Quotes',
    width: '400px',
    height: '400px',
    x: '5%',
    y: '15%',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: quotesContent,
    onfocus: function () {
      this.setBackground(activeBgColor)
    },
    onblur: function () {
      this.setBackground(inactiveBgColor)
    },
  })
})

vitality.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Vitality',
    width: '400px',
    height: '400px',
    x: '5%',
    y: '20%',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: vitalityContent,
    onfocus: function () {
      this.setBackground(activeBgColor)
    },
    onblur: function () {
      this.setBackground(inactiveBgColor)
    },
  })
})

ideas.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Ideas',
    width: '400px',
    height: '400px',
    x: '5%',
    y: '25%',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: ideasContent,
    onfocus: function () {
      this.setBackground(activeBgColor)
    },
    onblur: function () {
      this.setBackground(inactiveBgColor)
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    x: '5%',
    y: '30%',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent,
    onfocus: function () {
      this.setBackground(activeBgColor)
    },
    onblur: function () {
      this.setBackground(inactiveBgColor)
    },
  })
})

