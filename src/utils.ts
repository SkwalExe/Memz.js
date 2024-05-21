export const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const RandomInt = Math.floor(Math.random() * (max - min + 1)) + min
    return RandomInt
}

export const playSound = (path: string) => {
    new AudioContext()
    const audio = new Audio(path)
    audio.play()
}

export const random = (list: unknown[]) => list[Math.floor(Math.random() * list.length)]
