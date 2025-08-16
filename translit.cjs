// translit.cjs
const latinToCyrillicMap = {
  "ya":"я","yu":"ю","yo":"ё","ye":"е","ts":"ц",
  "sh":"ш","ch":"ч","o'":"ў","g'":"ғ",
  "a":"а","b":"б","d":"д","e":"е","f":"ф","g":"г","h":"ҳ",
  "i":"и","j":"ж","k":"к","l":"л","m":"м","n":"н",
  "o":"о","p":"п","q":"қ","r":"р","s":"с","t":"т",
  "u":"у","v":"в","x":"х","y":"й","z":"з"
};

const cyrillicToLatinMap = {
  "я":"ya","ю":"yu","ё":"yo","е":"e","ц":"ts",
  "ш":"sh","ч":"ch","ў":"o'","ғ":"g'",
  "а":"a","б":"b","д":"d","э":"e","ф":"f","г":"g","ҳ":"h",
  "и":"i","ж":"j","к":"k","л":"l","м":"m","н":"n",
  "о":"o","п":"p","қ":"q","р":"r","с":"s","т":"t",
  "у":"u","в":"v","х":"x","й":"y","з":"z"
};

function latinToCyrillic(input) {
  if (Array.isArray(input)) return input.map(latinToCyrillic);
  if (typeof input === "object") {
    let res = {};
    for (let key in input) res[key] = latinToCyrillic(input[key]);
    return res;
  }

  let text = input;
  text = text.replace(/\b(e)/gi, m => m === "E" ? "Е" : "е");

  const keys = Object.keys(latinToCyrillicMap).sort((a,b)=>b.length-a.length);
  keys.forEach(k=>{
    const re = new RegExp(k,"gi");
    text = text.replace(re, match =>
      match[0] === match[0].toUpperCase() ? latinToCyrillicMap[k].toUpperCase() : latinToCyrillicMap[k]
    );
  });
  return text;
}

function cyrillicToLatin(input) {
  if (Array.isArray(input)) return input.map(cyrillicToLatin);
  if (typeof input === "object") {
    let res = {};
    for (let key in input) res[key] = cyrillicToLatin(input[key]);
    return res;
  }

  let words = input.split(/\b/).map(word => {
    if (/^[Ее]/.test(word)) word = word.replace(/^Е/, "Ye").replace(/^е/, "ye");
    if (/^[Ёё]/.test(word)) word = word.replace(/^Ё/, "Yo").replace(/^ё/, "yo");

    const keys = Object.keys(cyrillicToLatinMap).sort((a,b)=>b.length-a.length);
    keys.forEach(k=>{
      const re = new RegExp(k,"gi");
      word = word.replace(re, match =>
        match === match.toUpperCase() ? cyrillicToLatinMap[k].toUpperCase() : cyrillicToLatinMap[k]
      );
    });
    return word;
  });

  return words.join('');
}

function transliterate(input) {
  if (Array.isArray(input)) return input.map(transliterate);
  if (typeof input === "object") {
    let res = {};
    for (let key in input) res[key] = transliterate(input[key]);
    return res;
  }

  const cyrillicPattern = /[А-яЁё]/;
  return cyrillicPattern.test(input) ? cyrillicToLatin(input) : latinToCyrillic(input);
}

module.exports = { latinToCyrillic, cyrillicToLatin, transliterate };
