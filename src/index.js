const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Array.prototype.random = function() {
  return this[Math.floor((Math.random() * this.length))];
}

const playSound = (path) => {
  new AudioContext()

  let audio = new Audio(path)
  audio.play()

  return audio
}

const windowsMessageBox = require('windowsmessagebox')

let Memz = {
  audios: [
    'https://new.skwal.net/assets/windowsSounds/windowsError1.wav',
    'https://new.skwal.net/assets/windowsSounds/windowsError2.wav',
    'https://new.skwal.net/assets/windowsSounds/windowsError3.wav',
    'https://new.skwal.net/assets/windowsSounds/windowsError4.wav',
    'https://new.skwal.net/assets/windowsSounds/windowsError5.wav',
    'https://new.skwal.net/assets/windowsSounds/windowsError6.wav'
  ],
  intervals: [],

  errorSounds: function() {
    setInterval(() => {
      if (getRandomInt(0, 3) === 2) {
        playSound(this.audios.random())
      }
    }, 200)

  },

  messageBoxes: function() {
    setInterval(() => {
      if (getRandomInt(0, 1) === 0) {
        let type = [ 'warning', 'error', 'info' ].random()
        let title = [ 'Woooo', 'Brrrr', 'Beng bong beng beng', 'MEMZ', 'JAAJ', 'WTF', 'CHING CHENG HANJI' ].random()

        let message = [
          'Still using this computer ?',
          'Rekt by memZ !',
          'YOU ARE HACKED',
          ' ',
          'HACKED BY MEMZ'
        ].random()

        windowsMessageBox.show(title, message, type, [
          ['OK'],
          ['CANCEL']
        ], 'random')

      }
    }, 700)

  },
  music: function() {
    playSound('https://new.skwal.net/assets/memz.mp3').onended = this.music
  },
  errorIcon: function() {
    document.addEventListener('mousemove', e => {
      if (getRandomInt(0, 20) === 0) {
        let x = e.clientX
        let y = e.clientY

        let icon = document.createElement('img')
        icon.src = 'https://new.skwal.net/assets/windowsMessageBox-' + (getRandomInt(0, 1) === 0 ? 'error' : 'warning') + '.png'
        icon.style.position = 'fixed'

        icon.style.height = icon.style.width = '40px'

        icon.style.top = y - icon.style.height.substring(0, icon.style.height.length - 2) / 2 + 'px'
        icon.style.left = x - icon.style.width.substring(0, icon.style.width.length - 2) / 2 + 'px'


        document.body.appendChild(icon)
      }

    })
  },
  invertColors: function() {

    setInterval(() => {
      if (getRandomInt(0, 4) === 0) {
        let elements = [...document.querySelectorAll('*')];
        let element = elements.random();
        element.style.filter = 'invert(100%)';

        setTimeout(() => {
          element.style.filter = 'invert(0%)';
        }, 1000)
      }
    }, 100);


  },
  rotateElements: function() {
    setInterval(() => {
      if (getRandomInt(0, 3) === 0) {
        let elements = [...document.querySelectorAll('*')];
        let element = elements.random();
        element.style.transform = 'rotate(' + getRandomInt(0, 360) + 'deg)';

        setTimeout(() => {
          element.style.transform = 'rotate(0deg)';
        }, 1000)
      }
    }, 1000);
  },
  zoomElements: function() {
    setInterval(() => {
      if (getRandomInt(0, 4) === 0) {
        let elements = [...document.querySelectorAll('*')];
        let element = elements.random();
        element.style.transform = 'scale(' + getRandomInt(1, 2) + ')';

        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 1000)
      }
    }, 1000);
  },
  blockAllInputs: function() {
    document.querySelectorAll('*').forEach(el => {
      el.style.pointerEvents = 'none'
      el.style.userSelect = 'none'
      el.onclick = e => {
        e.preventDefault()
        return false;
      }
    })
  },

  changeCursor: function() {
    setInterval(() => {
      let cursor = [ 'pointer', 'crosshair', 'move', 'grab', 'grabbing', 'help', 'wait', 'text', 'wait', 'cell', 'context-menu', 'col-resize', 'row-resize', 'no-drop', 'not-allowed', 'progress', 'all-scroll', 'zoom-in', 'zoom-out', 'grabbing', 'grab' ].random()
      document.documentElement.style.cursor = cursor
    }, 15);
  },
  original: function() {
    this.errorIcon()
    this.errorSounds()
    this.messageBoxes()
    this.invertColors()
  },
  all: function() {
    this.errorSounds();
    this.music();
    this.messageBoxes();
    this.errorIcon();
    this.invertColors();
    this.rotateElements();
    this.zoomElements();
    this.blockAllInputs();
    this.changeCursor();
  }
};

if (typeof module !== 'undefined')
  module.exports = Memz
