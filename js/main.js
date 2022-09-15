const about = document.querySelector('#about');
const now = document.querySelector('#now');
const work = document.querySelector('#work');
const quotes = document.querySelector('#quotes');
const vitality = document.querySelector('#vitality');
const ideas = document.querySelector('#ideas');
const contact = document.querySelector('#contact');


const aboutContent = document.querySelector('#about-content');
const nowContent = document.querySelector('#now-content');
const workContent = document.querySelector('#work-content');
const quotesContent = document.querySelector('#quotes-content');
const vitalityContent = document.querySelector('#vitality-content');
const ideasContent = document.querySelector('#ideas-content');
const contactContent = document.querySelector('#contact-content');

const activeBgColor = '#c28a11';
const inactiveBgColor = '#777'

config = [
  {
    selector: about,
    title: 'About Me',
    y: '5%',
    mount: aboutContent
  },
  {
    selector: now,
    title: 'Now',
    y: '10%',
    mount: nowContent
  },
  {
    selector: work,
    title: 'Working with me',
    y: '15%',
    mount: workContent
  },
  {
    selector: quotes,
    title: 'Quotes',
    y: '20%',
    mount: quotesContent
  },
  {
    selector: vitality,
    title: 'Vitality',
    y: '25%',
    mount: vitalityContent
  },
  {
    selector: ideas,
    title: 'Ideas',
    y: '30%',
    mount: ideasContent
  },
  {
    selector: contact,
    title: 'Contact',
    y: '35%',
    mount: contactContent
  },
]

config.forEach(element => {
  element['selector'].addEventListener('click', () => {
    const box = new WinBox({
      title: element['title'],
      width: '400px',
      height: '400px',
      x: '5%',
      y: element['y'],
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: element['mount'],
      onfocus: function () {
        this.setBackground(activeBgColor)
      },
      onblur: function () {
        this.setBackground(inactiveBgColor)
      },
    })
  })
});


