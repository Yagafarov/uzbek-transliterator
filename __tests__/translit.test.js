// __tests__/translit.test.js
const { latinToCyrillic, cyrillicToLatin, transliterate } = require("../translit.cjs");

test("Latin → Cyrillic", () => {
  expect(latinToCyrillic("O'zbekiston")).toBe("Ўзбекистон");
});

test("Cyrillic → Latin", () => {
  expect(cyrillicToLatin("Ўзбекистон")).toBe("O'zbekiston");
});

test("Auto-detect Latin", () => {
  expect(transliterate("Salom")).toBe("Салом");
});

test("Auto-detect Cyrillic", () => {
  expect(transliterate("Салом")).toBe("Salom");
});
