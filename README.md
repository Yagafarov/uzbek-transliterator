# Uzbek Transliterator

**Uzbek Transliterator** — Lotin ↔ Kirill transliteratsiyasi uchun Node.js paketi.\
Bu paket yordamida siz matnni osonlik bilan lotin va kirill yozuvlari orasida o‘tkazishingiz mumkin.
---
[![npm version](https://img.shields.io/npm/v/uzbek-transliterator.svg)](https://www.npmjs.com/package/uzbek-transliterator)
[![npm downloads](https://img.shields.io/npm/dm/uzbek-transliterator.svg)](https://www.npmjs.com/package/uzbek-transliterator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/yagafarov/uzbek-transliterator/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/yagafarov/uzbek-transliterator?style=social)](https://github.com/yagafarov/uzbek-transliterator/stargazers)
---

## Xususiyatlar

- Lotin → Kirill transliteratsiyasi
- Kirill → Lotin transliteratsiyasi
- Avtomatik yozuv aniqlash (`transliterate`)
- Array va Object bilan ishlash qo‘llab-quvvatlanadi
- Maxsus holatlar bilan ishlash: `Yo/yo`, `E/Ye`, `O'/G'`

---

## O‘rnatish

```bash
npm install uzbek-transliterator
```

---

## Foydalanish

### CommonJS (Node.js)

```js
const { latinToCyrillic, cyrillicToLatin, transliterate } = require("uzbek-transliterator");

// Latin → Cyrillic
console.log(latinToCyrillic("Salom, dunyo! O'zbekiston g'oyasi."));
// Natija: Салом, дунё! Ўзбекистон ғояси.

// Cyrillic → Latin
console.log(cyrillicToLatin("Салом, дунё! Ўзбекистон ғояси."));
// Natija: Salom, dunyo! O'zbekiston g'oyasi.

// Avtomatik transliteratsiya
console.log(transliterate("Salom, dunyo!"));   // Салом, дунё!
console.log(transliterate("Салом, дунё!"));    // Salom, dunyo!
```

### ES Module

Agar `"type": "module"` ishlatilsa:

```js
import { latinToCyrillic, cyrillicToLatin, transliterate } from "uzbek-transliterator";

console.log(latinToCyrillic("Salom, dunyo!"));
```

---

## CLI (Command Line Interface)

Fayl o‘rnatilgandan so‘ng terminalda ishlatish mumkin:

```bash
npx transliterate "Salom, dunyo!"
# Natija: Салом, дунё!
```

---

## Array va Object bilan ishlash

```js
// Array
const arr = ["Salom", "Dunyo"];
console.log(latinToCyrillic(arr));
// Natija: ["Салом", "Дунё"]

// Object
const obj = { a: "Salom", b: "Dunyo" };
console.log(cyrillicToLatin(latinToCyrillic(obj)));
// Natija: { a: "Salom", b: "Dunyo" }
```

---

## Testlar

Testlarni ishga tushurish uchun:

```bash
npm test
```

> Paket `Jest` yordamida test qilingan. Array, Object va maxsus hollardagi transliteratsiyalar testlarga kiritilgan.

---

## Litsenziya

MIT © [Dinmuhammad Yagafarov]('https://github.com/yagafarov/')
