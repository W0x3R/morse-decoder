const MORSE_TABLE = {
    '**********': ' ',
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let emptyMass = [];
    for (let i = 0; i < expr.length; i += 10) {
        emptyMass.push(expr.slice(i, i + 10));
    }
    return emptyMass.reduce((result, elem) => { 
        let repl = elem.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g,''); 
        return result += MORSE_TABLE[repl];
    }, '');
};

module.exports = {
    decode
};