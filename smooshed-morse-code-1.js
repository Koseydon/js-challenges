export default function smorse(word) {
    var morse = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
    }
    var arrayOfLatters = word.split('')
    var arrayOfMorse = []
    arrayOfLatters.forEach(element => {
        arrayOfMorse.push(morse[element])
    });
    return arrayOfMorse.join('')
}

