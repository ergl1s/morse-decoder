const MORSE_TABLE = {
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

function convert(char) {
  let temp = "";
  let morse = ""; 
  for(let i = 0; i < char.length; i+=2) {
    temp = char.slice(i,i+2);
    if (temp != "00") {
      if (temp[1] == "*") return " "; 
      else if (temp[1] == "0") {
        morse += '.'; 
      }
      else morse += '-'; 
    }
  }
  for(element in MORSE_TABLE) {
    if(morse == element) {
       return MORSE_TABLE[element]; 
    }
  }
}

function slicer(string) {
  let result = []; 
  for(let i = 0; i < string.length; i+= 10) {
    result.push(string.slice(i,i+10));
  }
  return result; 
}

function decode(expr) {
  let splited = slicer(expr);
  return splited.map(element => convert(element)).join(""); 
}

module.exports = {
    decode
}