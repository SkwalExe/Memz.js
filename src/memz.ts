import WinMB from '@skwalexe/winmb'
import { MessageBoxes, cursors } from './data'
import { getRandomInt, playSound, random } from './utils'

const soundCount = 6
const winmbAssetsUrl = 'https://cdn.jsdelivr.net/gh/SkwalExe/WinMB.js@0.1.2/src/assets/'

export default class Memz {
    // WinMB engine, used to create windows-like message boxes
    private w: WinMB
    // Base url to fetch assets
    private assetsUrl: string

    constructor(assetsUrl: string) {
        if (typeof assetsUrl === 'undefined')
            throw new Error(
                'You must provide a base assets url. If you do not know what this is take a look at the github repo'
            )
        this.w = new WinMB(winmbAssetsUrl)
        this.assetsUrl = assetsUrl
        // Must end with / since assets name are just added at the end of the base url
        if (!this.assetsUrl.endsWith('/')) this.assetsUrl += '/'
    }

    // Randomly change the cursor using the css cursor property
    public changeCursor = (): void => {
        // list of value for the css cursor property
        setInterval(() => {
            // set the cursor to a random value
            document.documentElement.style.cursor = random(cursors)
        }, 15)
    }

    // Randomly play sounds
    computerSounds = (): void => {
        setInterval(() => {
            if (getRandomInt(0, 3) === 2)
                playSound(`${this.assetsUrl}sound${getRandomInt(1, soundCount)}.wav`)
        }, 400)
    }

    floatingIcons = (): void => {
        document.addEventListener('mousemove', (e) => {
            if (getRandomInt(0, 20) === 0) {
                const icon = document.createElement('img')
                icon.src = `${this.assetsUrl}${random(['error', 'warning'])}.png`
                icon.style.position = 'fixed'
                icon.style.pointerEvents = 'none'

                const iconSize = 40

                icon.style.height = icon.style.width = iconSize.toString() + 'px'

                // Align the center of the icon with the position of the mouse
                icon.style.top = (e.clientY - iconSize / 2).toString() + 'px'
                icon.style.left = (e.clientX - iconSize / 2).toString() + 'px'

                document.body.appendChild(icon)
            }
        })
    }
    messageBoxes = (): void => {
        setInterval(() => {
            if (getRandomInt(0, 1) === 0) {
                const type = random(['warning', 'error', 'info'])
                const message = random(MessageBoxes)

                this.w.show('MEMZ', message, type, [{ text: 'OK', value: true }], 'random')
            }
        }, 1000)
    }
    invertColors = (): void => {
        setInterval(() => {
            if (getRandomInt(0, 4) === 0) {
                document.documentElement.style.filter = 'invert(100%)'

                setTimeout(() => {
                    document.documentElement.style.filter = 'invert(0%)'
                }, 1000)
            }
        }, 200)
    }
    rotateScreen = (): void => {
        setInterval(() => {
            if (getRandomInt(0, 15) === 0) {
                document.documentElement.style.transform = 'rotate(180deg)'

                setTimeout(() => {
                    document.documentElement.style.transform = 'rotate(0deg)'
                }, getRandomInt(200, 3000))
            }
        }, 200)
    }
    all = (): void => {
        this.changeCursor()
        this.invertColors()
        this.messageBoxes()
        this.rotateScreen()
        this.floatingIcons()
        this.computerSounds()
    }
}

