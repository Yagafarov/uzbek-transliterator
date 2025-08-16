#!/usr/bin/env node
import { transliterate } from "./translit.cjs";

const args = process.argv.slice(2);

if(args.length === 0){
  console.log("Iltimos, transliteratsiya qilmoqchi bo'lgan matnni kiriting");
  process.exit(1);
}

const input = args.join(" ");
const output = transliterate(input);

console.log(output);
